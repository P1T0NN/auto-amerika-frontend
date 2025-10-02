
<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/state';

    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // QUERIES
    import { fetchCarById } from '@/features/cars/queries/cars-queries.remote';

    // UTILS
    import { capitalizeFirstLetter } from '@/shared/utils/name-utils';

    const carId = page.params.id;
</script>

<svelte:head>
    <svelte:boundary>
        {@const { data: car } = await fetchCarById(carId as string)}

        {#snippet pending()}
            <title>Loading... - AutoAmerika</title>
            <meta name="description" content="Loading..." />
        {/snippet}

        {#if car}
            <title>{car.brand.toUpperCase()} {car.model} {car.year} - AutoAmerika</title>
            <meta
                name="description"
                content="{car.brand.toUpperCase()} {car.model} {car.year} - {capitalizeFirstLetter(car.fuel)}, {capitalizeFirstLetter(car.transmission)}, {car.mileageKm.toLocaleString()} km. {car.description ? car.description.substring(0, 150) + '...' : 'Import this vehicle from America with AutoAmerika.'}"
            />
            <meta property="og:title" content="{car.brand.toUpperCase()} {car.model} {car.year} - AutoAmerika" />
            <meta property="og:description" content="{car.brand.toUpperCase()} {car.model} {car.year} - {capitalizeFirstLetter(car.fuel)}, {capitalizeFirstLetter(car.transmission)}, {car.mileageKm.toLocaleString()} km." />
            <meta property="og:type" content="product" />
            {#if car.images && car.images.length > 0}
                <meta property="og:image" content={car.images[0].imageUrl} />
            {/if}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="{car.brand.toUpperCase()} {car.model} {car.year} - AutoAmerika" />
            <meta name="twitter:description" content="{car.brand.toUpperCase()} {car.model} {car.year} - {capitalizeFirstLetter(car.fuel)}, {capitalizeFirstLetter(car.transmission)}, {car.mileageKm.toLocaleString()} km." />
            {#if car.images && car.images.length > 0}
                <meta name="twitter:image" content={car.images[0].imageUrl} />
            {/if}
        {:else}
            <title>{m['CarPage.pageTitle']()}</title>
            <meta
                name="description"
                content={m['CarPage.pageDescription']()}
            />
        {/if}
    </svelte:boundary>
</svelte:head>