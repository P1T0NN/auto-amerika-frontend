<script lang="ts">
    // LUCIDE ICONS
    import { CheckCircle, BarChart3, Settings, Truck } from '@lucide/svelte';

    let { activeTab = $bindable() }: { activeTab: string } = $props();

    const tabs = [
		{
			id: 'information',
			label: 'Car Information',
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			id: 'history',
			label: 'History',
			icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
		},
		{
			id: 'import',
			label: 'Car Import',
			icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573 1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
		},
		{
			id: 'settings',
			label: 'Settings',
			icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.573 1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
		}
	];
</script>

<div class="mb-8">
    <nav class="flex w-full rounded-lg bg-muted p-1">
        {#each tabs as tab}
            <button
                class="flex flex-1 items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 {activeTab ===
                tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'}"
                onclick={() => (activeTab = tab.id)}
            >
                {#if tab.id === 'information'}
                    <CheckCircle class="mr-2 h-5 w-5" />
                {:else if tab.id === 'history'}
                    <BarChart3 class="mr-2 h-5 w-5" />
                {:else if tab.id === 'import'}
                    <Truck class="mr-2 h-5 w-5" />
                {:else if tab.id === 'settings'}
                    <Settings class="mr-2 h-5 w-5" />
                {:else}
                    <CheckCircle class="mr-2 h-5 w-5" />
                {/if}
                {tab.label}
            </button>
        {/each}
    </nav>
</div>