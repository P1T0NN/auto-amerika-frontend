<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import * as Table from '@/shared/components/ui/table';

    // DATA
    import {
        purchaseSources,
        homologationStatusOptions,
        registrationStatusOptions,
        originCountries
    } from '@/features/cars/data/cars-data';

    // UTILS
    import { formatDate } from '@/shared/utils/date-utils';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();

    let originCountry = $derived(originCountries.find(oc => oc.value === car.import?.originCountry)?.text);
    let purchaseSource = $derived(purchaseSources.find(ps => ps.value === car.import?.purchaseSource)?.text);
    let homologationStatus = $derived(homologationStatusOptions.find(hs => hs.value === car.import?.homologationStatus)?.text);
    let registrationStatus = $derived(registrationStatusOptions.find(rs => rs.value === car.import?.registrationStatus)?.text);
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-2xl font-semibold">{m['CarPage.CarImportSection.title']()}</CardTitle>
    </CardHeader>

    <CardContent>
        {#if car.import}
            <Table.Root>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarImportSection.originCountry']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">
                            {originCountry}
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarImportSection.purchaseSource']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">
                            {purchaseSource}
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarImportSection.purchaseDate']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">{formatDate(car.import.purchaseDate)}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarImportSection.importDate']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">{formatDate(car.import.importDate)}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarImportSection.homologationStatus']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">
                            {homologationStatus}
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell class="font-semibold">{m['CarPage.CarImportSection.registrationStatus']()}</Table.Cell>
                        <Table.Cell class="text-right text-muted-foreground">
                            {registrationStatus}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        {/if}
    </CardContent>
</Card>