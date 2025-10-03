<script lang="ts">
    // SVELTEKIT IMPORTS
    import { goto } from "$app/navigation";

    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from "@/shared/config";

    // COMPONENTS
    import { Button } from "@/shared/components/ui/button";
    import AddCarBasicInformation from "./add-car-basic-information.svelte";
    import AddCarVehicleHistory from "./add-car-vehicle-history.svelte";
	import AddCarImportInformation from "./add-car-import-information.svelte";
    import AddCarImages from "./add-car-images.svelte";
    import { toast } from "svelte-sonner";

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    // ACTIONS
    import { addCar } from "@/features/cars/actions/cars-actions";

    // UTILS
    import { validateForm } from "@/shared/utils/validation-utils";
    import { filesToBase64 } from "@/shared/utils/file-utils";

    // SCHEMAS
    import { addCarCompleteSchema } from "@/features/cars/schemas/cars-schemas";

    // LUCIDE ICONS
    import { Loader } from "@lucide/svelte";

    const handleAddCar = async () => {
        // Convert images to base64 first
        const base64Images = await filesToBase64(addCarContext.selectedImages);

        // Create validation data with proper types
        const validationData = {
            ...addCarContext.formData,
            year: Number(addCarContext.formData.year),
            price: Number(addCarContext.formData.price),
            mileageKm: Number(addCarContext.formData.mileageKm),
            powerHp: Number(addCarContext.formData.powerHp),
            owners: Number(addCarContext.formData.owners),
            images: base64Images
        };

        if (!validateForm(addCarCompleteSchema, validationData, (newErrors) => addCarContext.errors = newErrors)) {
            return;
        }

        if (!addCarContext.validateImagesForSubmission()) {
            return;
        }

        addCarContext.isSubmitting = true;

        // Prepare data for API (already has proper types from validation)
        const carData = {
            ...validationData,
            status: 'available'
        };

        const result = await addCar(carData);

        if (!result.success) {
            toast.error(result.message);
            addCarContext.isSubmitting = false;
        } else {
            toast.success(result.message);
            addCarContext.reset();
            goto(ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE);
            addCarContext.isSubmitting = false;
        }
    };
</script>


<div class="space-y-8">
    <AddCarBasicInformation />

    <AddCarVehicleHistory />

    <AddCarImportInformation />

    <AddCarImages />

    <div class="flex justify-end">
        <Button
            type="submit"
            class="bg-primary hover:bg-primary/90"
            disabled={addCarContext.isSubmitting}
            onclick={handleAddCar}
        >
            {#if addCarContext.isSubmitting}
                <Loader class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            {m['AddCarPage.AddCarForm.submitButton']()}
        </Button>
    </div>
</div>