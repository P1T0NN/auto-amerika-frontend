// SVELTEKIT IMPORTS
import { getRequestEvent, form } from '$app/server';

// LIBRARIES
import { serverApiClient } from '@/shared/lib/api-client/api-client';

// SCHEMAS
import { addCarCompleteSchema } from '../schemas/cars-schemas';

// TYPES
import type { typesAddCarRequest } from '../types/types';
import type { ApiResponse } from '@/shared/lib/api-client/api-client';

export const addCar = form(
    addCarCompleteSchema,
    async (data): Promise<ApiResponse<void>> => {
        const event = getRequestEvent();
        const sessionToken = event.cookies.get("session_token");

        // Transform data to match API expectations - provide defaults for optional fields
        const carData: typesAddCarRequest = {
            // Required fields from step 1
            vin: data.vin,
            brand: data.brand,
            model: data.model,
            year: Number(data.year),
            price: Number(data.price),
            currency: data.currency,
            mileageKm: Number(data.mileageKm),
            fuel: data.fuel,
            transmission: data.transmission,
            engine: data.engine,
            powerHp: Number(data.powerHp),
            drivetrain: data.drivetrain,
            colorExterior: data.colorExterior,
            colorInterior: data.colorInterior,
            interiorMaterial: data.interiorMaterial,
            location: data.location,
            status: 'available', // Default status for new cars
            description: data.description,

            // Required fields from step 2
            titleStatus: data.titleStatus,
            firstRegistration: data.firstRegistration,
            owners: Number(data.owners),
            accidents: data.accidents,
            serviceHistory: data.serviceHistory,

            // Required fields from step 3
            originCountry: data.originCountry,
            purchaseSource: data.purchaseSource,
            purchaseDate: data.purchaseDate,
            usPurchasePrice: Number(data.usPurchasePrice),
            shippingCost: Number(data.shippingCost),
            customsTax: Number(data.customsTax),
            importDate: data.importDate,
            homologationStatus: data.homologationStatus,
            registrationStatus: data.registrationStatus,
        };

        const response = await serverApiClient.cars.addCar(carData, sessionToken as string);
        console.log("Response: ", response);

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
    }
);