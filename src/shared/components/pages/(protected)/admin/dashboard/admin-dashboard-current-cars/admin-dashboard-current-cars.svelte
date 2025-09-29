<script lang="ts">
    // COMPONENTS
    import AdminDashboardCarListItem from './admin-dashboard-car-list-item.svelte';
    import AdminDashboardCurrentCarsHeader from './admin-dashboard-current-cars-header.svelte';
    import AdminDashboardCurrentCarsEmpty from './admin-dashboard-current-cars-empty.svelte';

    // QUERIES
    import { fetchAllCars } from '@/features/cars/queries/cars-queries.remote';

    let searchTerm = $state('');

    const { data: cars } = $derived(await fetchAllCars());
</script>

<div class="mb-12">
    {#if cars?.length === 0}
        <AdminDashboardCurrentCarsEmpty />
    {:else}
        <AdminDashboardCurrentCarsHeader
            cars={cars}
            bind:searchTerm={searchTerm}
        />

        <AdminDashboardCarListItem cars={cars} />
    {/if}
</div>
