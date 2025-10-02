// SVELTEKIT IMPORTS
import { form, getRequestEvent } from "$app/server";

// LIBRARIES
import { m } from "@/shared/lib/paraglide/messages";

// TYPES
import type { ApiResponse } from "@/shared/lib/api-client/api-client";

export const logout = form(async (): Promise<ApiResponse<void>> => {
    const { cookies } = getRequestEvent();

    cookies.delete('session_token', { path: '/' });

    return {
        success: true,
        message: m["GenericMessages.USER_LOGGED_OUT_SUCCESSFULLY"](),
        data: null
    };
});