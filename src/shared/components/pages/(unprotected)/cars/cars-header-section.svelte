
<script lang="ts">
    // COMPONENTS
    import { Input } from '@/shared/components/ui/input';

    let searchQuery = $state('');
</script>

<section class="bg-muted py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-8 text-center">
            <h1 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Naši automobili</h1>
            <p class="mx-auto max-w-2xl text-xl text-muted-foreground">
                Pronađite svoj idealan američki automobil iz naše pažljivo odabrane kolekcije
            </p>
        </div>

        <div class="mx-auto max-w-2xl">
            <div class="relative">
                <svg
                    class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <Input
                    type="text"
                    placeholder="Pretražite po brendu, modelu ili karakteristikama..."
                    bind:value={searchQuery}
                    class="py-3 pr-4 pl-10 text-lg"
                />
            </div>
        </div>
    </div>
</section>