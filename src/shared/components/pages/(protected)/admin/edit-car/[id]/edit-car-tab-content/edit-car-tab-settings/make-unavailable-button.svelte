<script lang="ts">
    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
    import AlertDialogButton from '@/shared/components/ui/alert-dialog-button/alert-dialog-button.svelte';
    import { toast } from 'svelte-sonner';

    // ACTIONS
    import { makeUnavailable } from '@/features/cars/actions/cars-actions.remote';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    // LUCIDE ICONS
    import { Loader, Trash2 } from '@lucide/svelte';

    let { car }: { car: typesCar } = $props();

    let isPending = $state(false);

    const handleMakeUnavailable = async () => {
        isPending = true;
        
        const requestData = {
            carId: car.id
        }

        const result = await makeUnavailable(requestData);

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }

        isPending = false;
    }
</script>

<AlertDialogButton
    onProceed={handleMakeUnavailable}
    triggerClass="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground shadow hover:bg-destructive/90 h-9 px-4 py-2 ml-4 px-6 py-2"
    actionClass="bg-destructive text-white hover:bg-destructive/90"
    isDisabled={isPending}
>
    <Button 
        variant="destructive" 
        class="ml-4 px-6 py-2"
        disabled={isPending}
    >
        {#if isPending}
            <Loader class="mr-2 h-4 w-4 animate-spin" />
        {:else}
            <Trash2 class="mr-2 h-4 w-4" />
        {/if}
        Make unavailable
    </Button>
</AlertDialogButton>