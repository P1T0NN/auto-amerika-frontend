<script lang="ts">
    // COMPONENTS
	import AddCarHeader from '@/shared/components/pages/(protected)/admin/add-car/add-car-header.svelte';
    import AddCarForm from '@/shared/components/pages/(protected)/admin/add-car/add-car-form/add-car-form.svelte';
</script>

<svelte:head>
	<title>Dodaj automobil - AutoAmerika Admin</title>
</svelte:head>

<div class="min-h-screen bg-muted/30 py-8">
	<div class="mx-auto max-w-4xl px-4">
		<AddCarHeader />

		<AddCarForm />
	</div>
</div>
