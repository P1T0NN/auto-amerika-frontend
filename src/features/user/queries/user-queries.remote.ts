// LIBRARIES
import { serverApiClient } from "@/shared/lib/api-client/api-client";
import { m } from "@/shared/lib/paraglide/messages";

// UTILS
import { guardedQuery } from "@/features/auth/utils/auth-utils";

// TYPES
import type { ApiResponse } from "@/shared/lib/api-client/api-client";
import type { typesUser } from "@/features/auth/types/auth-types";

export const fetchCurrentUser = guardedQuery(async (sessionToken): Promise<ApiResponse<typesUser>> => {
    const response = await serverApiClient.user.getCurrentUser(sessionToken);

    if (!response.success) {
        return {
            success: false,
            message: m["GenericMessages.FETCH_FAILED"](),
            data: null
        };
    }

    return {
        success: true,
        message: m["GenericMessages.FETCH_SUCCESS"](),
        data: response.data
    };
});