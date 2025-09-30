<script lang="ts">
    // COMPONENTS
    import HeaderMobileNavigationAuthenticated from './header-mobile-navigation-authenticated.svelte';
    import HeaderMobileNavigationUnauthenticated from './header-mobile-navigation-unauthenticated.svelte';

    // QUERIES
    import { fetchCurrentUser } from '@/features/user/queries/user-queries.remote';
</script>

<svelte:boundary>
    {@const { data: user } = await fetchCurrentUser()}
    {#if user}
        <HeaderMobileNavigationAuthenticated {user} />
    {/if}
    
    {#snippet pending()}
        <HeaderMobileNavigationUnauthenticated />
    {/snippet}

    {#snippet failed()}
        <HeaderMobileNavigationUnauthenticated />
    {/snippet}
</svelte:boundary>
