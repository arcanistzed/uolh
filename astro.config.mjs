import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import astroI18next from "astro-i18next";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [astroI18next(), icon()],
	vite: {
		plugins: [tailwindcss()],
	},
});
