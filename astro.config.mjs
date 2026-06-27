// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  adapter: cloudflare(),
  vite: { plugins: [tailwindcss()] },
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener"] }],
    ],
  },
});
