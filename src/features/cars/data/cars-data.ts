// LIBRARIES
import { m } from "@/shared/lib/paraglide/messages"

// TYPES
import type {
    typesCarHomologationStatusType,
    typesCarRegistrationStatusType,
    typesCarFuelType,
    typesCarTransmissionType,
    typesCarDrivetrainType,
    typesCarInteriorMaterialType,
    typesOriginCountry,
    typesPurchaseSource
} from "../types/types"

// SVGS
import ConvertibleCar from "@/shared/svgs/convertible-car.svelte"
import CoupeCar from "@/shared/svgs/coupe-car.svelte"
import HatchbackCar from "@/shared/svgs/hatchback-car.svelte"
import SedanCar from "@/shared/svgs/sedan-car.svelte"
import SuvCar from "@/shared/svgs/suv-car.svelte"
import TruckCar from "@/shared/svgs/truck-car.svelte"
import VanCar from "@/shared/svgs/van-car.svelte"
import WagonCar from "@/shared/svgs/wagon-car.svelte"

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

export const carTypes = [
    { name: 'Convertibles', icon: ConvertibleCar, value: 'convertible', text: m["CarTypes.convertibles"]() },
    { name: 'Coupes', icon: CoupeCar, value: 'coupe', text: m["CarTypes.coupes"]() },
    { name: 'Hatchbacks', icon: HatchbackCar, value: 'hatchback', text: m["CarTypes.hatchbacks"]() },
    { name: 'Sedans', icon: SedanCar, value: 'sedan', text: m["CarTypes.sedans"]() },
    { name: 'SUVs', icon: SuvCar, value: 'suv', text: m["CarTypes.suvs"]() },
    { name: 'Vans', icon: VanCar, value: 'van', text: m["CarTypes.vans"]() },
    { name: 'Trucks', icon: TruckCar, value: 'truck', text: m["CarTypes.trucks"]() },
    { name: 'Wagons', icon: WagonCar, value: 'wagon', text: m["CarTypes.wagons"]() }
];

export const colors: { value: string; text: string }[] = [
    { value: 'black', text: m["CarColors.black"]() },
    { value: 'white', text: m["CarColors.white"]() },
    { value: 'gray', text: m["CarColors.gray"]() },
    { value: 'red', text: m["CarColors.red"]() },
    { value: 'blue', text: m["CarColors.blue"]() },
    { value: 'green', text: m["CarColors.green"]() },
];

export const fuelTypes: { value: typesCarFuelType; text: string }[] = [
    { value: 'gasoline', text: m["CarFuelTypes.gasoline"]() },
    { value: 'diesel', text: m["CarFuelTypes.diesel"]() },
    { value: 'hybrid', text: m["CarFuelTypes.hybrid"]() },
    { value: 'electric', text: m["CarFuelTypes.electric"]() },
    { value: 'flex_fuel', text: m["CarFuelTypes.flexFuel"]() }
];

export const transmissionTypes: { value: typesCarTransmissionType; text: string }[] = [
    { value: 'automatic', text: m["CarTransmissionTypes.automatic"]() },
    { value: 'manual', text: m["CarTransmissionTypes.manual"]() },
    { value: 'cvt', text: m["CarTransmissionTypes.cvt"]() },
    { value: 'semi_automatic', text: m["CarTransmissionTypes.semiAutomatic"]() }
];

export const drivetrainTypes: { value: typesCarDrivetrainType; text: string }[] = [
    { value: 'fwd', text: m["CarDrivetrainTypes.fwd"]() },
    { value: 'rwd', text: m["CarDrivetrainTypes.rwd"]() },
    { value: 'awd', text: m["CarDrivetrainTypes.awd"]() },
    { value: '4wd', text: m["CarDrivetrainTypes.4wd"]() }
];

export const interiorMaterials: { value: typesCarInteriorMaterialType; text: string }[] = [
    { value: 'fabric', text: m["CarInteriorMaterials.fabric"]() },
    { value: 'leather', text: m["CarInteriorMaterials.leather"]() },
    { value: 'synthetic_leather', text: m["CarInteriorMaterials.syntheticLeather"]() },
    { value: 'alcantara', text: m["CarInteriorMaterials.alcantara"]() },
    { value: 'mixed', text: m["CarInteriorMaterials.mixed"]() }
];

export const homologationStatusOptions: { value: typesCarHomologationStatusType; text: string }[] = [
    { value: 'completed', text: m["CarHomologationStatus.completed"]() },
    { value: 'in_progress', text: m["CarHomologationStatus.inProgress"]() },
    { value: 'not_started', text: m["CarHomologationStatus.notStarted"]() },
    { value: 'not_required', text: m["CarHomologationStatus.notRequired"]() }
];

export const registrationStatusOptions: { value: typesCarRegistrationStatusType; text: string }[] = [
    { value: 'registered', text: m["CarRegistrationStatus.registered"]() },
    { value: 'pending', text: m["CarRegistrationStatus.pending"]() },
    { value: 'not_registered', text: m["CarRegistrationStatus.notRegistered"]() }
];

export const titleStatusOptions = [
    { value: 'clean', text: m["CarTitleStatus.clean"]() },
    { value: 'salvage', text: m["CarTitleStatus.salvage"]() },
    { value: 'rebuilt', text: m["CarTitleStatus.rebuilt"]() },
    { value: 'lemon', text: m["CarTitleStatus.lemon"]() },
    { value: 'flood', text: m["CarTitleStatus.flood"]() }
];

export const accidentsOptions = [
    { value: 'none', text: m["CarAccidents.none"]() },
    { value: 'minor', text: m["CarAccidents.minor"]() },
    { value: 'major', text: m["CarAccidents.major"]() },
    { value: 'unknown', text: m["CarAccidents.unknown"]() }
];

export const originCountries: { value: typesOriginCountry; text: string }[] = [
    { value: 'usa', text: m["CarOriginCountries.usa"]() }
];

export const purchaseSources: { value: typesPurchaseSource; text: string }[] = [
    { value: 'private_seller', text: m["CarPurchaseSources.privateSeller"]() },
    { value: 'dealer', text: m["CarPurchaseSources.dealer"]() },
    { value: 'auction', text: m["CarPurchaseSources.auction"]() }
];