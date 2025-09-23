<script lang="ts">
    // COMPONENTS
    import { Card, CardContent } from "@/shared/components/ui/card";
    import AddFormStep1 from "./add-form-step-1.svelte";
    import AddFormNavigationSteps from "./add-form-navigation-steps.svelte";
	import AddFormStep2 from "./add-form-step-2.svelte";
	import AddFormStep3 from "./add-form-step-3.svelte";
	import AddFormStep4 from "./add-form-step-4.svelte";
	import AddFormStep5 from "./add-form-step-5.svelte";

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';
</script>

<Card class="pt-0 border-2 border-accent/20">
    <CardContent class="p-6">
        <!-- Step 1: Basic Car Info -->
        {#if addCarContext.currentStep === 1}
            <AddFormStep1 />
        {/if}

        <!-- Step 2: Specifications -->
        {#if addCarContext.currentStep === 2}
            <AddFormStep2 />
        {/if}

        <!-- Step 3: History -->
        {#if addCarContext.currentStep === 3}
            <AddFormStep3 />
        {/if}

        <!-- Step 4: Import Info -->
        {#if addCarContext.currentStep === 4}
            <AddFormStep4 />
        {/if}

        <!-- Step 5: Images and Finish -->
        {#if addCarContext.currentStep === 5}
            <AddFormStep5 />
        {/if}
    </CardContent>

    <AddFormNavigationSteps />
</Card>