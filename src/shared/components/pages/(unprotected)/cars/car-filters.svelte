<script lang="ts">
    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
	import { Input } from '@/shared/components/ui/input';
	import { Label } from '@/shared/components/ui/label';

	type FilterValues = {
		brand: string;
		minPrice: string;
		maxPrice: string;
		minYear: string;
		maxYear: string;
		fuelType: string;
		transmission: string;
		minMileage: string;
		maxMileage: string;
	};

	let { onFiltersChange }: { onFiltersChange?: (filters: FilterValues) => void } = $props();

	let filters = $state<FilterValues>({
		brand: '',
		minPrice: '',
		maxPrice: '',
		minYear: '',
		maxYear: '',
		fuelType: '',
		transmission: '',
		minMileage: '',
		maxMileage: ''
	});

	const brands = ['Ford', 'Chevrolet', 'Dodge', 'Cadillac', 'Tesla', 'Jeep', 'GMC', 'Lincoln'];
	const fuelTypes = ['Benzin', 'Dizel', 'Hibrid', 'Električni'];
	const transmissions = ['Automatik', 'Manuelni'];

	function applyFilters() {
		onFiltersChange?.(filters);
	}

	function resetFilters() {
		filters = {
			brand: '',
			minPrice: '',
			maxPrice: '',
			minYear: '',
			maxYear: '',
			fuelType: '',
			transmission: '',
			minMileage: '',
			maxMileage: ''
		};
		onFiltersChange?.(filters);
	}
</script>

<Card class="sticky top-20">
	<CardHeader>
		<CardTitle class="flex items-center justify-between">
			Filteri
			<Button variant="ghost" size="sm" onclick={resetFilters}>Resetuj</Button>
		</CardTitle>
	</CardHeader>

	<CardContent class="space-y-6">
		<div>
			<Label for="brand" class="mb-2 block text-sm font-medium">Brend</Label>
			<select
				id="brand"
				bind:value={filters.brand}
				class="w-full rounded-md border border-input bg-background p-2"
			>
				<option value="">Svi brendovi</option>
				{#each brands as brand}
					<option value={brand}>{brand}</option>
				{/each}
			</select>
		</div>

		<div>
			<Label class="mb-2 block text-sm font-medium">Cena (€)</Label>
			<div class="grid grid-cols-2 gap-2">
				<Input type="number" placeholder="Od" bind:value={filters.minPrice} />
				<Input type="number" placeholder="Do" bind:value={filters.maxPrice} />
			</div>
		</div>

		<div>
			<Label class="mb-2 block text-sm font-medium">Godište</Label>
			<div class="grid grid-cols-2 gap-2">
				<Input type="number" placeholder="Od" bind:value={filters.minYear} />
				<Input type="number" placeholder="Do" bind:value={filters.maxYear} />
			</div>
		</div>

		<div>
			<Label for="fuel" class="mb-2 block text-sm font-medium">Gorivo</Label>
			<select
				id="fuel"
				bind:value={filters.fuelType}
				class="w-full rounded-md border border-input bg-background p-2"
			>
				<option value="">Sve vrste</option>
				{#each fuelTypes as fuel}
					<option value={fuel}>{fuel}</option>
				{/each}
			</select>
		</div>

		<div>
			<Label for="transmission" class="mb-2 block text-sm font-medium">Menjač</Label>
			<select
				id="transmission"
				bind:value={filters.transmission}
				class="w-full rounded-md border border-input bg-background p-2"
			>
				<option value="">Svi tipovi</option>
				{#each transmissions as transmission}
					<option value={transmission}>{transmission}</option>
				{/each}
			</select>
		</div>

		<div>
			<Label class="mb-2 block text-sm font-medium">Kilometraža</Label>
			<div class="grid grid-cols-2 gap-2">
				<Input type="number" placeholder="Od (km)" bind:value={filters.minMileage} />
				<Input type="number" placeholder="Do (km)" bind:value={filters.maxMileage} />
			</div>
		</div>

		<Button onclick={applyFilters} class="w-full bg-primary hover:bg-primary/90">
			Primeni filtere
		</Button>
	</CardContent>
</Card>
