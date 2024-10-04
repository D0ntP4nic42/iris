import {message, superValidate} from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod';
import {type Actions, fail, redirect, type RequestEvent} from "@sveltejs/kit";
import { BACKEND_URL } from '$env/static/private';
import type {User} from "$lib/types/User";

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

    password: z.string()
})

export const load = async () => {

    // TODO:
    // AQUI DEVEMOS COLOCAR A CHAMADA DA API DO BACKEND,

    const form = await superValidate(zod(loginSchema));
    return { form };
}

export const actions : Actions = {
    login: async ({ cookies, request } : RequestEvent) => {
        const form = await superValidate(request, zod(loginSchema));

        if(!form.valid){
            return fail(400, { form: form })
        }

        const { cpf, password } = form.data;
        const response = await fetch(BACKEND_URL + 'auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                cpf: cpf,
                password: password
            })
        })

        if(!response.ok){
            return fail(400, { credentials: true });
        }

        const user : User = await response.json();
        cookies.set('user', JSON.stringify(user), {
            path: '/',
            httpOnly: true,
            maxAge: 60*60*24,
            sameSite: 'strict'
        });

        if(user.role === 'PROFESSOR') return redirect(302, '/protected/professor');
        if(user.role === 'COORDENADOR') return redirect(302, '/protected/coordenador');

        return redirect(302, '/protected/professor');
    }
}