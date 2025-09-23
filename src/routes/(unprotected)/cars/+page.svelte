<script lang="ts">
    // COMPONENTS
	import CarHeaderSection from '@/shared/components/pages/(unprotected)/cars/cars-header-section.svelte';
	import CarsContentSection from '@/shared/components/pages/(unprotected)/cars/cars-content-section.svelte';
</script>

<svelte:head>
	<title>Automobili - AutoAmerika</title>
	<meta
		name="description"
		content="Pregledajte naš izbor kvalitetnih američkih automobila. Filtrirajte po brendu, ceni, godištu i drugim karakteristikama."
	/>
</svelte:head>

<div class="min-h-screen bg-background">
	<CarHeaderSection />

	<CarsContentSection />
</div>
