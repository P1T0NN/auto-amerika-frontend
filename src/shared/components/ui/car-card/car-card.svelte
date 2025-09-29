<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config'; 

    // COMPONENTS
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
	import { Button } from '@/shared/components/ui/button';

	let { car } = $props();
</script>

<Card class="car-card-hover overflow-hidden">
    <div class="aspect-[4/3] overflow-hidden">
        <img
            src={car.image || '/placeholder.svg'}
            alt="{car.brand} {car.model}"
            class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
    </div>

    <CardHeader>
        <CardTitle class="text-xl">{car.brand} {car.model}</CardTitle>
        <CardDescription>{car.year} • {car.mileage} • {car.fuel}</CardDescription>
    </CardHeader>

    <CardContent>
        <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-primary">{car.price}</span>
            <Button 
                variant="outline" 
                size="sm"
                href={`${UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}/${car.id}`}
            >
                Detalji
            </Button>
        </div>
    </CardContent>
</Card>