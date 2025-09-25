// SVELTEKIT IMPORTS
import { form, getRequestEvent } from "$app/server";

// TYPES
import type { ApiResponse } from "@/shared/lib/api-client/api-client";

export const logout = form(async (): Promise<ApiResponse<void>> => {
    const { cookies } = getRequestEvent();

    cookies.delete('session_token', { path: '/' });

    return {
        success: true,
        message: "USER_LOGGED_OUT_SUCCESSFULLY",
        data: null
    };
});