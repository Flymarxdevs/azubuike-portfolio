<template>
	<h2>Smthg</h2>
</template>
<script setup>
	const { find } = useStrapi4();
	const response = async () => {
		try {
			return await find("projects");
		} catch (error) {
			console.log(error);
			return null;
		}
	};
	console.log(await response());
</script>
