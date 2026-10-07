# Mahmoud Moftah — Engineering Portfolio

A static, responsive portfolio built with Astro 5, strict TypeScript and Tailwind CSS 4. No React, backend, analytics, or runtime data services. `PORTFOLIO_CONTEXT.md` is the source of truth for profile details, project attribution and content integrity.

## Run locally

Requires Node.js 22.12+ and pnpm 11. The pnpm lockfile is committed for reproducible installation.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Astro (normally http://127.0.0.1:4321).

```sh
pnpm check
pnpm build
pnpm validate
pnpm preview
```

`check` checks Astro and TypeScript; `validate` checks the built pages, local links, anchors, assets and metadata. The production output is `dist/`.

## Structure

```text
portfolio/
├── PORTFOLIO_CONTEXT.md   # Profile source of truth and content rules
├── public/
│   ├── Mahmoud_Moftah_CV.pdf
│   ├── favicon.svg
│   └── projects/{abra,robot-arm,yutpa,usv}/
├── src/
│   ├── components/         # Shared navigation, cards, diagrams, sections, media
│   ├── data/
│   │   ├── projects.ts     # All four case studies and their media
│   │   ├── experience.ts   # Experience and skill categories
│   │   └── site.ts         # Identity, contact, social URLs and CV detection
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── cv.astro
│   │   ├── 404.astro
│   │   ├── robots.txt.ts
│   │   ├── sitemap.xml.ts
│   │   └── projects/{index.astro,[slug].astro}
│   └── styles/global.css  # Theme tokens, components and responsive styles
├── scripts/validate.mjs
├── astro.config.mjs
├── pnpm-lock.yaml
└── TODO.md
```

## Edit content

- Edit `src/data/projects.ts` to update project summaries, roles, technical sections, evidence and technologies.
- Edit `src/data/experience.ts` for experience and categorized skills.
- Edit `src/data/site.ts` for contact details and profile URLs. GitHub and LinkedIn are currently configured there.
- The CV PDF is `public/Mahmoud_Moftah_CV.pdf`. `site.ts` detects its presence automatically; when present, CV links become downloads. If it is absent in another checkout, the site falls back to the CV page with an email request link.
- Put media into the corresponding `public/projects/` folder and set `src` in the relevant media record, e.g. `projects/robot-arm/hardware.webp`. Add meaningful `alt` text. Supplied media replace placeholders automatically.
- The diagram component is a **conceptual schematic**, not evidence of an actual configuration or measured performance. Replace it with a verified project diagram when available. The media area separately reserves a place for original architecture diagrams.
- Theme colors live in `:root` in `global.css`. The theme uses a single brass accent and can later gain a light-theme token set.

## Deployment

The site exports static files and requires no server adapter. Set `SITE_URL` to the destination origin before the production build; the default is the registered Sites URL. For GitHub Pages project sites also set `BASE_PATH=/repository-name`. Shared links, assets, canonical URLs and sitemap routes respect the base path.

- **Vercel:** use Astro preset, `pnpm build`, output `dist`.
- **Cloudflare Pages:** build `pnpm build`, output `dist`, Node 22.12+.
- **GitHub Pages:** run `pnpm install --frozen-lockfile` then `pnpm build` with the correct `SITE_URL` and `BASE_PATH`, and upload `dist` as the Pages artifact.
- **Sites:** `.openai/hosting.json` identifies the private hosted site and declares `dist` as its static output. Preserve that identity when editing this Site.

Do not treat local development as the canonical production origin. No OpenGraph image is included because no real social-preview image was supplied. Page-specific OpenGraph and X titles/descriptions are implemented.

## Content integrity

No performance figures, project completion claims, awards or responsibilities were invented. Only the provided approximate execution timings appear. Perception/state-estimation work is credited as team-developed integration; the Best Software Team award is attributed to the team. Graduation-project scope is explicitly in development.

The case-study reflections are editorial summaries of the supplied work and should be reviewed by Mahmoud before public sharing.
