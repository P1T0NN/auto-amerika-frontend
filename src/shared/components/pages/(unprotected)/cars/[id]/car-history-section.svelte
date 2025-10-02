<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import * as Table from '@/shared/components/ui/table';

    // UTILS
    import { formatDate } from '@/shared/utils/date-utils';
    import { capitalizeFirstLetter } from '@/shared/utils/name-utils';

     // DATA
    import { titleStatusOptions, accidentsOptions } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();

    const titleStatus = $derived(titleStatusOptions.find(ts => ts.value === car.history?.titleStatus)?.text);
    const accidents = $derived(accidentsOptions.find(ao => ao.value === car.history?.accidents)?.text);
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-2xl font-semibold">{m['CarPage.CarHistorySection.title']()}</CardTitle>
    </CardHeader>

    <CardContent>
        {#if car.history}
            <Table.Root>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarHistorySection.titleStatus']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">
                            {titleStatus}
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarHistorySection.firstRegistration']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">{formatDate(car.history.firstRegistration)}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarHistorySection.owners']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">{car.history.owners}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarHistorySection.serviceHistory']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">{capitalizeFirstLetter(car.history.serviceHistory)}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarHistorySection.accidents']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">
                            {accidents}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        {/if}
    </CardContent>
</Card>
