<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Button } from "@/shared/components/ui/button";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="mb-8">
    <div class="flex items-center justify-between mb-2">
        <h2 class="text-2xl font-bold text-zinc-100">{m['CarsPage.CarsFilters.title']()}</h2>
    </div>
    <p class="text-sm text-zinc-400 mb-4">{m['CarsPage.CarsFilters.subtitle']()}</p>

    {#if filtersContext.hasActiveFilters}
        <Button
            variant="outline"
            onclick={() => filtersContext.clearFilters()}
            class="w-full px-4 py-2 text-sm"
        >
            {m['CarsPage.CarsFilters.clearAll']()}
        </Button>
    {/if}
</div>