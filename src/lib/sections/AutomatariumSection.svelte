<script lang="ts">
	import BigProjectSection from '$lib/components/BigProjectSection.svelte'
	import automatariumBannerImage from '$lib/images/automatarium-banner.svg'
	import automatariumScreenshotImage from '$lib/images/automatarium-graph.svg' // TODO: cdn
</script>

<section>
	<BigProjectSection>
		<img slot="title" src={automatariumBannerImage} alt="Automatarium logo and wordmark" />
		<div slot="description">
			<p>
				<b>Automatarium</b> is a <b>modern recreation of JFLAP</b>, a dated tool for analysing
				automata and other theoretical computer science concepts. Automatarium adds a sleek modern
				user interface, dozens of quality-of-life features and a super easy-to-use testing lab.
			</p>
			<p>
				Originally created as part of a group <b>capstone project</b> at RMIT, Automatarium is now
				<b>open-source</b> and accepting contributions.
			</p>
		</div>
		<img slot="image" src={automatariumScreenshotImage} alt="Screenshot of the stevent software" />
	</BigProjectSection>
</section>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	section {
		background: var(--grad-automatarium-dot-grid);
		background-size: 40px 40px;
		color: var(--col-text-black);
	}

	b {
		color: var(--col-automatarium-brand);
	}

	[slot='description'] {
		background: var(--col-surface-white);
		border: 5px solid var(--col-automatarium-border);
		padding: 0.3em 1.2em;
		border-radius: 1rem;
		margin-block-start: 1.3em;
	}

	img[slot='image'] {
		object-fit: contain !important;
	}
</style>
