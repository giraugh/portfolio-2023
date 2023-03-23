<script lang="ts">
</script>

<div class="text-and-screenshot content">
	<div class="title"><slot name="title" /></div>
	<div class="description"><slot name="description" /></div>
	<div class="image"><slot name="image" /></div>
</div>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	.text-and-screenshot {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-template-areas:
			'title image'
			'description  image';
		column-gap: 3em;
		align-items: center;

		padding-block: 3em;
		padding-inline: 2em;

		@media (max-width: $bp-mobile) {
			grid-template-columns: 1fr;
			grid-template-areas:
				'title'
				'image'
				'description';
			row-gap: 1em;
			padding-block: 1em;
		}
	}

	.title {
		grid-area: title;

		:global(img) {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.description {
		grid-area: description;
	}

	.image {
		grid-area: image;
		height: 100%;
		width: 100%;

		:global(img) {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
