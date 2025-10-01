<script lang="ts">
    // COMPONENTS
	import { Card } from '@/shared/components/ui/card';

    // LUCIDE ICONS
	import { CheckCircle, Shield, Clock, Award } from '@lucide/svelte';
</script>

<section class="bg-muted py-16 md:py-24">
    <div class="mx-auto max-w-7xl px-4">
        <h2 class="mb-12 text-center text-3xl font-bold md:text-4xl">Zašto izabrati nas?</h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <Shield class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">Pouzdanost</h3>
                <p class="text-muted-foreground">
                    Garantujemo transparentnost i sigurnost u svakoj transakciji
                </p>
            </Card>

            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <Award class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">Stručnost</h3>
                <p class="text-muted-foreground">
                    Tim sa dugogodišnjim iskustvom u automobilskoj industriji
                </p>
            </Card>

            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <Clock class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">Brzina</h3>
                <p class="text-muted-foreground">
                    Efikasan proces uvoza sa jasnim rokovima isporuke
                </p>
            </Card>

            <Card class="p-6 text-center">
                <div class="mb-4 flex justify-center">
                    <div class="rounded-full bg-primary/10 p-4">
                        <CheckCircle class="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 class="mb-3 text-xl font-semibold">Kompletna usluga</h3>
                <p class="text-muted-foreground">
                    Od kupovine do registracije - sve na jednom mestu
                </p>
            </Card>
        </div>
    </div>
</section>