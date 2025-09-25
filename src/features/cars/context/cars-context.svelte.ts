export class AddCarClass {
    // Form submission state
    isSubmitting = $state(false);

    // Reset form
    resetForm() {
        this.isSubmitting = false;
    }
}

// Create and export context
export const addCarContext = new AddCarClass();