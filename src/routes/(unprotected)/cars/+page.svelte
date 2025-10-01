<script lang="ts">
    // SVELTEKIT
    import { page } from '$app/state';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    // COMPONENTS
    import CarsFilters from '@/shared/components/pages/(unprotected)/cars/cars-filters/cars-filters.svelte';
    import CarsResults from '@/shared/components/pages/(unprotected)/cars/cars-results.svelte';

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";

    // Sync URL with filters
    $effect(() => {
        // Watch for filter changes
        filtersContext.filterVersion;

        const params = new URLSearchParams();

        // Add selected brands to URL
        if (filtersContext.selectedBrands.length > 0) {
            filtersContext.selectedBrands.forEach(brand => params.append('brand', brand));
        }

        // Add selected body types to URL
        if (filtersContext.selectedBodyTypes.length > 0) {
            filtersContext.selectedBodyTypes.forEach(type => params.append('carType', type));
        }

        // Update URL without triggering navigation
        const newUrl = params.toString() ? `/cars?${params.toString()}` : '/cars';
        if (newUrl !== window.location.pathname + window.location.search) {
            goto(newUrl, { replaceState: true, noScroll: true });
        }
    });

    onMount(() => {
        const carType = page.url.searchParams.get('carType');
        const brand = page.url.searchParams.get('brand');

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
		<div class="flex flex-col md:flex-row gap-6 max-w-7xl w-full px-4 md:px-8 py-6 md:py-8">
			<div class="w-full md:w-80 md:flex-shrink-0">
				<CarsFilters />
			</div>

            <CarsResults />
		</div>
	</div>
</div>