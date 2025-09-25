<script lang="ts">
    // SVELTEKIT IMPORTS
    import { goto } from "$app/navigation";

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from "@/shared/config";

    // COMPONENTS
    import { Button } from "@/shared/components/ui/button";
    import AddCarBasicInformation from "./add-car-basic-information.svelte";
    import AddCarVehicleHistory from "./add-car-vehicle-history.svelte";
	import AddCarImportInformation from "./add-car-import-information.svelte";
    import { toast } from "svelte-sonner";

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    // ACTIONS
    import { addCar } from '@/features/cars/actions/cars-actions.remote';

    // LUCIDE ICONS
    import { Loader } from "@lucide/svelte";

    const handleAddCar = addCar.enhance(async ({ form, submit }) => {
        addCarContext.isSubmitting = true;

        await submit();

        const result = addCar.result;

        if (result?.success) {
            toast.success(result.message);
            form.reset();
            goto(ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE);
        } else if (result?.message) {
            toast.error(result.message);
        }

        addCarContext.isSubmitting = false;
    });
</script>

<form {...handleAddCar}>
    <div class="space-y-8">
        <AddCarBasicInformation addCar={addCar} />

        <AddCarVehicleHistory addCar={addCar} />

        <AddCarImportInformation addCar={addCar} />

        <div class="flex justify-end">
            <Button
                type="submit"
                class="bg-primary hover:bg-primary/90"
                disabled={addCarContext.isSubmitting}
            >
                {#if addCarContext.isSubmitting}
                    <Loader class="mr-2 h-4 w-4 animate-spin" />
                {/if}
                Dodaj automobil
            </Button>
        </div>
    </div>
</form>