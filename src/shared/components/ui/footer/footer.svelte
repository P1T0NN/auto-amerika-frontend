<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

	// COMPONENTS
	import FooterQuickLinks from "./footer-quick-links.svelte";
	import FooterContactInformation from "./footer-contact-information.svelte";
	import FooterInformationAndSocials from "./footer-information-and-socials.svelte";
</script>

<!-- Updated to use zinc-950 background with zinc borders for premium dark footer -->
<footer class="bg-zinc-950 text-zinc-100">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<FooterInformationAndSocials />

			<FooterQuickLinks />

			<FooterContactInformation />
		</div>

		<!-- Updated border to zinc-800 and text to zinc-500 -->
		<div class="mt-8 border-t border-zinc-800 pt-8">
			<p class="text-center text-zinc-500">© {new Date().getFullYear()} AutoAmerika. {m['Footer.copyright']()}</p>
		</div>
	</div>
</footer>
