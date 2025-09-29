// SVELTEKIT IMPORTS
import { getRequestEvent, query } from '$app/server';
import { redirect } from '@sveltejs/kit';

// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

export const guardedQuery = <T, TArgs extends any[]>(fn: (sessionToken: string, ...args: TArgs) => T) => {
    return query((...args: TArgs) => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get("session_token");

        if (!sessionToken) {
            redirect(307, UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE);
        }

        return fn(sessionToken, ...args);
    })
}