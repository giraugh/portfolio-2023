<script lang="ts">
	import { makeImageLink, type Project } from '$lib/data/projects'

	export let project: Project
	export let sand = false
	// lol
</script>

<a
	class="project-card"
	class:sand
	href={project.link}
	style:background-image={`url(${makeImageLink(project.imageID)})`}
>
	<div class="card-content" class:dark={project.dark}>
		<span class="card-title">{project.name}</span>
		<p>{project.description}</p>
	</div>
</a>

<style lang="scss">
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
			mix-blend-mode: darken;
			padding: 1em;
			padding-bottom: 0.2em;
			min-height: 15em;
			height: 100%;
			box-sizing: border-box;
			transition: opacity 0.2s;
			background: linear-gradient(hsl(0deg 0% 0% / 30%), hsl(0deg 0% 0% / 80%) 75%);

			&.dark {
				mix-blend-mode: hard-light;
			}
		}

		&.sand {
			box-shadow: 2px 2px 40px 14px #a48d65;

			.card-content {
				opacity: 0.9;
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
</style>
