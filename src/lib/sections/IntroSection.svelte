<script lang="ts">
	import { Github, Linkedin } from 'lucide-svelte'
	import Bubble from '$lib/components/Bubble.svelte'
	import Spikes from '$lib/components/Spikes.svelte'
	import { range } from '@giraugh/tools'

	const GITHUB_LINK = 'https://github.com/giraugh'
	const LINKEDIN_LINK = 'https://www.linkedin.com/in/ewan-breakey-8294241a9/'
</script>

<section>
	<div class="art">
		<div class="spike-container">
			<Spikes
				simplexFreq={0.5}
				spikeResolution={1500 / 150}
				spikeHeight={200}
				spikeBaseHeight={0}
				fill="var(--col-surface-blue-ddd)"
			/>
		</div>
		<div class="bubble-container">
			{#each range(0, 10) as num}
				<Bubble />
			{/each}
		</div>
	</div>
	<div class="content">
		<h1><span>Hi! </span><span>I'm Ewan</span></h1>
		<p>
			A web developer based in Melbourne, Australia. Keep scrolling to view my webdev, illustration
			and game dev work!
		</p>
		<div class="buttons">
			<a target="_blank" href={GITHUB_LINK} class="button"><Github />Github</a>
			<a target="_blank" href={LINKEDIN_LINK} class="button"><Linkedin />LinkedIn</a>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	section {
		/* background: linear-gradient(to bottom, var(--col-surface-green), var(--col-surface-green-d)); */
		color: var(--col-text-white);
		min-height: 20em;
		overflow: hidden;
		position: relative;
		padding-block-start: 12em;
		padding-block-end: 5em;

		@media (max-width: $bp-mobile) {
			padding-block-start: 6em;
			padding-block-end: 8em;
		}
	}

	.content {
		position: relative;
		padding: 2em;
		width: 100%;
		box-sizing: border-box;

		/* Let non-content pointer events fall through */
		pointer-events: none;
		a[href] {
			pointer-events: all;
		}

		p {
			max-width: 40em;
		}
	}

	h1 {
		font-size: 4em;
		margin-block-end: 0.3em;

		@media (max-width: $bp-mobile) {
			display: flex;
			flex-direction: column;
			line-height: 1.1;
		}
	}

	.art {
		width: 100%;
		position: absolute;
		inset: 0;
		pointer-events: none;

		background: linear-gradient(180deg, var(--col-surface-blue-d), var(--col-surface-blue-dd));
	}

	.bubble-container {
		pointer-events: all;
	}

	.spike-container {
		position: absolute;
		bottom: 100%;
		width: 100%;
		height: 200px;
		bottom: 0;
		scale: 1 -1;
		translate: 0 30px;
		filter: blur(3px);
		opacity: 0.3;

		animation: fade-in 4s forwards;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;

		.button {
			background: var(--col-surface-blue);

			@media (max-width: $bp-mobile) {
				flex: 1;
			}
		}
	}
</style>
