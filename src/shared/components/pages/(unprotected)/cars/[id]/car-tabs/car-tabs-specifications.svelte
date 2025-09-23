<script lang="ts">
    let { car } = $props();
</script>

<div>
    <h2 class="mb-4 text-2xl font-semibold">Tehničke specifikacije</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {#each Object.entries(car.specifications) as [key, value]}
            <div class="flex items-center justify-between rounded bg-muted p-3">
                <span class="font-medium">{key}</span>
                <span class="text-muted-foreground">{value}</span>
            </div>
        {/each}
    </div>
</div>