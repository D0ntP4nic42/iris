import {message, superValidate} from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod';
import {type Actions, fail, redirect} from "@sveltejs/kit";
import {db} from "$lib/database";
import bcrypt from "bcrypt";

const loginSchema = z.object({
    cpf: z.string()
        .refine((cpf: string) => {
            if (typeof cpf !== "string") return false;
            cpf = cpf.replace(/[^\d]+/g, "");
            if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
            const cpfDigits = cpf.split("").map((el) => +el);
            const rest = (count: number): number => {
                return (((cpfDigits.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10) % 11) % 10);
            };
            return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10];
        }, "Digite um CPF válido."),

    // TODO:
    // VALIDAR A SENHA PELO BACKEND.

    password: z.string()
})

export const load = async ({ locals }) => {

    // TODO:
    // AQUI DEVEMOS COLOCAR A CHAMADA DA API DO BACKEND,
    // ASSIM VALIDANDO O FORM E RETORNANDO ELE.


    // caso esteja validado, irá ser redirecionado para sua aba respectiva.
    if(locals.user){
        redirect(302, '/protected/professor')
    }


    const form = await superValidate(zod(loginSchema));
    return { form };
}

export const actions : Actions = {
    login: async ({ request, cookies }) => {

        const form = await superValidate(request, zod(loginSchema));
        const username = form.data.cpf;
        const password = form.data.password;

        if(!form.valid){

            return fail(400, { form })
        }

        const user = await db.user.findUnique({
            where: {
                username: username
            }
        })

        if(!user){

            return fail(400, { credentials: true })
        }

        const userPassword = await bcrypt.compare(password, user.passwordHash);
        if(!userPassword){

            return fail(400, { credentials: true })
        }

        const authenticatedUser = await db.user.update({

            where: { username: user.username },
            data: { userAuthToken: crypto.randomUUID() }
        })

        cookies.set('session', authenticatedUser.userAuthToken, {

            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 30 * 24
        })

        redirect(303, '/protected/professor');
    }
}