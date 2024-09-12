import { z } from 'zod';
import { superValidate } from "sveltekit-superforms/server";
import {zod} from "sveltekit-superforms/adapters";
import {fail, redirect} from "@sveltejs/kit";

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
    password: z.string({required_error: "A senha é obrigatória para o login"})
        .min(8, {message: "A senha precisa conter no mínimo 8 caracteres"})
})

export const load = async (event) => {
    const form = await superValidate(event, zod(loginSchema))
    return { form }
}

export const actions = {
    login: async (event) => {
        const form = await superValidate(event, zod(loginSchema));
        if(form.valid){
            const { cookies, locals } = event
                cookies.set("auth", "tokenCoordenador", {
                path:"/",
                httpOnly: true,
                sameSite: "strict",
                maxAge: 60*60*24 // 7 dias
            })
            throw redirect(303, "/professor/home")
        } else {
            return fail(400, { form })
        }
    }
}
