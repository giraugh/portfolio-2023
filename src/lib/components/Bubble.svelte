<script lang="ts">
	const randomiseBubble = (buttonElement: HTMLElement) => {
		// Get container
		const buttonContainer = buttonElement.parentElement
		if (!buttonContainer) return

		// Randomise position and size within container
		const containerBB = buttonContainer.getBoundingClientRect()
		const x = Math.random() * containerBB.width
		buttonElement.style.left = `${x}px`
		buttonElement.style.setProperty('--bubble-size', `${40 + Math.random() * 50}px`)
		buttonElement.style.setProperty('--wiggle-amt', `${8 + Math.random() * 5}px`)
	}

	const initBubble = (buttonElement: HTMLElement) => {
		// Randomise the bubble
		randomiseBubble(buttonElement)

		// Start bubble animations w/ random delay
		setTimeout(() => {
			buttonElement.getAnimations().forEach((a, i) => a.play())
		}, Math.random() * 10000)
	}

	const popBubble = (e: MouseEvent) => {
		if (e.currentTarget instanceof HTMLElement) {
			const bubbleElement = e.currentTarget
			const existingAnims = bubbleElement.getAnimations()
			const popAnim = bubbleElement.animate([{ scale: 1 }, { scale: 1.5 }], {
				duration: 100
			})
			popAnim.addEventListener('finish', () => {
				existingAnims.forEach((a) => {
					a.cancel()
					randomiseBubble(bubbleElement)
					a.play()
				})
			})
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="bubble" use:initBubble on:click={popBubble}>
	<svg
		width="419"
		height="419"
		viewBox="0 0 419 419"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="209.5" cy="209.5" r="209.5" fill="#4088CA" />
		<path
			d="M233 50L248.075 53.9165C302.342 68.0153 345.895 108.435 364 161.5V161.5"
			stroke="#ADD8E6"
			stroke-width="40"
			stroke-linecap="round"
		/>
	</svg>
</div>

<style lang="scss">
	@use 'sass:math';

	.bubble {
		--bubble-size: 50px;
		--wiggle-amt: 10px;

		position: absolute;

		border-radius: 50%;
		aspect-ratio: 1;
		max-width: var(--bubble-size);
		opacity: 0.6;
		animation: float 9s linear forwards paused infinite, wiggle 7s ease-in-out infinite paused;

		svg {
			width: 100%;
			height: 100%;
		}
	}

	@keyframes wiggle {
		/* 0% {
			translateX: calc(var(--wiggle-amt) * -1);
		} */

		@for $i from 1 through 6 {
			#{$i * 16.7%} {
				transform: translateX(calc(var(--wiggle-amt) * #{math.pow(-1, $i)}));
			}
		}
	}

	@keyframes float {
		0% {
			top: 100%;
			opacity: 0;
			filter: blur(3px);
		}
		30% {
			opacity: 0.2;
			filter: blur(2px);
		}
		80% {
			opacity: 0.4;
		}
		100% {
			top: calc(-1 * var(--bubble-size));
			opacity: 0.1;
			filter: blur(1px);
		}
	}
</style>
