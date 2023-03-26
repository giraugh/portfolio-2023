<script lang="ts">
	import BigProjectSection from '$lib/components/BigProjectSection.svelte'
	import steventBannerImage from '$lib/images/stevent-banner.svg'
</script>

<section class="primary">
	<BigProjectSection>
		<img slot="title" src={steventBannerImage} alt="Stevent logo and wordmark" />
		<div slot="description">
			<p>
				I'm a <b>co-founder</b> of Stevent, the unified platform for student clubs and their events.
				Stevent is a hand made <b>web platform</b> providing a centralised home for events and
				communities at campuses across Australia. After launching as a startup in 2022, we received
				support and recognition from RMIT University and <b>RMIT Activator capital funding</b>.
			</p>
			<p class="info">
				We also have a collection of open source satellite projects. If you're a web developer,
				check out our projects
				<a target="_blank" href="/">epoxy</a>,
				<a target="_blank" href="/">ayecal</a> and
				<a target="_blank" href="/">totp</a>!
			</p>
		</div>
		<img
			slot="image"
			src="https://cdn.giraugh.xyz/compressed/stevent-screenshot.webp"
			alt="Screenshot of the stevent software"
		/>
	</BigProjectSection>
</section>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	section {
		background-color: var(--col-surface-white);
		color: var(--col-text-black);
	}

	b {
		color: var(--col-stevent-brand);
	}

	.info {
		margin-block: 1.5em;
		padding: 1em;
		border: 2px dashed var(--col-stevent-brand);
		border-radius: 0.5rem;
		font-size: 0.9rem;

		a {
			font-family: monospace;
			text-decoration: none;
			color: var(--col-stevent-brand);
		}
	}

	[slot='image'] {
		border: 5px solid var(--col-stevent-brand);
		border-radius: var(--rad-image);
	}
</style>
