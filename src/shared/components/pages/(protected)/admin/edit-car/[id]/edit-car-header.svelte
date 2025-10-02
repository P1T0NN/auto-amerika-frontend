<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { ChevronLeft } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();
</script>

<div class="border-b border-border bg-card">
    <div class="mx-auto max-w-7xl px-6 py-6">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <Button
                    href={ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE}
                    variant="outline"
                    size="sm"
                >
                    <ChevronLeft class="mr-2 h-4 w-4" />
                    {m['EditCarPage.EditCarHeader.backToDashboard']()}
                </Button>
            </div>
            
            <div class="text-right">
                <h1 class="text-2xl font-bold text-foreground">{car.brand} {car.model}</h1>
                <p class="text-muted-foreground">{car.year} • VIN: {car.vin}</p>
            </div>
        </div>
    </div>
</div>