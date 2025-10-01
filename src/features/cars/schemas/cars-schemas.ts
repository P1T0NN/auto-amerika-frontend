// LIBRARIES
import * as v from 'valibot';

export const addCarCompleteSchema = v.object({
    // Step 1: Basic Car Info
    vin: v.pipe(v.string(), v.minLength(17, "VIN mora imati najmanje 17 karaktera")),
    brand: v.pipe(v.string(), v.minLength(1, "Brend je obavezan")),
    model: v.pipe(v.string(), v.minLength(1, "Model je obavezan")),
    year: v.pipe(v.number(), v.minValue(1900, "Godina mora biti najmanje 1900")),
    carType: v.pipe(v.string(), v.minLength(1, "Tip vozila je obavezan")),
    price: v.pipe(v.number(), v.minValue(1, "Cena mora biti veća od 0")),
    currency: v.picklist(['EUR', 'USD', 'RSD'], "Valuta mora biti EUR, USD ili RSD"),
    mileageKm: v.pipe(v.number(), v.minValue(0, "Kilometraža mora biti pozitivna")),
    fuel: v.pipe(v.string(), v.minLength(1, "Gorivo je obavezno")),
    transmission: v.pipe(v.string(), v.minLength(1, "Menjač je obavezan")),
    engine: v.pipe(v.string(), v.minLength(1, "Motor je obavezan")),
    powerHp: v.pipe(v.number(), v.minValue(1, "Snaga mora biti veća od 0")),
    drivetrain: v.pipe(v.string(), v.minLength(1, "Pogon je obavezan")),
    colorExterior: v.pipe(v.string(), v.minLength(1, "Spoljašnja boja je obavezna")),
    colorInterior: v.pipe(v.string(), v.minLength(1, "Unutrašnja boja je obavezna")),
    interiorMaterial: v.pipe(v.string(), v.minLength(1, "Materijal enterijera je obavezan")),
    location: v.pipe(v.string(), v.minLength(1, "Lokacija je obavezna")),
    description: v.pipe(v.string(), v.minLength(1, "Opis je obavezan")),

    // Step 2: History
    titleStatus: v.pipe(v.string(), v.minLength(1, "Status vlasništva je obavezan")),
    firstRegistration: v.pipe(v.string(), v.minLength(1, "Prva registracija je obavezna")),
    owners: v.pipe(v.number(), v.minValue(1, "Broj vlasnika mora biti najmanje 1")),
    accidents: v.pipe(v.string(), v.minLength(1, "Informacije o nesrećama su obavezne")),
    serviceHistory: v.pipe(v.string(), v.minLength(1, "Istorija servisiranja je obavezna")),

    // Step 3: Import Info
    originCountry: v.pipe(v.string(), v.minLength(1, "Zemlja porekla je obavezna")),
    purchaseSource: v.pipe(v.string(), v.minLength(1, "Izvor kupovine je obavezan")),
    purchaseDate: v.pipe(v.string(), v.minLength(1, "Datum kupovine je obavezan")),
    usPurchasePrice: v.pipe(v.number(), v.minValue(1, "Kupovna cena mora biti veća od 0")),
    shippingCost: v.pipe(v.number(), v.minValue(0, "Troškovi transporta moraju biti pozitivni")),
    customsTax: v.pipe(v.number(), v.minValue(0, "Carinska taksa mora biti pozitivna")),
    importDate: v.pipe(v.string(), v.minLength(1, "Datum uvoza je obavezan")),
    homologationStatus: v.pipe(v.string(), v.minLength(1, "Status homologacije je obavezan")),
    registrationStatus: v.pipe(v.string(), v.minLength(1, "Status registracije je obavezan")),
});

