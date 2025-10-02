<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import AboutHeroSection from '@/shared/components/pages/(unprotected)/about/about-hero-section.svelte';
	import AboutIntroductionSection from '@/shared/components/pages/(unprotected)/about/about-introduction-section.svelte';
	import AboutWhyChooseUsSection from '@/shared/components/pages/(unprotected)/about/about-why-choose-us-section.svelte';
	import AboutCtaSection from '@/shared/components/pages/(unprotected)/about/about-cta-section.svelte';
	import AboutOurProcessSection from '@/shared/components/pages/(unprotected)/about/about-our-process-section.svelte';
</script>

<svelte:head>
	<title>{m['AboutPage.pageTitle']()}</title>
	<meta
		name="description"
		content={m['AboutPage.pageDescription']()}
	/>
</svelte:head>

<main class="min-h-screen">
	<AboutHeroSection />

	<AboutIntroductionSection />

	<AboutWhyChooseUsSection />

	<AboutOurProcessSection />

	<AboutCtaSection />
</main>
