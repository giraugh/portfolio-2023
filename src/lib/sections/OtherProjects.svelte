<script>
	import SimpleSection from '$lib/components/SimpleSection.svelte'
	import Spikes from '$lib/components/Spikes.svelte'
	import projects from '$lib/data/projects'
</script>

<section class="primary">
	<div class="spikes-container">
		<Spikes
			simplexFreq={0.5}
			spikeResolution={1500 / 90}
			spikeHeight={2000}
			spikeBaseHeight={1}
			fill="var(--col-surface-purple-ddd)"
		/>
		<Spikes
			spikeResolution={1500 / 70}
			spikeHeight={400}
			spikeBaseHeight={320}
			fill={'var(--col-surface-purple-dd)'}
		/>
		<Spikes
			spikeResolution={1500 / 70}
			spikeHeight={400}
			spikeBaseHeight={270}
			fill={'var(--col-surface-purple-d)'}
		/>
	</div>
	<SimpleSection title="Other Projects">
		<div slot="description">
			<p>
				A collection of various projects ranging from the start of my career to today. Featuring
				data visualisations, video games, webcomics, npm libraries and more.
			</p>
		</div>
	</SimpleSection>
	<ul class="project-list content">
		{#each projects as project}
			<li>
				<a
					class="project-card"
					href={project.link}
					style:background-image={`url(${project.image})`}
				>
					<div class="card-content" class:dark={project.dark}>
						<span class="card-title">{project.name}</span>
						<p>{project.description}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

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

		> :global(*) {
			position: absolute;
			inset: 0;
		}
	}

	.project-card {
		display: block;
		background-color: purple;
		background-size: cover;
		background-position: center;
		border-radius: 0.3rem;
		text-decoration: none;
		position: relative;
		transition: color 0.2s;
		overflow: hidden;

		p {
			margin-block-start: 0.5em;
		}

		.card-content {
			display: flex;
			color: var(--col-text-white);
			flex-direction: column;
			justify-content: end;
			background: linear-gradient(hsl(0deg 0% 0% / 30%), hsl(0deg 0% 0% / 80%) 75%);
			mix-blend-mode: darken;
			padding: 1em;
			padding-bottom: 0.2em;
			min-height: 15em;
			height: 100%;
			box-sizing: border-box;
			transition: opacity 0.2s;

			&.dark {
				mix-blend-mode: hard-light;
			}
		}

		&:hover {
			color: transparent;
			.card-content {
				opacity: 0;
			}
		}
	}

	.card-title {
		font-size: 3rem;
		font-weight: bolder;
		text-decoration: underline;
	}

	[slot='description'] {
		padding-block-end: 15em;
	}
</style>
