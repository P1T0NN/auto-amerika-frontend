<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
</script>

<section class="bg-secondary py-16 text-primary-foreground md:py-24">
    <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold text-balance md:text-4xl">
            {m['AboutPage.CtaSection.title']()}
        </h2>

        <p class="mb-8 text-lg text-pretty text-primary-foreground/90">
            {m['AboutPage.CtaSection.description']()}
        </p>

        <div class="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
                size="lg"
                href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE}
            >
                {m['AboutPage.CtaSection.contactUs']()}
            </Button>

            <Button
                size="lg"
                variant="outline"
                href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}
            >
                {m['AboutPage.CtaSection.seeTheCars']()}
            </Button>
        </div>
    </div>
</section>