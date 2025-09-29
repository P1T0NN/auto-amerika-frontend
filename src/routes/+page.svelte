<script>
    // COMPONENTS
    import HomeHeroSection from '@/shared/components/pages/(unprotected)/home/home-hero-section.svelte';
	import HomeWhyUsSection from '@/shared/components/pages/(unprotected)/home/home-why-us-section.svelte';
    import HomeCTASection from '@/shared/components/pages/(unprotected)/home/home-cta-section.svelte';
	import HomeCarTypesSection from '@/shared/components/pages/(unprotected)/home/home-car-types-section.svelte';
    import HomeCarBrandsSection from '@/shared/components/pages/(unprotected)/home/home-car-brands-section.svelte';
</script>

<svelte:head>
	<title>AutoAmerika - Uvoz automobila iz Amerike</title>
	<meta
		name="description"
		content="Specijalizovani smo za uvoz kvalitetnih automobila iz Amerike. Pružamo kompletnu uslugu od kupovine do registracije vozila u Srbiji."
	/>
</svelte:head>

<HomeHeroSection />

<HomeCarTypesSection />

<HomeCarBrandsSection />

<HomeWhyUsSection />

<HomeCTASection />