<script lang="ts">
	// COMPONENTS
	import { Button } from "@/shared/components/ui/button";
    import CarsFiltersHeader from "./cars-filters-header.svelte";
    import CarsFiltersPriceRange from "./cars-filters-price-range.svelte";
	import CarsFiltersYear from "./cars-filters-year.svelte";
	import CarsFiltersCarType from "./cars-filters-car-type.svelte";
	import CarsFiltersTransmission from "./cars-filters-transmission.svelte";
	import CarsFiltersColor from "./cars-filters-color.svelte";
	import CarsFiltersFuelType from "./cars-filters-fuel-type.svelte";
    import CarsFiltersMileage from "./cars-filters-mileage.svelte";
    import CarsFiltersBrand from "./cars-filters-brand.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";
</script>

<div class="sticky top-4 h-[calc(100vh-2rem)] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
	<div class="p-6 flex-1 overflow-y-auto">
		<CarsFiltersHeader />

		<div class="space-y-6">
			<CarsFiltersPriceRange />

			<CarsFiltersYear />

			<CarsFiltersBrand />

			<CarsFiltersCarType />

			<CarsFiltersMileage />

			<CarsFiltersTransmission />

			<CarsFiltersFuelType />

			<CarsFiltersColor />

            <!-- Action Buttons -->
            <div class="pt-6 border-t border-zinc-800 mt-6">
                <Button
                    onclick={() => filtersContext.applyFilters()}
                    class="w-full px-4 py-3 bg-primary text-white font-semibold hover:bg-primary/90"
                >
                    Apply Filters
                </Button>
            </div>
        </div>
	</div>
</div>