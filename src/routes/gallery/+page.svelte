<script lang="ts">
	import galleryAreas, { type GalleryImage } from '$lib/data/gallery'
	import { makeImageLink } from '$lib/data/projects'

	let focusedImage: null | GalleryImage = null
	let dialog: HTMLDialogElement

	const focusImage = (image: GalleryImage, event: MouseEvent) => {
		// Update focused image
		focusedImage = image

		// fallback if view transitions not available
		if (!document.startViewTransition) {
			dialog.showModal()
			return
		}

		// Set transition name on image
		const sourceImage = (event.currentTarget as HTMLElement).querySelector('img')!
		sourceImage.style.viewTransitionName = 'zoom-in'

		// Start transition
		document.startViewTransition(() => {
			// Show modal
			dialog.showModal()

			// Move transition name to dialog image
			sourceImage.style.viewTransitionName = ''
			const modalImage = document.querySelector<HTMLElement>('dialog img')!
			modalImage.style.viewTransitionName = 'zoom-in'
		})
	}

	const unfocusImage = () => {
		// Fallback if view transition not supported
		if (!document.startViewTransition) {
			focusedImage = null
			dialog.close()
			return
		}

		// Fetch and prepare actors
		const dialogImage = document.querySelector<HTMLElement>('dialog img')!
		const sourceImage = document.querySelector<HTMLElement>(`img#gal-${focusedImage!.imageId}`)!
		dialogImage.style.viewTransitionName = 'zoom-out'

		// Start transition
		const transition = document.startViewTransition(() => {
			dialog.close()
			sourceImage.style.viewTransitionName = 'zoom-out'

			// Unfocus the image
			focusedImage = null
		})

		// Cleanup after transition
		transition.finished.then(() => {
			sourceImage.style.viewTransitionName = ''
		})
	}
</script>

<div class="gallery">
	<h1>Gallery</h1>
	<p>
		A showcase of my design and illustration work for various university communities, discord
		servers and personal projects. Primarily features vector and pixel art pieces.
	</p>
	{#each galleryAreas as area}
		<section>
			<h3>{area.name}</h3>
			<p>{area.description}</p>
			<ul class:grid={area.showAsGrid}>
				{#each area.images as image}
					<li class:square={image.isSquare}>
						<button on:click={(e) => focusImage(image, e)}>
							<img
								id={`gal-${image.imageId}`}
								src={makeImageLink(image.imageId)}
								alt={image.name}
								title={image.name}
							/>
						</button>
					</li>
				{/each}
			</ul>
		</section>
	{/each}

	<!-- Focused Image Modal -->
	<dialog
		bind:this={dialog}
		on:click={() => unfocusImage()}
		on:keydown={(e) => e.key === 'Escape' && unfocusImage()}
	>
		{#if focusedImage}
			<img src={makeImageLink(focusedImage.imageId)} alt={focusedImage.name} />
			<strong>{focusedImage.name}</strong>
		{/if}
	</dialog>
</div>

<style lang="scss">
	.gallery {
		padding: 2em;
	}

	dialog {
		position: fixed;
		inset: 3em;
		border: none;
		background: none;
		cursor: zoom-out;

		&::backdrop {
			background: rgba(0, 0, 0, 0.6);
			cursor: zoom-out;
		}

		img {
			display: block;
			width: 100%;
			max-height: 80vh;
		}

		strong {
			color: white;
			font-size: 2rem;
		}
	}

	section {
		margin-block: 4em;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
		gap: 1em;

		&.grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));

			li {
				max-height: initial;
				width: 100%;
			}
		}
	}

	li {
		max-height: 10em;

		&:not(.square) {
			flex: 1;
			min-width: 15em;
		}

		&.square {
			aspect-ratio: 1;
		}

		button {
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			border: 0;
			overflow: hidden;
		}
	}

	li img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.2em;

		transition: transform 0.2s;
		&:hover {
			cursor: zoom-in;
			transform: scale(1.075);
		}
	}
</style>
