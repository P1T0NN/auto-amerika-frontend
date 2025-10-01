<script lang="ts">
    // COMPONENTS
	import ContactForm from '@/shared/components/pages/(unprotected)/contact/contact-form.svelte';
	import ContactHeroSection from '@/shared/components/pages/(unprotected)/contact/contact-hero-section.svelte';
	import ContactInformationSection from '@/shared/components/pages/(unprotected)/contact/contact-information-section.svelte';
</script>

<main class="min-h-screen">
	<ContactHeroSection />

	<section class="mx-auto max-w-7xl px-4 py-16 md:py-24">
		<div class="grid gap-12 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<ContactForm />
			</div>

			<div class="lg:col-span-1">
				<ContactInformationSection />
			</div>
		</div>
	</section>
</main>
