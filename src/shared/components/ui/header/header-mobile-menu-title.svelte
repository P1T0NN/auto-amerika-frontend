<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";
    
    // COMPONENTS
    import { Button } from "../button";

    // LUCIDE ICONS
    import { X } from "@lucide/svelte";

    let { mobileMenuOpen = $bindable() }: { mobileMenuOpen: boolean } = $props();
</script>

<div class="flex items-center justify-between border-b border-zinc-800 px-4 py-4">
    <span class="text-lg font-semibold text-white">{m["Header.menu"]()}</span>
    <Button
        onclick={() => mobileMenuOpen = false}
        size="icon"
        class="text-zinc-400 hover:text-white"
        aria-label="Close menu"
    >
        <X class="h-6 w-6" />
    </Button>
</div>