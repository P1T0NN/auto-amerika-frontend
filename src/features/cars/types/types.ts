export type typesCarBrand = "bmw" | "audi" | "mercedes" | "porsche" | "tesla";
export type typesCarFuelType = "gasoline" | "diesel" | "hybrid" | "electric" | "flex_fuel";
export type typesCarTransmissionType = "automatic" | "manual" | "cvt" | "semi_automatic";
export type typesCarDrivetrainType = "fwd" | "rwd" | "awd" | "4wd";
export type typesCarInteriorMaterialType = "fabric" | "leather" | "synthetic_leather" | "alcantara" | "mixed";
export type typesCarStatusType = "available" | "sold" | "pending" | "unavailable";
export type typesCarHomologationStatusType = "completed" | "in_progress" | "not_started" | "not_required";
export type typesCarRegistrationStatusType = "registered" | "pending" | "not_registered";
export type typesOriginCountry = "usa";
export type typesPurchaseSource = "private_seller" | "dealer" | "auction";

export type typesCar = {
    id: string;
    vin: string;
    brand: typesCarBrand;
    model: string;
    year: number;
    price: number;
    currency: string;
    mileageKm: number;
    fuel: typesCarFuelType;
    transmission: typesCarTransmissionType;
    engine: string;
    powerHp: number;
    drivetrain: typesCarDrivetrainType;
    colorExterior: string;
    colorInterior: string;
    interiorMaterial: typesCarInteriorMaterialType;
    location: string;
    status: typesCarStatusType;
    description: string;
  
    // Relations
    history?: typesCarHistory;
    import?: typesCarImport;
    images?: typesCarImage[];
    sales?: typesSale[];
}

export type typesCarHistory = {
    id: number;
    carId: number;
    titleStatus: string;
    firstRegistration: string; // ISO date string
    owners: number;
    serviceHistory: string;
    accidents: string;
}
  
export type typesCarImport = {
    id: number;
    carId: number;
    originCountry: string;
    purchaseSource: string;
    purchaseDate: string; // ISO date string
    usPurchasePrice: number;
    shippingCost: number;
    customsTax: number;
    importDate: string; // ISO date string
    homologationStatus: typesCarHomologationStatusType;
    registrationStatus: typesCarRegistrationStatusType;
}
  
export type typesCarImage = {
    id: number;
    carId: number;
    imageUrl: string;
}
  
export type typesBuyer = {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    notes: string;
}
  
export type typesSale = {
    id: number;
    carId: number;
    buyerId: number;
    listedDate: string; // ISO date string
    soldDate: string;   // ISO date string
    finalPrice: number;
    notes: string;
}

//////////////////////////////// REQUESTS AND RESPONSES ////////////////////////////////////

export type typesAddCarRequest = {
    // Step 1: Basic Car Info
    vin: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    currency: 'EUR' | 'USD' | 'RSD';
    mileageKm: number;
    fuel: string;
    transmission: string;
    engine: string;
    powerHp: number;
    drivetrain: string;
    colorExterior: string;
    colorInterior: string;
    interiorMaterial: string;
    location: string;
    status: string;
    description: string;

    // Step 2: History
    titleStatus: string;
    firstRegistration: string;
    owners: number;
    accidents: string;
    serviceHistory: string;

    // Step 3: Import Info
    originCountry: string;
    purchaseSource: string;
    purchaseDate: string;
    usPurchasePrice: number;
    shippingCost: number;
    customsTax: number;
    importDate: string;
    homologationStatus: string;
    registrationStatus: string;

    // Step 4: Images
    images: string[];
}

export interface typesEditCarInformationRequest {
    id: string;

    // Step 1: Basic Car Info (excluding status - handled separately)
    vin: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    currency: 'EUR' | 'USD' | 'RSD';
    mileageKm: number;
    fuel: string;
    transmission: string;
    engine: string;
    powerHp: number;
    drivetrain: string;
    colorExterior: string;
    colorInterior: string;
    interiorMaterial: string;
    location: string;
    description: string;
}

export interface typesEditCarHistoryRequest {
    carId: string;

    titleStatus: string;
    firstRegistration: string;
    owners: number;
    accidents: string;
    serviceHistory: string;
}

export interface typesEditCarImport {
    carId: string;

    originCountry: string;
    purchaseSource: string;
    purchaseDate: string;
    usPurchasePrice: number;
    shippingCost: number;
    customsTax: number;
    importDate: string;
    homologationStatus: string;
    registrationStatus: string;
}

export interface typesEditCarImagesRequest {
    carId: string;
    newImages?: string[]; // New images to add (base64 encoded)
    removeImageIds?: number[]; // IDs of existing images to remove
}