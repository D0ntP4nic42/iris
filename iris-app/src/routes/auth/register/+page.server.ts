//implementar confirmação de senha.

import { z } from 'zod';
import { superValidate } from "sveltekit-superforms/server";
import {zod} from "sveltekit-superforms/adapters";
import {fail} from "@sveltejs/kit";

const registerSchema = z.object({
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
    password: z.string({required_error: "A senha é obrigatória."})
        .min(8, {message: "A senha precisa conter no mínimo 8 caracteres"}),
    confirmPassword: z.string({required_error:"Confirme sua senha."})
})

export const load = async (event) => {
    const form = await superValidate(event, zod(registerSchema))
    return { form }
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(registerSchema));
        if(!form.valid){
            return fail(400, {
                form
            })
        }

        return { form }
    }
}
