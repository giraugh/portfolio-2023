import '@total-typescript/ts-reset'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Document {
		startViewTransition?: (callback: () => Promise<void> | void) => ViewTransition
	}

	interface CSSStyleDeclaration {
		viewTransitionName: string
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
