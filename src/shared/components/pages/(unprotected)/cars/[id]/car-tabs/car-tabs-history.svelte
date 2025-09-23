<script lang="ts">
    let { car } = $props();
</script>

<div>
    <h2 class="mb-4 text-2xl font-semibold">Istorija vozila</h2>
    <div class="space-y-4">
        {#each Object.entries(car.history) as [key, value]}
            <div class="flex items-center justify-between rounded bg-muted p-3">
                <span class="font-medium">{key}</span>
                <span class="text-muted-foreground">{value}</span>
            </div>
        {/each}
    </div>
</div>