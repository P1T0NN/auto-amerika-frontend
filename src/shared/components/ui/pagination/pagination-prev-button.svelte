<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";
	import { Pagination as PaginationPrimitive } from "bits-ui";
	import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
	import { buttonVariants } from "@/shared/components/ui/button/index.js";
	import { cn } from "@/shared/utils/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: PaginationPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<ChevronLeftIcon class="size-4" />
	<span>{m['Pagination.prevButton']()}</span>
{/snippet}

<PaginationPrimitive.PrevButton
	bind:ref
	aria-label="Go to previous page"
	class={cn(
		buttonVariants({
			size: "default",
			variant: "ghost",
			class: "gap-1 px-2.5 sm:pl-2.5",
		}),
		className
	)}
	children={children || Fallback}
	{...restProps}
/>
