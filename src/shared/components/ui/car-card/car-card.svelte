<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config'; 

    // COMPONENTS
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
	import { Button } from '@/shared/components/ui/button';

    // UTILS
    import { capitalizeFirstLetter } from '@/shared/utils/name-utils';
    import { carStatusClass } from '@/features/cars/utils/cars-utils';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

	let { car }: { car: typesCar } = $props();

    const isUnavailable = car.status && car.status !== 'available';
	const statusInfo = isUnavailable ? carStatusClass[car.status as keyof typeof carStatusClass] : undefined;
</script>

<Card class="pt-0 overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-zinc-900 border-zinc-800 {isUnavailable ? 'opacity-90' : ''}">
    <div class="aspect-[4/3] overflow-hidden relative">
        <img
            src={car.images?.[0].imageUrl || '/placeholder.svg'}
            alt="{car.brand} {car.model}"
            class="h-full w-full object-cover transition-transform duration-300 hover:scale-105 {isUnavailable ? 'brightness-75' : ''}"
        />
        
        {#if statusInfo}
            <div class="absolute inset-0 flex items-center justify-center bg-black/40">
                <div class="px-8 py-4 {statusInfo.bgColor} {statusInfo.textColor} border-2 {statusInfo.borderColor} rounded-lg shadow-2xl transform rotate-[-5deg]">
                    <span class="text-3xl font-black tracking-wider drop-shadow-lg">
                        {statusInfo.label}
                    </span>
                </div>
            </div>
        {/if}
    </div>

    <CardHeader>
        <CardTitle class="text-xl text-white">{car.brand.toUpperCase()} {car.model}</CardTitle>
        <CardDescription class="text-zinc-400">{car.year} • {car.mileageKm}km • {capitalizeFirstLetter(car.fuel || 'N/A')}</CardDescription>
    </CardHeader>

    <CardContent>
        <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-red-500">€{car.price || "N/A"}</span>

            <Button 
                size="sm"
                href={isUnavailable ? undefined : `${UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}/${car.id}`}
                disabled={isUnavailable}
                class="disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Detalji
            </Button>
        </div>
    </CardContent>
</Card>