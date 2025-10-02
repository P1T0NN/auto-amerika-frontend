<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import AdminDashboardHeader from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-header.svelte';
	import AdminDashboardAddCarButton from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-add-car-button.svelte';
	import AdminDashboardCurrentCars from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-current-cars/admin-dashboard-current-cars.svelte';
</script>

<svelte:head>
	<title>{m['AdminDashboardPage.pageTitle']()}</title>
</svelte:head>

<div class="min-h-screen bg-background p-6">
	<div class="mx-auto max-w-7xl">
		<AdminDashboardHeader />

        <AdminDashboardAddCarButton />

		<AdminDashboardCurrentCars />
	</div>
</div>
