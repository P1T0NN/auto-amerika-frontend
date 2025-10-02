
<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

    // CONTEXT
    import { editCarImagesContext } from "@/features/cars/context/cars-context.svelte";

    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import ImageGallery from "@/shared/components/ui/image-gallery/image-gallery.svelte";

    // TYPES
    import type { typesCar } from "@/features/cars/types/types";

    let { car }: { car: typesCar } = $props();

    // Computed values for cleaner prop passing
    const imageUrls = $derived(car.images?.map(img => img.imageUrl) || []);
    const imageIds = $derived(car.images?.map(img => img.id) || []);
    const removedIndexes = $derived(car.images?.map((img, index) =>
        editCarImagesContext.removedImageIds.includes(img.id) ? index : -1
    ).filter(index => index !== -1) || []);
</script>

<div class="space-y-4">
    <Label class="text-base font-medium">
        {m['EditCarPage.EditCarTabSettings.MediaManagement.existingImages']()} ({car.images?.filter(img => !editCarImagesContext.removedImageIds.includes(img.id)).length})
        {#if editCarImagesContext.removedImageIds.length > 0}
            <span class="text-orange-600 text-sm font-normal">
                - {editCarImagesContext.removedImageIds.length} {m['EditCarPage.EditCarTabSettings.MediaManagement.removedImages']()}
            </span>
        {/if}
    </Label>

    <ImageGallery
        images={imageUrls}
        imageIds={imageIds}
        removedIndexes={removedIndexes}
        onRemove={(imageId) => editCarImagesContext.removeExistingImage(imageId)}
        onRestore={(imageId) => editCarImagesContext.restoreExistingImage(imageId)}
    />
</div>