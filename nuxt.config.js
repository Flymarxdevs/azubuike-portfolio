import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	// vite: false,
	meta: {
		title: "Azubuike Duru, Product & UI/UX designer based in NIgeria",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "title",
				name: "title",
				content: "Azubuike Duru, Product & UI/UX designer based in NIgeria",
			},
			{
				hid: "description",
				name: "description",
				content:
					"Portfolio site - Azubuike Duru is a Product Designer, UI/UX designer and developer based in Nigeria",
			},
			{ hid: "og:type", property: "og:type", content: "website" },
			{
				hid: "og:url",
				property: "og:url",
				content: "https://walefolio.netlify.app/",
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "Azubuike Duru, Product & UI/UX designer based in NIgeria",
			},
			{
				hid: "og:description",
				property: "og:description",
				content:
					"Portfolio site - Azubuike Duru is a Product Designer, UI/UX designer and developer based in Nigeria",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://walefolio.netlify.app/img/wale.jpg",
			},

			// TWITTER
			{
				hid: "twitter:card",
				property: "twitter:card",
				content: "summary_large_image",
			},
			{
				hid: "twitter:url",
				property: "twitter:url",
				content: "https://walefolio.netlify.app/",
			},
			{
				hid: "twitter:title",
				property: "twitter:title",
				content: "Azubuike Duru, Product & UI/UX designer based in NIgeria",
			},
			{
				hid: "twitter:description",
				property: "twitter:description",
				content:
					"Portfolio site - Azubuike Duru is a Product Designer, UI/UX designer and developer based in Nigeria",
			},
			{
				hid: "twitter:image",
				property: "twitter:image",
				content: "https://walefolio.netlify.app/img/wale.png",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossorigin: "true",
			},
			// {
			// 	rel: "stylesheet",
			// 	href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap",
			// },
			// {
			// 	rel: "stylesheet",
			// 	href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
			// },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
			},
		],
	},
	build: {
		postcss: {
			postcssOptions: require("./postcss.config.js"),
		},
	},
});
