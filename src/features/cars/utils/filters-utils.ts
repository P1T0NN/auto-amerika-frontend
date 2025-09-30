// TYPES
import type { FiltersClass } from '@/features/cars/context/filters-context.svelte';
import type { typesCarFiltersRequest } from '@/features/cars/types/filters-types';

/**
 * Build filter params from FiltersClass for API requests
 * Does not include page or perPage - those are handled by the query
 */
export function buildFilterParams(
    filters: FiltersClass
): typesCarFiltersRequest {
    const params: typesCarFiltersRequest = {};

    // Add price range (only if changed from defaults)
    if (filters.priceRange.min > 0) {
        params.priceMin = filters.priceRange.min;
    }
    if (filters.priceRange.max < 100000) {
        params.priceMax = filters.priceRange.max;
    }

    // Add year range (only if changed from defaults)
    if (filters.yearRange.min > 2015) {
        params.yearMin = filters.yearRange.min;
    }
    if (filters.yearRange.max < 2025) {
        params.yearMax = filters.yearRange.max;
    }

    // Add mileage (only if changed from default)
    if (filters.mileageMax < 100000) {
        params.mileageMax = filters.mileageMax;
    }

    // Add multi-select filters as comma-separated strings
    if (filters.selectedBrands.length > 0) {
        params.brands = filters.selectedBrands.join(',');
    }
    if (filters.selectedBodyTypes.length > 0) {
        params.carTypes = filters.selectedBodyTypes.join(',');
    }
    if (filters.selectedTransmissions.length > 0) {
        params.transmissions = filters.selectedTransmissions.join(',');
    }
    if (filters.selectedFuelTypes.length > 0) {
        params.fuelTypes = filters.selectedFuelTypes.join(',');
    }
    if (filters.selectedColors.length > 0) {
        params.colors = filters.selectedColors.join(',');
    }

    return params;
}

/**
 * Check if any filters are active (not default values)
 */
export function hasActiveFilters(filters: FiltersClass): boolean {
    return (
        filters.priceRange.min > 0 ||
        filters.priceRange.max < 100000 ||
        filters.yearRange.min > 2015 ||
        filters.yearRange.max < 2025 ||
        filters.mileageMax < 100000 ||
        filters.selectedBrands.length > 0 ||
        filters.selectedBodyTypes.length > 0 ||
        filters.selectedTransmissions.length > 0 ||
        filters.selectedFuelTypes.length > 0 ||
        filters.selectedColors.length > 0
    );
}