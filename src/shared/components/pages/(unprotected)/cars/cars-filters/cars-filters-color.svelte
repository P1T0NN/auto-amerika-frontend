<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import CollapsibleSectionHeader from "@/shared/components/ui/collapsible-section-header.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="pb-6">
    <CollapsibleSectionHeader
        label="Color"
        isExpanded={filtersContext.expandedSections.color}
        onclick={() => filtersContext.toggleSection('color')}
    />

    {#if filtersContext.expandedSections.color}
        <div class="space-y-2">
            {#each filtersContext.colorsData as color}
                <Label class="flex items-center gap-3 cursor-pointer group/item">
                    <input
                        type="checkbox"
                        checked={filtersContext.selectedColors.includes(color.value)}
                        onchange={() => filtersContext.toggleCheckbox(filtersContext.selectedColors, color.value)}
                        class="w-4 h-4 rounded border-zinc-700 bg-zinc-950 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                    />
                    <span class="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors">{color.text}</span>
                </Label>
            {/each}
        </div>
    {/if}
</div>