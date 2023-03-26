<script lang="ts">
	export let title: string
</script>

<div class="simple content">
	<div class="description">
		<h2>{title}</h2>
		<slot name="description" />
	</div>
	<div class="image"><slot name="image" /></div>
</div>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	.simple {
		position: relative;
		overflow-x: hidden;
		overflow-y: hidden;
		min-height: 5em;
		width: 100%;
		box-sizing: border-box;
	}

	.description {
		max-width: 40%;
		padding-block: 2em;
		padding-block-end: 4em;

		h2 {
			margin-block-end: 0.5em;
		}

		@media (max-width: $bp-mobile) {
			max-width: 100%;
			padding-block-end: min(300px, 40vw);

			:global(button),
			:global(a.button) {
				margin-block-end: 2em;
			}
		}
	}

	.image {
		position: absolute;
		right: 0;
		bottom: -150px;
		width: min(90vw, 400px);
		height: min(90vw, 400px);

		@media (max-width: $bp-tiny) {
			bottom: -110px;
		}

		:global(img) {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
