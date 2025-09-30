<script lang="ts">
    // STORES
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    // COMPONENTS
    import CarsFilters from "@/shared/components/pages/(unprotected)/cars/cars-filters/cars-filters.svelte";
    import CarsResults from "@/shared/components/pages/(unprotected)/cars/cars-results.svelte";

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";

    onMount(() => {
        const carType = $page.url.searchParams.get('carType');
        const brand = $page.url.searchParams.get('brand');

        let filtersApplied = false;

        if (carType && !filtersContext.selectedBodyTypes.includes(carType)) {
            filtersContext.selectedBodyTypes.push(carType);
            filtersApplied = true;
        }

        if (brand && !filtersContext.selectedBrands.includes(brand)) {
            filtersContext.selectedBrands.push(brand);
            filtersApplied = true;
        }

        if (filtersApplied) {
            filtersContext.applyFilters();
        }
    });
</script>

<svelte:head>
	<title>Automobili - AutoAmerika</title>
	<meta
		name="description"
		content="Pregledajte naš izbor kvalitetnih američkih automobila. Filtrirajte po brendu, ceni, godištu i drugim karakteristikama."
	/>
</svelte:head>

<div class="min-h-screen relative">
	<div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>

	<div class="relative flex justify-center">
		<div class="flex gap-6 max-w-7xl w-full px-8 py-8">
			<div class="w-80 flex-shrink-0">
				<CarsFilters />
			</div>

            <CarsResults />
		</div>
	</div>
</div>