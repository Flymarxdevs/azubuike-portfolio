<template>
	<span
		v-html="icon"
		class="icon"
		:class="{ 'icon-outline': mode == 'outline' }"
	></span>
</template>

<script>
	export default defineComponent({
		props: ["icon", "mode"],
		setup() {},
	});
</script>

<style scoped>
	.icon-outline path {
		@apply stroke-current;
	}
</style>
