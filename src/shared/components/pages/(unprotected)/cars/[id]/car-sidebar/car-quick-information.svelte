<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Button } from '@/shared/components/ui/button';

    // LUCIDE ICONS
    import { Phone, Calendar } from '@lucide/svelte';

    let { car } = $props();
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-3xl text-primary">{car.price}</CardTitle>
        <CardDescription>Finalna cena uključuje sve troškove</CardDescription>
    </CardHeader>

    <CardContent class="space-y-4">
        <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
                <span class="text-muted-foreground">Godište:</span>
                <div class="font-medium">{car.year}</div>
            </div>
            
            <div>
                <span class="text-muted-foreground">Kilometraža:</span>
                <div class="font-medium">{car.mileage}</div>
            </div>

            <div>
                <span class="text-muted-foreground">Gorivo:</span>
                <div class="font-medium">{car.fuel}</div>
            </div>

            <div>
                <span class="text-muted-foreground">Snaga:</span>
                <div class="font-medium">{car.power}</div>
            </div>
        </div>

        <div class="flex flex-col space-y-2">
            <Button size="lg">
                <Phone class="mr-2 h-4 w-4" />
                Pozovi sada
            </Button>

            <Button 
                variant="secondary" 
                size="lg"
                href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE}
            >
                <Calendar class="mr-2 h-4 w-4" />
                Zakaži pregled
            </Button>
        </div>
    </CardContent>
</Card>