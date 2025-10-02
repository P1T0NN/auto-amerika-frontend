<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import CollapsibleSectionHeader from "@/shared/components/ui/collapsible-section-header.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="border-b border-zinc-800 pb-6">
    <CollapsibleSectionHeader
        label={m['CarsPage.CarsFilters.mileage']()}
        isExpanded={filtersContext.expandedSections.mileage}
        onclick={() => filtersContext.toggleSection('mileage')}
    />

    {#if filtersContext.expandedSections.mileage}
        <div class="space-y-4">
            <div>
                <Label for="mileage-max" class="text-xs text-zinc-500 mb-1 block">{m['CarsPage.CarsFilters.mileageMax']()}</Label>
                <Input
                    id="mileage-max"
                    type="number"
                    bind:value={filtersContext.mileageMax}
                    placeholder="100,000"
                />
            </div>
            <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                bind:value={filtersContext.mileageMax}
                class="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <p class="text-xs text-zinc-500">{m['CarsPage.CarsFilters.mileageUpTo']({ value: filtersContext.mileageMax.toLocaleString() })}</p>
        </div>
    {/if}
</div>