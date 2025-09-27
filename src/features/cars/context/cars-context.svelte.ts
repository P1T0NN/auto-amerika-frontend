export class AddCarClass {
    // Form submission state
    isSubmitting = $state(false);

    // Image validation state
    selectedImages = $state<File[]>([]);
    imageValidationError = $state<string>("");

    // Form validation errors
    errors = $state<Record<string, string>>({});

    // Form data state
    formData = $state({
        // Step 1: Basic Car Info
        vin: "",
        brand: "",
        model: "",
        year: "",
        price: "",
        currency: "EUR" as "EUR" | "USD" | "RSD",
        mileageKm: "",
        fuel: "",
        transmission: "",
        engine: "",
        powerHp: "",
        drivetrain: "",
        colorExterior: "",
        colorInterior: "",
        interiorMaterial: "",
        location: "",
        description: "",

        // Step 2: History
        titleStatus: "",
        firstRegistration: "",
        owners: "",
        accidents: "",
        serviceHistory: "",

        // Step 3: Import Info
        originCountry: "",
        purchaseSource: "",
        purchaseDate: "",
        usPurchasePrice: "",
        shippingCost: "",
        customsTax: "",
        importDate: "",
        homologationStatus: "",
        registrationStatus: "",
    });

    // Image validation constants
    private readonly MINIMUM_IMAGES = 4;
    private readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    private readonly ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    // Image validation methods
    validateFiles(files: File[]): string | null {
        // Check file types
        for (const file of files) {
            if (!this.ALLOWED_TYPES.includes(file.type)) {
                return `Fajl "${file.name}" nije podržan format. Dozvoljen je samo JPG, PNG i WebP.`;
            }
        }

        // Check file sizes
        for (const file of files) {
            if (file.size > this.MAX_FILE_SIZE) {
                return `Fajl "${file.name}" je prevelik. Maksimalna veličina je 5MB.`;
            }
        }

        return null;
    }

    validateImageCount(): string | null {
        if (this.selectedImages.length < this.MINIMUM_IMAGES) {
            return `Potrebno je minimum ${this.MINIMUM_IMAGES} slika. Trenutno imate ${this.selectedImages.length}.`;
        }
        return null;
    }

    validateImagesForSubmission(): boolean {
        const countError = this.validateImageCount();
        if (countError) {
            this.imageValidationError = countError;
            return false;
        }
        this.imageValidationError = "";
        return true;
    }

    // Clear validation errors
    clearErrors() {
        this.errors = {};
    }

    // Set validation error for a field
    setError(field: string, message: string) {
        this.errors = { ...this.errors, [field]: message };
    }

    // Reset form
    reset() {
        this.isSubmitting = false;
        this.selectedImages = [];
        this.imageValidationError = "";
        this.errors = {};

        // Reset form data
        this.formData = {
            // Step 1: Basic Car Info
            vin: "",
            brand: "",
            model: "",
            year: "",
            price: "",
            currency: "EUR",
            mileageKm: "",
            fuel: "",
            transmission: "",
            engine: "",
            powerHp: "",
            drivetrain: "",
            colorExterior: "",
            colorInterior: "",
            interiorMaterial: "",
            location: "",
            description: "",

            // Step 2: History
            titleStatus: "",
            firstRegistration: "",
            owners: "",
            accidents: "",
            serviceHistory: "",

            // Step 3: Import Info
            originCountry: "",
            purchaseSource: "",
            purchaseDate: "",
            usPurchasePrice: "",
            shippingCost: "",
            customsTax: "",
            importDate: "",
            homologationStatus: "",
            registrationStatus: "",
        };
    }
}

// Create and export context
export const addCarContext = new AddCarClass();