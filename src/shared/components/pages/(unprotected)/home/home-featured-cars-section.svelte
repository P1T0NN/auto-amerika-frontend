<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Button } from '@/shared/components/ui/button';

    // DATA
    import { featuredCars } from '@/features/cars/data/cars-data';
</script>

<section class="bg-background py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Izdvojeni automobili</h2>
			<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
				Pogledajte naš izbor kvalitetnih američkih vozila spremnih za uvoz
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredCars as car}
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
							<Button variant="outline" size="sm">Detalji</Button>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<Button href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE} size="lg" variant="outline">Pogledaj sve automobile</Button>
		</div>
	</div>
</section>