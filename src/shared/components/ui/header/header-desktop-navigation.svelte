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

<!-- Updated navigation styling with zinc colors and red active state -->
<div class="hidden md:block">
    <div class="ml-10 flex items-baseline space-x-8">
        {#each navigationLinks as item}
            <a
                href={item.href}
                class="px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white relative group {page.url.pathname === item.href ? 'text-white' : ''}"
                aria-label={item.name}
            >
                {item.name}
                <!-- Added red underline for active state -->
                {#if page.url.pathname === item.href}
                    <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
                {/if}
                <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
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
