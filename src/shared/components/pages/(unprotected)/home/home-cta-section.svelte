<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

	// COMPONENTS
	import { Button } from '@/shared/components/ui/button';
</script>

<section class="relative bg-white py-32 overflow-hidden">
	<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-5xl font-bold text-zinc-950 md:text-6xl tracking-tight">
			{m['HomePage.CtaSection.title']()}
		</h2>

		<p class="mb-10 text-xl text-zinc-600 leading-relaxed">
			{m['HomePage.CtaSection.description']()}
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<Button
				size="lg"
				href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE}
				class="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
			>
				{m['HomePage.CtaSection.contactUs']()}
			</Button>

			<Button
				size="lg"
				variant="outline"
				href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}
				class="text-lg px-8 py-6 border-2 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all"
			>
				{m['HomePage.CtaSection.seeTheCars']()}
			</Button>
		</div>
	</div>
</section>
