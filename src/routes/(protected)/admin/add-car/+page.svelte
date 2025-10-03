<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import AddCarHeader from '@/shared/components/pages/(protected)/admin/add-car/add-car-header.svelte';
    import AddCarForm from '@/shared/components/pages/(protected)/admin/add-car/add-car-form/add-car-form.svelte';
    import AddUnavailableCarForm from '@/shared/components/pages/(protected)/admin/add-car/add-unavailable-car-form/add-unavailable-car-form.svelte';
    import { Button } from '@/shared/components/ui/button';

    // State for tab selection
    let activeTab = $state<'available' | 'unavailable'>('available');
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

		<!-- Tab Navigation -->
		<div class="mb-8 flex gap-4 border-b border-zinc-800">
			<Button
				variant="ghost"
				class="relative rounded-none px-4 py-2 {activeTab === 'available' ? 'text-primary' : 'text-zinc-400 hover:text-white'}"
				onclick={() => activeTab = 'available'}
			>
				{m['AddCarPage.addCarTab']()}
				{#if activeTab === 'available'}
					<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
				{/if}
			</Button>
			<Button
				variant="ghost"
				class="relative rounded-none px-4 py-2 {activeTab === 'unavailable' ? 'text-primary' : 'text-zinc-400 hover:text-white'}"
				onclick={() => activeTab = 'unavailable'}
			>
				{m['AddCarPage.addUnavailableCarTab']()}
				{#if activeTab === 'unavailable'}
					<div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
				{/if}
			</Button>
		</div>

		<!-- Form Content -->
		{#if activeTab === 'available'}
			<AddCarForm />
		{:else}
			<AddUnavailableCarForm />
		{/if}
	</div>
</div>
