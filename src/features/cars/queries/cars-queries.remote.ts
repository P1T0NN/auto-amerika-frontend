// SVELTEKIT IMPORTS
import { query } from "$app/server";
import { error } from "@sveltejs/kit";

// LIBRARIES
import { serverApiClient } from "@/shared/lib/api-client/api-client";
import { m } from "@/shared/lib/paraglide/messages";

// TYPES
import type { typesCarFiltersRequest } from "@/features/cars/types/filters-types";

export const fetchAllCars = query("unchecked", async (page: number) => {
    const perPage = 6;
    const response = await serverApiClient.cars.fetchAllCars(page, perPage);

    if (!response.success) {
        error(404, m["GenericMessages.FETCH_FAILED"]());
    }

    return {
        success: true,
        message: m["GenericMessages.FETCH_SUCCESS"](),
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
        error(404, m["GenericMessages.FETCH_FAILED"]());
    }

    return {
        success: true,
        message: m["GenericMessages.FETCH_SUCCESS"](),
        data: response.data
    }
})

export const fetchCarById = query("unchecked", async (carId: string) => {
    const response = await serverApiClient.cars.fetchCarById(carId);

    if (!response.success) {
        error(404, m["GenericMessages.FETCH_FAILED"]());
    }

    return {
        success: true,
        message: m["GenericMessages.FETCH_SUCCESS"](),
        data: response.data
    }
})
