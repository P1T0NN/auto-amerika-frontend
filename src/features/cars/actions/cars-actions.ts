// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';

// TYPES
import type { typesAddCarRequest } from '../types/types';

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