<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // SVELTEKIT IMPORTS
	import { page } from '$app/state';

    // COMPONENTS
	import CarHeader from '@/shared/components/pages/(unprotected)/cars/[id]/car-header.svelte';
	import CarHeroSection from '@/shared/components/pages/(unprotected)/cars/[id]/car-hero-section.svelte';
	import CarImageGallery from '@/shared/components/pages/(unprotected)/cars/[id]/car-image-gallery.svelte';
	import CarBasicInformationSection from '@/shared/components/pages/(unprotected)/cars/[id]/car-basic-information-section.svelte';
	import CarDescriptionSection from '@/shared/components/pages/(unprotected)/cars/[id]/car-description-section.svelte';
	import CarHistorySection from '@/shared/components/pages/(unprotected)/cars/[id]/car-history-section.svelte';
    import CarImportSection from '@/shared/components/pages/(unprotected)/cars/[id]/car-import-section.svelte';
	import CarContactSidebar from '@/shared/components/pages/(unprotected)/cars/[id]/car-contact-sidebar.svelte';
    import CarPageLoading from '@/shared/components/pages/(unprotected)/cars/[id]/loading/car-page-loading.svelte';

    // QUERIES
    import { fetchCarById } from '@/features/cars/queries/cars-queries.remote';

	const carId = page.params.id;

    // TODO: Forbid users from entering this page is the car has status "unavailable"
</script>

<svelte:head>
	<title>{m['CarPage.pageTitle']()}</title>
	<meta
		name="description"
		content={m['CarPage.pageDescription']()}
	/>
</svelte:head>

<div class="min-h-screen">
    <svelte:boundary>
        {@const { data: car } = await fetchCarById(carId as string)}

        {#snippet pending()}
            <CarPageLoading />
        {/snippet}

        {#if car && car.status !== 'unavailable'}
            <CarHeader {car} />

            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div class="space-y-8 lg:col-span-2">
                        <CarHeroSection {car} />

                        <CarImageGallery {car} />

                        <CarBasicInformationSection {car} />

                        <CarHistorySection {car} />

                        <CarImportSection {car} />

                        <CarDescriptionSection {car} />
                    </div>

                    <CarContactSidebar {car} />
                </div>
            </div>
        {/if}

        {#if car && car.status === 'unavailable'}
            <CarPageLoading />
        {/if}
    </svelte:boundary>
</div>
