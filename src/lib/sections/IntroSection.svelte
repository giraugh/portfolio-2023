<script lang="ts">
	import { Github, Linkedin, Download } from 'lucide-svelte'

	const GITHUB_LINK = 'https://github.com/giraugh'
	const LINKEDIN_LINK = 'https://www.linkedin.com/in/ewan-breakey-8294241a9/'
</script>

<section class="primary">
	<div class="art">hi</div>
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
		background: linear-gradient(to bottom, var(--col-surface-green), var(--col-surface-green-d));
		color: var(--col-text-white);
	}

	.content {
		padding: 2em;
	}

	h1 {
		font-size: 3em;
		margin-block-end: 0.3em;
	}

	.art {
		min-height: 20em;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;

		.button {
			background: var(--col-surface-green);

			@media (max-width: $bp-mobile) {
				flex: 1;
			}
		}
	}
</style>
