<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Label } from '@/shared/components/ui/label';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-xl">Sales Information</CardTitle>
        <CardDescription>Purchase and buyer details</CardDescription>
    </CardHeader>
    
    <CardContent>
        {#each car.sales || [] as sale}
            <div class="space-y-4 rounded-lg bg-muted p-4">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="space-y-2">
                        <Label class="text-sm font-medium">Listed Date</Label>
                        <p class="text-sm text-muted-foreground">{sale.listedDate}</p>
                    </div>

                    <div class="space-y-2">
                        <Label class="text-sm font-medium">Sold Date</Label>
                        <p class="text-sm text-muted-foreground">{sale.soldDate}</p>
                    </div>

                    <div class="space-y-2">
                        <Label class="text-sm font-medium">Final Price</Label>
                        <p class="text-sm font-bold text-green-400">
                            €{sale.finalPrice?.toLocaleString()}
                        </p>
                    </div>
                </div>

                {#if sale.notes}
                    <div class="space-y-2">
                        <Label class="text-sm font-medium">Notes</Label>
                        <p class="text-sm text-muted-foreground">{sale.notes}</p>
                    </div>
                {/if}
            </div>
        {/each}
    </CardContent>
</Card>