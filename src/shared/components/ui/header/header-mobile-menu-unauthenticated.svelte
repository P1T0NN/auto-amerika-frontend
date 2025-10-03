<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/state';

    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '../button';

    // DATA
    import { navigationLinks } from '@/shared/data/navigation-links-data';

    // LUCIDE ICONS
    import { Settings, Shield, FileText } from '@lucide/svelte';

    let { mobileMenuOpen = $bindable() }: { mobileMenuOpen: boolean } = $props();
</script>

<div class="flex-1 overflow-y-auto">
    <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        {#each navigationLinks as item}
            {@const Icon = item.icon}
            <a
                href={item.href}
                class="flex items-center space-x-2 px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === item.href ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => mobileMenuOpen = false}
                aria-label={item.name}
            >
                <Icon class="h-5 w-5" />
                <span>{item.name}</span>
            </a>
        {/each}

        <div class="border-t border-zinc-800 pt-2 mt-2">
            <a
                href={UNPROTECTED_PAGE_ENDPOINTS.SETTINGS_PAGE}
                class="flex items-center space-x-2 px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === UNPROTECTED_PAGE_ENDPOINTS.SETTINGS_PAGE ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => mobileMenuOpen = false}
                aria-label="Settings"
            >
                <Settings class="h-5 w-5" />
                <span>{m['Header.settings']()}</span>
            </a>

            <a
                href={UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY}
                class="flex items-center space-x-2 px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => mobileMenuOpen = false}
                aria-label="Privacy Policy"
            >
                <Shield class="h-5 w-5" />
                <span>{m['Header.privacyPolicy']()}</span>
            </a>

            <a
                href={UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_USE}
                class="flex items-center space-x-2 px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_USE ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => mobileMenuOpen = false}
                aria-label="Terms and Conditions"
            >
                <FileText class="h-5 w-5" />
                <span>{m['Header.termsOfUse']()}</span>
            </a>
        </div>

        <div class="pt-2">
            <Button
                onclick={() => mobileMenuOpen = false}
                class="w-full"
                aria-label="Login"
                href={UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE}
            >
                {m['Header.login']()}
            </Button>
        </div>
    </div>
</div>