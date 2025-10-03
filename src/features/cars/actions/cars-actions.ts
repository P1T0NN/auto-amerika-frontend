// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';
import { m } from '@/shared/lib/paraglide/messages';

// TYPES
import type { typesAddCarRequest, typesEditCarImagesRequest, typesAddUnavailableCarRequest } from '../types/types';

export const addCar = async (data: typesAddCarRequest) => {
    const response = await serverApiClient.cars.addCar(data);

    if (!response.success) {
        return {
            success: false,
            message: m["GenericMessages.CAR_CREATED_FAILED"](),
            data: null
        };
    }

    return {
        success: true,
        message: m["GenericMessages.CAR_CREATED_SUCCESSFULLY"](),
        data: null
    };
};

export const addUnavailableCar = async (data: typesAddUnavailableCarRequest) => {
    const response = await serverApiClient.cars.addUnavailableCar(data);
    console.log("Response: ", response);

    if (!response.success) {
        return {
            success: false,
            message: m["GenericMessages.CAR_CREATED_FAILED"](),
            data: null
        };
    }

    return {
        success: true,
        message: m["GenericMessages.CAR_CREATED_SUCCESSFULLY"](),
        data: null
    };
};

export const editCarImages = async (data: typesEditCarImagesRequest) => {
    const response = await serverApiClient.cars.editCarImages(data);

    if (!response.success) {
        return {
            success: false,
            message: m["GenericMessages.CAR_IMAGES_EDITED_FAILED"](),
            data: null
        };
    }

    return {
        success: true,
        message: m["GenericMessages.CAR_IMAGES_EDITED_SUCCESSFULLY"](),
        data: null
    };
};