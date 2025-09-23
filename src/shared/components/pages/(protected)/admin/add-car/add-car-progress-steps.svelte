<script lang="ts">
    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';
</script>

<div class="mb-8">
    <div class="flex items-center justify-between">
        {#each Array(addCarContext.totalSteps) as _, i}
            <div class="flex items-center">
                <button
                    onclick={() => addCarContext.goToStep(i + 1)}
                    class="flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-colors
                        {addCarContext.currentStep === i + 1
                            ? 'border-primary bg-primary text-primary-foreground'
                            : addCarContext.currentStep > i + 1
                                ? 'border-primary bg-primary/20 text-primary'
                                : 'border-border text-muted-foreground hover:border-primary/50'}"
                >
                    {i + 1}
                </button>
                
                {#if i < addCarContext.totalSteps - 1}
                    <div class="mx-2 h-0.5 w-16 {addCarContext.currentStep > i + 1 ? 'bg-primary' : 'bg-border'}"></div>
                {/if}
            </div>
        {/each}
    </div>
    
    <div class="mt-2 flex justify-between text-sm text-muted-foreground">
        <span>Osnovni podaci</span>
        <span>Specifikacije</span>
        <span>Istorija</span>
        <span>Uvoz</span>
        <span>Slike i završetak</span>
    </div>
</div>