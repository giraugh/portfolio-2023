<script lang="ts">
	import crabImage from '$lib/images/crab.png'
	import projects from '$lib/data/friendsProjects'
	import { makeImageLink } from '$lib/data/projects'
</script>

<section class="primary">
	<div class="beach-waves">
		<div class="wave" />
		<div class="wave" />
		<div class="wave" />
	</div>
	<div class="sand">
		<div class="content">
			<div class="crab-wrapper">
				<img class="crab" src={crabImage} alt="A cute cartoon crab" />
				<!-- <p class="speech-bubble">Check out these cool projects from my friends!</p> -->
			</div>
			<ul class="project-list content">
				{#each projects as project}
					<li>
						<a
							class="project-card"
							href={project.link}
							style:background-image={`url(${makeImageLink(project.imageID)})`}
						>
							<div class="card-content" class:dark={project.dark}>
								<span class="card-title">{project.name}</span>
								<p>
									{project.description}
									<a class="card-author" href={project.authorLink} target="_blank"
										>{project.author}</a
									>
								</p>
							</div>
						</a>
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

	/* .speech-bubble {
		display: block;
		position: absolute;
		left: calc(40%);
		top: -7em;
		width: 15em;
		background: var(--col-text-white);
		padding: 2em;
		border-radius: 1rem;
		border: 4px solid var(--col-text-black);
		font-weight: bold;
		font-size: 1.2rem;
	} */

	.sand {
		min-height: 20em;
		width: 100%;
		margin-block-start: 14em;

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

	.crab-wrapper {
		width: 100%;
		height: 25em;
		position: absolute;

		img {
			display: block;
			position: absolute;
			left: 3%;
			top: -6em;
			width: 20em;
		}

		&::before {
			/* A shadow for the sand */
			display: block;
			content: '';
			position: absolute;
			background-color: black;
			opacity: 0.1;
			border-radius: 50%;
			width: 18em;
			height: 3em;
			top: 2.5em;
			left: 3em;
		}
	}

	.project-list {
		padding-block-start: 10em;
		list-style-type: none;
		width: 100%;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		width: 100%;
		gap: 1em;
	}

	.project-card {
		display: block;
		/* background-color: purple; */
		background-size: cover;
		background-position: center;
		border-radius: 0.3rem;
		text-decoration: none;
		position: relative;
		transition: color 0.2s;
		overflow: hidden;
		box-shadow: 0px 4px 0px #897558;

		p {
			margin-block-start: 0.5em;
		}

		a {
			display: block;
			margin-block-start: 0.2em;
			color: inherit;
		}

		.card-content {
			display: flex;
			color: var(--col-text-white);
			flex-direction: column;
			justify-content: end;
			background: linear-gradient(hsla(0, 0%, 0%, 0.3), hsl(0deg 0% 0% / 31%) 75%);
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

	.wave {
		--mask: radial-gradient(111.8px at 50% 150px, #000 99%, #0000 101%) calc(50% - 100px) 0/200px
				100%,
			radial-gradient(111.8px at 50% -100px, #0000 99%, #000 101%) 50% 50px/200px 100% repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}
</style>
