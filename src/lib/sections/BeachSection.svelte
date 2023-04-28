<script lang="ts">
	import crabImage from '$lib/images/crab.png'
	import projects from '$lib/data/friendsProjects'
	import ProjectCard from '$lib/components/ProjectCard.svelte'
</script>

<section class="primary">
	<div class="beach-waves">
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
	</div>
	<div class="sand">
		<div class="content">
			<div class="top-row">
				<div class="crab-wrapper">
					<img class="crab" src={crabImage} alt="A cute cartoon crab" />
				</div>
				<p class="speech-bubble">Also check out these cool projects from my friends!</p>
			</div>
			<ul class="project-list content">
				{#each projects as project}
					<li>
						<ProjectCard {project} sand />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$lib/styles/breakpoints.scss';

	section {
		background: var(--col-surface-purple-dddd);
		padding-block-start: 15em;
		position: relative;

		&:has(.beach-waves) {
			padding-block-end: 0;
		}
	}

	.content {
		margin: auto;
	}

	.beach-waves {
		min-height: 20em;
		height: 20em;
		width: 100%;

		position: absolute;

		.wave {
			position: absolute;
			inset: 0;
			height: 8em;
			background: var(--grad-wave);
		}

		@for $i from 0 through 3 {
			.wave:nth-child(#{$i + 1}) {
				top: #{4em * ($i - 0.5)};
			}
		}
	}

	.sand {
		min-height: 20em;
		width: 100%;
		margin-block-start: 14em;
		padding-block-end: 15em;

		background: var(--col-surface-sand);

		position: relative;

		&::before {
			/* The curved top part of the sand */
			display: block;
			content: '';
			position: absolute;
			inset: 0;
			top: -20px;
			border-top-left-radius: 50%;
			border-top-right-radius: 50%;
			height: 2.5em;
			background: linear-gradient(to bottom, #ece0b3, var(--col-surface-sand));
		}
	}

	.top-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 3em;
		padding-inline: 5em;
		margin-block-start: -7em;

		@media (max-width: 900px) {
			grid-template-columns: 1fr;
			text-align: center;
		}

		@media (max-width: 500px) {
			grid-template-columns: 1fr;
			text-align: center;
			padding-inline: 0em;
		}
	}

	.speech-bubble {
		display: block;
		padding-inline: 2em;
		font-weight: bold;
		font-size: 1.5rem;
		transform: perspective(20em) rotateX(40deg);
		color: #835a2c;
		font-family: 'Jost';
		align-self: flex-end;
		margin-block-end: 0.3em;
	}

	.crab-wrapper {
		position: relative;

		img {
			position: relative;
			display: block;
			width: 20em;
		}

		&::before {
			display: block;
			content: '';
			position: absolute;
			background-color: black;
			opacity: 0.1;
			border-radius: 50%;
			width: 18em;
			height: 3em;
			bottom: 0.4em;
			left: 1em;
		}
	}

	.project-list {
		padding-block-start: 5em;
		padding-inline: 0;
		list-style-type: none;
		width: 100%;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		gap: 1em;
	}

	.wave {
		--mask: radial-gradient(111.8px at 50% 150px, #000 99%, #0000 101%) calc(50% - 100px) 0/200px
				100%,
			radial-gradient(111.8px at 50% -100px, #0000 99%, #000 101%) 50% 50px/200px 100% repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}

	.primary {
		overflow-x: hidden;
	}
</style>
