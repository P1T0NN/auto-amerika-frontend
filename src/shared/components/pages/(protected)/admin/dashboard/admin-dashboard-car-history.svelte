<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    
    // DATA
    import { dummyCarHistory, dummyBuyers } from '@/features/cars/data/cars-data';

    const carHistory = dummyCarHistory.map((car) => {
		const sale = car.sales?.[0];
		const buyer = sale ? dummyBuyers.find((b) => b.id === sale.buyerId) : null;
		return {
			...car,
			priceFormatted: `€${car.price.toLocaleString()}`,
			dateSold: sale ? new Date(sale.soldDate as string).toLocaleDateString('sr-RS') : 'N/A',
			buyer: buyer?.name || 'Nepoznat kupac',
			finalPrice: sale?.finalPrice
				? `€${sale.finalPrice.toLocaleString()}`
				: `€${car.price.toLocaleString()}`
		};
	});
</script>

<div>
    <h2 class="mb-6 text-3xl font-bold text-foreground">Istorija prodaje</h2>

    <Card class="admin-card">
        <CardHeader>
            <CardTitle class="text-2xl">Nedavno prodati automobili</CardTitle>
            <CardDescription class="text-lg">Pregled poslednje prodaje</CardDescription>
        </CardHeader>
        <CardContent>
            <div class="space-y-4">
                {#each carHistory as car}
                    <div class="flex items-center justify-between rounded-lg bg-muted p-4">
                        <div class="flex-1">
                            <h3 class="text-lg font-semibold text-foreground">
                                {car.brand}
                                {car.model} ({car.year})
                            </h3>
                            <p class="text-muted-foreground">
                                Kupac: {car.buyer} • Prodato: {car.dateSold}
                            </p>
                            <p class="text-sm text-muted-foreground">
                                VIN: {car.vin} • {car.mileageKm?.toLocaleString()} km • {car.fuel}
                            </p>
                        </div>
                        <div class="text-right">
                            <div class="text-xl font-bold text-green-600">{car.finalPrice}</div>
                            <span class="status-badge status-sold">Prodato</span>
                        </div>
                    </div>
                {/each}
            </div>
        </CardContent>
    </Card>
</div>