<template>
	<section id="site-hero" class="p-4 pt-12">
		<div
			class="wrapper grid md:grid-cols-5 items-center gap-6 h-[28rem] max-w-6xl m-auto"
		>
			<header
				class="col-span-3 grid grid-cols-3 items-center h-full min-h-[15rem]"
			>
				<div
					class="cont relative col-span-2 flex flex-col justify-between h-full max-h-28 md:max-h-60"
				>
					<h1
						class="font-heading font-black text-5xl tracking-tight mb-4 md:text-7xl z-10"
					>
						{{ details.name.first }}
						<br />
						{{ details.name.last }}
					</h1>
					<ul class="socials flex gap-4">
						<li
							v-for="social in details.socials"
							:key="social.name"
							class="text-indigo-500 hover:text-indigo-800 underline underline-offset-8"
						>
							<a :href="social.url" target="_blank" rel="noopener">{{ social.name }}</a>
						</li>
					</ul>
				</div>
				<figure class="relative col-span-1 h-full">
					<div
						class="img-cont absolute top-0 right-0 h-full w-[18rem] md:w-[200%] lg:w-[170%] overflow-y-hidden"
					>
						<img src="~/assets/img/patrick.png" alt="Picture of wale" />
					</div>
				</figure>
			</header>
			<section class="col-span-2">
				<header class="mb-2">
					<h2>Introduction &mdash;</h2>
				</header>
				<h3 class="text-2xl mb-4">{{ details.introduction.caption }}</h3>
				<p>{{ details.introduction.content }}</p>
				<button
					class="cta flex items-center gap-2 mt-4 font-semibold text-indigo-700 bg-transparent pl-0"
				>
					More about me
					<span
						class="icon mode-outline"
						v-html="icons.arrowNarrowRight"
					></span>
				</button>
			</section>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	async setup() {
		const details = ref({
			name: {
				first: "Azubuike",
				last: "Duru"
			},
			introduction: {
				caption: "Product, UI/UX designer and developer based in NIgeria",
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laboriosam assumenda quis."
			},
			socials: [
				{ name: "TW", url: "https://twitter.com/miracleio" },
				{ name: "FB", url: "https://facebook.com/flymarx" },
				{ name: "BE", url: "https://behance.com" }
			]
		})

		// ICONS
		const icons = ref({
			arrowNarrowRight: (await import('../assets/img/svg/heroicons/outline/arrow-narrow-right.svg?raw')).default
		})
		// icons.value.arrowNarrowRight = (await import('../assets/img/svg/heroicons/outline/arrow-narrow-right.svg?raw')).default

		console.log(icons.value);


		return { details, icons }
	}
})
</script>