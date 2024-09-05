import { fail, json, redirect } from "@sveltejs/kit";
import type { RequestHandler } from './$types';
import { sessionManger } from '$lib/session';


export const POST = (async ({ request, locals, cookies }) => {

    const { cpf, password } = await request.json();

    if(
        cpf !== '958.766.780-82' ||
        password !== '123'
    ){
        return fail(400, {
            data: { cpf, password },
            message: 'Dados inválidos'
        })
    } // validação de usuário

    const { data, error, message } = await sessionManger.createNewSession(cookies, {
        cpf
    });
    if (error) {
        console.log(message);
        return fail(400, {
            data: { cpf, password },
            message
        });
    } // pegando erros

    return json({ sucess: true, message });
}) satisfies RequestHandler;