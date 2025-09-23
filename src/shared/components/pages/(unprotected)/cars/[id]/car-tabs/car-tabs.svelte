<script lang="ts">
    // COMPONENTS
	import CarTabsOverview from './car-tabs-overview.svelte';
	import CarTabsSpecifications from './car-tabs-specifications.svelte';
	import CarTabsHistory from './car-tabs-history.svelte';

    let { car, activeTab = $bindable() } = $props();

    const handleActiveTabChange = (tab: string) => {
        activeTab = tab;
    };
</script>

<div class="border-b border-border">
    <nav class="flex space-x-8">
        <button
            onclick={() => handleActiveTabChange('overview')}
            class="border-b-2 px-1 py-2 text-sm font-medium transition-colors
                   {activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'}"
        >
            Pregled
        </button>
        
        <button
            onclick={() => handleActiveTabChange('specifications')}
            class="border-b-2 px-1 py-2 text-sm font-medium transition-colors
                   {activeTab === 'specifications'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'}"
        >
            Specifikacije
        </button>

        <button
            onclick={() => handleActiveTabChange('history')}
            class="border-b-2 px-1 py-2 text-sm font-medium transition-colors
                   {activeTab === 'history'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'}"
        >
            Istorija
        </button>
    </nav>
</div>

<div class="space-y-6">
    {#if activeTab === 'overview'}
        <CarTabsOverview {car} />
    {:else if activeTab === 'specifications'}
        <CarTabsSpecifications {car} />
    {:else if activeTab === 'history'}
        <CarTabsHistory {car} />
    {/if}
</div>