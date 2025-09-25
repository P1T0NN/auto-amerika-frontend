// SVELTEKIT IMPORTS
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';

export const GET: RequestHandler = async () => {
    try {
        const result = await serverApiClient.auth.googleLogin();

        // Check if the request was successful
        if (!result.success) {
            return json(
                { success: false, message: "GOOGLE_LOGIN_FAILED" },
                { status: 500 }
            );
        }

        // Return the redirect_uri from backend to client
        return json(result);
    } catch (error) {
        return json(
            { success: false, message: "GOOGLE_LOGIN_FAILED" },
            { status: 500 }
        );
    }
};