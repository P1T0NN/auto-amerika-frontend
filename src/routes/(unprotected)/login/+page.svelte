<script>
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import LoginHeader from '@/shared/components/pages/(unprotected)/login/login-header.svelte';
	import LoginFooter from '@/shared/components/pages/(unprotected)/login/login-footer.svelte';
	import LoginCard from '@/shared/components/pages/(unprotected)/login/login-card/login-card.svelte';
</script>

<svelte:head>
	<title>{m['LoginPage.pageTitle']()}</title>
	<meta
		name="description"
		content={m['LoginPage.pageDescription']()}
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
