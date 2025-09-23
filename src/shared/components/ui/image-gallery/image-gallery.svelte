<script lang="ts">
	let { images = [] }: { images?: string[] } = $props();
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
	Main Image
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

			Navigation Arrows
			{#if images.length > 1}
				<button
					onclick={prevImage}
					class="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
					aria-label="Previous image"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<button
					onclick={nextImage}
					class="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
					aria-label="Next image"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			{/if}

			Fullscreen Button
			<button
				onclick={toggleFullscreen}
				class="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
				aria-label="View fullscreen"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
					/>
				</svg>
			</button>

			Image Counter
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

	Thumbnail Strip
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

Fullscreen Modal
{#if isFullscreen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
		<div class="relative max-h-full max-w-7xl p-4">
			<img
				src={images[currentImageIndex] || '/placeholder.svg'}
				alt="Car image {currentImageIndex + 1}"
				class="max-h-full max-w-full object-contain"
			/>

			Close Button
			<button
				onclick={toggleFullscreen}
				class="absolute top-2 right-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
				aria-label="Close fullscreen"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			Navigation in Fullscreen
			{#if images.length > 1}
				<button
					onclick={prevImage}
					class="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
					aria-label="Previous image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<button
					onclick={nextImage}
					class="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/50 p-3 text-white hover:bg-black/70"
					aria-label="Next image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
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
