import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import astroI18next from "astro-i18next";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://uodpa-apnuo.org",
	integrations: [astroI18next(), icon(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
