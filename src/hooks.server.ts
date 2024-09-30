import type {Handle} from "@sveltejs/kit";
import {db} from "$lib/database";

// Basicamente o arquivo mais essencial para a autenticação dentro dessa aplicação.
// ele faz o trabalho de verificação do usuário, se está autenticado com um cookie ou não,
// e se estiver autenticado, de forma válida, ele assimila o "locals.user" para o usuário, dando acesso ás
// rotas protegidas

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    if(!session){
        return await resolve(event);
    }

    const user = await db.user.findUnique({
        where: { userAuthToken: session },
        select: { username: true, role: true }
    })

    if(user){
        event.locals.user = {
            name: user.username,
            role: user.role.name,
        }
    }

    return await resolve(event);
};