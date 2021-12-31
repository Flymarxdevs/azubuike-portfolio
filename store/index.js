export const state = () => ({
	navActive: false,
});

export const mutations = {
	toggle(state, navActive) {
		navActive = !navActive;
	},
};
