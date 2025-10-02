<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';
</script>

<section class="mx-auto max-w-7xl px-4 py-16 md:py-24">
    <h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">{m['AboutPage.OurProcessSection.title']()}</h2>

    <div class="grid gap-8 md:grid-cols-3">
        <div class="text-center">
            <div class="mb-4 flex justify-center">
                <div
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground"
                >
                    1
                </div>
            </div>
            <h3 class="mb-3 text-xl font-semibold">{m['AboutPage.OurProcessSection.step1.title']()}</h3>
            <p class="text-muted-foreground">
                {m['AboutPage.OurProcessSection.step1.description']()}
            </p>
        </div>

        <div class="text-center">
            <div class="mb-4 flex justify-center">
                <div
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground"
                >
                    2
                </div>
            </div>
            <h3 class="mb-3 text-xl font-semibold">{m['AboutPage.OurProcessSection.step2.title']()}</h3>
            <p class="text-muted-foreground">
                {m['AboutPage.OurProcessSection.step2.description']()}
            </p>
        </div>

        <div class="text-center">
            <div class="mb-4 flex justify-center">
                <div
                    class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground"
                >
                    3
                </div>
            </div>
            <h3 class="mb-3 text-xl font-semibold">{m['AboutPage.OurProcessSection.step3.title']()}</h3>
            <p class="text-muted-foreground">
                {m['AboutPage.OurProcessSection.step3.description']()}
            </p>
        </div>
    </div>
</section>