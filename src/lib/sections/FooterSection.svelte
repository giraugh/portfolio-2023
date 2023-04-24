<script>
	import SimpleSection from '$lib/components/SimpleSection.svelte'
</script>

<section class="primary bg-image">
	<SimpleSection title="Thanks for Stopping By!" thin>
		<div slot="description">
			<p>
				This site was created in Sveltekit and is <a
					href="https://github.com/giraugh/portfolio-2023">open-source</a
				>. Feel free to submit an issue if you find any issues!
			</p>
			<p>
				<em>This site is licensed under Creative Commons BY-NC-SA 4.0.</em>
			</p>
		</div>
	</SimpleSection>
</section>

<style lang="scss">
	section {
		background: var(--grad-gallery);
		color: var(--col-text-white);
	}

	*[slot='description'] {
		a[href] {
			color: inherit;
			opacity: 0.75;
		}
	}
</style>
