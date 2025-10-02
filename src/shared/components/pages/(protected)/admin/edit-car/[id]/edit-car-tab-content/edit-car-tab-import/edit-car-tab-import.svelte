<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import ImportInformation from './import-information.svelte';
    import { Button } from '@/shared/components/ui/button';
    import { toast } from 'svelte-sonner';

    // CONTEXT
    import { editCarImportContext } from '@/features/cars/context/cars-context.svelte';

    // ACTIONS
    import { editCarImport } from '@/features/cars/actions/cars-actions.remote';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Loader } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();

    const handleEditCarImport = editCarImport.enhance(async ({ submit }) => {
        editCarImportContext.isSubmitting = true;

        await submit();

        const result = editCarImport.result;

        if (result?.success) {
            toast.success(result.message);
        } else {
            toast.error(result?.message as string);
        }

        editCarImportContext.isSubmitting = false;
    });
</script>

<form {...handleEditCarImport}>
    <div class="space-y-8">
        <ImportInformation car={car} editCarForm={editCarImport} />

        <div class="flex items-center justify-between border-t border-border pt-8">
            <Button
                href={ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE}
                variant="secondary"
                size="lg"
            >
                {m['EditCarPage.EditCarTabImport.cancel']()}
            </Button>

            <div class="flex space-x-4">
                <Button 
                    type="submit"
                    size="lg" 
                    disabled={editCarImportContext.isSubmitting}
                >
                    {#if editCarImportContext.isSubmitting}
                        <Loader class="mr-2 h-4 w-4 animate-spin" />
                    {/if}
                    {m['EditCarPage.EditCarTabImport.saveImportData']()}
                </Button>
            </div>
        </div>
    </div>
</form>