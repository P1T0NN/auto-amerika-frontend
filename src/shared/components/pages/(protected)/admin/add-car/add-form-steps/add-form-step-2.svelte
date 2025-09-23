
<script lang="ts">
    // COMPONENTS
    import { Input } from "@/shared/components/ui/input";
    import { Button } from "@/shared/components/ui/button";
    import { Badge } from "@/shared/components/ui/badge";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';
</script>

<div class="space-y-6">
    <div>
        <h3 class="mb-4 text-lg font-semibold">Dodatne specifikacije</h3>
        <p class="mb-4 text-sm text-muted-foreground">
            Dodajte specifične karakteristike vozila koje nisu pokrivene osnovnim podacima
        </p>

        {#each addCarContext.specifications as spec, i}
            <div class="mb-4 flex gap-4">
                <div class="flex-1">
                    <Input
                        bind:value={spec.specName}
                        placeholder="Naziv specifikacije (npr. Tip guma)"
                    />
                </div>
                <div class="flex-1">
                    <Input bind:value={spec.specValue} placeholder="Vrednost (npr. 245/45R18)" />
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onclick={() => addCarContext.removeSpecification(i)}
                    disabled={addCarContext.specifications.length === 1}
                >
                    Ukloni
                </Button>
            </div>
        {/each}

        <Button variant="outline" onclick={() => addCarContext.addSpecification()}>+ Dodaj specifikaciju</Button>
    </div>

    <div>
        <h3 class="mb-4 text-lg font-semibold">Oprema i karakteristike</h3>
        <p class="mb-4 text-sm text-muted-foreground">
            Izaberite opremu koju vozilo poseduje
        </p>

        <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
            {#each addCarContext.availableFeatures as feature}
                <label class="flex cursor-pointer items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={addCarContext.selectedFeatures.includes(feature)}
                        onchange={() => addCarContext.toggleFeature(feature)}
                        class="rounded border-border"
                    />
                    <span class="text-sm">{feature}</span>
                </label>
            {/each}
        </div>

        {#if addCarContext.selectedFeatures.length > 0}
            <div class="mt-4">
                <p class="mb-2 text-sm font-medium">Izabrane karakteristike:</p>
                <div class="flex flex-wrap gap-2">
                    {#each addCarContext.selectedFeatures as feature}
                        <Badge variant="secondary">{feature}</Badge>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</div>