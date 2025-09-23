<script lang="ts">
    // COMPONENTS
	import FooterQuickLinks from "./footer-quick-links.svelte";
	import FooterContactInformation from "./footer-contact-information.svelte";
	import FooterInformationAndSocials from "./footer-information-and-socials.svelte";
</script>

<footer class="bg-accent text-accent-foreground">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<FooterInformationAndSocials />

			<FooterQuickLinks />

			<FooterContactInformation />
		</div>

		<div class="mt-8 border-t border-accent-foreground/20 pt-8">
			<p class="text-center text-accent-foreground/60">© {new Date().getFullYear()} AutoAmerika. Sva prava zadržana.</p>
		</div>
	</div>
</footer>
