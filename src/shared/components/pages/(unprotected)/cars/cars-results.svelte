<script lang="ts">
    // COMPONENTS
    import CarCard from '@/shared/components/ui/car-card/car-card.svelte';
    import CarsResultsLoading from './loading/cars-results-loading.svelte';
    import { PaginatedData } from '@/shared/components/ui/paginated-data';

    // CONTEXT
    import { createCachedQuery } from '@/shared/context/simple-cache.svelte';
    import { filtersContext } from '@/features/cars/context/filters-context.svelte';

    // QUERIES
    import { fetchCarsByFilters } from '@/features/cars/queries/cars-queries.remote';

    // UTILS
    import { buildFilterParams } from '@/features/cars/utils/filters-utils';

    const fetchCarsByFiltersCached = createCachedQuery(fetchCarsByFilters);

    // Build query params reactively (filters + page combined)
    const queryParams = $derived.by(() => {
        filtersContext.filterVersion;
        return {
            filters: buildFilterParams(filtersContext),
            page: filtersContext.currentPage
        };
    });
</script>

{#await fetchCarsByFiltersCached(queryParams)}
    <CarsResultsLoading />
{:then { data: paginatedData }}
    {@const cars = paginatedData?.items ?? []}
    {@const totalCount = paginatedData?.totalCount ?? 0}

    <div class="flex-1">
        <div class="mb-6">
            <h1 class="text-3xl font-bold text-white mb-2">Dostupni Automobili</h1>
            <p class="text-zinc-400">{totalCount} automobila pronađeno</p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {#each cars as car (car.id)}
                <CarCard {car} />
            {/each}
        </div>

        <PaginatedData
            totalCount={paginatedData?.totalCount as number}
            bind:currentPage={filtersContext.currentPage}
            perPage={paginatedData?.perPage as number}
            totalPages={paginatedData?.totalPages as number}
            hasNextPage={paginatedData?.hasNextPage ?? false}
            hasPrevPage={paginatedData?.hasPrevPage ?? false}
            class="mt-8"
        />
    </div>
{/await}