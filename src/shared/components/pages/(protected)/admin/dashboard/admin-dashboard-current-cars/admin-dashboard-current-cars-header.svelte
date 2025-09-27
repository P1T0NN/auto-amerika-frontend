<script lang="ts">
    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
    import { Input } from '@/shared/components/ui/input';

    // LUCIDE ICONS
    import { Search, Grid3X3, List } from '@lucide/svelte';

    let { filteredCars, searchTerm = $bindable(), viewMode = $bindable() } = $props();
</script>

<div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <h2 class="text-3xl font-bold text-foreground">Trenutni automobili ({filteredCars.length})</h2>
    
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div class="relative">
            <Search class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
                bind:value={searchTerm}
                placeholder="Pretraži po marki, modelu ili VIN..."
                class="pl-10 text-lg h-12 w-full sm:w-80"
            />
        </div>

        <div class="flex rounded-lg border bg-background p-1">
            <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                class="h-10 px-4"
                onclick={() => viewMode = 'list'}
            >
                <List class="h-4 w-4 mr-2" />
                Lista
            </Button>
            
            <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                class="h-10 px-4"
                onclick={() => viewMode = 'grid'}
            >
                <Grid3X3 class="h-4 w-4 mr-2" />
                Mreža
            </Button>
        </div>
    </div>
</div>