import {type Handle, redirect} from "@sveltejs/kit";
import type {User} from "$lib/types/User";

export const handle = (async ({ event, resolve }) => {
    const userCookies = event.cookies.get('user');
    let user : User | null = null;

    try{
        if (typeof userCookies === "string") {
            user = JSON.parse(userCookies);
        }
    } catch(e){
        console.error(`Error parsing user cookie: ${e}`)
    }

    if(!user){
        return resolve(event);
    }

    event.locals.user = {
        name: user.name,
        token: user.token,
        role: user.role
    }


    return resolve(event);
}) satisfies Handle;