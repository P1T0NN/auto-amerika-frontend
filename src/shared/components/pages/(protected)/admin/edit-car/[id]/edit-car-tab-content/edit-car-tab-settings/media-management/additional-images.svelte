<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";

    // CONTEXT
    import { editCarImagesContext } from "@/features/cars/context/cars-context.svelte";

    // LUCIDE ICONS
    import { X } from "@lucide/svelte";
</script>

<div class="space-y-4">
    <Label class="text-base font-medium">
        Dodatno dodane slike ({editCarImagesContext.newImages.length})
        <span class="text-green-600 text-sm font-normal">- za dodavanje</span>
    </Label>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {#each editCarImagesContext.newImages as image, index}
            <div class="relative group">
                <div class="aspect-square overflow-hidden rounded-lg border-green-200 border-2">
                    <img
                        src={editCarImagesContext.newImagePreviews[index]}
                        alt="Nova slika {index + 1}"
                        class="h-full w-full object-cover"
                    />
                </div>

                <button
                    type="button"
                    onclick={() => editCarImagesContext.removeNewImage(index)}
                    class="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center transition-colors"
                    aria-label="Ukloni novu sliku"
                >
                    <X class="h-4 w-4" />
                </button>

                <div class="absolute bottom-0 left-0 right-0 bg-green-500 bg-opacity-75 text-white text-xs p-2 rounded-b-lg">
                    Nova: {image.name}
                </div>
            </div>
        {/each}
    </div>
</div>