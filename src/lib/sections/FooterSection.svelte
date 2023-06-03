<script>
	import SimpleSection from '$lib/components/SimpleSection.svelte'
</script>

<section class="bg-image">
	<SimpleSection title="Thanks for Stopping By!" thin>
		<div slot="description">
			<p>
				Wanna get in touch? <a href="mailto:contact@ewanb.me">Chuck me an email,</a> I'd love to hear
				from you.
			</p>
			<em>
				This site was created in Sveltekit and is <a
					href="https://github.com/giraugh/portfolio-2023">open-source</a
				>.
			</em>
		</div>
	</SimpleSection>
</section>

<style lang="scss">
	section {
		background: var(--col-surface-blue-dd);
		color: var(--col-text-white);
	}

	*[slot='description'] {
		a[href] {
			color: inherit;
			opacity: 0.75;
		}
	}
</style>
