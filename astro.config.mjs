import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nirjhor.dev",
  markdown: {
    shikiConfig: {
      theme: "poimandres"
    }
  },
  integrations: [tailwind(), solidJs(), mdx(), prefetch(), robotsTxt(), sitemap()]
});