<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { CONTACT_INFO } from '@/shared/config';

    // COMPONENTS
	import { Card } from '@/shared/components/ui/card';

    // LUCIDE ICONS
	import { Phone, Mail, MapPin } from '@lucide/svelte';
</script>

<div class="lg:col-span-2">
    <h2 class="mb-8 text-2xl font-bold">{m['ContactPage.ContactInformation.title']()}</h2>

    <div class="space-y-6">
        <Card class="p-6">
            <div class="flex items-start gap-4">
                <div class="rounded-full bg-primary/10 p-3">
                    <Phone class="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 class="mb-1 font-semibold">{m['ContactPage.ContactInformation.phone']()}</h3>
                    <a
                        href={`tel:${CONTACT_INFO.PHONE}`}
                        class="text-muted-foreground hover:text-primary"
                    >
                        {CONTACT_INFO.PHONE}
                    </a>
                </div>
            </div>
        </Card>

        <Card class="p-6">
            <div class="flex items-start gap-4">
                <div class="rounded-full bg-primary/10 p-3">
                    <Mail class="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 class="mb-1 font-semibold">{m['ContactPage.ContactInformation.email']()}</h3>
                    <a
                        href={`mailto:${CONTACT_INFO.EMAIL}`}
                        class="text-muted-foreground hover:text-primary"
                    >
                        {CONTACT_INFO.EMAIL}
                    </a>
                </div>
            </div>
        </Card>

        <Card class="p-6">
            <div class="flex items-start gap-4">
                <div class="rounded-full bg-primary/10 p-3">
                    <MapPin class="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 class="mb-1 font-semibold">{m['ContactPage.ContactInformation.address']()}</h3>
                    <p class="text-muted-foreground">{CONTACT_INFO.ADDRESS}</p>
                </div>
            </div>
        </Card>
    </div>

    <!-- Working Hours -->
    <!--<div class="py-8">
        <h3 class="mb-4 text-xl font-semibold">Radno vreme</h3>
        <div class="space-y-2 text-muted-foreground">
            <div class="flex justify-between">
                <span>Ponedeljak - Petak:</span>
                <span class="font-medium">09:00 - 18:00</span>
            </div>

            <div class="flex justify-between">
                <span>Subota:</span>
                <span class="font-medium">10:00 - 15:00</span>
            </div>

            <div class="flex justify-between">
                <span>Nedelja:</span>
                <span class="font-medium">Zatvoreno</span>
            </div>
        </div>
    </div>-->
</div>