<script lang="ts">
	import { createNoise2D } from 'simplex-noise'

	export let spikeHeight = 800
	export let spikeResolution = 1500 / 40
	export let spikeBaseHeight = 100
	export let spikeMagnitude = 1
	export let simplexSlice = 0
	export let simplexFreq = 4
	export let simplexOffset = 0
	export let fill = 'black'

	let width: number
	let spikePath: string

	$: {
		const simplex = createNoise2D()
		const freq = simplexFreq
		const offset = simplexOffset

		const sampleSimplex = (x: number, freq: number) => simplex(simplexSlice, x * freq)

		const sampleHarmonic = (x: number, freq: number) =>
			sampleSimplex(x, freq) +
			0.5 * sampleSimplex(x, freq * 2) +
			0.25 * sampleSimplex(x, freq * 4) +
			0.125 * sampleSimplex(x, freq * 8)

		const sample = (x: number) => (sampleHarmonic(x + offset, freq / width) + 1) / 3.5

		// Determine spike points
		const spikeCount = 1 + (1 / spikeResolution) * width
		const spikePoints = Array.from({ length: spikeCount }).map((_, i) => ({
			x: i * spikeResolution,
			y:
				spikeBaseHeight + spikeMagnitude * (spikeHeight * sample(i * width * (1 / spikeResolution)))
		}))

		spikePath =
			spikePoints.length > 0
				? `M${spikePoints[0].x} ${spikePoints[0].y}` +
				  spikePoints
						.slice(1)
						.map((p) => `L${p.x} ${p.y}`)
						.join(' ') +
				  `L${width} ${spikePoints[spikePoints.length - 1].y}` +
				  `L${width} ${0}` +
				  `L${0} ${0}` +
				  `L${spikePoints[0].x} ${spikePoints[1].y}` +
				  'Z'
				: ''
	}
</script>

<div class="container" bind:clientWidth={width}>
	<svg {width} height={spikeHeight + spikeBaseHeight}>
		<g><path d={spikePath} {fill} /></g>
	</svg>
</div>

<style lang="scss">
	.container {
		width: 100%;
	}
</style>
