<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

    // LUCIDE ICONS
    import { Plus } from '@lucide/svelte';
</script>

<div class="mb-8">
    <Button
        href={ADMIN_PROTECTED_PAGE_ENDPOINTS.ADD_CAR_PAGE}
        class="admin-button-large bg-primary text-white hover:bg-primary/90"
        size="lg"
    >
        <Plus class="mr-3 h-6 w-6" />
        {m['AdminDashboardPage.AdminDashboardAddCarButton.addNewCar']()}
    </Button>
</div>