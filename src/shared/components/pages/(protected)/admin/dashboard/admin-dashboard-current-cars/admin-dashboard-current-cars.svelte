<script lang="ts">
    // COMPONENTS
    import AdminDashboardCarListItem from './admin-dashboard-car-list-item.svelte';
    import AdminDashboardCurrentCarsHeader from './admin-dashboard-current-cars-header.svelte';
    import AdminDashboardCurrentCarsEmpty from './admin-dashboard-current-cars-empty.svelte';

    // QUERIES
    import { fetchAllCars } from '@/features/cars/queries/cars-queries.remote';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let searchTerm = $state('');

    const { data: paginatedData } = $derived(await fetchAllCars(1)); // Fetch first page for admin dashboard
    const cars = $derived(paginatedData?.items ?? []);
</script>

<div class="mb-12">
    {#if cars.length === 0}
        <AdminDashboardCurrentCarsEmpty />
    {:else}
        <AdminDashboardCurrentCarsHeader
            cars={cars}
            bind:searchTerm={searchTerm}
        />

        <AdminDashboardCarListItem cars={cars as typesCar[]} />
    {/if}
</div>
