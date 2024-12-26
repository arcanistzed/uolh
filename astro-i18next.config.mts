import type { AstroI18nextConfig } from "astro-i18next";

export default {
	defaultLocale: "en",
	locales: ["en", "fr"],
	routes: {
		fr: {
			events: "evenements",
			governance: "gouvernance",
			team: "equipe",
		},
	},
	namespaces: ["navbar", "footer", "home", "events", "governance", "team"],
	defaultNamespace: "common",
} satisfies AstroI18nextConfig;
