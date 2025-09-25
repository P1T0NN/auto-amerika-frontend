<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/state';

    // COMPONENTS
    import HeaderDesktopNavigationAuthenticated from './header-desktop-navigation-authenticated.svelte';
    import HeaderDesktopNavigationUnauthenticated from './header-desktop-navigation-unauthenticated.svelte';

    // QUERIES
    import { fetchCurrentUser } from '@/features/user/queries/user-queries.remote';

    // DATA
    import { navigationLinks } from '@/shared/data/navigation-links-data';
</script>

<div class="hidden md:block">
    <div class="ml-10 flex items-baseline space-x-8">
        {#each navigationLinks as item}
            <a
                href={item.href}
                class="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground {page.url.pathname === item.href ? 'border-b-2 border-primary text-primary' : ''}"
                aria-label={item.name}
            >
                {item.name}
            </a>
        {/each}
    </div>
</div>

<svelte:boundary>
    {@const { data: user } = await fetchCurrentUser()}
    {#if user}
        <HeaderDesktopNavigationAuthenticated {user} />
    {/if}
    
    {#snippet pending()}
        <HeaderDesktopNavigationUnauthenticated />
    {/snippet}

    {#snippet failed()}
        <HeaderDesktopNavigationUnauthenticated />
    {/snippet}
</svelte:boundary>