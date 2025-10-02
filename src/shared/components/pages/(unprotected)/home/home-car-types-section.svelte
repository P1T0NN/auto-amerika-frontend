<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // DATA
    import { carTypes } from '@/features/cars/data/cars-data';

	let hoveredType = $state<number | null>(null);
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 px-6 py-32">
	<div class="relative z-10 mx-auto max-w-7xl">
		<div class="mb-20 text-center">
			<p class="animate-fade-in mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
				{m["HomePage.CarTypesSection.title"]()}
			</p>
			<h2 class="mb-6 text-6xl leading-none font-bold tracking-tight text-white md:text-7xl">
				{m["HomePage.CarTypesSection.browseBy"]()} <span class="text-primary">{m["HomePage.CarTypesSection.type"]()}</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-400">
				{m["HomePage.CarTypesSection.description"]()}
			</p>
		</div>

		<!-- Redesigned grid with more sophisticated cards and better spacing -->
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
			{#each carTypes as type, index}
				<a
                    href={`${UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}?carType=${type.value}`}
					class="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] md:p-10"
					onmouseenter={() => (hoveredType = index)}
					onmouseleave={() => (hoveredType = null)}
				>
					<!-- Car type SVG icons -->
					<div class="relative z-10 flex flex-col items-center gap-6">
						<div
							class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-primary/80 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
						>
							<type.icon
								class="h-10 w-10 text-primary transition-colors duration-500 group-hover:text-white"
							/>
						</div>
						<h3
							class="text-center text-xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-primary md:text-2xl"
						>
							{type.name}
						</h3>
					</div>

					<!-- Added animated gradient overlay on hover -->
					{#if hoveredType === index}
						<div
							class="pointer-events-none absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent"
						></div>
					{/if}

					<!-- Added corner accent for premium feel -->
					<div
						class="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out;
	}
</style>
