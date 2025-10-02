<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
    import { Card, CardContent } from '@/shared/components/ui/card';

    // LUCIDE ICONS
    import { Car, Plus } from '@lucide/svelte';
</script>

<Card class="border-dashed border-2 border-muted-foreground/25">
    <CardContent class="flex flex-col items-center justify-center py-16 px-6 text-center">
        <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Car class="h-10 w-10 text-muted-foreground" />
        </div>

        <h3 class="mb-2 text-xl font-semibold text-foreground">{m['AdminDashboardPage.AdminDashboardCurrentCarsEmpty.title']()}</h3>
        <p class="mb-6 max-w-md text-sm text-muted-foreground">
            {m['AdminDashboardPage.AdminDashboardCurrentCarsEmpty.description']()}
        </p>

        <div class="flex flex-col gap-3 sm:flex-row">
            <Button
                href={ADMIN_PROTECTED_PAGE_ENDPOINTS.ADD_CAR_PAGE}
                class="flex items-center gap-2"
            >
                <Plus class="h-4 w-4" />
                {m['AdminDashboardPage.AdminDashboardCurrentCarsEmpty.addFirstCar']()}
            </Button>
        </div>
    </CardContent>
</Card>