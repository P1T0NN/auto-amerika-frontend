<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import { Card } from '@/shared/components/ui/card';

    // LUCIDE ICONS
	import { FileCheck, Shield, Clock, Award } from '@lucide/svelte';
</script>

<section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4">
        <h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m['AboutPage.WhyChooseUsSection.title']()}</h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <Shield class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">{m['AboutPage.WhyChooseUsSection.reliability.title']()}</h3>
                <p class="text-muted-foreground">
                    {m['AboutPage.WhyChooseUsSection.reliability.description']()}
                </p>
            </Card>

            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <Award class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">{m['AboutPage.WhyChooseUsSection.expertise.title']()}</h3>
                <p class="text-muted-foreground">
                    {m['AboutPage.WhyChooseUsSection.expertise.description']()}
                </p>
            </Card>

            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <Clock class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">{m['AboutPage.WhyChooseUsSection.speed.title']()}</h3>
                <p class="text-muted-foreground">
                    {m['AboutPage.WhyChooseUsSection.speed.description']()}
                </p>
            </Card>

            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <FileCheck class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">{m['HomePage.WhyUsSection.fullRegistration']()}</h3>
                <p class="text-muted-foreground">
                    {m['HomePage.WhyUsSection.fullRegistrationDescription']()}
                </p>
            </Card>
        </div>
    </div>
</section>