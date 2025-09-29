<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/state';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

    // DATA
    import { navigationLinks } from '@/shared/data/navigation-links-data';

    let mobileMenuOpen = $state(false);
</script>

<!-- Updated mobile menu with zinc colors for consistency -->
<div class="md:hidden">
    <div class="space-y-1 border-t border-zinc-800 bg-zinc-900 px-2 pt-2 pb-3 sm:px-3">
        {#each navigationLinks as item}
            <a
                href={item.href}
                class="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === item.href ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => (mobileMenuOpen = false)}
                aria-label={item.name}
            >
                {item.name}
            </a>
        {/each}
        
        <div class="pt-2">
            <Button
                href={UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE}
                class="w-full"
                aria-label="Login"
            >
                Login
            </Button>
        </div>
    </div>
</div>
