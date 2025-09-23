<script lang="ts">
    // COMPONENTS
    import { Badge } from '@/shared/components/ui/badge';
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';
</script>

<div class="space-y-6">
    <div>
        <h3 class="mb-4 text-lg font-semibold">Slike vozila</h3>
        <p class="mb-4 text-sm text-muted-foreground">
            Dodajte slike vozila. Preporučujemo najmanje 5 slika (spoljašnjost, unutrašnjost,
            motor)
        </p>

        <div class="rounded-lg border-2 border-dashed border-border p-8 text-center">
            <input
                type="file"
                multiple
                accept="image/*"
                onchange={(e) => addCarContext.handleImageUpload(e)}
                class="hidden"
                id="imageUpload"
            />
            <label for="imageUpload" class="cursor-pointer">
                <div class="text-muted-foreground">
                    <svg
                        class="mx-auto mb-4 h-12 w-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <p class="text-lg font-medium">Kliknite ili prevucite slike ovde</p>
                    <p class="text-sm">PNG, JPG, JPEG do 10MB po slici</p>
                </div>
            </label>
        </div>

        {#if addCarContext.imageUrls.length > 0}
            <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {#each addCarContext.imageUrls as url, i}
                    <div class="group relative">
                        <img
                            src={url || '/placeholder.svg'}
                            alt="Car image {i + 1}"
                            class="h-32 w-full rounded-lg object-cover"
                        />
                        <button
                            onclick={() => addCarContext.removeImage(i)}
                            class="text-destructive-foreground absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive opacity-0 transition-opacity group-hover:opacity-100"
                        >
                            ×
                        </button>
                    </div>
                {/each}
            </div>
        {/if}
    </div>

    <div class="rounded-lg bg-muted/50 p-6">
        <h3 class="mb-4 text-lg font-semibold">Pregled podataka</h3>
        <div class="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div>
                <p><strong>VIN:</strong> {addCarContext.carData.vin || 'Nije uneto'}</p>
                <p><strong>Vozilo:</strong> {addCarContext.carData.brand} {addCarContext.carData.model} ({addCarContext.carData.year})</p>
                <p><strong>Cena:</strong> {addCarContext.carData.price} {addCarContext.carData.currency}</p>
                <p>
                    <strong>Kilometraža:</strong>
                    {addCarContext.carData.mileageKm ? `${addCarContext.carData.mileageKm} km` : 'Nije uneto'}
                </p>
            </div>
            <div>
                <p><strong>Gorivo:</strong> {addCarContext.carData.fuel || 'Nije uneto'}</p>
                <p><strong>Menjač:</strong> {addCarContext.carData.transmission || 'Nije uneto'}</p>
                <p>
                    <strong>Snaga:</strong>
                    {addCarContext.carData.powerHp ? `${addCarContext.carData.powerHp} HP` : 'Nije uneto'}
                </p>
                <p><strong>Slike:</strong> {addCarContext.imageUrls.length} dodano</p>
            </div>
        </div>

        {#if addCarContext.selectedFeatures.length > 0}
            <div class="mt-4">
                <p class="mb-2 font-medium">Oprema ({addCarContext.selectedFeatures.length}):</p>
                <div class="flex flex-wrap gap-1">
                    {#each addCarContext.selectedFeatures.slice(0, 5) as feature}
                        <Badge variant="outline" class="text-xs">{feature}</Badge>
                    {/each}
                    
                    {#if addCarContext.selectedFeatures.length > 5}
                        <Badge variant="outline" class="text-xs">+{addCarContext.selectedFeatures.length - 5} više</Badge>
                    {/if}
                </div>
            </div>
        {/if}
    </div>
</div>