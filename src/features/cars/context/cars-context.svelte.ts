// LIBRARIES
import { m } from "@/shared/lib/paraglide/messages";

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
        carType: "",

        // Step 2: History
        titleStatus: "",
        firstRegistration: "",
        owners: "",
        accidents: "",
        serviceHistory: "",

        // Step 3: Import Info
        originCountry: "",
        purchaseSource: "",
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
                return m["ValidationMessages.CarsContext.INVALID_FILE_TYPE"]({ fileName: file.name });
            }
        }

        // Check file sizes
        for (const file of files) {
            if (file.size > this.MAX_FILE_SIZE) {
                return m["ValidationMessages.CarsContext.INVALID_FILE_SIZE"]({ fileName: file.name });
            }
        }

        return null;
    }

    validateImageCount(): string | null {
        if (this.selectedImages.length < this.MINIMUM_IMAGES) {
            return m["ValidationMessages.CarsContext.INVALID_IMAGE_COUNT"]({ minimum: this.MINIMUM_IMAGES, count: this.selectedImages.length });
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
            carType: "",

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

export class EditCarInformationClass {
    isSubmitting = $state(false);

    errors = $state<Record<string, string>>({});
}

export class EditCarHistoryClass {
    isSubmitting = $state(false);

    errors = $state<Record<string, string>>({});
}

export class EditCarImportClass {
    isSubmitting = $state(false);

    errors = $state<Record<string, string>>({});
}

export class EditCarImagesClass {
    isSubmitting = $state(false);

    // Image state
    newImages = $state<File[]>([]);
    newImagePreviews = $state<string[]>([]);
    removedImageIds = $state<number[]>([]);
    validationError = $state<string>("");

    // Image validation constants
    private readonly MINIMUM_IMAGES = 4;
    private readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    private readonly ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    // File handling methods
    handleFileSelect(event: Event) {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            const files = Array.from(target.files);

            // Validate files first
            const fileError = this.validateFiles(files);
            if (fileError) {
                this.validationError = fileError;
                target.value = '';
                return;
            }

            // Add to new images
            this.newImages = [...this.newImages, ...files];

            // Create preview URLs
            files.forEach(file => {
                const url = URL.createObjectURL(file);
                this.newImagePreviews = [...this.newImagePreviews, url];
            });

            // Clear input
            target.value = '';
            this.validationError = "";
        }
    }

    removeExistingImage(imageId: number) {
        if (!this.removedImageIds.includes(imageId)) {
            this.removedImageIds = [...this.removedImageIds, imageId];
        }
    }

    restoreExistingImage(imageId: number) {
        this.removedImageIds = this.removedImageIds.filter(id => id !== imageId);
    }

    removeNewImage(index: number) {
        // Revoke URL to free memory
        if (this.newImagePreviews[index]) {
            URL.revokeObjectURL(this.newImagePreviews[index]);
        }

        // Remove from arrays
        this.newImages = this.newImages.filter((_, i) => i !== index);
        this.newImagePreviews = this.newImagePreviews.filter((_, i) => i !== index);
    }

    resetChanges() {
        // Revoke all preview URLs
        this.newImagePreviews.forEach(url => URL.revokeObjectURL(url));

        this.newImages = [];
        this.newImagePreviews = [];
        this.removedImageIds = [];
        this.validationError = "";
    }

    // Validation methods
    validateFiles(files: File[]): string | null {
        // Check file types
        for (const file of files) {
            if (!this.ALLOWED_TYPES.includes(file.type)) {
                return m["ValidationMessages.CarsContext.INVALID_FILE_TYPE"]({ fileName: file.name });
            }
        }

        // Check file sizes
        for (const file of files) {
            if (file.size > this.MAX_FILE_SIZE) {
                return m["ValidationMessages.CarsContext.INVALID_FILE_SIZE"]({ fileName: file.name });
            }
        }

        return null;
    }

    validateTotalImageCount(existingImagesCount: number): string | null {
        const remainingExisting = existingImagesCount - this.removedImageIds.length;
        const totalImages = remainingExisting + this.newImages.length;

        if (totalImages < this.MINIMUM_IMAGES) {
            return m["ValidationMessages.CarsContext.INVALID_IMAGE_COUNT"]({ minimum: this.MINIMUM_IMAGES, count: totalImages });
        }
        return null;
    }

    updateValidation(existingImagesCount: number) {
        if (this.newImages.length > 0 || this.removedImageIds.length > 0) {
            const countError = this.validateTotalImageCount(existingImagesCount);
            if (countError) {
                this.validationError = countError;
            } else if (this.validationError.includes("Minimum")) {
                this.validationError = "";
            }
        }
    }

    hasChanges(): boolean {
        return this.newImages.length > 0 || this.removedImageIds.length > 0;
    }

    validateImagesForSubmission(): boolean {
        // For edit mode, we don't require any specific minimum since we're just making changes
        // The validation is handled by the backend based on remaining images after removal

        // Check if there are any changes to submit
        if (!this.hasChanges()) {
            this.validationError = m["ValidationMessages.CarsContext.NO_CHANGES"]();
            return false;
        }

        // If there are new images, validate them
        if (this.newImages.length > 0) {
            const fileError = this.validateFiles(this.newImages);
            if (fileError) {
                this.validationError = fileError;
                return false;
            }
        }

        // Clear any previous validation errors
        this.validationError = "";
        return true;
    }
}

export class AddUnavailableCarClass {
    // Form submission state
    isSubmitting = $state(false);

    // Image validation state
    selectedImage = $state<File | null>(null);
    imagePreview = $state<string>("");
    imageValidationError = $state<string>("");

    // Form validation errors
    errors = $state<Record<string, string>>({});

    // Form data state
    formData = $state({
        brand: "",
        model: "",
        year: "",
        carType: "",
        status: "unavailable" as const
    });

    // Image validation constants
    private readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    private readonly ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    // Image validation methods
    validateFile(file: File): string | null {
        // Check file type
        if (!this.ALLOWED_TYPES.includes(file.type)) {
            return m["ValidationMessages.CarsSchemas.AddUnavailableCarSchema.INVALID_FILE_TYPE"]({ fileName: file.name });
        }

        // Check file size
        if (file.size > this.MAX_FILE_SIZE) {
            return m["ValidationMessages.CarsSchemas.AddUnavailableCarSchema.INVALID_FILE_SIZE"]({ fileName: file.name });
        }

        return null;
    }

    handleImageSelect = (event: Event) => {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];

        if (!file) return;

        // Validate file
        const error = this.validateFile(file);
        if (error) {
            this.imageValidationError = error;
            input.value = '';
            return;
        }

        this.imageValidationError = "";
        this.selectedImage = file;

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            this.imagePreview = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }

    removeImage = () => {
        this.selectedImage = null;
        this.imagePreview = "";
        this.imageValidationError = "";
    }

    validateImageForSubmission(): boolean {
        if (!this.selectedImage) {
            this.imageValidationError = m["ValidationMessages.CarsSchemas.AddUnavailableCarSchema.IMAGE_REQUIRED"]();
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
        this.selectedImage = null;
        this.imagePreview = "";
        this.imageValidationError = "";
        this.errors = {};

        // Reset form data
        this.formData = {
            brand: "",
            model: "",
            year: "",
            carType: "",
            status: "unavailable"
        };
    }
}

// Create and export context
export const addCarContext = new AddCarClass();
export const editCarInformationContext = new EditCarInformationClass();
export const editCarHistoryContext = new EditCarHistoryClass();
export const editCarImportContext = new EditCarImportClass();
export const editCarImagesContext = new EditCarImagesClass();
export const addUnavailableCarContext = new AddUnavailableCarClass();
