/// <reference types="astro/client" />

declare module "astro-i18next" {
	export const localizePath: (path?: string, locale?: string | null, base?: string) => string;
	export const localizeUrl: (path: string, locale?: string | null, base?: string) => string;
	export const initAstroI18next: (config: unknown) => void;

	const astroI18next: (options?: unknown) => unknown;
	export default astroI18next;
}
