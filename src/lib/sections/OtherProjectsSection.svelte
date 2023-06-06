<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte'
	import SimpleSection from '$lib/components/SimpleSection.svelte'
	import Spikes from '$lib/components/Spikes.svelte'
	import projects, { makeImageLink } from '$lib/data/projects'
	import { fly } from 'svelte/transition'

	let scroll: number = 0
</script>

<section>
	<div class="spikes-container">
		<div class="spike-container bottom" style:--oy={(-scroll + 1500) / 25}>
			<Spikes
				simplexFreq={0.5}
				spikeResolution={1500 / 90}
				spikeHeight={2000}
				spikeBaseHeight={1}
				fill="var(--col-surface-purple-ddd)"
			/>
		</div>
		<div class="spike-container mid" style:--oy={(-scroll + 2000) / 20}>
			<Spikes
				spikeResolution={1500 / 70}
				spikeHeight={400}
				spikeBaseHeight={320}
				fill={'var(--col-surface-purple-dd)'}
			/>
		</div>
		<div class="spike-container top">
			<Spikes
				spikeResolution={1500 / 70}
				spikeHeight={400}
				spikeBaseHeight={270}
				fill={'var(--col-surface-purple-d)'}
			/>
		</div>
	</div>
	<SimpleSection title="Other Projects">
		<div slot="description">
			<p>
				A collection of various projects ranging from the start of my career to today. Featuring
				data visualisations, video games, webcomics, libraries and more.
			</p>
		</div>
	</SimpleSection>
	<ul class="project-list content">
		{#each projects as project}
			<li transition:fly={{ duration: 200 }}>
				<ProjectCard {project} />
			</li>
		{/each}
	</ul>
</section>
<svelte:window bind:scrollY={scroll} />

<style lang="scss">
	section {
		color: var(--col-text-white);
		background: var(--col-surface-purple-dddd);
		position: relative;
		padding-block-end: 5em;
	}

	.project-list {
		list-style-type: none;
		width: 100%;
		margin: 0;
		box-sizing: border-box;
		padding-block: 0.5em;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		gap: 1em;
	}

	.spikes-container {
		position: absolute;
		inset: 0;
		overflow: hidden;

		> :global(*) {
			position: absolute;
			inset: 0;
		}
	}

	.spike-container {
		transform: translateY(calc(var(--oy) * 1px));
	}

	[slot='description'] {
		padding-block-end: 15em;
	}
</style>
