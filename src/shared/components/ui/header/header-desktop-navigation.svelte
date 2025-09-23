<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/state';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

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

<div class="hidden md:block">
    <Button 
    href={UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE}
    aria-label="Login"
>
        Login
    </Button>
</div>