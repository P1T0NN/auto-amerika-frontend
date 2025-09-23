<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from "@/shared/config";
</script>

<div>
    <h3 class="mb-4 text-sm font-semibold tracking-wider uppercase">Brze veze</h3>
    <ul class="space-y-2">
        <li>
            <a href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE} class="text-accent-foreground/80 hover:text-accent-foreground">Svi automobili</a>
        </li>
        
        <li>

            <a href={UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE} class="text-accent-foreground/80 hover:text-accent-foreground">O nama</a>
        </li>
        
        <li>

            <a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE} class="text-accent-foreground/80 hover:text-accent-foreground">Kontakt</a>
        </li>
        
        <li>

            <a href={UNPROTECTED_PAGE_ENDPOINTS.REVIEWS_PAGE} class="text-accent-foreground/80 hover:text-accent-foreground">Recenzije</a>
        </li>
    </ul>
</div>