<script lang="ts">
    // DATA
    import { brands } from '@/features/cars/data/cars-data';
</script>

<section class="bg-background py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-foreground md:text-4xl">Brendovi koje uvozimo</h2>
			<p class="text-xl text-muted-foreground">Radimo sa svim vodećim američkim proizvođačima</p>
		</div>

		<div class="grid grid-cols-2 items-center gap-8 md:grid-cols-3 lg:grid-cols-6">
			{#each brands as brand}
				<div
					class="flex items-center justify-center rounded-lg bg-card p-4 transition-shadow hover:shadow-md"
				>
					<img
						src={brand.logo || '/placeholder.svg'}
						alt="{brand.name} logo"
						class="max-h-12 w-auto opacity-70 transition-opacity hover:opacity-100"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>