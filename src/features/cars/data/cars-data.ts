// TYPES
import type {
    typesBuyer,
    typesCarHomologationStatusType,
    typesCarRegistrationStatusType,
    typesCarFuelType,
    typesCarTransmissionType,
    typesCarDrivetrainType,
    typesCarInteriorMaterialType,
    typesOriginCountry,
    typesPurchaseSource
} from "../types/types"

export const featuredCars = [
    {
        id: 1,
        brand: 'Ford',
        model: 'Mustang GT',
        year: 2023,
        price: '€45,000',
        image: '/placeholder.svg?height=300&width=400',
        mileage: '15,000 km',
        fuel: 'Benzin'
    },
    {
        id: 2,
        brand: 'Chevrolet',
        model: 'Camaro SS',
        year: 2022,
        price: '€42,000',
        image: '/placeholder.svg?height=300&width=400',
        mileage: '22,000 km',
        fuel: 'Benzin'
    },
    {
        id: 3,
        brand: 'Dodge',
        model: 'Challenger SRT',
        year: 2023,
        price: '€48,000',
        image: '/placeholder.svg?height=300&width=400',
        mileage: '8,000 km',
        fuel: 'Benzin'
    }
];

export const brands: { value: string; text: string; name: string; logo: string }[] = [
    { value: 'audi', text: 'Audi', name: 'Audi', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'bmw', text: 'BMW', name: 'BMW', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'ford', text: 'Ford', name: 'Ford', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'honda', text: 'Honda', name: 'Honda', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'mercedes', text: 'Mercedes-Benz', name: 'Mercedes-Benz', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'nissan', text: 'Nissan', name: 'Nissan', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'porsche', text: 'Porsche', name: 'Porsche', logo: '/placeholder.svg?height=60&width=120' },
    { value: 'toyota', text: 'Toyota', name: 'Toyota', logo: '/placeholder.svg?height=60&width=120' }
];

export const bodyTypes: { value: string; text: string }[] = [
    { value: 'convertible', text: 'Convertible' },
    { value: 'coupe', text: 'Coupe' },
    { value: 'hatchback', text: 'Hatchback' },
    { value: 'sedan', text: 'Sedan' },
    { value: 'suv', text: 'SUV' },
    { value: 'truck', text: 'Truck' },
    { value: 'van', text: 'Van' },
    { value: 'wagon', text: 'Wagon' }
];

export const colors: { value: string; text: string }[] = [
    { value: 'black', text: 'Black' },
    { value: 'white', text: 'White' },
    { value: 'gray', text: 'Gray' },
    { value: 'red', text: 'Red' },
    { value: 'blue', text: 'Blue' },
    { value: 'green', text: 'Green' },
];

export const fuelTypes: { value: typesCarFuelType; text: string }[] = [
    { value: 'gasoline', text: 'Benzin' },
    { value: 'diesel', text: 'Dizel' },
    { value: 'hybrid', text: 'Hibrid' },
    { value: 'electric', text: 'Električni' },
    { value: 'flex_fuel', text: 'Flex Fuel' }
];

export const transmissionTypes: { value: typesCarTransmissionType; text: string }[] = [
    { value: 'automatic', text: 'Automatski' },
    { value: 'manual', text: 'Manuelni' },
    { value: 'cvt', text: 'CVT' },
    { value: 'semi_automatic', text: 'Poluautomatski' }
];

export const drivetrainTypes: { value: typesCarDrivetrainType; text: string }[] = [
    { value: 'fwd', text: 'FWD' },
    { value: 'rwd', text: 'RWD' },
    { value: 'awd', text: 'AWD' },
    { value: '4wd', text: '4WD' }
];

export const interiorMaterials: { value: typesCarInteriorMaterialType; text: string }[] = [
    { value: 'fabric', text: 'Tkanina' },
    { value: 'leather', text: 'Koža' },
    { value: 'synthetic_leather', text: 'Veštačka koža' },
    { value: 'alcantara', text: 'Alcantara' },
    { value: 'mixed', text: 'Kombinovano' }
];

export const homologationStatusOptions: { value: typesCarHomologationStatusType; text: string }[] = [
    { value: 'completed', text: 'Završena' },
    { value: 'in_progress', text: 'U toku' },
    { value: 'not_started', text: 'Nije započeta' },
    { value: 'not_required', text: 'Nije potrebna' }
];

export const registrationStatusOptions: { value: typesCarRegistrationStatusType; text: string }[] = [
    { value: 'registered', text: 'Registrovano' },
    { value: 'pending', text: 'Na čekanju' },
    { value: 'not_registered', text: 'Nije registrovano' }
];

export const titleStatusOptions = [
    { value: 'clean', text: 'Čist' },
    { value: 'salvage', text: 'Oštećen' },
    { value: 'rebuilt', text: 'Obnovljen' },
    { value: 'lemon', text: 'Lemon' },
    { value: 'flood', text: 'Poplavljeno' }
];

export const accidentsOptions = [
    { value: 'none', text: 'Bez nesreća' },
    { value: 'minor', text: 'Manje nesreće' },
    { value: 'major', text: 'Veće nesreće' },
    { value: 'unknown', text: 'Nepoznato' }
];

export const originCountries: { value: typesOriginCountry; text: string }[] = [
    { value: 'usa', text: 'USA' }
];

export const purchaseSources: { value: typesPurchaseSource; text: string }[] = [
    { value: 'private_seller', text: 'Private Seller' },
    { value: 'dealer', text: 'Dealer' },
    { value: 'auction', text: 'Auction' }
];

export const dummyBuyers: typesBuyer[] = [
    {
        id: 1,
        name: "Marko Petrović",
        phone: "+381 64 123 4567",
        email: "marko.petrovic@email.com",
        address: "Knez Mihailova 15, Beograd",
        notes: "Redovan kupac, plaća odmah",
    },
    {
        id: 2,
        name: "Ana Jovanović",
        phone: "+381 63 987 6543",
        email: "ana.jovanovic@email.com",
        address: "Bulevar Oslobođenja 25, Novi Sad",
        notes: "Interesuje je za luksuzne automobile",
    },
    {
        id: 3,
        name: "Stefan Nikolić",
        phone: "+381 65 555 1234",
        email: "stefan.nikolic@email.com",
        address: "Cara Dušana 8, Niš",
        notes: "Kupuje za firmu",
    },
]