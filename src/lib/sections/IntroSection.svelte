<script lang="ts">
	import { Github, Linkedin } from 'lucide-svelte'
	import Bubble from '$lib/components/Bubble.svelte'
	import { range } from '@giraugh/tools'

	const GITHUB_LINK = 'https://github.com/giraugh'
	const LINKEDIN_LINK = 'https://www.linkedin.com/in/ewan-breakey-8294241a9/'
</script>

<section>
	<div class="art">
		<div class="bubble-container">
			{#each range(0, 10) as num}
				<Bubble />
			{/each}
		</div>
	</div>
	<div class="content">
		<h1>Ewan Breakey</h1>
		<p>
			Hi there! I&apos;m a software engineer and web designer from Melbourne, Australia. I love to
			collaborate on creative projects, promote accessibility and hone my skills.
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
