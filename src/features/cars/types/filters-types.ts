export interface typesCarFiltersRequest {
    // Pagination
    page?: number;
    perPage?: number;

    // Price range
    priceMin?: number;
    priceMax?: number;

    // Year range
    yearMin?: number;
    yearMax?: number;

    // Mileage
    mileageMax?: number;

    // Multi-select filters (comma-separated strings)
    brands?: string;          // "BMW,Audi,Mercedes"
    carTypes?: string;        // "Sedan,SUV,Coupe"
    transmissions?: string;   // "Automatic,Manual"
    fuelTypes?: string;       // "Gasoline,Diesel,Electric"
    colors?: string;          // "Black,White,Red"
}