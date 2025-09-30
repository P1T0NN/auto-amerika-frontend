<script lang="ts">
	import { Button } from "./button";
	import { Label } from "./label";
	import { ChevronDown } from "@lucide/svelte";

	interface Props {
		label: string;
		isExpanded: boolean;
		onclick: () => void;
	}

	let { label, isExpanded, onclick }: Props = $props();
</script>

<Button
	variant="ghost"
	{onclick}
	class="w-full flex items-center justify-between mb-4 group hover:bg-zinc-800"
>
	<Label class="text-sm font-semibold text-zinc-300 uppercase tracking-wide cursor-pointer">
		{label}
	</Label>
	<ChevronDown
		class="w-5 h-5 text-zinc-400 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}"
	/>
</Button>