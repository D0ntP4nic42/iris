// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {User} from "$lib/types/User";

declare global {
	namespace App {
		interface Error {}
		interface Locals {
			user: User
		}
		interface PageData {}
		interface PageState {}
		interface Platform {}
		namespace SuperForms {
			type Message = {
				type: 'error' | 'success' | 'warning', text:string
			}
		}
	}
}

export {};
