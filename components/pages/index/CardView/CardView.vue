<template>
	<div class="card">
		<a-space
			direction="vertical"
			style="width: 100%;"
		>
			<div class="title">
				title
			</div>
			<div class="summary">
				summary
			</div>
			<hr>
			<a-space>
				<slot></slot>
			</a-space>
		</a-space>
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
	.summary {
		font-style: italic;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.title {
		font-size: 1.5rem;
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
