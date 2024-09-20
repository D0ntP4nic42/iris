import {message, superValidate} from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod';
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

    // TODO:
    // VALIDAR A SENHA PELO BACKEND.

    password: z.string()
})

export const load = async () => {

    // TODO:
    // AQUI DEVEMOS COLOCAR A CHAMADA DA API DO BACKEND,
    // ASSIM VALIDANDO O FORM E RETORNANDO ELE.

    const form = await superValidate(zod(loginSchema));
    return { form };
}

export const actions = {
    default: async ({ request }) => {
        console.log(request);
        const form = await superValidate(request, zod(loginSchema));

        if(form.valid){
            redirect(303, '/protected/professor')
        } else {
            return fail(400, { form })
        }


    }
}