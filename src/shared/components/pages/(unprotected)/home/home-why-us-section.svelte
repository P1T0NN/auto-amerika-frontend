<script lang="ts">
	// LUCIDE ICONS
	import { CheckCircle, DollarSign, Zap } from '@lucide/svelte';
</script>

<section class="bg-muted py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Zašto AutoAmerika?</h2>
			<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
				Godinama iskustva u uvozu vozila iz Amerike
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary"
				>
					<CheckCircle class="h-8 w-8 text-primary-foreground" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Proveren kvalitet</h3>
				<p class="text-muted-foreground">Svaki automobil prolazi detaljnu proveru pre uvoza</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary"
				>
					<DollarSign class="h-8 w-8 text-primary-foreground" />
				</div>

				<h3 class="mb-2 text-xl font-semibold">Transparentne cene</h3>
				<p class="text-muted-foreground">Bez skrivenih troškova - sve je jasno od početka</p>
			</div>

			<div class="text-center">
				<div
					class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary"
				>
					<Zap class="h-8 w-8 text-primary-foreground" />
				</div>
				<h3 class="mb-2 text-xl font-semibold">Brza procedura</h3>
				<p class="text-muted-foreground">Kompletna usluga od kupovine do registracije</p>
			</div>
		</div>
	</div>
</section>