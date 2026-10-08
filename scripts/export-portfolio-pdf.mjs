import {createServer} from 'node:http';
import {spawn} from 'node:child_process';
import {existsSync} from 'node:fs';
import {copyFile, mkdir, mkdtemp, readFile, rm, stat, unlink} from 'node:fs/promises';
import {basename, extname, isAbsolute, join, relative, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const output = join(root, 'export', 'Mahmoud_Moftah_Engineering_Portfolio.pdf');
const template = join(root, 'scripts', 'pdf', 'portfolio-export.astro.template');
const temporaryRoute = join(root, 'src', 'pages', 'portfolio-export.astro');
const mime = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.png', 'image/png'],
  ['.woff2', 'font/woff2'],
  ['.pdf', 'application/pdf'],
]);

function run(command, args, options = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, {cwd: root, stdio: 'inherit', windowsHide: true, ...options});
    child.once('error', rejectRun);
    child.once('exit', code => code === 0 ? resolveRun() : rejectRun(new Error(`${basename(command)} exited with ${code}`)));
  });
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);
const chrome = chromeCandidates.find(candidate => existsSync(candidate));
if (!chrome) throw new Error('Chrome or Edge was not found. Set CHROME_PATH to a Chromium browser executable.');

const build = () => run(process.platform === 'win32' ? 'powershell.exe' : 'npm',
  process.platform === 'win32' ? ['-NoProfile', '-Command', 'npm.cmd run build'] : ['run', 'build']);
const tempRoot = join(root, 'tmp', 'pdfs');
let profile;
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    const path = resolve(dist, `.${pathname}`, pathname.endsWith('/') ? 'index.html' : '');
    const offset = relative(dist, path);
    if (offset.startsWith('..') || isAbsolute(offset)) {
      response.writeHead(403).end();
      return;
    }
    const data = await readFile(path);
    response.writeHead(200, {'Content-Type': mime.get(extname(path)) || 'application/octet-stream'}).end(data);
  } catch {
    response.writeHead(404).end();
  }
});

if (existsSync(temporaryRoute)) throw new Error(`Temporary export route already exists: ${temporaryRoute}`);
await copyFile(template, temporaryRoute);
try {
  await build();
  await mkdir(join(root, 'export'), {recursive: true});
  await mkdir(tempRoot, {recursive: true});
  profile = await mkdtemp(join(tempRoot, 'portfolio-pdf-chrome-'));
  await new Promise(resolveListen => server.listen(0, '127.0.0.1', resolveListen));
  const address = server.address();
  const page = `http://127.0.0.1:${address.port}/portfolio-export/`;
  await run(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-background-networking',
    '--no-first-run', '--no-default-browser-check', `--user-data-dir=${profile}`,
    `--print-to-pdf=${output}`, '--no-pdf-header-footer', '--virtual-time-budget=15000', page,
  ]);
  const info = await stat(output);
  if (info.size < 100_000) throw new Error(`PDF appears incomplete (${info.size} bytes).`);
  console.log(`${output}\n${(info.size / 1024 / 1024).toFixed(2)} MiB`);
} finally {
  if (server.listening) await new Promise(resolveClose => server.close(resolveClose));
  if (profile) {
    const expectedParent = resolve(tempRoot) + sep;
    if (!resolve(profile).startsWith(expectedParent)) throw new Error('Refusing to remove an unexpected browser profile path.');
    await rm(profile, {recursive: true, force: true});
  }
  await unlink(temporaryRoute);
  await build();
}
