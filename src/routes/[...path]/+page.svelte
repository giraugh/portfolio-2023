<script>
	import giraffeSVG from '$lib/images/giraffe-cropped.svg'
	import { page } from '$app/stores'

	let pageURL = $page.url
	let pagePath = pageURL.pathname.slice(1)
	let suggestionURL = new URL(pageURL.pathname, 'https://giraugh.xyz')
	let suggestionName = `${suggestionURL.host}${suggestionURL.pathname}`
</script>

<section>
	<div>
		<h1>Uh Oh!</h1>
		<p>
			<code>{pagePath}</code>? Hmm, not at <em>ewanb.me</em>.
		</p>
		<p>
			<strong
				>Perhaps you were looking for <a href={suggestionURL.toString()}>{suggestionName}</a
				>?</strong
			>
		</p>
	</div>
</section>
<img src={giraffeSVG} alt="A giraffe with sunglasses" />

<style lang="scss">
	section {
		font-size: 1.2rem;
		padding-block-start: 3em;

		> div {
			padding-inline: 1em;
		}
	}

	a[href] {
		color: var(--col-surface-blue-d);
	}

	img {
		position: absolute;
		right: 0px;
		bottom: 0px;
		max-height: 500px;
	}
</style>
