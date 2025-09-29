// SVELTEKIT IMPORTS
import { query, getRequestEvent } from "$app/server";
import { error } from "@sveltejs/kit";

// LIBRARIES
import { serverApiClient } from "@/shared/lib/api-client/api-client";

export const fetchAllCars = query(async () => {
    const event = getRequestEvent();
    const sessionToken = event.cookies.get("session_token");

    if (!sessionToken) {
        return {
            success: false,
            data: null,
            message: "USER_NOT_AUTHENTICATED"
        };
    }

    const response = await serverApiClient.cars.fetchAllCars(sessionToken);

    if (!response.success) {
        return {
            success: false,
            message: "FETCH_FAILED",
            data: null
        }
    }

    return {
        success: true,
        message: "FETCH_SUCCESS",
        data: response.data
    }
})

export const fetchCarById = query("unchecked", async (carId: string) => {
    const event = getRequestEvent();
    const sessionToken = event.cookies.get("session_token");

    if (!sessionToken) {
        return {
            success: false,
            data: null,
            message: "USER_NOT_AUTHENTICATED"
        };
    }

    const response = await serverApiClient.cars.fetchCarById(carId, sessionToken);

    if (!response.success) {
        error(404, response.message);
    }

    return {
        success: true,
        message: "FETCH_SUCCESS",
        data: response.data
    }
})
