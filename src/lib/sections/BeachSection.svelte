<script lang="ts">
	import crabImage from '$lib/images/crab.png'
</script>

<section class="primary">
	<div class="beach-waves">
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
	</div>
	<div class="sand">
		<!-- STUFF HERE -->
		<div class="crab-wrapper">
			<img class="crab" src={crabImage} alt="A cute cartoon crab" />
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	section {
		background: var(--col-surface-purple-dddd);
		padding-block-start: 15em;
		position: relative;

		&:has(.beach-waves) {
			padding-block-end: 0;
		}
	}

	.beach-waves {
		min-height: 20em;
		height: 20em;
		width: 100%;

		position: absolute;

		.wave {
			position: absolute;
			inset: 0;
			height: 8em;
			background: var(--grad-wave);
		}

		@for $i from 0 through 3 {
			.wave:nth-child(#{$i + 1}) {
				top: #{4em * ($i - 0.5)};
			}
		}
	}

	.sand {
		min-height: 20em;
		width: 100%;
		margin-block-start: 14em;

		background: var(--col-surface-sand);

		position: relative;

		&::before {
			/* The curved top part of the sand */
			display: block;
			content: '';
			position: absolute;
			inset: 0;
			top: -20px;
			border-top-left-radius: 50%;
			border-top-right-radius: 50%;
			height: 2.5em;
			background: linear-gradient(to bottom, #ece0b3, var(--col-surface-sand));
		}
	}

	.crab-wrapper {
		width: 100%;
		height: 30em;
		position: relative;

		img {
			display: block;
			position: absolute;
			left: 3%;
			top: -6em;
			width: 20em;
		}

		&::before {
			/* A shadow for the sand */
			display: block;
			content: '';
			position: absolute;
			background-color: black;
			opacity: 0.1;
			border-radius: 50%;
			width: 18em;
			height: 3em;
			top: 2.5em;
			left: 3em;
		}
	}

	.wave {
		--mask: radial-gradient(111.8px at 50% 150px, #000 99%, #0000 101%) calc(50% - 100px) 0/200px
				100%,
			radial-gradient(111.8px at 50% -100px, #0000 99%, #000 101%) 50% 50px/200px 100% repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
</style>
