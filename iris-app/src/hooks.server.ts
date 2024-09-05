import type { Handle } from '@sveltejs/kit';
import { sessionManager } from '$lib/session';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const userSession = await sessionManager.getSession(event.cookies);

	event.locals = {
		isUserLoggedIn: false,
		user: null
	};
	if (userSession.error) {
		await sessionManager.deleteCookie(event.cookies);
		return resolve(event);
	}
	if (userSession && userSession.data) {
		event.locals = {
			isUserLoggedIn: true,
			user: userSession?.data
		};
	}
	return resolve(event);
};