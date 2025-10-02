<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import AddCarHeader from '@/shared/components/pages/(protected)/admin/add-car/add-car-header.svelte';
    import AddCarForm from '@/shared/components/pages/(protected)/admin/add-car/add-car-form/add-car-form.svelte';
</script>

<svelte:head>
	<title>{m['AddCarPage.pageTitle']()}</title>
	<meta
		name="description"
		content={m['AddCarPage.pageDescription']()}
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-screen bg-muted/30 py-8">
	<div class="mx-auto max-w-4xl px-4">
		<AddCarHeader />

		<AddCarForm />
	</div>
</div>
