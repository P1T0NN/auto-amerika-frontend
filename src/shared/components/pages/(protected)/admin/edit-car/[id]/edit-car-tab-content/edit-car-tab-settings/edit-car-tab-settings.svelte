<script lang="ts">
    // COMPONENTS
    import MediaManagement from './media-management/media-management.svelte';
    import SalesInformation from './sales-information.svelte';
    import DangerZone from './danger-zone.svelte';
    import { Button } from '@/shared/components/ui/button';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();
</script>

<div class="space-y-8">
    <MediaManagement car={car} />

    {#if car.sales && car.sales.length > 0}
        <SalesInformation car={car} />
    {/if}

    <DangerZone car={car} />

    <div class="flex items-center justify-between border-t border-border pt-8">
        <Button
            href={ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE}
            variant="secondary"
            size="lg"
        >
            Cancel
        </Button>

        <div class="flex space-x-4">
            <Button size="lg" class="bg-primary px-8 py-3 hover:bg-primary/90">Save Settings</Button>
        </div>
    </div>
</div>