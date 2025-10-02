<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

	// LUCIDE ICONS
	import { Facebook, Instagram } from '@lucide/svelte';
</script>

<div class="col-span-1 md:col-span-2">
	<div class="mb-4 flex items-center space-x-2">
		<img
			src="/logo-white.png" 
			alt="AutoAmerika Logo" 
			class="h-16 w-16" 
		/>
		
		<span class="text-xl font-bold">AutoAmerika</span>
	</div>

	<!-- Updated text color to zinc-400 for better contrast on dark background -->
	<p class="mb-4 max-w-md text-zinc-400">
		{m['Footer.about']()}
	</p>

	<!-- Updated social icons with zinc-500 default and red hover state -->
	<div class="flex space-x-4">
		<a
			href="https://www.facebook.com"
			class="text-zinc-500 transition-colors hover:text-primary"
		>
			<span class="sr-only">Facebook</span>
			<Facebook class="h-6 w-6" />
		</a>

		<a
			href="https://www.instagram.com"
			class="text-zinc-500 transition-colors hover:text-primary"
		>
			<span class="sr-only">Instagram</span>
			<Instagram class="h-6 w-6" />
		</a>
	</div>
</div>
