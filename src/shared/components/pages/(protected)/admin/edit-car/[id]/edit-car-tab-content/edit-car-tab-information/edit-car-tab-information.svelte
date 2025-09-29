<script lang="ts">
    // COMPONENTS
	import BasicInformation from './basic-information.svelte';
	import TechnicalSpecifications from './technical-specifications.svelte';
    import { Button } from '@/shared/components/ui/button';
    import { toast } from 'svelte-sonner';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // CONTEXT
    import { editCarInformationContext } from '@/features/cars/context/cars-context.svelte';

    // ACTIONS
    import { editCarInformation } from '@/features/cars/actions/cars-actions.remote';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Loader } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();

    const handleEditCarInformation = editCarInformation.enhance(async ({ submit }) => {
        editCarInformationContext.isSubmitting = true;

        await submit();

        const result = editCarInformation.result;

        if (result?.success) {
            toast.success(result.message);
        } else {
            toast.error(result?.message as string);
        }

        editCarInformationContext.isSubmitting = false;
    });
</script>

<form
    {...handleEditCarInformation}
>
    <div class="space-y-8">
        <BasicInformation car={car} editCarForm={editCarInformation} />

        <TechnicalSpecifications car={car} editCarForm={editCarInformation} />

        <div class="flex items-center justify-between border-t border-border pt-8">
            <Button
                href={ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE}
                variant="secondary"
                size="lg"
            >
                Cancel
            </Button>

            <div class="flex space-x-4">
                <Button 
                    type="submit"
                    size="lg" 
                    disabled={editCarInformationContext.isSubmitting}
                >
                    {#if editCarInformationContext.isSubmitting}
                        <Loader class="mr-2 h-4 w-4 animate-spin" />
                    {/if}
                    Save Information
                </Button>
            </div>
        </div>
    </div>
</form>
