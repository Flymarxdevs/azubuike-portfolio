<template>
	<section id="site-hero" class="p-4 pt-12">
		<div
			class="wrapper grid md:grid-cols-5 items-center gap-4 h-[24rem] max-w-6xl m-auto"
		>
			<header class="col-span-3">
				<h1 class="text-4xl md:text-6xl">
					{{ details.name.first }}
					<br />
					{{ details.name.last }}
				</h1>
			</header>
			<section class="col-span-2">
				<header class="mb-2">
					<h2>Introduction &mdash;</h2>
				</header>
				<h3 class="text-2xl">{{ details.introduction.caption }}</h3>
				<p>{{ details.introduction.content }}</p>
			</section>
		</div>
	</section>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
	setup() {
		const details = ref({
			name: {
				first: "Azubuike",
				last: "Duru"
			},
			introduction: {
				caption: "Product, UI/UX designer and developer based in NIgeria",
				content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis laboriosam assumenda quis."
			}
		})


		return { details }
	}
})
</script>