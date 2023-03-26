<script lang="ts">
	export let swap = false
</script>

<div class="project content" class:swap>
	<div class="title"><slot name="title" /></div>
	<div class="description"><slot name="description" /></div>
	<div class="image"><slot name="image" /></div>
</div>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	.project {
		display: grid;
		grid-template-columns: 2fr 3fr;
		grid-template-areas:
			'title image'
			'description  image';
		column-gap: 3em;
		align-items: center;

		& {
			padding-block: 3em !important;
		}

		@media (min-width: $bp-mobile) {
			&.swap {
				grid-template-columns: 3fr 2fr;
				grid-template-areas:
					'image title'
					'image description';
			}
		}

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
		align-self: end;

		:global(h2) {
			margin-block-end: 0;
		}

		:global(img) {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: contain;
			max-height: 6em;
			object-position: left;

			@media (max-width: $bp-mobile) {
				object-position: center;
			}
		}
	}

	.description {
		grid-area: description;
		align-self: start;
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

			@media (max-width: $bp-mobile) {
				max-height: 18em;
			}
		}
	}
</style>
