
<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';
    
    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
</script>

<section class="bg-accent py-16 text-accent-foreground">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Spremni za vaš novi automobil?</h2>
        
		<p class="mb-8 text-xl text-accent-foreground/90">
			Kontaktirajte nas danas i počnimo proces uvoza vašeg idealnog vozila
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<Button 
                size="lg" 
                href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE}
            >
                Kontaktiraj nas
            </Button>

			<Button
				size="lg"
				variant="outline"
                href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}
			>
				Pogledaj automobile
			</Button>
		</div>
	</div>
</section>
