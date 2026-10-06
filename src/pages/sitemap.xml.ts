import type { APIRoute } from "astro";
import { projects } from "../data/projects";
import { url } from "../data/site";
export const GET: APIRoute = ({ site }) => {
  const routes = [
    "",
    "projects/",
    "about/",
    "contact/",
    "cv/",
    ...projects.map((p) => `projects/${p.slug}/`),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${new URL(url(route), site)}</loc></url>`).join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
};
