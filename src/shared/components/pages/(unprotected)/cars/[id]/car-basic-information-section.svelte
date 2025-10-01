<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import * as Table from '@/shared/components/ui/table';

    // DATA
    import { brands, bodyTypes, fuelTypes, transmissionTypes, drivetrainTypes, interiorMaterials, colors } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();

    let brand = $derived(brands.find(b => b.value === car.brand)?.text);
    let bodyType = $derived(bodyTypes.find(bt => bt.value === car.carType)?.text);
    let fuelType = $derived(fuelTypes.find(ft => ft.value === car.fuel)?.text);
    let transmissionType = $derived(transmissionTypes.find(tt => tt.value === car.transmission)?.text);
    let drivetrainType = $derived(drivetrainTypes.find(dt => dt.value === car.drivetrain)?.text);
    let interiorMaterial = $derived(interiorMaterials.find(im => im.value === car.interiorMaterial)?.text);
    let colorExterior = $derived(colors.find(c => c.value === car.colorExterior)?.text || car.colorExterior);
    let colorInterior = $derived(colors.find(c => c.value === car.colorInterior)?.text || car.colorInterior);
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-2xl font-semibold">Osnovne informacije</CardTitle>
    </CardHeader>

    <CardContent>
        <Table.Root>
            <Table.Body>
                <Table.Row>
                    <Table.Cell class="font-semibold">VIN</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.vin}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Marka</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {brand}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Model</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.model}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Godina</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.year}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Tip vozila</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {bodyType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Kilometraža</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.mileageKm.toLocaleString()} km</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Gorivo</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {fuelType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Menjač</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {transmissionType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Motor</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.engine}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Snaga</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.powerHp} HP</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Pogon</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {drivetrainType}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Boja spoljašnjosti</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{colorExterior}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Boja unutrašnjosti</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{colorInterior}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Materijal enterijer</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">
                        {interiorMaterial}
                    </Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell class="font-semibold">Lokacija</Table.Cell>
                    <Table.Cell class="text-right text-muted-foreground">{car.location}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    </CardContent>
</Card>
