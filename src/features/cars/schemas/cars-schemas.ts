// LIBRARIES
import { z } from 'zod/v4';

// Schema for Step 1: Basic Car Info
export const addCarStep1Schema = z.object({
    vin: z.string().min(1, 'VIN je obavezan').length(17, 'VIN mora imati tacno 17 karaktera'),
    brand: z.string().min(1, 'Brend je obavezan'),
    model: z.string().min(1, 'Model je obavezan'),
    year: z.number()
        .min(1900, 'Godina mora biti veca od 1900')
        .max(new Date().getFullYear() + 1, 'Godina ne moze biti u buducnosti'),
    price: z.number()
        .min(0.01, 'Cena mora biti veca od 0')
        .positive('Cena mora biti pozitivna'),
    currency: z.enum(['EUR', 'USD', 'RSD']),
    mileageKm: z.number().min(0, 'Kilometraza mora biti pozitivna'),
    fuel: z.string().min(1, 'Gorivo je obavezno'),
    transmission: z.string().min(1, 'Menjač je obavezan'),
    engine: z.string().min(1, 'Motor je obavezan'),
    powerHp: z.number().min(1, 'Snaga mora biti pozitivna'),
    drivetrain: z.string().min(1, 'Pogon je obavezan'),
    colorExterior: z.string().min(1, 'Spoljašnja boja je obavezna'),
    colorInterior: z.string().min(1, 'Unutrašnja boja je obavezna'),
    interiorMaterial: z.string().min(1, 'Materijal enterijera je obavezan'),
    location: z.string().min(1, 'Lokacija je obavezna'),
    description: z.string().min(1, 'Opis je obavezan')
});

export type AddCarStep1Data = z.infer<typeof addCarStep1Schema>;

// Schema for Step 2: Specifications and Features
export const addCarStep2Schema = z.object({
    specifications: z.array(z.object({
        specName: z.string().min(1, 'Naziv specifikacije je obavezan'),
        specValue: z.string().min(1, 'Vrednost specifikacije je obavezna')
    })).default([]),
    selectedFeatures: z.array(z.string()).default([]),
    availableFeatures: z.array(z.string()).default([])
});

export type AddCarStep2Data = z.infer<typeof addCarStep2Schema>;

// Schema for Step 3: History
export const addCarStep3Schema = z.object({
    titleStatus: z.enum(['clean', 'salvage', 'flood', 'lemon', 'rebuilt']).nullable(),
    firstRegistration: z.string().nullable(), // Date string format
    owners: z.number().min(1, 'Broj vlasnika mora biti najmanje 1').nullable(),
    accidents: z.enum(['none', 'minor', 'major', 'unknown']).nullable(),
    serviceHistory: z.string().nullable()
});

export type AddCarStep3Data = z.infer<typeof addCarStep3Schema>;

// Schema for Step 4: Import Info
export const addCarStep4Schema = z.object({
    originCountry: z.string().nullable(),
    purchaseSource: z.string().nullable(),
    purchaseDate: z.string().nullable(), // Date string format
    usPurchasePrice: z.number().min(0, 'Kupovna cena mora biti pozitivna').nullable(),
    shippingCost: z.number().min(0, 'Troškovi transporta moraju biti pozitivni').nullable(),
    customsTax: z.number().min(0, 'Carinska taksa mora biti pozitivna').nullable(),
    importDate: z.string().nullable(), // Date string format
    homologationStatus: z.enum(['completed', 'in-progress', 'pending', 'not-required']).nullable(),
    registrationStatus: z.enum(['registered', 'pending', 'in-progress', 'not-started']).nullable()
});

export type AddCarStep4Data = z.infer<typeof addCarStep4Schema>;

// Schema for Step 5: Images and Review
export const addCarStep5Schema = z.object({
    imageFiles: z.array(z.instanceof(File)).default([]),
    imageUrls: z.array(z.string()).default([])
});

export type AddCarStep5Data = z.infer<typeof addCarStep5Schema>;