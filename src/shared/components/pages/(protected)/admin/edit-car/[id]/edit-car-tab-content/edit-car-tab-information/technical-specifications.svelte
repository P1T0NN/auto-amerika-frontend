<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Label } from '@/shared/components/ui/label';
    import { Input } from '@/shared/components/ui/input';
    import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared/components/ui/select';
    import ErrorMessage from '@/shared/components/ui/error-message/error-message.svelte';

    // DATA
    import { fuelTypes, transmissionTypes, drivetrainTypes, interiorMaterials, colors } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesEditCarInformationData } from "@/features/cars/schemas/cars-schemas";

    let { car, editCarForm }: {
        car: typesCar;
        editCarForm: RemoteForm<typesEditCarInformationData, ApiResponse<void>>
    } = $props();

    let selectedFuel = $state(editCarForm.input?.fuel || car.fuel || "");
    let selectedTransmission = $state(editCarForm.input?.transmission || car.transmission || "");
    let selectedDrivetrain = $state(editCarForm.input?.drivetrain || car.drivetrain || "");
    let selectedInteriorMaterial = $state(editCarForm.input?.interiorMaterial || car.interiorMaterial || "");
    let selectedColorExterior = $state(editCarForm.input?.colorExterior || car.colorExterior || "");
    let selectedColorInterior = $state(editCarForm.input?.colorInterior || car.colorInterior || "");

    const fuelTriggerContent = $derived(fuelTypes.find(f => f.value === selectedFuel)?.text || "Izaberite gorivo");
    const transmissionTriggerContent = $derived(transmissionTypes.find(t => t.value === selectedTransmission)?.text || "Izaberite menjač");
    const drivetrainTriggerContent = $derived(drivetrainTypes.find(d => d.value === selectedDrivetrain)?.text || "Izaberite pogon");
    const interiorMaterialTriggerContent = $derived(interiorMaterials.find(m => m.value === selectedInteriorMaterial)?.text || "Izaberite materijal");
    const colorExteriorTriggerContent = $derived(colors.find(c => c.value === selectedColorExterior)?.text || "Izaberite boju");
    const colorInteriorTriggerContent = $derived(colors.find(c => c.value === selectedColorInterior)?.text || "Izaberite boju");
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-xl">Technical Specifications</CardTitle>
        <CardDescription>Engine, performance, and physical details</CardDescription>
    </CardHeader>

    <CardContent class="space-y-6">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="space-y-2">
                <Label for="mileageKm" class="text-sm font-medium">Mileage (KM) *</Label>
                <Input
                    id="mileageKm"
                    name="mileageKm"
                    type="number"
                    placeholder="50000"
                    value={editCarForm.input?.mileageKm || car.mileageKm || ''}
                    class={editCarForm.issues?.mileageKm ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.mileageKm} />
            </div>

            <div class="space-y-2">
                <Label for="fuel" class="text-sm font-medium">Fuel Type *</Label>
                <Select type="single" name="fuel" bind:value={selectedFuel}>
                    <SelectTrigger class={editCarForm.issues?.fuel ? 'border-destructive' : ''}>
                        <span>{fuelTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each fuelTypes as fuel}
                            <SelectItem value={fuel.value}>{fuel.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.fuel} />
            </div>

            <div class="space-y-2">
                <Label for="transmission" class="text-sm font-medium">Transmission *</Label>
                <Select type="single" name="transmission" bind:value={selectedTransmission}>
                    <SelectTrigger class={editCarForm.issues?.transmission ? 'border-destructive' : ''}>
                        <span>{transmissionTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each transmissionTypes as transmission}
                            <SelectItem value={transmission.value}>{transmission.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.transmission} />
            </div>

            <div class="space-y-2">
                <Label for="engine" class="text-sm font-medium">Engine *</Label>
                <Input
                    id="engine"
                    name="engine"
                    placeholder="5.0L V8"
                    value={editCarForm.input?.engine || car.engine || ''}
                    class={editCarForm.issues?.engine ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.engine} />
            </div>

            <div class="space-y-2">
                <Label for="powerHp" class="text-sm font-medium">Power (HP) *</Label>
                <Input
                    id="powerHp"
                    name="powerHp"
                    type="number"
                    placeholder="450"
                    value={editCarForm.input?.powerHp || car.powerHp || ''}
                    class={editCarForm.issues?.powerHp ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.powerHp} />
            </div>

            <div class="space-y-2">
                <Label for="drivetrain" class="text-sm font-medium">Drivetrain *</Label>
                <Select type="single" name="drivetrain" bind:value={selectedDrivetrain}>
                    <SelectTrigger class={editCarForm.issues?.drivetrain ? 'border-destructive' : ''}>
                        <span>{drivetrainTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each drivetrainTypes as drivetrain}
                            <SelectItem value={drivetrain.value}>{drivetrain.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.drivetrain} />
            </div>

            <div class="space-y-2">
                <Label for="colorExterior" class="text-sm font-medium">Exterior Color *</Label>
                <Select type="single" name="colorExterior" bind:value={selectedColorExterior}>
                    <SelectTrigger class={editCarForm.issues?.colorExterior ? 'border-destructive' : ''}>
                        <span>{colorExteriorTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each colors as color}
                            <SelectItem value={color.value}>{color.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.colorExterior} />
            </div>

            <div class="space-y-2">
                <Label for="colorInterior" class="text-sm font-medium">Interior Color *</Label>
                <Select type="single" name="colorInterior" bind:value={selectedColorInterior}>
                    <SelectTrigger class={editCarForm.issues?.colorInterior ? 'border-destructive' : ''}>
                        <span>{colorInteriorTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each colors as color}
                            <SelectItem value={color.value}>{color.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.colorInterior} />
            </div>

            <div class="space-y-2">
                <Label for="interiorMaterial" class="text-sm font-medium">Interior Material *</Label>
                <Select type="single" name="interiorMaterial" bind:value={selectedInteriorMaterial}>
                    <SelectTrigger class={editCarForm.issues?.interiorMaterial ? 'border-destructive' : ''}>
                        <span>{interiorMaterialTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each interiorMaterials as material}
                            <SelectItem value={material.value}>{material.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.interiorMaterial} />
            </div>
        </div>
    </CardContent>
</Card>