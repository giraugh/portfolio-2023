<script>
	import { Paintbrush } from 'lucide-svelte'
	import SimpleSection from '$lib/components/SimpleSection.svelte'
	import snakeImage from '$lib/images/snake.svg'
</script>

<section class="primary bg-image">
	<SimpleSection title="Design Gallery">
		<div slot="description">
			<p>
				A showcase of my design and illustration work for various university communities, discord
				servers and personal projects. Primarily featuring vector and pixel art pieces.
			</p>
			<a class="button" href="gallery"><Paintbrush /> Open Gallery</a>
		</div>
		<img slot="image" src={snakeImage} alt="Colourful snake with headphones around its 'neck'" />
	</SimpleSection>
</section>

<style lang="scss">
	section {
		background: var(--grad-gallery);
		color: var(--col-text-white);
	}

	a.button {
		background: var(--col-surface-blue);
	}
</style>
