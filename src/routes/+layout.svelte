<script lang="ts">
	import '../app.css';
	import favicon from '@/shared/lib/assets/favicon.svg';

    // COMPONENTS
    import Header from '@/shared/components/ui/header/header.svelte';
    import Footer from '@/shared/components/ui/footer/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
<Footer />
