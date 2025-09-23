<script lang="ts">
    // LUCIDE ICONS
    import { Check } from '@lucide/svelte';

    let { car } = $props();
</script>

<div class="space-y-6">
    <div>
        <h2 class="mb-4 text-2xl font-semibold">Opis vozila</h2>
        <div class="prose prose-gray max-w-none">
            {#each car.description.trim().split('\n\n') as paragraph}
                <p class="mb-4 leading-relaxed text-muted-foreground">{paragraph.trim()}</p>
            {/each}
        </div>
    </div>

    <div>
        <h3 class="mb-4 text-xl font-semibold">Oprema i karakteristike</h3>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3">
            {#each car.features as feature}
                <div class="flex items-center gap-2 rounded bg-muted p-2">
                    <Check class="h-4 w-4 flex-shrink-0 text-green-600" />
                    <span class="text-sm">{feature}</span>
                </div>
            {/each}
        </div>
    </div>
</div>