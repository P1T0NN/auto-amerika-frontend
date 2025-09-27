<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Button } from "@/shared/components/ui/button";

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    // HOOKS
    import { createImageHandlers } from "@/features/cars/hooks/cars-hooks";

    // LUCIDE ICONS
    import { X, Upload, Image as ImageIcon } from "@lucide/svelte";

    let previewUrls = $state<string[]>([]);
    let fileInput: HTMLInputElement;

    const MINIMUM_IMAGES = 4;

    const { handleFileSelect, removeImage, triggerFileInput } = createImageHandlers(
        () => previewUrls,
        (urls) => previewUrls = urls,
        () => fileInput
    );
</script>

<Card class={addCarContext.imageValidationError ? "border-red-500 border-2" : ""}>
    <CardHeader>
        <CardTitle>Slike vozila</CardTitle>
        {#if addCarContext.imageValidationError}
            <div class="bg-red-50 border border-red-200 rounded-md p-3 mt-3">
                <p class="text-red-800 text-sm font-medium">{addCarContext.imageValidationError}</p>
            </div>
        {/if}
    </CardHeader>
    <CardContent>
        <div class="space-y-6">
            <!-- File Input (Hidden) -->
            <input
                bind:this={fileInput}
                type="file"
                accept="image/*"
                multiple
                class="hidden"
                onchange={handleFileSelect}
            />

            <!-- Upload Button -->
            <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors">
                <div class="text-center">
                    <Upload class="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p class="text-lg font-medium text-gray-900 mb-2">Dodajte slike vozila</p>
                    <p class="text-sm text-gray-500 mb-2">Izaberite jednu ili više slika (JPG, PNG, WebP)</p>
                    <p class="text-xs text-gray-400 mb-4">
                        Minimum {MINIMUM_IMAGES} slika • Maksimalna veličina: 5MB po slici
                    </p>

                    <Button
                        type="button"
                        variant="secondary"
                        onclick={triggerFileInput}
                        class="inline-flex items-center gap-2"
                        disabled={false}
                    >
                        <ImageIcon class="h-4 w-4" />
                        Izaberite slike
                    </Button>
                </div>
            </div>

            <!-- Selected Images Preview -->
            {#if addCarContext.selectedImages.length > 0}
                <div class="space-y-4">
                    <Label class="text-base font-medium">
                        Izabrane slike ({addCarContext.selectedImages.length})
                        {#if addCarContext.selectedImages.length < MINIMUM_IMAGES}
                            <span class="text-orange-600 text-sm font-normal">
                                - potrebno još {MINIMUM_IMAGES - addCarContext.selectedImages.length}
                            </span>
                        {:else}
                            <span class="text-green-600 text-sm font-normal">✓</span>
                        {/if}
                    </Label>
                    
                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {#each addCarContext.selectedImages as image, index}
                            <div class="relative group">
                                <div class="aspect-square overflow-hidden rounded-lg border border-gray-200">
                                    <img
                                        src={previewUrls[index]}
                                        alt="Preview {index + 1}"
                                        class="h-full w-full object-cover"
                                    />
                                </div>

                                <button
                                    type="button"
                                    onclick={() => removeImage(index)}
                                    class="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center transition-colors"
                                    aria-label="Ukloni sliku"
                                >
                                    <X class="h-4 w-4" />
                                </button>

                                <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg">
                                    {image.name}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </CardContent>
</Card>