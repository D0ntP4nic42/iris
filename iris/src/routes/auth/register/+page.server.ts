import {message, superValidate} from 'sveltekit-superforms'
import { zod } from 'sveltekit-superforms/adapters'
import {string, z} from 'zod';
import bcrypt from 'bcrypt';
import {fail, redirect} from "@sveltejs/kit";
import {db} from "$lib/database";

enum Roles {
    COORDENADOR = 'COORDENADOR',
    PROFESSOR = 'PROFESSOR'
}

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
        .min(8, { message: "A senha precisa de pelo menos 8 caracteres." }),
})

export const load = async () => {

    // TODO:
    // AQUI DEVEMOS COLOCAR A CHAMADA DA API DO BACKEND,
    // ASSIM VALIDANDO O FORM E RETORNANDO ELE.

    const form = await superValidate(zod(loginSchema));
    return { form };
}

export const actions = {
    register: async ({ request }) => {
        console.log(request);
        const form = await superValidate(request, zod(loginSchema));

        console.log(form.data)

        const username = form.data.cpf;
        const password = form.data.password;

        if(form.valid){

            const userExists = await db.user.findUnique({
                where: { username: username }
            })

            if(userExists){
                return fail(400, { user: true });
            }

            await db.user.create({
                data: {
                    username: username,
                    passwordHash: await bcrypt.hash(password, 10),
                    userAuthToken: crypto.randomUUID(),
                    role: { connect: { name: Roles.PROFESSOR } }
                }
            })

            redirect(303, '/auth/login')
        } else {
            return fail(400, { form })
        }


    }
}