import type { LayoutServerLoad } from './$types';

// Esse arquivo tem o intuito de retornar informações para toda a aplicação,
// ou seja, ele vai assimilar o user dentro do store, como sendo o "locals.user"
// que foi retornado pelo login.

export const load : LayoutServerLoad = async({ locals }) => {
    return {
        user: locals.user,
    }
}