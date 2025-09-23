<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
	import { Button } from '@/shared/components/ui/button';
	import { Badge } from '@/shared/components/ui/badge';

    // LUCIDE ICONS
	import { Zap, MapPin } from '@lucide/svelte';

	let { car } = $props();
</script>

<Card class="pt-0 h-full overflow-hidden border border-black">
	<div class="relative aspect-[4/3] overflow-hidden">
		<img
			src={car.image || '/placeholder.svg'}
			alt="{car.brand} {car.model}"
			class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
		/>
        
		<div class="absolute top-2 right-2">
			<Badge variant="secondary" class="bg-background/90 text-foreground">
				{car.year}
			</Badge>
		</div>
	</div>

	<CardHeader class="pb-2">
		<CardTitle class="text-lg">{car.brand} {car.model}</CardTitle>
		<CardDescription class="flex flex-col text-sm">
			<span>{car.engine}</span>

            <div class="flex items-center gap-2">
                <span>{car.transmission}</span>

                <span>•</span>

                <span>{car.fuel}</span>
            </div>
		</CardDescription>
	</CardHeader>

	<CardContent class="pt-0">
		<div class="space-y-3">
			<div class="flex items-center justify-between text-sm text-muted-foreground">
				<span class="flex items-center gap-1">
					<Zap class="h-4 w-4" />
					{car.mileage}
				</span>

				<span class="flex items-center gap-1">
					<MapPin class="h-4 w-4" />
					{car.location}
				</span>
			</div>

			<div class="flex flex-col pt-2 gap-y-2">
				<span class="text-2xl font-bold text-primary">{car.price}</span>

				<div class="flex gap-x-2">
					<Button 
                        size="sm"
                        href={`${UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}/${car.id}`}
                    >
                        Detalji
                    </Button>
                    
					<Button 
                        size="sm" 
                        variant="secondary"
                    >
                        Kontakt
                    </Button>
				</div>
			</div>
		</div>
	</CardContent>
</Card>
