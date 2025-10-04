// SVELTEKIT IMPORTS
import { form, getRequestEvent } from "$app/server";

// LIBRARIES
import { m } from "@/shared/lib/paraglide/messages";
import { serverApiClient } from "@/shared/lib/api-client/api-client";

// TYPES
import type { ApiResponse } from "@/shared/lib/api-client/api-client";

export const logout = form(async (): Promise<ApiResponse<void>> => {
    const { cookies } = getRequestEvent();
    const sessionToken = cookies.get('session_token');

    if (!sessionToken) {
        return {
            success: false,
            message: m["GenericMessages.USER_NOT_AUTHENTICATED"](),
            data: null
        };
    }

    const response = await serverApiClient.user.logout(sessionToken);

    if (!response.success) {
        return {
            success: false,
            message: m["GenericMessages.USER_LOGOUT_FAILED"](),
            data: null
        }
    }

    cookies.delete('session_token', { path: '/' });

    return {
        success: true,
        message: m["GenericMessages.USER_LOGGED_OUT_SUCCESSFULLY"](),
        data: null
    };
});