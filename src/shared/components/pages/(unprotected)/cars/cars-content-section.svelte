<script lang="ts">
    // COMPONENTS
    import CarFilters from './car-filters.svelte';
    import { Button } from '@/shared/components/ui/button';
    import CarCard from '@/shared/components/ui/car-card/car-card.svelte';

    // LUCIDE ICONS
    import { Grid3X3, List, SearchX } from '@lucide/svelte';

    // DATA
    import { allCars } from '@/features/cars/data/cars-data';

    type FilterValues = {
		brand?: string;
		minPrice?: string;
		maxPrice?: string;
		minYear?: string;
		maxYear?: string;
		fuelType?: string;
		transmission?: string;
		minMileage?: string;
		maxMileage?: string;
	};

    type SortOption = 'newest' | 'price-low' | 'price-high' | 'year-new' | 'year-old';
    type ViewMode = 'grid' | 'list';

    let searchQuery = $state('');
	let sortBy = $state<SortOption>('newest');
	let viewMode = $state<ViewMode>('grid');

	let filteredCars = $state(allCars);
	let currentFilters = $state<FilterValues>({});

	function handleFiltersChange(filters: FilterValues) {
		currentFilters = filters;
		applyFiltersAndSearch();
	}

	function applyFiltersAndSearch() {
		let result = allCars;

		// Apply search
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(car) =>
					car.brand.toLowerCase().includes(query) ||
					car.model.toLowerCase().includes(query) ||
					car.features.some((feature) => feature.toLowerCase().includes(query))
			);
		}

		// Apply filters
		if (currentFilters.brand) {
			result = result.filter((car) => car.brand === currentFilters.brand);
		}

		if (currentFilters.minPrice) {
			result = result.filter((car) => {
				const price = parseInt(car.price.replace(/[€,]/g, ''));
				return price >= parseInt(currentFilters.minPrice as string);
			});
		}

		if (currentFilters.maxPrice) {
			result = result.filter((car) => {
				const price = parseInt(car.price.replace(/[€,]/g, ''));
				return price <= parseInt(currentFilters.maxPrice as string);
			});
		}

		if (currentFilters.minYear) {
			result = result.filter((car) => car.year >= parseInt(currentFilters.minYear as string));
		}

		if (currentFilters.maxYear) {
			result = result.filter((car) => car.year <= parseInt(currentFilters.maxYear as string));
		}

		if (currentFilters.fuelType) {
			result = result.filter((car) => car.fuel === currentFilters.fuelType);
		}

		if (currentFilters.transmission) {
			result = result.filter((car) => car.transmission === currentFilters.transmission);
		}

		// Apply sorting
		if (sortBy === 'price-low') {
			result.sort((a, b) => {
				const priceA = parseInt(a.price.replace(/[€,]/g, ''));
				const priceB = parseInt(b.price.replace(/[€,]/g, ''));
				return priceA - priceB;
			});
		} else if (sortBy === 'price-high') {
			result.sort((a, b) => {
				const priceA = parseInt(a.price.replace(/[€,]/g, ''));
				const priceB = parseInt(b.price.replace(/[€,]/g, ''));
				return priceB - priceA;
			});
		} else if (sortBy === 'year-new') {
			result.sort((a, b) => b.year - a.year);
		} else if (sortBy === 'year-old') {
			result.sort((a, b) => a.year - b.year);
		}

		filteredCars = result;
	}

	// Reactive search
	$effect(() => {
		applyFiltersAndSearch();
	});
</script>

<section class="py-8">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col gap-8 lg:flex-row">
            <div class="flex-shrink-0 lg:w-80">
                <CarFilters onFiltersChange={handleFiltersChange} />
            </div>

            <div class="flex-1">
                <div
                    class="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
                >
                    <div class="flex items-center gap-4">
                        <span class="text-sm text-muted-foreground">
                            {filteredCars.length} automobila pronađeno
                        </span>
                    </div>

                    <div class="flex items-center gap-4">
                        <select
                            bind:value={sortBy}
                            class="rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                            <option value="newest">Najnoviji</option>
                            <option value="price-low">Cena: Najniža</option>
                            <option value="price-high">Cena: Najviša</option>
                            <option value="year-new">Godište: Najnovije</option>
                            <option value="year-old">Godište: Najstarije</option>
                        </select>

                        <div class="flex rounded-md border border-input">
                            <button
                                onclick={() => (viewMode = 'grid')}
                                class="p-2 {viewMode === 'grid'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-background text-muted-foreground hover:text-foreground'}"
                                aria-label="Grid view"
                            >
                                <Grid3X3 class="h-4 w-4" />
                            </button>
                            
                            <button
                                onclick={() => (viewMode = 'list')}
                                class="p-2 {viewMode === 'list'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-background text-muted-foreground hover:text-foreground'}"
                                aria-label="List view"
                            >
                                <List class="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {#if filteredCars.length === 0}
                    <div class="py-12 text-center">
                        <SearchX class="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                        <h3 class="mb-2 text-lg font-medium text-foreground">Nema rezultata</h3>
                        <p class="text-muted-foreground">Pokušajte sa drugačijim filterima ili pretragom.</p>
                    </div>
                {:else}
                    <div
                        class="grid grid-cols-1 {viewMode === 'grid'
                            ? 'md:grid-cols-2 xl:grid-cols-3'
                            : ''} gap-6"
                    >
                        {#each filteredCars as car (car.id)}
                            <CarCard {car} />
                        {/each}
                    </div>
                {/if}

                {#if filteredCars.length > 0}
                    <div class="mt-12 text-center">
                        <Button variant="outline" size="lg">Učitaj više automobila</Button>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>