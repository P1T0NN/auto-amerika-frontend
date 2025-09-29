<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import MakeUnavailableButton from '@/shared/components/pages/(protected)/admin/edit-car/[id]/edit-car-tab-content/edit-car-tab-settings/make-unavailable-button.svelte';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();
</script>

<Card class="border-destructive/50">
    <CardHeader>
        <CardTitle class="text-xl text-destructive">Danger Zone</CardTitle>
        <CardDescription>Irreversible and destructive actions</CardDescription>
    </CardHeader>
    
    <CardContent>
        <div class="flex items-center justify-between rounded-lg border border-destructive/20 bg-destructive/10 p-4">
            <div>
                <h3 class="text-lg font-semibold text-foreground">Make unavailable</h3>
                <p class="text-sm text-muted-foreground">
                    Once you make this car unavailable, it will not be visible to users.
                </p>
            </div>

            <MakeUnavailableButton car={car} />
        </div>
    </CardContent>
</Card>