// DATA
import {
    brands,
    carTypes,
    colors as colorsData,
    fuelTypes as fuelTypesData,
    transmissionTypes
} from '../data/cars-data';

export class FiltersClass {
    priceRange = $state({ min: 0, max: 100000 });
    yearRange = $state({ min: 2015, max: 2025 });
    mileageMax = $state(100000);

    selectedBrands = $state<string[]>([]);
    selectedBodyTypes = $state<string[]>([]);
    selectedTransmissions = $state<string[]>([]);
    selectedFuelTypes = $state<string[]>([]);
    selectedColors = $state<string[]>([]);

    // Pagination state
    currentPage = $state(1);

    // Expanded sections state
    expandedSections = $state({
        price: true,
        year: true,
        brand: true,
        bodyType: true,
        mileage: true,
        transmission: true,
        fuelType: false,
        color: false
    });

    // Filter options (from cars-data)
    // Values for comparison/backend
    readonly brandTypes = brands.map(b => b.value);
    readonly bodyTypes = carTypes.map(b => b.value);
    readonly transmissions = transmissionTypes.map(t => t.value);
    readonly fuelTypes = fuelTypesData.map(f => f.value);
    readonly colors = colorsData.map(c => c.value);

    // Full objects with value + text for UI display
    readonly brandsData = brands;
    readonly bodyTypesData = carTypes;
    readonly transmissionsData = transmissionTypes;
    readonly fuelTypesData = fuelTypesData;
    readonly colorsData = colorsData;

    // Methods
    toggleSection(section: keyof typeof this.expandedSections) {
        this.expandedSections[section] = !this.expandedSections[section];
    }

    toggleCheckbox(array: string[], value: string) {
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        } else {
            array.push(value);
        }
    }

    clearFilters() {
        this.priceRange = { min: 0, max: 100000 };
        this.yearRange = { min: 2015, max: 2025 };
        this.mileageMax = 100000;
        this.selectedBrands = [];
        this.selectedBodyTypes = [];
        this.selectedTransmissions = [];
        this.selectedFuelTypes = [];
        this.selectedColors = [];
    }

    // Check if any filters are active
    get hasActiveFilters(): boolean {
        return (
            this.priceRange.min !== 0 ||
            this.priceRange.max !== 100000 ||
            this.yearRange.min !== 2015 ||
            this.yearRange.max !== 2025 ||
            this.mileageMax !== 100000 ||
            this.selectedBrands.length > 0 ||
            this.selectedBodyTypes.length > 0 ||
            this.selectedTransmissions.length > 0 ||
            this.selectedFuelTypes.length > 0 ||
            this.selectedColors.length > 0
        );
    }

    // Get active filter labels
    get activeFilterLabels(): string[] {
        const labels: string[] = [];

        // Add brand labels
        this.selectedBrands.forEach(value => {
            const brand = this.brandsData.find(b => b.value === value);
            if (brand) labels.push(brand.text);
        });

        // Add body type labels
        this.selectedBodyTypes.forEach(value => {
            const bodyType = this.bodyTypesData.find(b => b.value === value);
            if (bodyType) labels.push(bodyType.text);
        });

        // Add transmission labels
        this.selectedTransmissions.forEach(value => {
            const transmission = this.transmissionsData.find(t => t.value === value);
            if (transmission) labels.push(transmission.text);
        });

        // Add fuel type labels
        this.selectedFuelTypes.forEach(value => {
            const fuelType = this.fuelTypesData.find(f => f.value === value);
            if (fuelType) labels.push(fuelType.text);
        });

        // Add color labels
        this.selectedColors.forEach(value => {
            const color = this.colorsData.find(c => c.value === value);
            if (color) labels.push(color.text);
        });

        // Add price range if not default
        if (this.priceRange.min !== 0 || this.priceRange.max !== 100000) {
            labels.push(`$${this.priceRange.min.toLocaleString()} - $${this.priceRange.max.toLocaleString()}`);
        }

        // Add year range if not default
        if (this.yearRange.min !== 2015 || this.yearRange.max !== 2025) {
            labels.push(`${this.yearRange.min} - ${this.yearRange.max}`);
        }

        // Add mileage if not default
        if (this.mileageMax !== 100000) {
            labels.push(`Max ${this.mileageMax.toLocaleString()} mi`);
        }

        return labels;
    }

    // Trigger version for reactive updates
    filterVersion = $state(0);

    applyFilters() {
        // Reset to page 1 when filters change
        this.currentPage = 1;
        // Increment version to trigger reactive updates
        this.filterVersion++;
    }
}

// Create and export context
export const filtersContext = new FiltersClass();