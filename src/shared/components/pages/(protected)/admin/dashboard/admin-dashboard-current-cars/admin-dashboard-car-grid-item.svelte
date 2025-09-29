<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Button } from '@/shared/components/ui/button';

    // UTILS
    import { getCarStatusClass, getCarStatusText } from '@/features/cars/utils/cars-utils';

    // LUCIDE ICONS
    import { Edit2 } from '@lucide/svelte';

    let { filteredCars } = $props();
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
    {#each filteredCars as car}
        <Card class="pt-0 border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 overflow-hidden">
            <div class="aspect-[4/3] overflow-hidden">
                <img
                    src={car.image || "/placeholder.svg"}
                    alt="{car.brand} {car.model}"
                    class="h-full w-full object-cover"
                />
            </div>
            
            <CardHeader class="pb-3">
                <div class="flex items-center justify-between">
                    <CardTitle class="text-xl">{car.brand} {car.model}</CardTitle>
                    <span class="font-semibold px-4 py-2 rounded-full text-sm {getCarStatusClass(car.status)}">
                        {getCarStatusText(car.status)}
                    </span>
                </div>

                <CardDescription class="text-base">
                    {car.year} • {car.mileageKm?.toLocaleString()} km • {car.fuel}
                </CardDescription>

                <CardDescription class="text-sm text-muted-foreground">
                    VIN: {car.vin}
                </CardDescription>
            </CardHeader>

            <CardContent class="pt-0">
                <div class="mb-4 flex items-center justify-between">
                    <span class="text-2xl font-bold text-primary">{car.priceFormatted}</span>
                    <span class="text-sm text-muted-foreground">Dodato: {car.dateAdded}</span>
                </div>

                <div class="mb-4 text-sm text-muted-foreground">
                    <div>Lokacija: {car.location}</div>
                    <div>Homologacija: {car.import?.homologationStatus}</div>
                </div>

                <Button
                    class="w-full"
                    variant="secondary"
                    onclick={() => console.log('Modify car:', car.id)}
                >
                    <Edit2 class="mr-2 h-5 w-5" />
                    Izmeni automobil
                </Button>
            </CardContent>
        </Card>
    {/each}
</div>