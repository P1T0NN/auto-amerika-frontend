// SVELTEKIT IMPORTS
import { command, form, getRequestEvent } from '$app/server';

// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';
import * as v from "valibot";

// QUERIES
import { fetchCarById } from '../queries/cars-queries.remote';

// SCHEMAS
import { editCarInformationSchema, editCarHistorySchema, editCarImportSchema, editCarImagesSchema } from '../schemas/cars-schemas';

// TYPES
import type { ApiResponse } from '@/shared/lib/api-client/api-client';

export const makeUnavailable = command(
    v.object({
        carId: v.string(),
    }),
    async ({ carId }): Promise<ApiResponse<void>> => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get('session_token');

        if (!sessionToken) {
            return {
                success: false,
                data: null,
                message: "USER_NOT_AUTHENTICATED"
            };
        }

        const response = await serverApiClient.cars.makeUnavailable(carId, sessionToken as string);

        if (!response.success) {
            return {
                success: false,
                message: "CAR_MAKE_UNAVAILABLE_FAILED",
                data: null
            };
        }

        await fetchCarById(carId).refresh();

        return {
            success: true,
            message: "CAR_MAKE_UNAVAILABLE_SUCCESS",
            data: null
        };
    }
);

export const editCarInformation = form(
    editCarInformationSchema,
    async (data): Promise<ApiResponse<void>> => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get('session_token');

        if (!sessionToken) {
            return {
                success: false,
                data: null,
                message: "USER_NOT_AUTHENTICATED"
            };
        }

        const processedData = {
            ...data,
            year: Number(data.year),
            price: Number(data.price),
            mileageKm: Number(data.mileageKm),
            powerHp: Number(data.powerHp)
        };

        const response = await serverApiClient.cars.editCarInformation(processedData, sessionToken as string);

        if (!response.success) {
            return {
                success: false,
                message: "CAR_EDIT_INFORMATION_FAILED",
                data: null
            };
        }

        await fetchCarById(data.id).refresh();

        return {
            success: true,
            message: "CAR_EDIT_INFORMATION_SUCCESS",
            data: null
        };
    }
);

export const editCarHistory = form(
    editCarHistorySchema,
    async (data) => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get('session_token');

        if (!sessionToken) {
            return {
                success: false,
                data: null,
                message: "USER_NOT_AUTHENTICATED"
            };
        }

        const processedData = {
            ...data,
            owners: Number(data.owners)
        };

        const response = await serverApiClient.cars.editCarHistory(processedData, sessionToken as string);

        if (!response.success) {
            return {
                success: false,
                message: "CAR_EDIT_HISTORY_FAILED",
                data: null
            };
        }

        await fetchCarById(data.carId).refresh();

        return {
            success: true,
            message: "CAR_EDIT_HISTORY_SUCCESS",
            data: null
        };
    }
);

export const editCarImport = form(
    editCarImportSchema,
    async (data) => {
        const event = getRequestEvent(); 
        const sessionToken = event.cookies.get('session_token');

        if (!sessionToken) {
            return {
                success: false,
                data: null,
                message: "USER_NOT_AUTHENTICATED"
            };
        }

        const processedData = {
            ...data,
            usPurchasePrice: Number(data.usPurchasePrice),
            shippingCost: Number(data.shippingCost),
            customsTax: Number(data.customsTax)
        };

        const response = await serverApiClient.cars.editCarImport(processedData, sessionToken as string);

        if (!response.success) {
            return {
                success: false,
                message: "CAR_EDIT_IMPORT_FAILED",
                data: null
            };
        }

        await fetchCarById(data.carId).refresh();

        return {
            success: true,
            message: "CAR_EDIT_IMPORT_SUCCESS",
            data: null
        };
    }
);