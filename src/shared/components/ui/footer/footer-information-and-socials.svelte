
<script lang="ts">
    // LUCIDE ICONS
    import { Facebook, Instagram } from '@lucide/svelte';
</script>

<div class="col-span-1 md:col-span-2">
    <div class="mb-4 flex items-center space-x-2">
        <img 
            src="/logo.png" 
            alt="AutoAmerika Logo" 
            class=" h-16 w-16" 
        />
        
        <span class="text-xl font-bold">AutoAmerika</span>
    </div>

    <p class="mb-4 max-w-md text-accent-foreground/80">
        Specijalizovani smo za uvoz kvalitetnih automobila iz Amerike. Pružamo kompletnu uslugu od
        kupovine do registracije vozila u Srbiji.
    </p>

    <div class="flex space-x-4">
        <a
            href="https://www.facebook.com"
            class="text-accent-foreground/60 hover:text-accent-foreground"
        >
            <span class="sr-only">Facebook</span>
            <Facebook class="h-6 w-6" />
        </a>

        <a
            href="https://www.instagram.com"
            class="text-accent-foreground/60 hover:text-accent-foreground"
        >
            <span class="sr-only">Instagram</span>
            <Instagram class="h-6 w-6" />
        </a>
    </div>
</div>