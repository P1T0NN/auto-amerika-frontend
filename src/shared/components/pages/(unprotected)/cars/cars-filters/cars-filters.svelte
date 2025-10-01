<script lang="ts">
	// SVELTEKIT IMPORTS
	import { onMount } from 'svelte';

	// COMPONENTS
    import CarsFiltersLargeView from './cars-filters-large-view.svelte';
	import CarsFiltersMediumView from './cars-filters-medium-view.svelte';
    import CarsFiltersMobileView from './cars-filters-mobile-view.svelte';

    // CONTEXT
    import { filtersContext } from "@/features/cars/context/filters-context.svelte";

    let filtersOpen = $state(false);
	let modalOpen = $state(false);

	const handleApplyFilters = () => {
		filtersContext.applyFilters();
		modalOpen = false;
	};

	// Close modal when screen size increases beyond mobile
	onMount(() => {
		const mediaQuery = window.matchMedia('(min-width: 640px)');

		const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
			if (e.matches && modalOpen) {
				modalOpen = false;
			}
		};

		// Check initial state
		handleMediaChange(mediaQuery);

		// Listen for changes
		mediaQuery.addEventListener('change', handleMediaChange);

		return () => {
			mediaQuery.removeEventListener('change', handleMediaChange);
		};
	});
</script>

<!-- Mobile View (< sm) - Modal -->
<CarsFiltersMobileView modalOpen={modalOpen} handleApplyFilters={handleApplyFilters} />

<!-- Tablet View (sm to md) - Collapsible -->
<CarsFiltersMediumView filtersOpen={filtersOpen} />

<!-- Desktop View (>= md) - Sticky Sidebar -->
<CarsFiltersLargeView />