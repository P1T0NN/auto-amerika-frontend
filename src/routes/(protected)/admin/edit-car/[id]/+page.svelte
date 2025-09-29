<script lang="ts">
    // SVELTEKIT IMPORTS
	import { page } from '$app/state';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
    import EditCarHeader from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-header.svelte';
    import EditCarTabNavigation from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-tab-navigation.svelte';
    import EditCarTabInformation from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-tab-content/edit-car-tab-information/edit-car-tab-information.svelte';
    import EditCarTabHistory from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-tab-content/edit-car-tab-history/edit-car-tab-history.svelte';
    import EditCarTabImport from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-tab-content/edit-car-tab-import/edit-car-tab-import.svelte';
    import EditCarTabSettings from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-tab-content/edit-car-tab-settings/edit-car-tab-settings.svelte';

    // QUERIES
    import { fetchCarById } from '@/features/cars/queries/cars-queries.remote';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    const { data: car } = $derived(await fetchCarById(page.params.id as string));

	let activeTab = $state('information');
</script>

<svelte:head>
	<title>Edit Car - {car?.brand} {car?.model} - AutoAmerika Admin</title>
</svelte:head>

<svelte:boundary>
    <div class="min-h-screen bg-background">
        <EditCarHeader car={car as typesCar} />

        <div class="mx-auto max-w-7xl px-6 py-8">
            <EditCarTabNavigation bind:activeTab={activeTab} />

            {#if activeTab === 'information'}
                <EditCarTabInformation car={car as typesCar} />
            {/if}

            {#if activeTab === 'history'}
                <EditCarTabHistory car={car as typesCar} />
            {/if}

            {#if activeTab === 'import'}
                <EditCarTabImport car={car as typesCar} />
            {/if}

            {#if activeTab === 'settings'}
                <EditCarTabSettings car={car as typesCar} />
            {/if}
        </div>
    </div>
</svelte:boundary>