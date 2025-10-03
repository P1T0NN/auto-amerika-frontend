<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Checkbox } from "@/shared/components/ui/checkbox";
    import CollapsibleSectionHeader from "@/shared/components/ui/collapsible-section-header.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="border-b border-zinc-800 pb-6">
    <CollapsibleSectionHeader
        label={m['CarsPage.CarsFilters.fuelType']()}
        isExpanded={filtersContext.expandedSections.fuelType}
        onclick={() => filtersContext.toggleSection('fuelType')}
    />

    {#if filtersContext.expandedSections.fuelType}
        <div class="space-y-2">
            {#each filtersContext.fuelTypesData as fuel}
                <Label class="flex items-center gap-3 cursor-pointer group/item">
                    <Checkbox
                        checked={filtersContext.selectedFuelTypes.includes(fuel.value)}
                        onCheckedChange={() => filtersContext.toggleCheckbox(filtersContext.selectedFuelTypes, fuel.value)}
                    />
                    <span class="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors">{fuel.text}</span>
                </Label>
            {/each}
        </div>
    {/if}
</div>