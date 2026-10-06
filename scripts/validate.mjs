import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve, relative } from "node:path";
const root = resolve("dist");
const htmlFiles = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (path.endsWith(".html")) htmlFiles.push(path);
  }
}
walk(root);
const failures = [];
const decode = (value = "") =>
  value
    .replace(/&(?:amp|#38);/g, "&")
    .replace(/&(?:quot|#34);/g, '"')
    .replace(/&(?:apos|#39);/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
let refs = 0;
const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");
function fileFor(pathname) {
  let decoded = decodeURIComponent(pathname);
  if (base && decoded.startsWith(base + "/"))
    decoded = decoded.slice(base.length);
  const path = join(root, decoded.replace(/^\//, ""));
  return existsSync(path) && statSync(path).isDirectory()
    ? join(path, "index.html")
    : path;
}
for (const path of htmlFiles) {
  const html = readFileSync(path, "utf8");
  const label = relative(root, path);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(
    /<meta name="description" content="([^"]+)"/s,
  )?.[1];
  if (!title || !description) failures.push(`${label}: missing page metadata`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    failures.push(`${label}: expected one h1`);
  if (
    decode(html.match(/property="og:title" content="([^"]+)"/)?.[1]) !==
    decode(title)
  )
    failures.push(`${label}: mismatched Open Graph title`);
  if (
    decode(html.match(/property="og:description" content="([^"]+)"/)?.[1]) !==
    decode(description)
  )
    failures.push(`${label}: mismatched Open Graph description`);
  if (
    decode(html.match(/name="twitter:title" content="([^"]+)"/)?.[1]) !==
    decode(title)
  )
    failures.push(`${label}: mismatched X title`);
  if (!html.includes('rel="canonical"'))
    failures.push(`${label}: missing canonical`);
  for (const [, attribute, ref] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (/^(?:https?:|mailto:|data:|tel:)/.test(ref)) continue;
    refs++;
    const [pathname, fragment] = ref.split("#");
    const dest = pathname ? fileFor(pathname.split("?")[0]) : path;
    if (!existsSync(dest)) {
      failures.push(`${label}: missing ${attribute} ${ref}`);
      continue;
    }
    if (
      fragment &&
      dest.endsWith(".html") &&
      !readFileSync(dest, "utf8").includes(`id="${fragment}"`)
    )
      failures.push(`${label}: missing anchor ${ref}`);
  }
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `Validated ${htmlFiles.length} HTML pages, ${refs} local links/assets, one H1 per page, canonical and matching social metadata.`,
);