export const editCarInformationSchema = v.object({
    id: v.pipe(v.string(), v.minLength(1, "ID je obavezan")),
    vin: v.pipe(v.string(), v.minLength(17, "VIN mora imati najmanje 17 karaktera")),
    brand: v.pipe(v.string(), v.minLength(1, "Brend je obavezan")),
    model: v.pipe(v.string(), v.minLength(1, "Model je obavezan")),
    year: v.pipe(v.string(), v.minLength(1, "Godina je obavezna")),
    carType: v.pipe(v.string(), v.minLength(1, "Tip vozila je obavezan")),
    price: v.pipe(v.string(), v.minLength(1, "Cena je obavezna")),
    currency: v.picklist(['EUR', 'USD', 'RSD'], "Valuta mora biti EUR, USD ili RSD"),
    mileageKm: v.pipe(v.string(), v.minLength(1, "Kilometraža je obavezna")),
    fuel: v.pipe(v.string(), v.minLength(1, "Gorivo je obavezno")),
    transmission: v.pipe(v.string(), v.minLength(1, "Menjač je obavezan")),
    engine: v.pipe(v.string(), v.minLength(1, "Motor je obavezan")),
    powerHp: v.pipe(v.string(), v.minLength(1, "Snaga je obavezna")),
    drivetrain: v.pipe(v.string(), v.minLength(1, "Pogon je obavezan")),
    colorExterior: v.pipe(v.string(), v.minLength(1, "Spoljašnja boja je obavezna")),
    colorInterior: v.pipe(v.string(), v.minLength(1, "Unutrašnja boja je obavezna")),
    interiorMaterial: v.pipe(v.string(), v.minLength(1, "Materijal enterijera je obavezan")),
    location: v.pipe(v.string(), v.minLength(1, "Lokacija je obavezna")),
    description: v.pipe(v.string(), v.minLength(1, "Opis je obavezan")),
});

export const editCarHistorySchema = v.object({
    carId: v.pipe(v.string(), v.minLength(1, "ID je obavezan")),
    titleStatus: v.pipe(v.string(), v.minLength(1, "Status vlasništva je obavezan")),
    firstRegistration: v.pipe(v.string(), v.minLength(1, "Prva registracija je obavezna")),
    owners: v.pipe(v.string(), v.minLength(1, "Broj vlasnika je obavezan")),
    accidents: v.pipe(v.string(), v.minLength(1, "Informacije o nesrećama su obavezne")),
    serviceHistory: v.pipe(v.string(), v.minLength(1, "Istorija servisiranja je obavezna")),
});

export const editCarImportSchema = v.object({
    carId: v.pipe(v.string(), v.minLength(1, "ID je obavezan")),
    originCountry: v.pipe(v.string(), v.minLength(1, "Zemlja porekla je obavezna")),
    purchaseSource: v.pipe(v.string(), v.minLength(1, "Izvor kupovine je obavezan")),
    purchaseDate: v.pipe(v.string(), v.minLength(1, "Datum kupovine je obavezan")),
    usPurchasePrice: v.pipe(v.string(), v.minLength(1, "Kupovna cena je obavezna")),
    shippingCost: v.pipe(v.string(), v.minLength(1, "Troškovi transporta su obavezni")),
    customsTax: v.pipe(v.string(), v.minLength(1, "Carinska taksa je obavezna")),
    importDate: v.pipe(v.string(), v.minLength(1, "Datum uvoza je obavezan")),
    homologationStatus: v.pipe(v.string(), v.minLength(1, "Status homologacije je obavezan")),
    registrationStatus: v.pipe(v.string(), v.minLength(1, "Status registracije je obavezan")),
});

export const editCarImagesSchema = v.object({
    carId: v.pipe(v.string(), v.minLength(1, "ID je obavezan")),
    newImages: v.optional(v.array(v.string())),
    removeImageIds: v.optional(v.array(v.number())),
});

export type typesEditCarInformationData = v.InferOutput<typeof editCarInformationSchema>;
export type typesEditCarHistoryData = v.InferOutput<typeof editCarHistorySchema>;
export type typesEditCarImportData = v.InferOutput<typeof editCarImportSchema>;
export type typesEditCarImagesData = v.InferOutput<typeof editCarImagesSchema>;