import type {Handle} from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
    const token = event.cookies.get('token') ?? '';
    const name = event.cookies.get('name') ?? ''

    if(!token){
        return await resolve(event);
    }

    event.locals.user = {
        name: name,
        token: token,
        role: 'Professor'
    }

    return await resolve(event);
}) satisfies Handle;