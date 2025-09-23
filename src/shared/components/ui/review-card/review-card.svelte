<script lang="ts">
	// COMPONENTS
	import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
	import { Badge } from '@/shared/components/ui/badge';
	import StarRating from '@/shared/components/ui/star-rating/star-rating.svelte';

	// UTILS
	import { formatDate } from '@/shared/utils/date-utils';

	let { review } = $props();
</script>

<Card class="h-full">
	<CardHeader class="pb-4">
		<div class="flex items-start justify-between">
			<div class="flex items-center gap-3">
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground"
				>
					{review.customerName.charAt(0).toUpperCase()}
				</div>
				<div>
					<h3 class="font-semibold text-foreground">{review.customerName}</h3>
					<p class="text-sm text-muted-foreground">{formatDate(review.date)}</p>
				</div>
			</div>
			<StarRating rating={review.rating} size="sm" />
		</div>
	</CardHeader>

	<CardContent class="pt-0">
		<div class="space-y-3">
			{#if review.carPurchased}
				<div class="flex items-center gap-2">
					<Badge variant="outline" class="text-xs">
						{review.carPurchased}
					</Badge>
					{#if review.verified}
						<Badge variant="secondary" class="bg-green-100 text-xs text-green-800">
							✓ Verifikovana kupovina
						</Badge>
					{/if}
				</div>
			{/if}

			<blockquote class="leading-relaxed text-muted-foreground">
				"{review.comment}"
			</blockquote>

			{#if review.pros && review.pros.length > 0}
				<div>
					<h4 class="mb-2 text-sm font-medium text-foreground">Prednosti:</h4>
					<ul class="space-y-1 text-sm text-muted-foreground">
						{#each review.pros as pro}
							<li class="flex items-center gap-2">
								<svg
									class="h-3 w-3 flex-shrink-0 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								{pro}
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if review.helpful}
				<div class="flex items-center justify-between border-t border-border pt-2">
					<span class="text-xs text-muted-foreground">
						{review.helpful}
						{review.helpful === 1 ? 'osoba smatra' : 'osoba smatra'} ovu recenziju korisnom
					</span>
					<button class="text-xs text-primary hover:text-primary/80"> Korisno </button>
				</div>
			{/if}
		</div>
	</CardContent>
</Card>
