<script lang="ts">
	import { Github, Linkedin, Download } from 'lucide-svelte'
	import bannerImage from '$lib/images/garden-scene.jpg'
	import grainTexture from '$lib/images/grain.svg'

	const GITHUB_LINK = 'https://github.com/giraugh'
	const LINKEDIN_LINK = 'https://www.linkedin.com/in/ewan-breakey-8294241a9/'
</script>

<section class="primary">
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
	<div class="art">
		<img src={bannerImage} alt="" />
		<div class="grain" style:background-image={`url(${grainTexture})`} />
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
		padding-block-start: 15em;
	}

	.content {
		padding: 2em;
		width: 100%;
		p {
			max-width: 40em;
		}
	}

	h1 {
		font-size: 3em;
		margin-block-end: 0.3em;
	}

	.art {
		width: 100%;
		position: absolute;
		inset: 0;
		z-index: -1;

		.grain {
			position: absolute;
			inset: 0;
			opacity: 0.4;
			background-size: 700px;
		}

		img {
			display: block;
			object-position: center right;
			object-fit: cover;
			width: 100%;
			transform: scale(1.3);
			filter: blur(0.5em) brightness(0.8);
		}
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
