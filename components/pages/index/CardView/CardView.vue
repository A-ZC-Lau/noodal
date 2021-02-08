<template>
	<div class="card">
		card
	</div>
</template>

<style lang="scss" scoped>
	$light: rgb(174, 204, 238);
	$dark: rgb(18, 106, 207);

	.card {
		border: 0.25rem solid $dark;
		cursor: pointer;
		padding: 0.5rem;

		&:hover {
			border: 0.25rem solid $light;
		}
	}
</style>
