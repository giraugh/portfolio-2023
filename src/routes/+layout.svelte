<script lang="ts">
	import '../app.scss'
</script>

<div class="wrapper">
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	main {
		width: min(100vw, 100em);
	}
</style>
