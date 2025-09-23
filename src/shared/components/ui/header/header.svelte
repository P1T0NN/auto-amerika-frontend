<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
	import { Button } from '@/shared/components/ui/button';
    import HeaderLogo from './header-logo.svelte';
    import HeaderDesktopNavigation from './header-desktop-navigation.svelte';
    import HeaderMobileNavigation from './header-mobile-navigation.svelte';

    // LUCIDE ICONS
	import { Menu } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);

    const handleOpenMobileMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
    };
</script>

<header class="sticky top-0 z-50 border-b border-border bg-background">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<HeaderLogo />

			<HeaderDesktopNavigation />

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<Button
					onclick={handleOpenMobileMenu}
					class="p-2 text-muted-foreground hover:text-foreground"
					aria-label="Open mobile menu"
				>
					<Menu class="h-6 w-6" />
				</Button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<HeaderMobileNavigation />
		{/if}
	</nav>
</header>
