// SVELTEKIT IMPORTS
import { dev } from '$app/environment';

// TYPES
import type { typesUser } from '@/features/auth/types/auth-types';

export type ApiResponse<T> = {
    success: boolean;
    data: T | null;
    message: string;
    status?: number;
};

type ApiMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Server-side API client for use in +page.server.ts and +layout.server.ts files
 * This version uses the BACKEND_URL from environment variables
 */
import { PUBLIC_BACKEND_URL } from '$env/static/public';

async function serverApiRequest<T>(
    endpoint: string,
    method: ApiMethods = 'GET',
    body?: any,
    headers?: HeadersInit,
    sessionToken?: string
): Promise<ApiResponse<T>> {
    const baseUrl = PUBLIC_BACKEND_URL;
    const url = `${baseUrl}${endpoint}`;

    const requestHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    if (sessionToken) {
        requestHeaders['Authorization'] = `Bearer ${sessionToken}`;
    }

    if (headers) {
        Object.assign(requestHeaders, headers);
    }

    const fetchOptions: RequestInit = {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'include',
    };

    try {
        const response = await fetch(url, fetchOptions);

        if (dev) {
            console.log('Server API Request:', {
                url,
                method,
                status: response.status,
                statusText: response.statusText,
            });
        }

        const responseText = await response.text();
        let responseData: any;

        try {
            responseData = responseText ? JSON.parse(responseText) : {};
        } catch (e) {
            if (dev) {
                console.error('Failed to parse JSON response:', e);
            }

            return {
                success: false,
                data: null,
                message: responseText || `Server returned ${response.status} ${response.statusText}`,
                status: response.status
            };
        }

        if (!response.ok) {
            // Extract the actual error message from nested structure
            let errorMessage = responseData.message || responseData || `Server returned ${response.status} ${response.statusText}`;

            // Handle nested error structure like { error: { message: 'AUTH_ERROR' } }
            if (responseData.error && responseData.error.message) {
                errorMessage = responseData.error.message;
            }

            return {
                success: false,
                data: null,
                message: errorMessage,
                status: response.status
            };
        }

        return {
            success: true,
            data: responseData.data || responseData,
            message: responseData.message || null
        };

    } catch (error) {
        if (dev) {
            console.error('Server API Network error:', error);
        }

        return {
            success: false,
            data: null,
            message: error instanceof Error ? error.message : 'Network error occurred'
        };
    }
}

/**
 * Server-side API client for use in server-side code
 */

import type { 
    typesAddCarRequest, 
    typesEditCarInformationRequest, 
    typesEditCarHistoryRequest,
    typesEditCarImport,
    typesEditCarImagesRequest, 
    typesCar 
} from '@/features/cars/types/types';

export const serverApiClient = {
    auth: {
        googleLogin: async (): Promise<ApiResponse<{ redirect_uri: string }>> => {
            return serverApiRequest<{ redirect_uri: string }>('/auth/google/login', 'GET');
        }
    },

    user: {
        getCurrentUser: async (sessionToken: string): Promise<ApiResponse<typesUser>> => {
            return serverApiRequest<typesUser>('/user/get-current-user', 'GET', undefined, undefined, sessionToken);
        },
    },

    cars: {
        addCar: async (carData: typesAddCarRequest): Promise<ApiResponse<void>> => {
            return serverApiRequest<void>('/cars/add-car', 'POST', carData, undefined, undefined);
        },
        editCarInformation: async (carData: typesEditCarInformationRequest, sessionToken: string): Promise<ApiResponse<void>> => {
            return serverApiRequest<void>('/cars/edit-car-information', 'PUT', carData, undefined, sessionToken);
        },
        editCarHistory: async (carData: typesEditCarHistoryRequest, sessionToken: string): Promise<ApiResponse<void>> => {
            return serverApiRequest<void>('/cars/edit-car-history', 'PUT', carData, undefined, sessionToken);
        },
        editCarImport: async (carData: typesEditCarImport, sessionToken: string): Promise<ApiResponse<void>> => {
            return serverApiRequest<void>('/cars/edit-car-import', 'PUT', carData, undefined, sessionToken);
        },
        editCarImages: async (carData: typesEditCarImagesRequest): Promise<ApiResponse<void>> => {
            return serverApiRequest<void>('/cars/edit-car-images', 'PUT', carData, undefined, undefined);
        },
        makeUnavailable: async (carId: string, sessionToken: string): Promise<ApiResponse<void>> => {
            return serverApiRequest<void>('/cars/make-unavailable', 'PUT', { carId }, undefined, sessionToken);
        },
        fetchAllCars: async (sessionToken: string): Promise<ApiResponse<typesCar[]>> => {
            return serverApiRequest<typesCar[]>('/cars/get-all-cars', 'GET', undefined, undefined, sessionToken);
        },
        fetchCarById: async (carId: string, sessionToken: string): Promise<ApiResponse<typesCar>> => {
            return serverApiRequest<typesCar>(`/cars/get-car-by-id?carId=${carId}`, 'GET', undefined, undefined, sessionToken);
        }
    }
};