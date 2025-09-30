
<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import CollapsibleSectionHeader from "@/shared/components/ui/collapsible-section-header.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="border-b border-zinc-800 pb-6">
    <CollapsibleSectionHeader
        label="Car Brand"
        isExpanded={filtersContext.expandedSections.brand}
        onclick={() => filtersContext.toggleSection('brand')}
    />

    {#if filtersContext.expandedSections.brand}
        <div class="space-y-2 max-h-48 overflow-y-auto">
            {#each filtersContext.brandsData as brand}
                <Label class="flex items-center gap-3 cursor-pointer group/item">
                    <input
                        type="checkbox"
                        checked={filtersContext.selectedBrands.includes(brand.value)}
                        onchange={() => filtersContext.toggleCheckbox(filtersContext.selectedBrands, brand.value)}
                        class="w-4 h-4 rounded border-zinc-700 bg-zinc-950 text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                    />
                    <span class="text-sm text-zinc-400 group-hover/item:text-zinc-300 transition-colors">{brand.text}</span>
                </Label>
            {/each}
        </div>
    {/if}
</div>