// LIBRARIES
import { serverApiClient } from "@/shared/lib/api-client/api-client";

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
            message: "USER_FETCH_FAILED",
            data: null
        };
    }

    return {
        success: true,
        message: "USER_FETCHED_SUCCESSFULLY",
        data: response.data
    };
});