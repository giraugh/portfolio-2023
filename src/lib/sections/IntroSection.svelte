<script lang="ts">
	import { Github, Linkedin, Download } from 'lucide-svelte'

	const GITHUB_LINK = 'https://github.com/giraugh'
	const LINKEDIN_LINK = 'https://www.linkedin.com/in/ewan-breakey-8294241a9/'
	const RESUME_LINK =
		'https://drive.google.com/file/d/1u6UoSsEBk9zjqBOLg4MVTYfqV_b6yL_m/view?usp=sharing'
</script>

<section class="primary">
	<div class="art" />
	<div class="content">
		<h1>Ewan Breakey</h1>
		<p>
			Hi there! I&apos;m a software engineer and web designer from Melbourne, Australia. I love to
			collaborate on creative projects, promote accessibility and hone my skills.
		</p>
		<div class="buttons">
			<a target="_blank" href={GITHUB_LINK} class="button"><Github />Github</a>
			<a target="_blank" href={LINKEDIN_LINK} class="button"><Linkedin />LinkedIn</a>
			<a target="_blank" href={RESUME_LINK} class="button wide"><Download />Download Resume</a>
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
		font-size: 2.8em;
		margin-block-end: 0.3em;
	}

	.art {
		min-height: 20em;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;

		button,
		.button {
			background: var(--col-surface-green);

			@media (max-width: $bp-mobile) {
				flex: 1;
			}
		}
	}
</style>
