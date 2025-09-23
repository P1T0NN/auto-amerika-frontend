<script>
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

	// COMPONENTS
	import { Button } from '@/shared/components/ui/button';
</script>

<section class="relative flex h-screen items-center justify-center overflow-hidden">
	<div class="absolute inset-0 z-0">
		<img
			src="/placeholder.svg?height=1080&width=1920"
			alt="Luxury American cars"
			class="h-full w-full object-cover"
		/>
		<!-- Replaced hero-gradient class with inline Tailwind gradient -->
		<div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
		<h1 class="mb-6 text-4xl font-bold text-balance md:text-6xl">
			Uvozimo najbolje <span class="text-primary">američke automobile</span> za vas
		</h1>

		<p class="mb-8 text-xl text-pretty text-white/90 md:text-2xl">
			Od kupovine do registracije - kompletna usluga uvoza vozila iz Amerike
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<Button size="lg" href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}>
				Pogledaj automobile
			</Button>

			<Button
				size="lg"
                variant="outline"
                class="text-white"
                href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE}
			>
				Kontaktiraj nas
			</Button>
		</div>
	</div>
</section>
