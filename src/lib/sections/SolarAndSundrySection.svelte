<script lang="ts">
	import z from 'zod'
	import dayjs, { type Dayjs } from 'dayjs'
	import dayjsRelativeTime from 'dayjs/plugin/relativeTime'
	import { slide } from 'svelte/transition'
	import { BookOpen } from 'lucide-svelte'

	import { SolarAndSundryPage } from '$lib/schemas/SolarAndSundryPage'
	import BigProjectSection from '$lib/components/BigProjectSection.svelte'
	import sasScreenshotImage from '$lib/images/sas-panel.webp'
	import { onMount } from 'svelte'

	dayjs.extend(dayjsRelativeTime)

	const SAS_LINK = 'https://sas.ewanb.me'
	const SAS_API_URL = 'https://solar-and-sundry-worker.giraugh.workers.dev/page'

	// Get last page release
	let lastPagePublishedAt: Promise<Dayjs> = new Promise(() => {})
	onMount(() => {
		lastPagePublishedAt = fetch(SAS_API_URL, { headers: { mode: 'cors' } })
			.then((r) => r.json())
			.then((data) => z.array(SolarAndSundryPage).nonempty().parse(data))
			.then((pages) => pages.reduce((pa, pb) => (pa.page_number > pb.page_number ? pa : pb)))
			.then((page) => dayjs(page.published_at))
	})
</script>

<section class="primary">
	<BigProjectSection swap>
		<h2 slot="title">Solar and Sundry</h2>
		<div slot="description">
			<p>
				A sci-fi webcomic about creating an ecosystem where there shouldn't be one. Follow the crew
				as they bring about change on the moon of X-54.
			</p>
			<p>
				New pages release about once per month. Join the discord server to get updates when new
				pages go live!
			</p>
			{#await lastPagePublishedAt then publishedAt}
				<p class="schedule" in:slide>
					The last page was published <b>{dayjs(publishedAt).fromNow()}</b>.
				</p>
			{/await}
			<a class="button" target="_blank" href={SAS_LINK}><BookOpen /> Start Reading</a>
		</div>
		<img slot="image" src={sasScreenshotImage} alt="Screenshot of the stevent software" />
	</BigProjectSection>
</section>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	section {
		background: var(--grad-sas);
		color: var(--col-text-white);
	}

	.schedule {
		margin-block: 1.5em;
		padding: 1em;
		border: 2px dashed var(--col-text-white);
		border-radius: 0.5rem;
		font-size: 0.9rem;
	}

	.button {
		background: var(--col-surface-purple);
	}

	img[slot='image'] {
		border-radius: var(--rad-image);
		border: 4px solid var(--col-text-white);
	}
</style>
