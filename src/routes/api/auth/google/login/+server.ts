// SVELTEKIT IMPORTS
import { json } from '@sveltejs/kit';

// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';
import { m } from '@/shared/lib/paraglide/messages';

// TYPES
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    try {
        const result = await serverApiClient.auth.googleLogin();

        // Check if the request was successful
        if (!result.success) {
            return json(
                { success: false, message: m["GenericMessages.GOOGLE_LOGIN_FAILED"]() },
                { status: 500 }
            );
        }

        // Return the redirect_uri from backend to client
        return json(result);
    } catch (error) {
        return json(
            { success: false, message: m["GenericMessages.GOOGLE_LOGIN_FAILED"]() },
            { status: 500 }
        );
    }
};