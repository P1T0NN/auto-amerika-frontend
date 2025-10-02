<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();
</script>

<div class="space-y-6">
    <div>
        <h2 class="mb-4 text-2xl font-semibold">{m['CarPage.CarDescriptionSection.title']()}</h2>
        <div class="prose prose-gray max-w-none">
            {#each car.description.trim().split('\n\n') as paragraph}
                <p class="mb-4 leading-relaxed text-muted-foreground">{paragraph.trim()}</p>
            {/each}
        </div>
    </div>

</div>