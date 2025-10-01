<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
</script>

<section class="bg-secondary py-16 text-primary-foreground md:py-24">
    <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-balance md:text-4xl">
            Spremni da uvezete vaš san automobil?
        </h2>

        <p class="mb-8 text-lg text-pretty text-primary-foreground/90">
            Kontaktirajte nas danas i započnite putovanje ka vašem novom vozilu
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