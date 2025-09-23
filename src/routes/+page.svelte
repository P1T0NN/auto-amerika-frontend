<script>
    // COMPONENTS
	import HomeFeaturedCarsSection from '@/shared/components/pages/(unprotected)/home/home-featured-cars-section.svelte';
    import HomeHeroSection from '@/shared/components/pages/(unprotected)/home/home-hero-section.svelte';
	import HomeWhyUsSection from '@/shared/components/pages/(unprotected)/home/home-why-us-section.svelte';
    import HomeBrandsSection from '@/shared/components/pages/(unprotected)/home/home-brands-section.svelte';
    import HomeCTASection from '@/shared/components/pages/(unprotected)/home/home-cta-section.svelte';
</script>

<svelte:head>
	<title>AutoAmerika - Uvoz automobila iz Amerike</title>
	<meta
		name="description"
		content="Specijalizovani smo za uvoz kvalitetnih automobila iz Amerike. Pružamo kompletnu uslugu od kupovine do registracije vozila u Srbiji."
	/>
</svelte:head>

<HomeHeroSection />

<HomeFeaturedCarsSection />

<HomeWhyUsSection />

<HomeBrandsSection />

<HomeCTASection />