<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from "@/shared/config";

    // COMPONENTS
    import { Card, CardContent } from "@/shared/components/ui/card";
    import { Button } from "@/shared/components/ui/button";

    // UTILS
    import { getCarStatusClass, getCarStatusText } from "@/features/cars/utils/cars-utils";

    // TYPES
    import type { typesCar } from "@/features/cars/types/types";

    // LUCIDE ICONS
    import { Edit2 } from "@lucide/svelte";

    let { cars }: { cars: typesCar[] } = $props();
</script>

<Card class="py-0 border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/10">
    <CardContent class="p-0">
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead class="border-b bg-muted/50">
                    <tr>
                        <th class="p-4 text-left text-lg font-semibold">{m['AdminDashboardPage.AdminDashboardCarListItem.car']()}</th>
                        <th class="p-4 text-left text-lg font-semibold">{m['AdminDashboardPage.AdminDashboardCarListItem.details']()}</th>
                        <th class="p-4 text-left text-lg font-semibold">{m['AdminDashboardPage.AdminDashboardCarListItem.price']()}</th>
                        <th class="p-4 text-left text-lg font-semibold">{m['AdminDashboardPage.AdminDashboardCarListItem.status']()}</th>
                        <th class="p-4 text-left text-lg font-semibold">{m['AdminDashboardPage.AdminDashboardCarListItem.actions']()}</th>
                    </tr>
                </thead>

                <tbody>
                    {#each cars as car}
                        <tr class="border-b hover:bg-muted/30 transition-colors">
                            <td class="p-4">
                                <div class="flex items-center gap-4">
                                    <img
                                        src={car.images?.[0].imageUrl || "/placeholder.svg"}
                                        alt="{car.brand} {car.model}"
                                        class="h-16 w-24 rounded-lg object-cover"
                                    />

                                    <div>
                                        <h3 class="text-lg font-semibold text-foreground">
                                            {car.brand.toUpperCase()} {car.model}
                                        </h3>

                                        <p class="text-base text-muted-foreground">
                                            {car.year} • {car.fuel}
                                        </p>

                                        <p class="text-sm text-muted-foreground">
                                            VIN: {car.vin}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td class="p-4">
                                <div class="text-base">
                                    <div>{car.mileageKm?.toLocaleString()} km</div>
                                    <div class="text-muted-foreground">{car.location}</div>
                                    <div class="text-sm text-muted-foreground">
                                        {m['AdminDashboardPage.AdminDashboardCarListItem.added']()}
                                    </div>
                                </div>
                            </td>

                            <td class="p-4">
                                <div class="text-xl font-bold text-primary">
                                    {car.price}
                                </div>
                            </td>

                            <td class="p-4">
                                <span class="font-semibold px-4 py-2 rounded-full text-sm {getCarStatusClass(car.status)}">
                                    {getCarStatusText(car.status)}
                                </span>
                            </td>

                            <td class="p-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    class="h-10 px-4"
                                    href={`${ADMIN_PROTECTED_PAGE_ENDPOINTS.EDIT_CAR_PAGE}/${car.id}`}
                                >
                                    <Edit2 class="mr-2 h-4 w-4" />
                                    {m['AdminDashboardPage.AdminDashboardCarListItem.edit']()}
                                </Button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </CardContent>
</Card>