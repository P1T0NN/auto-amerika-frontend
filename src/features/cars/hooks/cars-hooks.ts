import { addCarContext } from "@/features/cars/context/cars-context.svelte";

export const createImageHandlers = (
    getPreviewUrls: () => string[],
    setPreviewUrls: (urls: string[]) => void,
    getFileInput: () => HTMLInputElement | undefined
) => {
    const handleFileSelect = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files) {
            const newFiles = Array.from(target.files);

            // Validate new files using context
            const fileValidationError = addCarContext.validateFiles(newFiles);
            if (fileValidationError) {
                addCarContext.imageValidationError = fileValidationError;
                target.value = ''; // Clear invalid files from input
                return;
            }

            addCarContext.selectedImages = [...addCarContext.selectedImages, ...newFiles];

            // Create preview URLs for new files
            const currentPreviewUrls = getPreviewUrls();
            const newUrls = [...currentPreviewUrls];
            newFiles.forEach(file => {
                const url = URL.createObjectURL(file);
                newUrls.push(url);
            });
            setPreviewUrls(newUrls);

            // Clear any previous validation errors
            addCarContext.imageValidationError = "";

            // Validate total count using context
            const countValidationError = addCarContext.validateImageCount();
            if (countValidationError) {
                addCarContext.imageValidationError = countValidationError;
            }
        }
    };

    const removeImage = (index: number) => {
        const currentPreviewUrls = getPreviewUrls();

        // Revoke the object URL to free memory
        URL.revokeObjectURL(currentPreviewUrls[index]);

        addCarContext.selectedImages = addCarContext.selectedImages.filter((_, i) => i !== index);
        setPreviewUrls(currentPreviewUrls.filter((_, i) => i !== index));

        // Re-validate after removal using context
        const countValidationError = addCarContext.validateImageCount();
        addCarContext.imageValidationError = countValidationError || "";
    };

    const triggerFileInput = () => {
        const fileInput = getFileInput();
        fileInput?.click();
    };

    return {
        handleFileSelect,
        removeImage,
        triggerFileInput
    };
};