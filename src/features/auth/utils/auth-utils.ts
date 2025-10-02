// SVELTEKIT IMPORTS
import { getRequestEvent, query } from '$app/server';

// LIBRARIES
import { m } from "@/shared/lib/paraglide/messages";

export const guardedQuery = <T, TArgs extends any[]>(fn: (sessionToken: string, ...args: TArgs) => T) => {
    return query((...args: TArgs) => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get("session_token");

        if (!sessionToken) {
            return {
                success: false,
                message: m["GenericMessages.USER_NOT_AUTHENTICATED"](),
                data: null
            };
        }

        return fn(sessionToken, ...args);
    })
}