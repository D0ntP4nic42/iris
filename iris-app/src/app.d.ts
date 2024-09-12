// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces


// podemos colocar interface de professor, coordenador, e admin.
type User = {
	nome: string,
	role: string
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
