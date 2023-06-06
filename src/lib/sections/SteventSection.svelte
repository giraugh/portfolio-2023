<script lang="ts">
	import BigProjectSection from '$lib/components/BigProjectSection.svelte'
	import steventBannerImage from '$lib/images/stevent-banner.svg'
	import { Compass } from 'lucide-svelte'

	const EPOXY_LINK = 'https://github.com/stevent-team/epoxy'
	const AYECAL_LINK = 'https://github.com/stevent-team/ayecal'
	const TOTP_LINK = 'https://github.com/stevent-team/totp'
</script>

<section>
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
				<a target="_blank" href={EPOXY_LINK}>epoxy</a>,
				<a target="_blank" href={AYECAL_LINK}>ayecal</a> and
				<a target="_blank" href={TOTP_LINK}>totp</a>!
			</p>
			<a class="button" target="_blank" href="https://stevent.club"><Compass /> Find out more</a>
		</div>
		<img
			slot="image"
			src="https://imagedelivery.net/zthi1l8fKrUGB5ig08mq-Q/03f43451-63d1-4e4e-60ac-86e1a85d5b00/public"
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

	.button {
		background: var(--col-stevent-brand);
		color: white;
	}

	[slot='image'] {
		border: 5px solid var(--col-stevent-brand);
		border-radius: var(--rad-image);
	}
</style>
