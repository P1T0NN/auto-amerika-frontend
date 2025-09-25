// SVELTEKIT IMPORTS
import { getRequestEvent, query, form } from '$app/server';
import { redirect } from '@sveltejs/kit';

// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

// TYPES
import type { ApiResponse } from '@/shared/lib/api-client/api-client';

export const guardedQuery = <T>(fn: (sessionToken: string) => T) => {
    return query(() => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get("session_token");

        if (!sessionToken) {
            redirect(307, UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE);
        }

        return fn(sessionToken);
    })
}

export const guardedForm = <T>(fn: (sessionToken: string) => T) => {
    return form(() => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get("session_token");

        if (!sessionToken) {
            redirect(307, UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE);
        }

        return fn(sessionToken);
    })
}