<script lang="ts">
    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
</script>

<div class="hidden md:block">
    <Button 
    href={UNPROTECTED_PAGE_ENDPOINTS.LOGIN_PAGE}
    aria-label="Login"
>
        Login
    </Button>
</div>