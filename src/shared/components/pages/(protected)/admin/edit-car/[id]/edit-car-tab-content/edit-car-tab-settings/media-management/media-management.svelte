<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import ExistingImages from './existing-images.svelte';
    import AdditionalImages from './additional-images.svelte';

    // COMPONENTS
    import { toast } from 'svelte-sonner';

    // CONTEXT
    import { editCarImagesContext } from '@/features/cars/context/cars-context.svelte';

    // ACTIONS
    import { editCarImages } from '@/features/cars/actions/cars-actions';

    // QUERIES
    import { fetchCarById } from '@/features/cars/queries/cars-queries.remote';

    // UTILS
    import { filesToBase64 } from '@/shared/utils/file-utils';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Loader, Plus } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();

    // File input reference
    let fileInput: HTMLInputElement;

    const triggerFileInput = () => {
        fileInput?.click();
    };

    $effect(() => {
        const existingImagesCount = car.images?.length || 0;
        editCarImagesContext.updateValidation(existingImagesCount);
    });

    const handleEditCar = async () => {
        if (!editCarImagesContext.validateImagesForSubmission()) {
            return;
        }

        editCarImagesContext.isSubmitting = true;

        // Convert new images to base64 if any
        const base64Images = editCarImagesContext.newImages.length > 0
            ? await filesToBase64(editCarImagesContext.newImages)
            : [];

        // Prepare data for API
        const carData = {
            carId: car.id,
            newImages: base64Images.length > 0 ? base64Images : undefined,
            removeImageIds: editCarImagesContext.removedImageIds.length > 0 ? editCarImagesContext.removedImageIds : undefined
        };

        const result = await editCarImages(carData);

        if (!result.success) {
            toast.error(result.message);
        } else {
            toast.success(result.message);
            editCarImagesContext.resetChanges();
            await fetchCarById(car.id).refresh();
        }

        editCarImagesContext.isSubmitting = false;
    };
</script>

<Card class={editCarImagesContext.validationError ? "border-red-500 border-2" : ""}>
    <CardHeader>
        <CardTitle class="text-xl">{m['EditCarPage.EditCarTabSettings.MediaManagement.title']()}</CardTitle>
        <CardDescription>{m['EditCarPage.EditCarTabSettings.MediaManagement.description']()}</CardDescription>
        {#if editCarImagesContext.validationError}
            <div class="bg-red-50 border border-red-200 rounded-md p-3 mt-3">
                <p class="text-red-800 text-sm font-medium">{editCarImagesContext.validationError}</p>
            </div>
        {/if}
    </CardHeader>

    <CardContent>
        <div class="space-y-6">
            <!-- Hidden File Input -->
            <input
                bind:this={fileInput}
                type="file"
                accept="image/*"
                multiple
                class="hidden"
                onchange={(event) => editCarImagesContext.handleFileSelect(event)}
            />

            <!-- Image Gallery with Management -->
            <ExistingImages car={car} />

            <!-- Add Images Button -->
            <div class="flex justify-center">
                <Button
                    type="button"
                    variant="outline"
                    onclick={triggerFileInput}
                    class="inline-flex items-center gap-2"
                    disabled={editCarImagesContext.isSubmitting}
                >
                    <Plus class="h-4 w-4" />
                    {m['EditCarPage.EditCarTabSettings.MediaManagement.addImagesButton']()}
                </Button>
            </div>

            <!-- Additionally Added Images Section -->
            {#if editCarImagesContext.newImages.length > 0}
                <AdditionalImages />
            {/if}

            <!-- Action Buttons -->
            {#if editCarImagesContext.hasChanges()}
                <div class="flex justify-end space-x-4 pt-4 border-t">
                    <Button
                        type="button"
                        variant="outline"
                        onclick={editCarImagesContext.resetChanges}
                        disabled={editCarImagesContext.isSubmitting}
                    >
                        {m['EditCarPage.EditCarTabSettings.MediaManagement.cancelButton']()}
                    </Button>

                    <Button
                        onclick={handleEditCar}
                        disabled={!!editCarImagesContext.validationError || editCarImagesContext.isSubmitting}
                        class="min-w-[120px]"
                    >
                        {#if editCarImagesContext.isSubmitting}
                            <Loader class="mr-2 h-4 w-4 animate-spin" />
                        {/if}
                        {m['EditCarPage.EditCarTabSettings.MediaManagement.saveChangesButton']()}
                    </Button>
                </div>
            {/if}
        </div>
    </CardContent>
</Card>