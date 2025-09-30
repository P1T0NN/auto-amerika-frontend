<script lang="ts">
	import Skeleton from "@/shared/components/ui/skeleton/skeleton.svelte";
</script>

<div class="flex-1">
	<!-- Header Skeleton -->
	<div class="mb-6">
		<Skeleton class="h-9 w-64 rounded-lg mb-2" />
		<Skeleton class="h-5 w-40 rounded-lg" />
	</div>

	<!-- Car Cards Skeleton Grid -->
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
		{#each Array(6) as _, i}
			<div class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
				<!-- Image Skeleton -->
				<Skeleton class="aspect-[4/3] rounded-none" />

				<!-- Card Header Skeleton -->
				<div class="p-6 space-y-2">
					<Skeleton class="h-7 w-3/4 rounded-lg" />
					<Skeleton class="h-5 w-1/2 rounded-lg" />
				</div>

				<!-- Card Content Skeleton -->
				<div class="px-6 pb-6">
					<div class="flex items-center justify-between">
						<Skeleton class="h-8 w-24 rounded-lg" />
						<Skeleton class="h-9 w-20 rounded-lg" />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>