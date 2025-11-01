const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#37b6ff",
				secondary: "#1f87cc",
				tertiary: "#950010",
				quaternary: "#ff3032",
				background: "#f9f9f9",
			},
			fontFamily: {
				serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				shrink: {
					from: {
						transform: "scaleX(1)",
					},
					to: {
						transform: "scaleX(0)",
						opacity: 0,
					},
				},
				fade: {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
		},
	},
	plugins: [require("tailwind-gradient-mask-image"), require("@tailwindcss/typography")],
};
