const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
				sans: ["Raleway", ...defaultTheme.fontFamily.sans],
				serif: ["Lora", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
