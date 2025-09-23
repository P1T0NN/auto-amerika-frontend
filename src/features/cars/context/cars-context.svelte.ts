// TYPES
import type { typesCar, typesCarHistory, typesCarImport } from '@/features/cars/types/types';

// SCHEMAS
import {
    addCarStep1Schema,
    addCarStep2Schema,
    addCarStep3Schema,
    addCarStep4Schema,
    addCarStep5Schema
} from '@/features/cars/schemas/cars-schemas';

// UTILS
import { validateWithZod } from '@/shared/utils/validation-utils';

export class AddCarClass {
    // Form state
    currentStep = $state(1);
    totalSteps = 5;

    // Car data
    carData = $state<Partial<typesCar>>({
        vin: '',
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        price: 0,
        currency: 'EUR',
        mileageKm: 0,
        mileageMiles: 0,
        fuel: '',
        transmission: '',
        engine: '',
        powerHp: 0,
        drivetrain: '',
        colorExterior: '',
        colorInterior: '',
        interiorMaterial: '',
        location: '',
        status: 'available',
        description: ''
    });

    // Specifications
    specifications = $state<Array<{ specName: string; specValue: string }>>([
        { specName: '', specValue: '' }
    ]);

    // History data
    historyData = $state<Partial<typesCarHistory>>({
        titleStatus: null,
        firstRegistration: null,
        owners: null,
        serviceHistory: null,
        accidents: null
    });

    // Import data
    importData = $state<Partial<typesCarImport>>({
        originCountry: 'USA',
        purchaseSource: null,
        purchaseDate: null,
        usPurchasePrice: null,
        shippingCost: null,
        customsTax: null,
        importDate: null,
        homologationStatus: null,
        registrationStatus: null
    });

    // Images
    imageFiles = $state<File[]>([]);
    imageUrls = $state<string[]>([]);

    // Features
    selectedFeatures = $state<string[]>([]);
    availableFeatures = $state([
        'Klima uređaj',
        'Grejanje sedišta',
        'Kožni enterier',
        'Navigacija',
        'Bluetooth',
        'USB portovi',
        'Rezervna kamera',
        'Senzori za parkiranje',
        'Tempomat',
        'Električni podizači stakala',
        'Centralno zaključavanje',
        'ABS',
        'ESP',
        'Airbag',
        'Xenon svetla',
        'LED svetla'
    ]);

    // Form validation
    isSubmitting = $state(false);
    errors = $state<Record<string, string | undefined>>({});

    // Navigation methods
    nextStep() {
        if (this.validateCurrentStep()) {
            this.currentStep = Math.min(this.currentStep + 1, this.totalSteps);
        }
    }

    prevStep() {
        this.currentStep = Math.max(this.currentStep - 1, 1);
    }

    goToStep(step: number) {
        this.currentStep = step;
    }

    // Validation
    validateCurrentStep(): boolean {
        this.errors = {};

        switch (this.currentStep) {
            case 1: {
                const validation = validateWithZod(addCarStep1Schema, this.carData as any);
                this.errors = validation.errors;
                return validation.isValid;
            }
            case 2: {
                const step2Data = {
                    specifications: this.specifications,
                    selectedFeatures: this.selectedFeatures,
                    availableFeatures: this.availableFeatures
                };
                const validation = validateWithZod(addCarStep2Schema, step2Data);
                this.errors = validation.errors;
                return validation.isValid;
            }
            case 3: {
                const validation = validateWithZod(addCarStep3Schema, this.historyData as any);
                this.errors = validation.errors;
                return validation.isValid;
            }
            case 4: {
                const validation = validateWithZod(addCarStep4Schema, this.importData as any);
                this.errors = validation.errors;
                return validation.isValid;
            }
            case 5: {
                const step5Data = {
                    imageFiles: this.imageFiles,
                    imageUrls: this.imageUrls
                };
                const validation = validateWithZod(addCarStep5Schema, step5Data);
                this.errors = validation.errors;
                return validation.isValid;
            }
            default:
                return true;
        }
    }

    // Specifications management
    addSpecification() {
        this.specifications.push({ specName: '', specValue: '' });
    }

    removeSpecification(index: number) {
        this.specifications.splice(index, 1);
    }

    // Image handling
    handleImageUpload(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            const files = Array.from(target.files);
            this.imageFiles.push(...files);

            // Create preview URLs
            files.forEach((file) => {
                const url = URL.createObjectURL(file);
                this.imageUrls.push(url);
            });
        }
    }

    removeImage(index: number) {
        URL.revokeObjectURL(this.imageUrls[index]);
        this.imageUrls.splice(index, 1);
        this.imageFiles.splice(index, 1);
    }

    // Feature management
    toggleFeature(feature: string) {
        const index = this.selectedFeatures.indexOf(feature);
        if (index > -1) {
            this.selectedFeatures.splice(index, 1);
        } else {
            this.selectedFeatures.push(feature);
        }
    }


    // Reset form
    resetForm() {
        this.currentStep = 1;
        this.carData = {
            vin: '',
            brand: '',
            model: '',
            year: new Date().getFullYear(),
            price: 0,
            currency: 'EUR',
            status: 'available'
        };
        this.specifications = [{ specName: '', specValue: '' }];
        this.historyData = {};
        this.importData = { originCountry: 'USA' };
        this.selectedFeatures = [];
        this.imageFiles = [];
        this.imageUrls.forEach((url) => URL.revokeObjectURL(url));
        this.imageUrls = [];
        this.errors = {};
    }
}

// Create and export context
export const addCarContext = new AddCarClass();