/** @type {import("prettier").Config} */
module.exports = {
	plugins: [require("prettier-plugin-tailwindcss")],
	printWidth: 120,
	tabWidth: 4,
	semi: true,
	useTabs: true,
	singleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	arrowParens: "avoid",
	proseWrap: "preserve",
};
