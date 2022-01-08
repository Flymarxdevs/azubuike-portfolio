<template>
	<!-- <span ref="cont" v-html="icon"></span> -->
	<div class="img-cont">
		<!-- <img
			:src="('../assets/img/svg/heroicons/outline/arrow-narrow-right.svg')"
			alt="image"
		/>-->
		<!-- <span
			v-html="require(`../assets/img/svg/heroicons/outline/arrow-narrow-right.svg`)"
			alt="image"
		></span>-->
		<!-- <span v-html="img.default" alt="image"></span> -->
		<!-- <span>{{ resolvedImg }}</span> -->
	</div>
</template>

<script lang="ts">
// const img = await import(`../assets/img/svg/heroicons/outline/arrow-narrow-right.svg?raw`)
// const img = import("../assets/img/svg/heroicons/outline/arrow-narrow-right.svg?raw" + "")
// // import img from ("../assets/img/svg/heroicons/outline/" + "arrow-narrow-right.svg?raw")
// const resolvedImg = await img
// console.log(resolvedImg);

import { defineComponent } from 'vue';

export default defineComponent({
	async setup() {
		const name = `narrow-right`;
		const mode = "?raw"
		// const path = () => `../assets/img/svg/heroicons/outline/${name}.svg`
		// const pathde = `../assets/img/svg/heroicons/outline/arrow-narrow-right.svg`
		// const resolvedPath = path()

		// console.log(resolvedPath);

		const img = await import("../assets/img/svg/heroicons/outline/arrow-narrow-right.svg")
		console.log(img.default);

		// // const resolvedImg = await img

		// // console.log(resolvedImg);

		// return { img }

	}
})
</script>
