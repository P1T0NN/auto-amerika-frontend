<script lang="ts">
    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
    import HeaderLogo from './header-logo.svelte';
    import HeaderDesktopNavigation from './header-desktop-navigation.svelte';
    import HeaderMobileMenu from './header-mobile-menu.svelte';
	import LanguageSelector from '@/shared/components/ui/language-selector/language-selector.svelte';

    // LUCIDE ICONS
	import { Menu } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);

    const handleOpenMobileMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
    };
</script>

<!-- Updated to use zinc-900 background with zinc-800 border for premium automotive feel -->
<header class="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900 backdrop-blur-sm">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<HeaderLogo />

			<div class="hidden md:flex">
				<HeaderDesktopNavigation />
			</div>

			<div class="md:hidden flex items-center gap-2">
				<LanguageSelector classPlaceholder="text-white" />
				<Button
					onclick={handleOpenMobileMenu}
					variant="ghost"
					class="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
					aria-label="Open mobile menu"
				>
					<Menu class="h-6 w-6" />
				</Button>
			</div>
		</div>

	</nav>
</header>

{#if mobileMenuOpen}
	<HeaderMobileMenu bind:mobileMenuOpen />
{/if}
