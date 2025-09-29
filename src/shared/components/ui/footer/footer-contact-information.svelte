<script lang="ts">
	// CONFIG
	import { CONTACT_INFO } from "@/shared/config";
</script>

<div>
	<!-- Updated heading to zinc-300 for better hierarchy -->
	<h3 class="mb-4 text-sm font-semibold tracking-wider uppercase text-zinc-300">Kontakt</h3>
	<!-- Updated text color to zinc-400 for better contrast -->
	<ul class="space-y-2 text-zinc-400">
		<li>{CONTACT_INFO.PHONE}</li>
		<li>{CONTACT_INFO.EMAIL}</li>
		<li>{CONTACT_INFO.ADDRESS}</li>
	</ul>
</div>
