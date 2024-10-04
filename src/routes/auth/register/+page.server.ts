import type { PageServerLoad } from './$types';
import {message, superValidate} from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod';
import {type Actions, error, fail, redirect, type RequestEvent} from "@sveltejs/kit";
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
    password: z.string().min(8, { message: "A senha deve conter ao menos 8 caracteres" }),
    name: z.string().min(15, { message: "O nome deve conter ao menos 15 caracteres." })
})


export const load = (async () => {

    const form = await superValidate(zod(loginSchema));
    return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
    register: async ({ request }) => {
        const form = await superValidate(request, zod(loginSchema));
        
        if(!form.valid){
            return fail(400, { form: form })
        }

        const { cpf, password, name } = form.data;

        const response = await fetch(BACKEND_URL + 'auth/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: name,
                cpf: cpf,
                password: password,
            })
        })

        if(!response.ok){
            return fail(400, { message: "As credenciais já existem dentro do sistema." });
        }

        return redirect(302, '/auth/login');
    }
}