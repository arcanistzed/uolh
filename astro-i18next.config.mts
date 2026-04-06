import type { AstroI18nextConfig } from "astro-i18next";

export default {
	defaultLocale: "en",
	locales: ["en", "fr"],
	routes: {
		fr: {
			about: "a-propos",
			blog: "blog",
			events: "evenements",
			governance: "gouvernance",
			team: "equipe",
		},
	},
	namespaces: ["navbar", "footer", "home", "about", "events", "blog", "governance", "team"],
	defaultNamespace: "common",
} satisfies AstroI18nextConfig;
