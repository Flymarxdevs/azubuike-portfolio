<template>
	<nuxt-layout name="default">
		<div class="home">
			<section id="site-hero" class="relative p-4 py-16">
				<div class="wrapper grid md:grid-cols-5 items-center gap-6 min-h-[28rem] max-w-6xl m-auto">
					<header class="hero-header col-span-3 grid grid-cols-3 items-center h-full min-h-[15rem]">
						<div class="shape-bg-wrapper absolute top-0 left-0 w-full h-full"></div>
						<div class="cont col-span-2 flex flex-col justify-between h-full max-h-28 md:max-h-60">
							<h1 class="font-heading font-black text-5xl text-white tracking-tight mb-4 md:text-7xl z-10">
								{{ details.name.first }}
								<br />
								{{ details.name.last }}
							</h1>
							<ul class="relative socials flex gap-4">
								<li
									v-for="social in details.socials"
									:key="social.name"
									class="text-indigo-200 hover:text-white hover:underline underline-offset-8"
								>
									<a :href="social.url" target="_blank" rel="noopener">{{ social.name }}</a>
								</li>
							</ul>
						</div>
						<figure class="relative col-span-1 h-full">
							<div class="img-cont absolute top-0 right-0 h-full w-[11.5rem] md:w-[200%] lg:w-[170%] overflow-y-hidden">
								<img src="~/assets/img/patrick.png" alt="Picture of wale" />
							</div>
						</figure>
					</header>
					<section class="col-span-2">
						<header class="mb-2">
							<h2>&mdash; Introduction</h2>
						</header>
						<h3 class="font-semibold text-3xl mb-4">
							{{ details.introduction.caption }}
						</h3>
						<p>{{ details.introduction.content }}</p>
						<button class="cta flex items-center gap-2 mt-4 font-semibold text-indigo-700 bg-transparent pl-0">
							More about me
							<icon :icon="arrowNarrowRight" :mode="'outline'" />
						</button>
					</section>
				</div>

				<rounded-filter />
			</section>

			<section class="site-section">
				<div class="wrapper relative md:max-w-4xl m-auto">
					<h2 class="md:pl-6 mb-2">&mdash; Projects</h2>

					<header class="mb-4 grid gap-4 md:grid-cols-2">
						<div class="wrapper md:p-6 md:min-h-[20rem]">
							<h3 class="text-2xl mb-4">All creative Works, selected projects</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.</p>
							<button class="cta flex items-center gap-2 mt-4 font-semibold text-indigo-700 bg-transparent pl-0">
								Explore more
								<icon :icon="arrowNarrowRight" :mode="'outline'" />
							</button>
						</div>
					</header>

					<ul class="projects absolute grid gap-4 md:grid-cols-2 transform md:top-0">
						<li class="project md:min-h-[20rem]">
							<div class="wrapper"></div>
						</li>
						<li v-for="project in projects" :key="project.id" class="project md:p-2 min-h-[20rem]">
							<div
								class="transition-all wrapper flex flex-col bg-white w-full h-full transform md:hover:scale-110 rounded-xl shadow"
							>
								<header class="relative p-4">
									<div class="cont flex justify-between">
										<h3 class="text-lg text-indigo-600 font-medium">
											{{ project.attributes.Title }}
										</h3>
										<span class="categories font-light text-sm text-right">
											<!-- {{ project.categories.toString().replaceAll(",", ", ") }} -->
										</span>
									</div>
									<p>{{ project.attributes.description }}</p>
								</header>

								<div class="media-cont relative flex-grow h-fit overflow-hidden rounded-b-xl">
									<div class="img-cont h-[13rem] w-[110%]">
										<img
											:src="project.attributes.cover.data.attributes.formats.large.url"
											:alt="project.attributes.cover.data.attributes.alternativeText"
											class="w-full object-cover transform translate-y-[15%] translate-x-[0] -rotate-12 rounded-2xl"
										/>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</nuxt-layout>
