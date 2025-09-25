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

</div>