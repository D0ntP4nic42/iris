// Esse endpoint tem o único intuito de realizar o logout do usuário
// portanto não é necessário o carregamento de nenhuma página .svelte

import type {PageServerLoad, Actions} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load: PageServerLoad = async({ locals, cookies }) => {

    redirect(302, '/auth/login');
}



export const actions: Actions = {
    default: async({ locals, cookies }) => {
        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        redirect(302, '/auth/login')
    }
}