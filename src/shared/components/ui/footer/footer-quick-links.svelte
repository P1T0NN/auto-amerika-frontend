<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from "@/shared/config";
</script>

<div>
	<!-- Updated heading to zinc-300 for better hierarchy -->
	<h3 class="mb-4 text-sm font-semibold tracking-wider uppercase text-zinc-300">{m['Footer.quickLinks.title']()}</h3>
	<ul class="space-y-2">
		<li>
			<!-- Updated link colors: zinc-400 default, red hover -->
			<a href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE} class="text-zinc-400 transition-colors hover:text-primary">{m['Footer.quickLinks.cars']()}</a>
		</li>
		
		<li>
			<a href={UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE} class="text-zinc-400 transition-colors hover:text-primary">{m['Footer.quickLinks.about']()}</a>
		</li>
		
		<li>
			<a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE} class="text-zinc-400 transition-colors hover:text-primary">{m['Footer.quickLinks.contact']()}</a>
		</li>
		
		<li>
			<a href={UNPROTECTED_PAGE_ENDPOINTS.REVIEWS_PAGE} class="text-zinc-400 transition-colors hover:text-primary">{m['Footer.quickLinks.reviews']()}</a>
		</li>
	</ul>
</div>
