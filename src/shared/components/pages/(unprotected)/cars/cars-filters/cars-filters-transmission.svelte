<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import CollapsibleSectionHeader from "@/shared/components/ui/collapsible-section-header.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="border-b border-zinc-800 pb-6">
    <CollapsibleSectionHeader
        label={m['CarsPage.CarsFilters.transmission']()}
        isExpanded={filtersContext.expandedSections.transmission}
        onclick={() => filtersContext.toggleSection('transmission')}
    />

    {#if filtersContext.expandedSections.transmission}
        <div class="space-y-2">
            {#each filtersContext.transmissionsData as transmission}
                <Label class="flex items-center gap-3 cursor-pointer group/item">
                    <input
                        type="checkbox"
                        checked={filtersContext.selectedTransmissions.includes(transmission.value)}
                        onchange={() => filtersContext.toggleCheckbox(filtersContext.selectedTransmissions, transmission.value)}
                        class="w-4 h-4 rounded border-zinc-700 bg-zinc-950 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                    />
                    <span class="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors">{transmission.text}</span>
                </Label>
            {/each}
        </div>
    {/if}
</div>