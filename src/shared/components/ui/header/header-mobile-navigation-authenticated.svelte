<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/state';

    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import * as Avatar from '@/shared/components/ui/avatar/index.js';
    import LogoutButton from './logout-button.svelte';

    // DATA
    import { navigationLinks } from '@/shared/data/navigation-links-data';

    // UTILS
    import { getInitials } from '@/shared/utils/name-utils';

    // TYPES
	import type { typesUser } from '@/features/auth/types/auth-types';

    let { user }: { user: typesUser | null } = $props();

    let mobileMenuOpen = $state(false);
</script>

<!-- Updated mobile menu with zinc colors for consistency -->
<div class="md:hidden">
    <div class="space-y-1 border-t border-zinc-800 bg-zinc-900 px-2 pt-2 pb-3 sm:px-3">
        {#if user}
            <div class="flex items-center space-x-2 px-3 py-2">
                <Avatar.Root class="h-8 w-8">
                    <Avatar.Fallback class="bg-primary text-primary-foreground text-sm font-medium">
                        {getInitials(user.name)}
                    </Avatar.Fallback>
                </Avatar.Root>
                <div class="flex flex-col items-start">
                    <span class="text-sm font-medium text-white">{user.name}</span>
                    <span class="text-xs text-zinc-400">{user.email}</span>
                </div>
            </div>
        {/if}

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

        <div class="border-t border-zinc-800 pt-2 mt-2">
            <a
                href={UNPROTECTED_PAGE_ENDPOINTS.SETTINGS_PAGE}
                class="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === UNPROTECTED_PAGE_ENDPOINTS.SETTINGS_PAGE ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => (mobileMenuOpen = false)}
                aria-label="Settings"
            >
                {m['Header.settings']()}
            </a>

            <a
                href={UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY}
                class="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => (mobileMenuOpen = false)}
                aria-label="Privacy Policy"
            >
                {m['Header.privacyPolicy']()}
            </a>

            <a
                href={UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_USE}
                class="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-md transition-colors {page.url.pathname === UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_USE ? 'bg-zinc-800 text-white border-l-2 border-primary' : ''}"
                onclick={() => (mobileMenuOpen = false)}
                aria-label="Terms and Conditions"
            >
                {m['Header.termsOfUse']()}
            </a>
        </div>

        <div class="pt-2">
            <LogoutButton />
        </div>
    </div>
</div>
