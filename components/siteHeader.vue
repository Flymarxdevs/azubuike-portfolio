<template>
	<header id="site-header" class="sticky top-4 w-full px-4">
		<div
			:class="{ 'backdrop-filter backdrop-blur-lg': !navActive.active }"
			class="wrapper flex justify-between items-center py-2 px-4 w-full max-w-5xl m-auto rounded-lg bg-white bg-opacity-70 border-2 border-white border-opacity-0 md:backdrop-filter md:backdrop-blur-lg bg-clip-padding shadow-xl shadow-indigo-600/10"
		>
			<figure id="site-logo" class="site-logo relative z-30">
				<h1
					:class="{ 'text-indigo-50': navActive.active }"
					class="text-indigo-600 font-black tracking-tight lowercase"
				>Azubuike</h1>
			</figure>
			<site-nav />
		</div>
	</header>
</template>

<style scoped>
#site-header .wrapper {
}
</style>

<script lang="ts" setup>
const navActive = useNavActive().value
const toggleNav = useToggleActive
</script>