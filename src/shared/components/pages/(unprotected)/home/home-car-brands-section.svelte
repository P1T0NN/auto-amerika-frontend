<script lang="ts">
	// CONFIG
	import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

	// ICONS
	import { ArrowRight } from '@lucide/svelte';

	const brands = [
		{
			name: 'Audi',
			value: 'audi',
			image: '/home/audi.jpg',
			description: 'German Engineering Excellence',
			tagline: 'Vorsprung durch Technik'
		},
		{
			name: 'BMW',
			value: 'bmw',
			image: '/home/bmw.jpg',
			description: 'The Ultimate Driving Machine',
			tagline: 'Sheer Driving Pleasure'
		},
		{
			name: 'Porsche',
			value: 'porsche',
			image: '/home/porsche.jpg',
			description: 'Legendary Sports Performance',
			tagline: 'There Is No Substitute'
		},
		{
			name: 'Nissan',
			value: 'nissan',
			image: '/home/nissan.jpg',
			description: 'Innovation That Excites',
			tagline: 'Innovation For All'
		}
	];

	let hoveredBrand = $state<number | null>(null);
</script>

<section class="bg-white px-6 py-32">
	<div class="mx-auto max-w-7xl">
		<!-- Enhanced typography matching the type section -->
		<div class="mb-20 text-center">
			<p class="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
				Premium Automotive Brands
			</p>
			<h2 class="mb-6 text-6xl leading-none font-bold tracking-tight text-zinc-950 md:text-7xl">
				Browse by <span class="text-primary">Brand</span>
			</h2>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-600">
				Discover iconic manufacturers known for excellence and innovation
			</p>
		</div>

		<!-- Larger, more impactful brand cards with better hover effects -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each brands as brand, index}
				<a
					href={`${UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}?brand=${brand.value}`}
					class="group relative overflow-hidden rounded-3xl bg-zinc-100 shadow-xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl"
					onmouseenter={() => (hoveredBrand = index)}
					onmouseleave={() => (hoveredBrand = null)}
				>
					<!-- Larger aspect ratio for more dramatic presentation -->
					<div class="relative aspect-[16/10] overflow-hidden">
						<img
							src={brand.image || '/placeholder.svg'}
							alt={brand.name}
							class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
						/>

						<!-- More sophisticated gradient overlay -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"
						></div>
					</div>

					<!-- Redesigned content overlay with better typography -->
					<div class="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
						<div
							class="translate-y-2 transform transition-all duration-500 group-hover:translate-y-0"
						>
							<h3
								class="mb-3 text-5xl font-bold tracking-tight text-white drop-shadow-2xl md:text-6xl"
							>
								{brand.name}
							</h3>
							<p class="mb-2 text-lg font-medium text-white/90 drop-shadow-lg md:text-xl">
								{brand.description}
							</p>
							<p
								class="translate-y-4 transform text-sm font-semibold tracking-wide text-primary opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-base"
							>
								{brand.tagline}
							</p>
						</div>

						<!-- Added animated arrow indicator -->
						<div
							class="absolute right-8 bottom-8 flex h-14 w-14 scale-75 transform items-center justify-center rounded-full bg-primary opacity-0 shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
						>
							<ArrowRight
								class="h-7 w-7 transform text-white transition-transform duration-300 group-hover:translate-x-1"
								strokeWidth={2.5}
							/>
						</div>
					</div>

					<!-- Added top corner accent line -->
					<div
						class="absolute top-0 left-0 h-1 w-0 bg-primary transition-all duration-700 group-hover:w-32"
					></div>
				</a>
			{/each}
		</div>
	</div>
</section>
