export type typesCar = {
    id: number;
    vin: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    currency: string;
    mileageKm: number | null;
    mileageMiles: number | null;
    fuel: string | null;
    transmission: string | null;
    engine: string | null;
    powerHp: number | null;
    drivetrain: string | null;
    colorExterior: string | null;
    colorInterior: string | null;
    interiorMaterial: string | null;
    location: string | null;
    status: string;
    description: string | null;
  
    // Relations
    specifications?: typesCarSpecifications[];
    history?: typesCarHistory | null;
    import?: typesCarImport | null;
    images?: typesCarImage[];
    features?: typesFeature[];
    sales?: typesSale[];
}

export type typesCarSpecifications = {
    id: number;
    carId: number;
    specName: string | null;
    specValue: string | null;
}
  
export type typesCarHistory = {
    id: number;
    carId: number;
    titleStatus: string | null;
    firstRegistration: string | null; // ISO date string
    owners: number | null;
    serviceHistory: string | null;
    accidents: string | null;
}
  
export type typesCarImport = {
    id: number;
    carId: number;
    originCountry: string | null;
    purchaseSource: string | null;
    purchaseDate: string | null; // ISO date string
    usPurchasePrice: number | null;
    shippingCost: number | null;
    customsTax: number | null;
    importDate: string | null; // ISO date string
    homologationStatus: string | null;
    registrationStatus: string | null;
}
  
export type typesCarImage = {
    id: number;
    carId: number;
    imageUrl: string;
}
  
export type typesFeature = {
    id: number;
    name: string;
}
  
export type typesCarFeature = {
    carId: number;
    featureId: number;
}
  
export type typesBuyer = {
    id: number;
    name: string;
    phone: string | null;
    email: string | null;
    address: string | null;
    notes: string | null;
}
  
export type typesSale = {
    id: number;
    carId: number;
    buyerId: number | null;
    listedDate: string | null; // ISO date string
    soldDate: string | null;   // ISO date string
    finalPrice: number | null;
    notes: string | null;
}