// VENDO COMO IMPLEMENTAR AUTENTICAÇÃO USANDO COOKIES.
// Coloquei o nome do arquivo como "-page.server" para não mudar o funcionamento atual do front-end.

// para error handling caso a senha esteja incorreta.
import { fail } from '@sveltejs/kit';

/*
/!** @type {import('./$types').PageServerLoad} *!/
export async function load({ cookies }) {
    const user  = await db.getUserFromSession(cookies.get('sessionId'));
    return { user };
}
*/


/*
//implementação de validação de login (precisa do banco de dados)
/!** @type {import('./$types').Actions} *!/
export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const cpf = data.get('cpf');
        const senha = data.get('senha');

        if(!cpf){
            return fail(400, {cpf, missing: true});
        }

        // ver implementação de funções hash para armazenar as senhas de forma mais segura.
        if(!user || user.senha !== hash(senha)){
            return fail(400, {cpf, incorrect: true})
        }

        // const user = await db.getUser(cpf)
        // cookies.set('sessionId', await db.createSession(user), { path: '/' });

        return { sucess: true };
    }
}
*/

