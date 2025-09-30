<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import CollapsibleSectionHeader from "@/shared/components/ui/collapsible-section-header.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="border-b border-zinc-800 pb-6">
    <CollapsibleSectionHeader
        label="Price Range"
        isExpanded={filtersContext.expandedSections.price}
        onclick={() => filtersContext.toggleSection('price')}
    />

    {#if filtersContext.expandedSections.price}
        <div class="space-y-4">
            <div class="flex items-center gap-4">
                <div class="flex-1">
                    <Label for="price-min" class="text-xs text-zinc-500 mb-1 block">Min</Label>
                    <Input
                        id="price-min"
                        type="number"
                        bind:value={filtersContext.priceRange.min}
                        placeholder="$0"
                    />
                </div>
                <div class="flex-1">
                    <Label for="price-max" class="text-xs text-zinc-500 mb-1 block">Max</Label>
                    <Input
                        id="price-max"
                        type="number"
                        bind:value={filtersContext.priceRange.max}
                        placeholder="$100,000"
                    />
                </div>
            </div>
            <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                bind:value={filtersContext.priceRange.max}
                class="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary"
            />
        </div>
    {/if}
</div>