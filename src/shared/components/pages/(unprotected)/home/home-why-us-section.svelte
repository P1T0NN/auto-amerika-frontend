<script lang="ts">
	// LUCIDE ICONS
	import { CheckCircle, DollarSign, Zap } from '@lucide/svelte';
</script>

<!-- Updated to use zinc gradient background matching Browse by Type section -->
<section class="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-white md:text-5xl tracking-tight">Zašto AutoAmerika?</h2>
			<p class="mx-auto max-w-2xl text-xl text-zinc-400">
				Godinama iskustva u uvozu vozila iz Amerike
			</p>
		</div>

		<!-- Enhanced card design with zinc borders and better hover effects -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="group text-center p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border-2 border-zinc-800 group-hover:border-primary group-hover:scale-110 transition-all duration-300"
				>
					<CheckCircle class="h-10 w-10 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-semibold text-white">Proveren kvalitet</h3>
				<p class="text-zinc-400 leading-relaxed">Svaki automobil prolazi detaljnu proveru pre uvoza</p>
			</div>

			<div class="group text-center p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border-2 border-zinc-800 group-hover:border-primary group-hover:scale-110 transition-all duration-300"
				>
					<DollarSign class="h-10 w-10 text-primary" />
				</div>

				<h3 class="mb-3 text-xl font-semibold text-white">Transparentne cene</h3>
				<p class="text-zinc-400 leading-relaxed">Bez skrivenih troškova - sve je jasno od početka</p>
			</div>

			<div class="group text-center p-8 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
				<div
					class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border-2 border-zinc-800 group-hover:border-primary group-hover:scale-110 transition-all duration-300"
				>
					<Zap class="h-10 w-10 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-semibold text-white">Brza procedura</h3>
				<p class="text-zinc-400 leading-relaxed">Kompletna usluga od kupovine do registracije</p>
			</div>
		</div>
	</div>
</section>
