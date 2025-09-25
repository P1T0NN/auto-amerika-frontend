<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // DATA
    import { brands as brandData, fuelTypes, transmissionTypes, drivetrainTypes, interiorMaterials } from '@/features/cars/data/cars-data';

    // TYPES
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesAddCarCompleteData } from "@/features/cars/schemas/cars-schemas";

    let { addCar }: { addCar: RemoteForm<typesAddCarCompleteData, ApiResponse<void>> } = $props();

    const brands = brandData.map(brand => brand.name);

    let selectedBrand = $state(addCar.input?.brand || "");
    let selectedFuel = $state(addCar.input?.fuel || "");
    let selectedTransmission = $state(addCar.input?.transmission || "");
    let selectedDrivetrain = $state(addCar.input?.drivetrain || "");
    let selectedInteriorMaterial = $state(addCar.input?.interiorMaterial || "");
    let selectedCurrency = $state(addCar.input?.currency || "EUR");

    const brandTriggerContent = $derived(selectedBrand || "Izaberite brend");
    const fuelTriggerContent = $derived(selectedFuel || "Izaberite gorivo");
    const transmissionTriggerContent = $derived(selectedTransmission || "Izaberite menjač");
    const drivetrainTriggerContent = $derived(selectedDrivetrain || "Izaberite pogon");
    const interiorMaterialTriggerContent = $derived(selectedInteriorMaterial || "Izaberite materijal");
    const currencyTriggerContent = $derived(selectedCurrency || "EUR");
</script>

<Card>
    <CardHeader>
        <CardTitle>Osnovne informacije o vozilu</CardTitle>
    </CardHeader>
    <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-2">
                <Label for="vin">VIN broj *</Label>
                <Input
                    id="vin"
                    name="vin"
                    placeholder="1HGBH41JXMN109186"
                    value={addCar.input?.vin}
                    class={addCar.issues?.vin ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.vin} />
            </div>

            <div class="space-y-2">
                <Label for="brand">Brend *</Label>
                <Select
                    type="single"
                    name="brand"
                    bind:value={selectedBrand}
                >
                    <SelectTrigger class={addCar.issues?.brand ? 'border-destructive' : ''}>
                        {brandTriggerContent}
                    </SelectTrigger>

                    <SelectContent>
                        {#each brands as brand}
                            <SelectItem value={brand}>{brand}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.brand} />
            </div>

            <div class="space-y-2">
                <Label for="model">Model *</Label>
                <Input
                    id="model"
                    name="model"
                    placeholder="Mustang GT"
                    value={addCar.input?.model}
                    class={addCar.issues?.model ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.model} />
            </div>

            <div class="space-y-2">
                <Label for="year">Godina *</Label>
                <Input
                    id="year"
                    name="year"
                    type="number"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={addCar.input?.year}
                    class={addCar.issues?.year ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.year} />
            </div>

            <div class="space-y-2">
                <Label for="price">Cena *</Label>
                <div class="flex">
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="45000"
                        value={addCar.input?.price}
                        class="rounded-r-none {addCar.issues?.price ? 'border-destructive' : ''}"
                    />

                    <Select type="single" name="currency" bind:value={selectedCurrency}>
                        <SelectTrigger class="w-20 rounded-l-none border-l-0">
                            {currencyTriggerContent}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="EUR">EUR</SelectItem>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="RSD">RSD</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <ErrorMessage issues={addCar.issues?.price} />
            </div>

            <div class="space-y-2">
                <Label for="mileageKm">Kilometraža (km) *</Label>
                <Input
                    id="mileageKm"
                    name="mileageKm"
                    type="number"
                    placeholder="50000"
                    value={addCar.input?.mileageKm}
                    class={addCar.issues?.mileageKm ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.mileageKm} />
            </div>

            <div class="space-y-2">
                <Label for="fuel">Gorivo *</Label>
                <Select
                    type="single"
                    name="fuel"
                    bind:value={selectedFuel}
                >
                    <SelectTrigger class={addCar.issues?.fuel ? 'border-destructive' : ''}>
                        {fuelTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        {#each fuelTypes as fuel}
                            <SelectItem value={fuel}>{fuel}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.fuel} />
            </div>

            <div class="space-y-2">
                <Label for="transmission">Menjač *</Label>
                <Select
                    type="single"
                    name="transmission"
                    bind:value={selectedTransmission}
                >
                    <SelectTrigger class={addCar.issues?.transmission ? 'border-destructive' : ''}>
                        {transmissionTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        {#each transmissionTypes as transmission}
                            <SelectItem value={transmission}>{transmission}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.transmission} />
            </div>

            <div class="space-y-2">
                <Label for="engine">Motor *</Label>
                <Input
                    id="engine"
                    name="engine"
                    placeholder="5.0L V8"
                    value={addCar.input?.engine}
                    class={addCar.issues?.engine ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.engine} />
            </div>

            <div class="space-y-2">
                <Label for="powerHp">Snaga (HP) *</Label>
                <Input
                    id="powerHp"
                    name="powerHp"
                    type="number"
                    placeholder="450"
                    value={addCar.input?.powerHp}
                    class={addCar.issues?.powerHp ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.powerHp} />
            </div>

            <div class="space-y-2">
                <Label for="drivetrain">Pogon *</Label>
                <Select
                    type="single"
                    name="drivetrain"
                    bind:value={selectedDrivetrain}
                >
                    <SelectTrigger class={addCar.issues?.drivetrain ? 'border-destructive' : ''}>
                        {drivetrainTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        {#each drivetrainTypes as drivetrain}
                            <SelectItem value={drivetrain}>{drivetrain}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.drivetrain} />
            </div>

            <div class="space-y-2">
                <Label for="colorExterior">Spoljašnja boja *</Label>
                <Input
                    id="colorExterior"
                    name="colorExterior"
                    placeholder="Crvena"
                    value={addCar.input?.colorExterior}
                    class={addCar.issues?.colorExterior ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.colorExterior} />
            </div>

            <div class="space-y-2">
                <Label for="colorInterior">Unutrašnja boja *</Label>
                <Input
                    id="colorInterior"
                    name="colorInterior"
                    placeholder="Crna"
                    value={addCar.input?.colorInterior}
                    class={addCar.issues?.colorInterior ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.colorInterior} />
            </div>

            <div class="space-y-2">
                <Label for="interiorMaterial">Materijal enterijera *</Label>
                <Select
                    type="single"
                    name="interiorMaterial"
                    bind:value={selectedInteriorMaterial}
                >
                    <SelectTrigger class={addCar.issues?.interiorMaterial ? 'border-destructive' : ''}>
                        {interiorMaterialTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        {#each interiorMaterials as material}
                            <SelectItem value={material}>{material}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.interiorMaterial} />
            </div>

            <div class="space-y-2">
                <Label for="location">Lokacija *</Label>
                <Input
                    id="location"
                    name="location"
                    placeholder="Beograd, Srbija"
                    value={addCar.input?.location}
                    class={addCar.issues?.location ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.location} />
            </div>

            <div class="space-y-2 md:col-span-2">
                <Label for="description">Opis *</Label>
                <Textarea
                    id="description"
                    name="description"
                    placeholder="Detaljni opis vozila, stanja, dodatne opreme..."
                    value={addCar.input?.description}
                    rows={4}
                    class={addCar.issues?.description ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.description} />
            </div>
        </div>
    </CardContent>
</Card>