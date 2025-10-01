<script lang="ts">
    // COMPONENTS
    import { Badge } from '@/shared/components/ui/badge';

    // UTILS
    import { capitalizeFirstLetter } from '@/shared/utils/name-utils';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Zap, Fuel, Settings } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();
</script>

<div>
    <div class="mb-2 flex items-center gap-2">
        <Badge variant="secondary">{car.year}</Badge>
        <Badge variant="outline">{car.location}</Badge>
    </div>
    
    <h1 class="mb-2 text-3xl font-bold text-foreground md:text-4xl">
        {car.brand.toUpperCase()}
        {car.model}
    </h1>

    <div class="flex items-center gap-4 text-muted-foreground">
        <span class="flex items-center gap-1">
            <Zap class="h-4 w-4" />
            {car.mileageKm}
        </span>
        
        <span class="flex items-center gap-1">
            <Fuel class="h-4 w-4" />
            {capitalizeFirstLetter(car.fuel)}
        </span>

        <span class="flex items-center gap-1">
            <Settings class="h-4 w-4" />
            {capitalizeFirstLetter(car.transmission)}
        </span>
    </div>
</div>