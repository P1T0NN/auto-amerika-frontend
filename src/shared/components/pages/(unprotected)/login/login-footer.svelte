<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';
</script>

<div class="mt-8 space-y-2 text-center">
    <p class="text-xs text-muted-foreground">
        {m['LoginPage.Footer.agreementText']()}
        <a href={UNPROTECTED_PAGE_ENDPOINTS.TERMS_OF_USE} class="text-primary hover:underline">{m['LoginPage.Footer.termsOfUse']()}</a>
        {m['LoginPage.Footer.and']()}
        <a href={UNPROTECTED_PAGE_ENDPOINTS.PRIVACY_POLICY} class="text-primary hover:underline">{m['LoginPage.Footer.privacyPolicy']()}</a>
    </p>

    <div class="flex justify-center space-x-4 text-xs">
        <a href={UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE} class="text-muted-foreground transition-colors hover:text-foreground">{m['LoginPage.Footer.home']()}</a>
        <a href={UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE} class="text-muted-foreground transition-colors hover:text-foreground">{m['LoginPage.Footer.about']()}</a>
        <a href={UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE} class="text-muted-foreground transition-colors hover:text-foreground">{m['LoginPage.Footer.contact']()}</a>
    </div>
</div>