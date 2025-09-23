<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';
</script>

<div class="mt-8 space-y-2 text-center">
    <p class="text-xs text-muted-foreground">
        Prijavom se slažete sa našim
        <a href={UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_USE} class="text-primary hover:underline">uslovima korišćenja</a>
        i
        <a href={UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY} class="text-primary hover:underline">politikom privatnosti</a>
    </p>
    
    <div class="flex justify-center space-x-4 text-xs">
        <a href={UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE} class="text-muted-foreground transition-colors hover:text-foreground">Početna</a>
        <a href={UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE} class="text-muted-foreground transition-colors hover:text-foreground">O nama</a>
        <a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE} class="text-muted-foreground transition-colors hover:text-foreground">Kontakt</a>
    </div>
</div>