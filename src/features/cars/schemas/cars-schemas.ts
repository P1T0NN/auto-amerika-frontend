// LIBRARIES
import * as v from 'valibot';

// Complete schema for remote form submission (form data as strings)
export const addCarCompleteSchema = v.object({
    // Step 1: Basic Car Info
    vin: v.pipe(v.string(), v.minLength(1, "VIN je obavezan")),
    brand: v.pipe(v.string(), v.minLength(1, "Brend je obavezan")),
    model: v.pipe(v.string(), v.minLength(1, "Model je obavezan")),
    year: v.pipe(v.number(), v.minValue(1900, "Godina mora biti nakon 1900"), v.maxValue(new Date().getFullYear() + 1, "Godina ne može biti u budućnosti")),
    price: v.pipe(v.number(), v.minValue(1, "Cena mora biti veća od 0")),
    currency: v.picklist(['EUR', 'USD', 'RSD'], "Valuta mora biti EUR, USD ili RSD"),
    mileageKm: v.pipe(v.number(), v.minValue(0, "Kilometraža ne može biti negativna")),
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
    shippingCost: v.pipe(v.number(), v.minValue(0, "Troškovi transporta ne mogu biti negativni")),
    customsTax: v.pipe(v.number(), v.minValue(0, "Carinska taksa ne može biti negativna")),
    importDate: v.pipe(v.string(), v.minLength(1, "Datum uvoza je obavezan")),
    homologationStatus: v.pipe(v.string(), v.minLength(1, "Status homologacije je obavezan")),
    registrationStatus: v.pipe(v.string(), v.minLength(1, "Status registracije je obavezan")),

    // Step 4: Images
    images: v.pipe(
        v.array(v.string(), "Potrebno je minimum 4 slike"),
        v.minLength(4, "Potrebno je minimum 4 slike")
    ),
});

export type typesAddCarCompleteData = v.InferOutput<typeof addCarCompleteSchema>;