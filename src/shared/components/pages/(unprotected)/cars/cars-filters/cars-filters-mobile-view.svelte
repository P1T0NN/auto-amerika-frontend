<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
    import { Button } from "@/shared/components/ui/button";
    import { buttonVariants } from "@/shared/components/ui/button";
    import CarsFiltersPriceRange from "./cars-filters-price-range.svelte";
	import CarsFiltersYear from "./cars-filters-year.svelte";
	import CarsFiltersBrand from "./cars-filters-brand.svelte";
	import CarsFiltersCarType from "./cars-filters-car-type.svelte";
	import CarsFiltersMileage from "./cars-filters-mileage.svelte";
	import CarsFiltersTransmission from "./cars-filters-transmission.svelte";
	import CarsFiltersFuelType from "./cars-filters-fuel-type.svelte";
	import CarsFiltersColor from "./cars-filters-color.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";

    // LUCIDE ICONS
    import { SlidersHorizontal } from "@lucide/svelte";

    let { modalOpen, handleApplyFilters }: { modalOpen: boolean; handleApplyFilters: () => void } = $props();
</script>

<div class="sm:hidden">
	<Dialog bind:open={modalOpen}>
		<DialogTrigger class={`${buttonVariants({ variant: "default" })} w-full`}>
            <SlidersHorizontal class="mr-2 h-4 w-4" />
            {m['CarsPage.CarsFilters.title']()}
		</DialogTrigger>

		<DialogContent class="max-w-[95vw] max-h-[90vh] overflow-y-auto bg-secondary">
			<DialogHeader>
				<DialogTitle class="text-white">{m['CarsPage.CarsFilters.title']()}</DialogTitle>
			</DialogHeader>

			{#if filtersContext.hasActiveFilters}
				<Button
					variant="outline"
					onclick={() => {
						filtersContext.clearFilters();
						modalOpen = false;
					}}
					class="w-full px-4 py-2 text-sm"
				>
					{m['CarsPage.CarsFilters.clearAll']()}
				</Button>
			{/if}

			<div class="space-y-6 py-4">
				<CarsFiltersPriceRange />
				<CarsFiltersYear />
				<CarsFiltersBrand />
				<CarsFiltersCarType />
				<CarsFiltersMileage />
				<CarsFiltersTransmission />
				<CarsFiltersFuelType />
				<CarsFiltersColor />
			</div>

			<div class="pt-4 border-t border-zinc-800">
				<Button
					onclick={handleApplyFilters}
					class="w-full px-4 py-3 bg-primary text-white font-semibold hover:bg-primary/90"
				>
					{m['CarsPage.CarsFilters.applyFilters']()}
				</Button>
			</div>
		</DialogContent>
	</Dialog>
</div>