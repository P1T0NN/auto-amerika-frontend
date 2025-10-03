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

<div class="pb-6">
    <CollapsibleSectionHeader
        label={m['CarsPage.CarsFilters.color']()}
        isExpanded={filtersContext.expandedSections.color}
        onclick={() => filtersContext.toggleSection('color')}
    />

    {#if filtersContext.expandedSections.color}
        <div class="space-y-2">
            {#each filtersContext.colorsData as color}
                <Label class="flex items-center gap-3 cursor-pointer group/item">
                    <Checkbox
                        checked={filtersContext.selectedColors.includes(color.value)}
                        onCheckedChange={() => filtersContext.toggleCheckbox(filtersContext.selectedColors, color.value)}
                    />
                    <span class="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors">{color.text}</span>
                </Label>
            {/each}
        </div>
    {/if}
</div>