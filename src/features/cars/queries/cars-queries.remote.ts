// SVELTEKIT IMPORTS
import { query, getRequestEvent } from "$app/server";
import { error } from "@sveltejs/kit";

// LIBRARIES
import { serverApiClient } from "@/shared/lib/api-client/api-client";

// TYPES
import type { typesCarFiltersRequest } from "@/features/cars/types/filters-types";

export const fetchAllCars = query("unchecked", async (page: number) => {
    const perPage = 10;
    const response = await serverApiClient.cars.fetchAllCars(page, perPage);

    if (!response.success) {
        error(404, "FETCH_FAILED");
    }

    return {
        success: true,
        message: "FETCH_SUCCESS",
        data: response.data
    }
})

export const fetchCarsByFilters = query("unchecked", async (params: { filters: typesCarFiltersRequest; page: number }) => {
    const perPage = 6;

    // Merge filters with pagination
    const requestParams = {
        ...params.filters,
        page: params.page,
        perPage
    };

    const response = await serverApiClient.cars.fetchCarsByFilters(requestParams);

    if (!response.success) {
        error(404, "FETCH_FAILED");
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
        error(404, "FETCH_FAILED");
    }

    return {
        success: true,
        message: "FETCH_SUCCESS",
        data: response.data
    }
})
