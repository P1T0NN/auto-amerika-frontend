<script lang="ts">
    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';

    async function submitForm() {
        if (!addCarContext.validateCurrentStep()) return;

        addCarContext.isSubmitting = true;

        // Here you would submit to your API
        const formData = {
            car: addCarContext.carData,
            specifications: addCarContext.specifications.filter((spec) => spec.specName && spec.specValue),
            history: addCarContext.historyData,
            import: addCarContext.importData,
            features: addCarContext.selectedFeatures,
            images: addCarContext.imageFiles
        };

        console.log('[AutoAmerika] Submitting car data:', formData);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        alert('Automobil je uspešno dodat!');

        // Reset form
        addCarContext.resetForm();
    }
</script>

<div class="flex items-center justify-between border-t bg-muted/30 p-6">
    <Button variant="outline" onclick={() => addCarContext.prevStep()} disabled={addCarContext.currentStep === 1}>Nazad</Button>

    <div class="text-sm text-muted-foreground">
        Korak {addCarContext.currentStep} od {addCarContext.totalSteps}
    </div>

    {#if addCarContext.currentStep < addCarContext.totalSteps}
        <Button onclick={() => addCarContext.nextStep()} class="bg-primary hover:bg-primary/90">Sledeći korak</Button>
    {:else}
        <Button
            onclick={submitForm}
            disabled={addCarContext.isSubmitting}
            class="bg-primary hover:bg-primary/90"
        >
            {addCarContext.isSubmitting ? 'Dodavanje...' : 'Dodaj automobil'}
        </Button>
    {/if}
</div>