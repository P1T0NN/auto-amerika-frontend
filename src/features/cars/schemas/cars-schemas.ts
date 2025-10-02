// LIBRARIES
import * as v from 'valibot';
import { m } from '@/shared/lib/paraglide/messages';

export const addCarCompleteSchema = v.object({
    // Step 1: Basic Car Info
    vin: v.pipe(v.string(), v.minLength(17, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.VIN_MIN_LENGTH"])),
    brand: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.BRAND_MIN_LENGTH"])),
    model: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.MODEL_MIN_LENGTH"])),
    year: v.pipe(v.number(), v.minValue(1900, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.YEAR_MIN_VALUE"])),
    carType: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.CAR_TYPE_MIN_LENGTH"])),
    price: v.pipe(v.number(), v.minValue(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.PRICE_MIN_VALUE"])),
    currency: v.picklist(['EUR', 'USD', 'RSD'], m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.CURRENCY_PICKLIST"]),
    mileageKm: v.pipe(v.number(), v.minValue(0, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.MILEAGE_KM_MIN_VALUE"])),
    fuel: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.FUEL_MIN_LENGTH"])),
    transmission: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.TRANSMISSION_MIN_LENGTH"])),
    engine: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.ENGINE_MIN_LENGTH"])),
    powerHp: v.pipe(v.number(), v.minValue(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.POWER_HP_MIN_VALUE"])),
    drivetrain: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.DRIVETRAIN_MIN_LENGTH"])),
    colorExterior: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.COLOR_EXTERIOR_MIN_LENGTH"])),
    colorInterior: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.COLOR_INTERIOR_MIN_LENGTH"])),
    interiorMaterial: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.INTERIOR_MATERIAL_MIN_LENGTH"])),
    location: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.LOCATION_MIN_LENGTH"])),
    description: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.DESCRIPTION_MIN_LENGTH"])),

    // Step 2: History
    titleStatus: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.TITLE_STATUS_MIN_LENGTH"])),
    firstRegistration: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.FIRST_REGISTRATION_MIN_LENGTH"])),
    owners: v.pipe(v.number(), v.minValue(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.OWNERS_MIN_VALUE"])),
    accidents: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.ACCIDENTS_MIN_LENGTH"])),
    serviceHistory: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.SERVICE_HISTORY_MIN_LENGTH"])),

    // Step 3: Import Info
    originCountry: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.ORIGIN_COUNTRY_MIN_LENGTH"])),
    purchaseSource: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.PURCHASE_SOURCE_MIN_LENGTH"])),
    purchaseDate: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.PURCHASE_DATE_MIN_LENGTH"])),
    usPurchasePrice: v.pipe(v.number(), v.minValue(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.US_PURCHASE_PRICE_MIN_VALUE"])),
    shippingCost: v.pipe(v.number(), v.minValue(0, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.SHIPPING_COST_MIN_VALUE"])),
    customsTax: v.pipe(v.number(), v.minValue(0, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.CUSTOMS_TAX_MIN_VALUE"])),
    importDate: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.IMPORT_DATE_MIN_LENGTH"])),
    homologationStatus: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.HOMOLOGATION_STATUS_MIN_LENGTH"])),
    registrationStatus: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.AddCarCompleteSchema.REGISTRATION_STATUS_MIN_LENGTH"])),
});

export const editCarInformationSchema = v.object({
    id: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.ID_MIN_LENGTH"])),
    vin: v.pipe(v.string(), v.minLength(17, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.VIN_MIN_LENGTH"])),
    brand: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.BRAND_MIN_LENGTH"])),
    model: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.MODEL_MIN_LENGTH"])),
    year: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.YEAR_MIN_LENGTH"])),
    carType: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.CAR_TYPE_MIN_LENGTH"])),
    price: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.PRICE_MIN_LENGTH"])),
    currency: v.picklist(['EUR', 'USD', 'RSD'], m["ValidationMessages.CarsSchemas.EditCarInformationSchema.CURRENCY_PICKLIST"]),
    mileageKm: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.MILEAGE_KM_MIN_LENGTH"])),
    fuel: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.FUEL_MIN_LENGTH"])),
    transmission: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.TRANSMISSION_MIN_LENGTH"])),
    engine: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.ENGINE_MIN_LENGTH"])),
    powerHp: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.POWER_HP_MIN_LENGTH"])),
    drivetrain: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.DRIVETRAIN_MIN_LENGTH"])),
    colorExterior: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.COLOR_EXTERIOR_MIN_LENGTH"])),
    colorInterior: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.COLOR_INTERIOR_MIN_LENGTH"])),
    interiorMaterial: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.INTERIOR_MATERIAL_MIN_LENGTH"])),
    location: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.LOCATION_MIN_LENGTH"])),
    description: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarInformationSchema.DESCRIPTION_MIN_LENGTH"])),
});

export const editCarHistorySchema = v.object({
    carId: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarHistorySchema.ID_MIN_LENGTH"])),
    titleStatus: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarHistorySchema.TITLE_STATUS_MIN_LENGTH"])),
    firstRegistration: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarHistorySchema.FIRST_REGISTRATION_MIN_LENGTH"])),
    owners: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarHistorySchema.OWNERS_MIN_LENGTH"])),
    accidents: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarHistorySchema.ACCIDENTS_MIN_LENGTH"])),
    serviceHistory: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarHistorySchema.SERVICE_HISTORY_MIN_LENGTH"])),
});

export const editCarImportSchema = v.object({
    carId: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.ID_MIN_LENGTH"])),
    originCountry: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.ORIGIN_COUNTRY_MIN_LENGTH"])),
    purchaseSource: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.PURCHASE_SOURCE_MIN_LENGTH"])),
    purchaseDate: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.PURCHASE_DATE_MIN_LENGTH"])),
    usPurchasePrice: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.US_PURCHASE_PRICE_MIN_LENGTH"])),
    shippingCost: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.SHIPPING_COST_MIN_LENGTH"])),
    customsTax: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.CUSTOMS_TAX_MIN_LENGTH"])),
    importDate: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.IMPORT_DATE_MIN_LENGTH"])),
    homologationStatus: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.HOMOLOGATION_STATUS_MIN_LENGTH"])),
    registrationStatus: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImportSchema.REGISTRATION_STATUS_MIN_LENGTH"])),
});

export const editCarImagesSchema = v.object({
    carId: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.CarsSchemas.EditCarImagesSchema.ID_MIN_LENGTH"])),
    newImages: v.optional(v.array(v.string())),
    removeImageIds: v.optional(v.array(v.number())),
});

export type typesEditCarInformationData = v.InferOutput<typeof editCarInformationSchema>;
export type typesEditCarHistoryData = v.InferOutput<typeof editCarHistorySchema>;
export type typesEditCarImportData = v.InferOutput<typeof editCarImportSchema>;
export type typesEditCarImagesData = v.InferOutput<typeof editCarImagesSchema>;