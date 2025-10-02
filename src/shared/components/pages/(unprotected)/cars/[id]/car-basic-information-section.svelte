<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import * as Table from '@/shared/components/ui/table';

    // DATA
    import { brands, carTypes, fuelTypes, transmissionTypes, drivetrainTypes, interiorMaterials, colors } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();

    let brand = $derived(brands.find(b => b.value === car.brand)?.text);
    let bodyType = $derived(carTypes.find(bt => bt.value === car.carType)?.text);
    let fuelType = $derived(fuelTypes.find(ft => ft.value === car.fuel)?.text);
    let transmissionType = $derived(transmissionTypes.find(tt => tt.value === car.transmission)?.text);
    let drivetrainType = $derived(drivetrainTypes.find(dt => dt.value === car.drivetrain)?.text);
    let interiorMaterial = $derived(interiorMaterials.find(im => im.value === car.interiorMaterial)?.text);
    let colorExterior = $derived(colors.find(c => c.value === car.colorExterior)?.text || car.colorExterior);
    let colorInterior = $derived(colors.find(c => c.value === car.colorInterior)?.text || car.colorInterior);
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-2xl font-semibold">{m['CarPage.CarBasicInformationSection.title']()}</CardTitle>
    </CardHeader>

    <CardContent>
        <Table.Root>
            <Table.Body>
                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.vin']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.vin}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.brand']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {brand}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.model']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.model}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.year']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.year}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.carType']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {bodyType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.mileage']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.mileageKm.toLocaleString()} km</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.fuel']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {fuelType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.transmission']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {transmissionType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.engine']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.engine}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.power']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.powerHp} HP</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.drivetrain']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {drivetrainType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.exteriorColor']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{colorExterior}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.interiorColor']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{colorInterior}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.interiorMaterial']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {interiorMaterial}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">{m['CarPage.CarBasicInformationSection.location']()}</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.location}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    </CardContent>
</Card>
