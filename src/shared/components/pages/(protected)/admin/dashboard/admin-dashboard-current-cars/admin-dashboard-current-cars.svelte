<script lang="ts">
    // COMPONENTS
    import AdminDashboardCarListItem from './admin-dashboard-car-list-item.svelte';
    import AdminDashboardCarGridItem from './admin-dashboard-car-grid-item.svelte';
    import AdminDashboardCurrentCarsHeader from './admin-dashboard-current-cars-header.svelte';

    // DATA
    import { dummyCurrentCars } from '@/features/cars/data/cars-data';

    // STATE
    let searchTerm = $state('');
    let viewMode = $state<'grid' | 'list'>('list');

    // COMPUTED
    const filteredCars = $derived.by(() => {
        return dummyCurrentCars
            .filter(car => 
                car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.vin.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((car) => ({
                ...car,
                priceFormatted: `€${car.price.toLocaleString()}`,
                dateAdded: new Date(car.import?.importDate || '2024-01-15').toLocaleDateString('sr-RS'),
                image: car.images?.[0]?.imageUrl || '/placeholder.svg?height=80&width=120'
            }));
    });
</script>

<div class="mb-12">
    <AdminDashboardCurrentCarsHeader
        filteredCars={filteredCars}
        bind:searchTerm={searchTerm}
        bind:viewMode={viewMode}
    />

    {#if viewMode === 'list'}
        <AdminDashboardCarListItem filteredCars={filteredCars} />
    {:else}
        <AdminDashboardCarGridItem filteredCars={filteredCars} />
    {/if}
</div>
