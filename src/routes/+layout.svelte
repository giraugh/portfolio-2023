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
		justify-content: center;
	}
</style>
