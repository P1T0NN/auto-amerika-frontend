<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
	import VehicleHistory from './vehicle-history.svelte';
    import { Button } from '@/shared/components/ui/button';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { toast } from 'svelte-sonner';

    // CONTEXT
    import { editCarHistoryContext } from '@/features/cars/context/cars-context.svelte';

    // ACTIONS
    import { editCarHistory } from '@/features/cars/actions/cars-actions.remote';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Loader } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();

    const handleEditCarHistory = editCarHistory.enhance(async ({ submit }) => {
        editCarHistoryContext.isSubmitting = true;

        await submit();

        const result = editCarHistory.result;

        if (result?.success) {
            toast.success(result.message);
        } else {
            toast.error(result?.message as string);
        }

        editCarHistoryContext.isSubmitting = false;
    });
</script>

<form
    {...handleEditCarHistory}
>
    <div class="space-y-8">
        <VehicleHistory car={car} editCarForm={editCarHistory} />

        <div class="flex items-center justify-between border-t border-border pt-8">
            <Button
                href={ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE}
                variant="secondary"
                size="lg"
                disabled={editCarHistoryContext.isSubmitting}
            >
                {m['EditCarPage.EditCarTabHistory.cancel']()}
            </Button>

            <div class="flex space-x-4">
                <Button 
                    type="submit"
                    size="lg" 
                    disabled={editCarHistoryContext.isSubmitting}
                >
                    {#if editCarHistoryContext.isSubmitting}
                        <Loader class="mr-2 h-4 w-4 animate-spin" />
                    {/if}
                    {m['EditCarPage.EditCarTabHistory.saveHistory']()}
                </Button>
            </div>
        </div>
    </div>
</form>