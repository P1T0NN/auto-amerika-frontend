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
        label="Year"
        isExpanded={filtersContext.expandedSections.year}
        onclick={() => filtersContext.toggleSection('year')}
    />

    {#if filtersContext.expandedSections.year}
        <div class="flex items-center gap-4">
            <div class="flex-1">
                <Label for="year-from" class="text-xs text-zinc-500 mb-1 block">From</Label>
                <Input
                    id="year-from"
                    type="number"
                    bind:value={filtersContext.yearRange.min}
                    placeholder="2015"
                />
            </div>
            <div class="flex-1">
                <Label for="year-to" class="text-xs text-zinc-500 mb-1 block">To</Label>
                <Input
                    id="year-to"
                    type="number"
                    bind:value={filtersContext.yearRange.max}
                    placeholder="2025"
                />
            </div>
        </div>
    {/if}
</div>