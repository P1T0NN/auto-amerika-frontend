<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Button } from '@/shared/components/ui/button';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Phone } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();
</script>

<Card class="self-start">
    <CardHeader>
        <CardTitle class="text-3xl text-primary">€{car.price}</CardTitle>
        <CardDescription>Finalna cena uključuje sve troškove</CardDescription>
    </CardHeader>

    <CardContent class="space-y-4">
        <div class="flex flex-col space-y-2">
            <Button
                size="lg"
                href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE}
            >
                <Phone class="mr-2 h-4 w-4" />
                Kontaktirajte nas
            </Button>
        </div>
    </CardContent>
</Card>