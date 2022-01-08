<template>
	<nav id="site-nav" class :class="{ 'active': navActive.active }">
		<ul
			class="nav-list invisible md:visible fixed md:relative top-0 left-0 w-full md:w-fit h-screen md:h-auto flex flex-col md:flex-row justify-center items-center gap-20 md:gap-4 text-center md:text-left text-3xl md:text-sm lowercase font-extralight md:font-normal tracking-widest p-4 md:p-0 bg-indigo-600 md:bg-transparent text-indigo-200 md:text-slate-500 z-10"
		>
			<li class="list-item">Services</li>
			<li class="list-item">Works</li>
			<li class="list-item">Get in touch</li>
		</ul>
	</nav>
	<button
		@click="toggleNav"
		:class="{ active: navActive.active }"
		class="site-nav-btn md:hidden relative w-6 h-3.5 z-30"
	></button>
</template>
<style scoped>
#site-nav.active .nav-list {
	@apply visible;
}

.nav-list .list-item {
	@apply cursor-pointer hover:text-indigo-50 md:hover:text-slate-800;
}

.site-nav-btn::before,
.site-nav-btn::after {
	@apply absolute top-0 left-0 h-0.5 w-full bg-slate-800;
	content: "";
}
.site-nav-btn::after {
	@apply top-auto bottom-0;
}

.site-nav-btn.active::before,
.site-nav-btn.active::after {
	@apply bg-indigo-50;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import { useNavActive, useToggleActive } from "../composables/state";

export default defineComponent({
	setup() {
		const navActive = useNavActive()
		const toggleNav = useToggleActive
		return { navActive, toggleNav }
	}
})
</script>