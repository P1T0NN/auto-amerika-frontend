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

<div class="md:hidden">
    <div class="space-y-1 border-t border-border bg-card px-2 pt-2 pb-3 sm:px-3">
        {#each navigationLinks as item}
            <a
                href={item.href}
                class="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground {page.url.pathname === item.href ? 'bg-muted text-primary' : ''}"
                onclick={() => (mobileMenuOpen = false)}
                aria-label={item.name}
            >
                {item.name}
            </a>
        {/each}
        
        <div class="pt-2">
            <Button
                href={UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE}
                aria-label="Login"
            >
                Login
            </Button>
        </div>
    </div>
</div>