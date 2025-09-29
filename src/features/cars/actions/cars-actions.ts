// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';

// TYPES
import type { typesAddCarRequest, typesEditCarImagesRequest } from '../types/types';

export const addCar = async (data: typesAddCarRequest) => {
    const response = await serverApiClient.cars.addCar(data);

    if (!response.success) {
        return {
            success: false,
            message: "ADD_CAR_FAILED",
            data: null
        };
    }

    return {
        success: true,
        message: "CAR_CREATED_SUCCESSFULLY",
        data: null
    };
};

export const editCarImages = async (data: typesEditCarImagesRequest) => {
    const response = await serverApiClient.cars.editCarImages(data);
    console.log(response);

    if (!response.success) {
        return {
            success: false,
            message: "EDIT_CAR_IMAGES_FAILED",
            data: null
        };
    }

    return {
        success: true,
        message: "CAR_IMAGES_EDITED_SUCCESSFULLY",
        data: null
    };
};