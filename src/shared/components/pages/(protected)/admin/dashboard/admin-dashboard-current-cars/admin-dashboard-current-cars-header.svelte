<script lang="ts">
    // COMPONENTS
    import { Input } from '@/shared/components/ui/input';

    // LUCIDE ICONS
    import { Search } from '@lucide/svelte';

    let { cars, searchTerm = $bindable() } = $props();
</script>

<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-3xl font-bold text-foreground">Trenutni automobili ({cars.length})</h2>
    
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div class="relative">
            <Search class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
                bind:value={searchTerm}
                placeholder="Pretraži po marki, modelu ili VIN..."
                class="pl-10 text-lg h-12 w-full sm:w-80"
            />
        </div>
    </div>
</div>