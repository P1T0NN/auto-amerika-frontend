<script lang="ts">
    // COMPONENTS
    import AdminDashboardHeader from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-header.svelte';
    import AdminDashboardStats from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-stats.svelte';
	import AdminDashboardAddCarButton from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-add-car-button.svelte';
	import AdminDashboardCurrentCars from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-current-cars/admin-dashboard-current-cars.svelte';
	import AdminDashboardCarHistory from '@/shared/components/pages/(protected)/admin/dashboard/admin-dashboard-car-history.svelte';
</script>

<svelte:head>
	<title>Admin Dashboard - AutoAmerika</title>
</svelte:head>

<div class="min-h-screen bg-background p-6">
	<div class="mx-auto max-w-7xl">
		<AdminDashboardHeader />

		<AdminDashboardStats />

        <AdminDashboardAddCarButton />

		<AdminDashboardCurrentCars />

		<AdminDashboardCarHistory />
	</div>
</div>
