<script>
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import HomeHeroSection from '@/shared/components/pages/(unprotected)/home/home-hero-section.svelte';
	import HomeWhyUsSection from '@/shared/components/pages/(unprotected)/home/home-why-us-section.svelte';
    import HomeCTASection from '@/shared/components/pages/(unprotected)/home/home-cta-section.svelte';
	import HomeCarTypesSection from '@/shared/components/pages/(unprotected)/home/home-car-types-section.svelte';
    import HomeCarBrandsSection from '@/shared/components/pages/(unprotected)/home/home-car-brands-section.svelte';
</script>

<svelte:head>
	<title>{m["HomePage.pageTitle"]()}</title>
	<meta
		name="description"
		content={m["HomePage.pageDescription"]()}
	/>
</svelte:head>

<HomeHeroSection />

<HomeCarTypesSection />

<HomeCarBrandsSection />

<HomeWhyUsSection />

<HomeCTASection />