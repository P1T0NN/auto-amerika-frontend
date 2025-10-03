<script lang="ts">
	import '../app.css';

    // COMPONENTS
    import Header from '@/shared/components/ui/header/header.svelte';
    import Footer from '@/shared/components/ui/footer/footer.svelte';
    import Toaster from '@/shared/components/ui/sonner/sonner.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" sizes="32x32" href="/logo.ico" />
	<link rel="icon" type="image/x-icon" sizes="16x16" href="/logo.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/logo.ico" />
</svelte:head>

<Header />
{@render children?.()}
<Footer />
<Toaster richColors />