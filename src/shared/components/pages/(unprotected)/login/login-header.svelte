<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';
</script>

<div class="flex flex-col items-center mb-8 text-center">
    <img
        src="/logo.png"
        alt="AutoAmerika Logo"
        class="h-24 w-24"
    />

    <h1 class="mb-2 text-2xl font-bold text-foreground">{m['LoginPage.Header.title']()}</h1>
    <p class="text-sm text-muted-foreground">{m['LoginPage.Header.subtitle']()}</p>
</div>