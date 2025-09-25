// LIBRARIES
import * as v from 'valibot';

// Complete schema for remote form submission (form data as strings)
export const addCarCompleteSchema = v.object({
    // Step 1: Basic Car Info
    vin: v.pipe(v.string(), v.minLength(1, "VIN je obavezan")),
    brand: v.pipe(v.string(), v.minLength(1, "Brend je obavezan")),
    model: v.pipe(v.string(), v.minLength(1, "Model je obavezan")),
    year: v.pipe(v.string(), v.minLength(1, "Godina je obavezna")),
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

    // Step 2: History
    titleStatus: v.pipe(v.string(), v.minLength(1, "Status vlasništva je obavezan")),
    firstRegistration: v.pipe(v.string(), v.minLength(1, "Prva registracija je obavezna")),
    owners: v.pipe(v.string(), v.minLength(1, "Broj vlasnika je obavezan")),
    accidents: v.pipe(v.string(), v.minLength(1, "Informacije o nesrećama su obavezne")),
    serviceHistory: v.pipe(v.string(), v.minLength(1, "Istorija servisiranja je obavezna")),

    // Step 3: Import Info
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

export type typesAddCarCompleteData = v.InferOutput<typeof addCarCompleteSchema>;