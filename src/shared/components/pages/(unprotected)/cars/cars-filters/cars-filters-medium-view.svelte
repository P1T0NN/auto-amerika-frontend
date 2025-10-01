<script lang="ts">
    // COMPONENTS
    import CarsFiltersPriceRange from './cars-filters-price-range.svelte';
    import CarsFiltersYear from './cars-filters-year.svelte';
    import CarsFiltersBrand from './cars-filters-brand.svelte';
    import CarsFiltersCarType from './cars-filters-car-type.svelte';
    import CarsFiltersMileage from './cars-filters-mileage.svelte';
    import CarsFiltersTransmission from './cars-filters-transmission.svelte';
    import CarsFiltersFuelType from './cars-filters-fuel-type.svelte';
    import CarsFiltersColor from './cars-filters-color.svelte';
    import { Button } from '@/shared/components/ui/button';

    // CONTEXT
    import { filtersContext } from '@/features/cars/context/filters-context.svelte';

    // LUCIDE ICONS
    import { ChevronDown, ChevronUp } from '@lucide/svelte';

    let { filtersOpen }: { filtersOpen: boolean } = $props();
</script>

<div class="hidden sm:block md:hidden bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
	<button
		onclick={() => filtersOpen = !filtersOpen}
		class="w-full flex items-center justify-between p-4 text-white hover:bg-zinc-800 transition-colors"
	>
		<span class="text-lg font-semibold">Filters</span>
		{#if filtersOpen}
			<ChevronUp class="h-5 w-5" />
		{:else}
			<ChevronDown class="h-5 w-5" />
		{/if}
	</button>

	{#if filtersOpen}
		<div class="p-6 border-t border-zinc-800 space-y-6">
			<CarsFiltersPriceRange />
			<CarsFiltersYear />
			<CarsFiltersBrand />
			<CarsFiltersCarType />
			<CarsFiltersMileage />
			<CarsFiltersTransmission />
			<CarsFiltersFuelType />
			<CarsFiltersColor />

			<div class="pt-4 border-t border-zinc-800">
				<Button
					onclick={() => filtersContext.applyFilters()}
					class="w-full px-4 py-3 bg-primary text-white font-semibold hover:bg-primary/90"
				>
					Apply Filters
				</Button>
			</div>
		</div>
	{/if}
</div>