<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';
</script>

<section class="mx-auto max-w-7xl px-4 py-16 md:py-24">
    <div class="mx-auto max-w-3xl text-center">
        <h2 class="mb-6 text-3xl font-bold md:text-4xl">{m['AboutPage.IntroductionSection.title']()}</h2>
        <p class="mb-4 text-lg leading-relaxed text-muted-foreground">
            {m['AboutPage.IntroductionSection.paragraph1']()}
        </p>
        <p class="text-lg leading-relaxed text-muted-foreground">
            {m['AboutPage.IntroductionSection.paragraph2']()}
        </p>
    </div>
</section>