<script lang="ts">
    // COMPONENTS
	import HeaderMobileMenuUnauthenticated from './header-mobile-menu-unauthenticated.svelte';
	import HeaderMobileMenuTitle from './header-mobile-menu-title.svelte';
	import HeaderMobileMenuAuthenticated from './header-mobile-menu-authenticated.svelte';

    // QUERIES
    import { fetchCurrentUser } from '@/features/user/queries/user-queries.remote';

    let { mobileMenuOpen = $bindable() }: { mobileMenuOpen: boolean } = $props();

    const { data: user } = $derived(await fetchCurrentUser());
</script>

<div class="fixed inset-0 z-50 md:hidden">
    <!-- Backdrop -->
    <div
        class="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onclick={() => mobileMenuOpen = false}
        onkeydown={(e) => e.key === 'Escape' && (mobileMenuOpen = false)}
        role="button"
        tabindex="-1"
        aria-label="Close menu"
    ></div>

    <div class="fixed inset-y-0 right-0 w-full max-w-sm bg-zinc-900 shadow-xl">
        <div class="flex h-full flex-col space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <HeaderMobileMenuTitle bind:mobileMenuOpen />

            {#if user}
                <HeaderMobileMenuAuthenticated bind:mobileMenuOpen user={user} />
            {:else}
                <HeaderMobileMenuUnauthenticated bind:mobileMenuOpen />
            {/if}
        </div>
    </div>
</div>
