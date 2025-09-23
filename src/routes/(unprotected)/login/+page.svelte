<script>
    // COMPONENTS
	import LoginHeader from '@/shared/components/pages/(unprotected)/login/login-header.svelte';
	import LoginFooter from '@/shared/components/pages/(unprotected)/login/login-footer.svelte';
	import LoginCard from '@/shared/components/pages/(unprotected)/login/login-card/login-card.svelte';
</script>

<svelte:head>
	<title>Prijava - AutoAmerika</title>
	<meta
		name="description"
		content="Prijavite se na AutoAmerika platformu za pristup ekskluzivnim automobilima iz Amerike."
	/>
</svelte:head>

<!-- Login Page -->
<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background px-4 py-12"
>
	<div class="w-full max-w-md">
		<LoginHeader />

		<LoginCard />

		<LoginFooter />
	</div>
</div>