</template>

<script>
	import { defineComponent } from "vue";
	import { icons } from "~~/modules/icons";
	import Icon from "~~/components/icon.vue";

	export default defineComponent({
		components: { Icon },
		setup() {
			const details = ref({
				name: {
					first: "Azubuike",
					last: "Duru",
				},
				introduction: {
					caption: "Product, UI/UX designer and developer based in NIgeria",
					content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laboriosam assumenda quis.",
				},
				socials: [
					{ name: "TW", url: "https://twitter.com/miracleio" },
					{ name: "FB", url: "https://facebook.com/flymarx" },
					{ name: "BE", url: "https://behance.com" },
				],
			});
			const projects = ref([]);

			// let projects = ref([
			// 	{
			// 		id: "002",
			// 		name: "Converge App",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		categories: ["Product", "Development"],
			// 		img: "/img/IMG_0225.png",
			// 	},
			// 	{
			// 		id: "003",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		name: "Energetic Tumbler",
			// 		categories: ["Branding", "Product", "Development"],
			// 		img: "/img/IMG_0227.png",
			// 	},
			// 	{
			// 		id: "004",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		name: "Energetic Tumbler",
			// 		categories: ["Branding", "Product", "Development"],
			// 		img: "/img/IMG_0229.png",
			// 	},
			// 	{
			// 		id: "005",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		name: "Energetic Tumbler",
			// 		categories: ["Branding", "Product", "Development"],
			// 		img: "/img/IMG_6083.png",
			// 	},
			// 	{
			// 		id: "006",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		name: "Energetic Tumbler",
			// 		categories: ["Branding", "Product", "Development"],
			// 		img: "/img/IMG_6095.png",
			// 	},
			// 	{
			// 		id: "007",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		name: "Energetic Tumbler",
			// 		categories: ["Branding", "Product", "Development"],
			// 		img: "/img/IMG_6096.png",
			// 	},
			// 	{
			// 		id: "008",
			// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestiae praesentium vero.`,
			// 		name: "Energetic Tumbler",
			// 		categories: ["Branding", "Product", "Development"],
			// 		img: "/img/IMG_6945.png",
			// 	},
			// ]);

			const { arrowNarrowRight } = icons;
			// ICONS
			// const icons = ref({
			// 	// arrowNarrowRight: (await import('../assets/img/svg/heroicons/outline/arrow-narrow-right.svg?raw')).default,
			// 	arrowNarrowRight
			// })
			// icons.value.arrowNarrowRight = (await import('../assets/img/svg/heroicons/outline/arrow-narrow-right.svg?raw')).default
			console.log(icons.value);
			const { find } = useStrapi4();
			const getProjects = async () => {
				try {
					projects.value = (await find("projects", { populate: "*" })).data;
					console.log(projects.value);
					setProjects(projects.value);
				} catch (error) {
					console.log(error);
					return null;
				}
			};
			getProjects();
			console.log(projects.value);

			return { arrowNarrowRight, details, projects };
		},
	});
</script>

<style scoped>
	.hero-header {
		@apply relative;
	}

	.shape-bg-wrapper {
		filter: url(#round);
	}

	.hero-header .shape-bg-wrapper::before {
		@apply absolute bottom-0 right-0 w-[120%] h-[120%] bg-indigo-600;
		content: "";
		clip-path: polygon(15% 16%, 84% 23%, 98% 100%, 5% 100%);
		animation: morph 12s ease-in-out infinite alternate-reverse;
	}

	@keyframes morph {
		0% {
			clip-path: polygon(15% 16%, 84% 23%, 98% 100%, 5% 100%);
		}
		50% {
			clip-path: polygon(10% 26%, 92% 16%, 98% 100%, 5% 100%);
		}
		100% {
			clip-path: polygon(8% 28%, 100% 14%, 100% 100%, 15% 100%);
		}
	}
</style>
