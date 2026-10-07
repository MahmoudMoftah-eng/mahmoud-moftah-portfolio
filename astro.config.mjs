import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  site:
    process.env.SITE_URL ||
    "https://mahmoud-moftah-engineering.mahmoudmoftah850.chatgpt.site",
  base: process.env.BASE_PATH || "/",
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
