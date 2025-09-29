<script lang="ts">
    // LUCIDE ICONS
	import { Expand, X } from '@lucide/svelte';

	let {
		images = [],
		onRemove = undefined,
		onRestore = undefined,
		removedIndexes = [],
		imageIds = []
	}: {
		images?: string[];
		onRemove?: (id: any, index: number) => void;
		onRestore?: (id: any, index: number) => void;
		removedIndexes?: number[];
		imageIds?: any[];
	} = $props();
	let currentImageIndex = $state(0);
	let isFullscreen = $state(false);

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}

	function prevImage() {
		currentImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
	}

	function selectImage(index: number) {
		currentImageIndex = index;
	}

	function toggleFullscreen() {
		isFullscreen = !isFullscreen;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isFullscreen) return;

		if (event.key === 'Escape') {
			isFullscreen = false;
		} else if (event.key === 'ArrowLeft') {
			prevImage();
		} else if (event.key === 'ArrowRight') {
			nextImage();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="space-y-4" role="region" aria-label="Image gallery">
	<!-- Main Image Carousel -->
	<div class="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
		{#if images.length > 0}
			<button
				class="h-full w-full cursor-pointer border-0 bg-transparent p-0"
				onclick={toggleFullscreen}
				aria-label="View image in fullscreen"
			>
				<img
					src={images[currentImageIndex] || '/placeholder.svg'}
					alt="Car image {currentImageIndex + 1}"
					class="h-full w-full object-cover"
				/>
			</button>

			<!-- Navigation Arrows -->
			{#if images.length > 1}
				<button
					onclick={prevImage}
					class="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
					aria-label="Previous image"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<button
					onclick={nextImage}
					class="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
					aria-label="Next image"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			{/if}

			<!-- Management Buttons -->
			{#if onRemove && onRestore}
				{@const currentId = imageIds[currentImageIndex]}
				{@const isRemoved = removedIndexes.includes(currentImageIndex)}

				{#if isRemoved}
					<button
						onclick={() => onRestore?.(currentId, currentImageIndex)}
						class="absolute top-2 left-2 rounded-full bg-green-500 p-2 text-white transition-colors hover:bg-green-600"
						aria-label="Restore image"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
					</button>
				{:else}
					<button
						onclick={() => onRemove?.(currentId, currentImageIndex)}
						class="absolute top-2 left-2 rounded-full bg-red-500 p-2 text-white transition-colors hover:bg-red-600"
						aria-label="Remove image"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
						</svg>
					</button>
				{/if}
			{/if}

			<!-- Fullscreen Button -->
			<button
				onclick={toggleFullscreen}
				class="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
				aria-label="View fullscreen"
			>
				<Expand class="h-5 w-5" />
			</button>

			<!-- Image Counter -->
			{#if images.length > 1}
				<div class="absolute right-2 bottom-2 rounded bg-black/50 px-2 py-1 text-sm text-white">
					{currentImageIndex + 1} / {images.length}
				</div>
			{/if}
		{:else}
			<div class="flex h-full w-full items-center justify-center">
				<span class="text-muted-foreground">Nema dostupnih slika</span>
			</div>
		{/if}
	</div>

	<!-- Thumbnail Strip -->
	{#if images.length > 1}
		<div class="flex gap-2 overflow-x-auto pb-2">
			{#each images as image, index}
				<button
					onclick={() => selectImage(index)}
					class="h-16 w-20 flex-shrink-0 overflow-hidden rounded border-2 transition-colors
					{index === currentImageIndex
						? 'border-primary'
						: 'border-transparent hover:border-muted-foreground'}"
					aria-label="Thumbnail {index + 1}"
				>
					<img
						src={image || '/placeholder.svg'}
						alt="Thumbnail {index + 1}"
						class="h-full w-full object-cover"
					/>
				</button>
			{/each}
		</div>
	{/if}
</div>

<!-- Fullscreen Modal -->
{#if isFullscreen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
		<div class="relative max-h-full max-w-7xl p-4">
			<img
				src={images[currentImageIndex] || '/placeholder.svg'}
				alt="Car image {currentImageIndex + 1}"
				class="max-h-full max-w-full object-contain"
			/>

			<!-- Close Button -->
			<button
				onclick={toggleFullscreen}
				class="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
				aria-label="Close fullscreen"
			>
				<X class="h-6 w-6" />
			</button>

			<!-- Navigation in Fullscreen -->
			{#if images.length > 1}
				<button
					onclick={prevImage}
					class="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
					aria-label="Previous image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<button
					onclick={nextImage}
					class="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
					aria-label="Next image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<div
					class="absolute bottom-4 left-1/2 -translate-x-1/2 transform rounded bg-black/50 px-3 py-1 text-white"
				>
					{currentImageIndex + 1} / {images.length}
				</div>
			{/if}
		</div>
	</div>
{/if}
