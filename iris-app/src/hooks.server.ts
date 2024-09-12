import type {Handle} from "@sveltejs/kit";
import {authenticateUser} from "$lib/server/auth";

export const handle : Handle = async({event,resolve}) => {
    event.locals.user = authenticateUser(event)

    const response = await resolve(event)

    return response;
}