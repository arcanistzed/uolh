import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), astroI18next(), icon()],
});
