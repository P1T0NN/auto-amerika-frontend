<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // DATA
    import { brands, fuelTypes, transmissionTypes, drivetrainTypes, interiorMaterials } from '@/features/cars/data/cars-data';

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    let selectedBrand = $state(addCarContext.formData.brand || "");
    let selectedFuel = $state(addCarContext.formData.fuel || "");
    let selectedTransmission = $state(addCarContext.formData.transmission || "");
    let selectedDrivetrain = $state(addCarContext.formData.drivetrain || "");
    let selectedInteriorMaterial = $state(addCarContext.formData.interiorMaterial || "");
    let selectedCurrency = $state(addCarContext.formData.currency || "EUR");

    const brandTriggerContent = $derived(brands.find(b => b.value === selectedBrand)?.text || "Izaberite brend");
    const fuelTriggerContent = $derived(fuelTypes.find(f => f.value === selectedFuel)?.text || "Izaberite gorivo");
    const transmissionTriggerContent = $derived(transmissionTypes.find(t => t.value === selectedTransmission)?.text || "Izaberite menjač");
    const drivetrainTriggerContent = $derived(drivetrainTypes.find(d => d.value === selectedDrivetrain)?.text || "Izaberite pogon");
    const interiorMaterialTriggerContent = $derived(interiorMaterials.find(m => m.value === selectedInteriorMaterial)?.text || "Izaberite materijal");
    const currencyTriggerContent = $derived(selectedCurrency || "EUR");

    $effect(() => {
        addCarContext.formData.brand = selectedBrand;
        addCarContext.formData.fuel = selectedFuel;
        addCarContext.formData.transmission = selectedTransmission;
        addCarContext.formData.drivetrain = selectedDrivetrain;
        addCarContext.formData.interiorMaterial = selectedInteriorMaterial;
        addCarContext.formData.currency = selectedCurrency;
    });
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
                    bind:value={addCarContext.formData.vin}
                    placeholder="1HGBH41JXMN109186"
                    class={addCarContext.errors.vin ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.vin ? [{message: addCarContext.errors.vin}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="brand">Brend *</Label>
                <Select type="single" name="brand" bind:value={selectedBrand}>
                    <SelectTrigger class={addCarContext.errors.brand ? 'border-destructive' : ''}>
                        <span>{brandTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each brands as brand}
                            <SelectItem value={brand.value}>{brand.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.brand ? [{message: addCarContext.errors.brand}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="model">Model *</Label>
                <Input
                    id="model"
                    name="model"
                    bind:value={addCarContext.formData.model}
                    placeholder="Mustang GT"
                    class={addCarContext.errors.model ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.model ? [{message: addCarContext.errors.model}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="year">Godina *</Label>
                <Input
                    id="year"
                    name="year"
                    type="number"
                    bind:value={addCarContext.formData.year}
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    class={addCarContext.errors.year ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.year ? [{message: addCarContext.errors.year}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="price">Cena *</Label>
                <div class="flex">
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        bind:value={addCarContext.formData.price}
                        placeholder="45000"
                        class="rounded-r-none {addCarContext.errors.price ? 'border-destructive' : ''}"
                    />
                    <Select type="single" name="currency" bind:value={selectedCurrency}>
                        <SelectTrigger class="w-20 rounded-l-none border-l-0">
                            <span>{currencyTriggerContent}</span>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="eur">EUR</SelectItem>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="rsd">RSD</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <ErrorMessage issues={addCarContext.errors.price ? [{message: addCarContext.errors.price}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="mileageKm">Kilometraža (km) *</Label>
                <Input
                    id="mileageKm"
                    name="mileageKm"
                    type="number"
                    bind:value={addCarContext.formData.mileageKm}
                    placeholder="50000"
                    class={addCarContext.errors.mileageKm ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.mileageKm ? [{message: addCarContext.errors.mileageKm}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="fuel">Gorivo *</Label>
                <Select type="single" name="fuel" bind:value={selectedFuel}>
                    <SelectTrigger class={addCarContext.errors.fuel ? 'border-destructive' : ''}>
                        <span>{fuelTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each fuelTypes as fuel}
                            <SelectItem value={fuel.value}>{fuel.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.fuel ? [{message: addCarContext.errors.fuel}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="transmission">Menjač *</Label>
                <Select type="single" name="transmission" bind:value={selectedTransmission}>
                    <SelectTrigger class={addCarContext.errors.transmission ? 'border-destructive' : ''}>
                        <span>{transmissionTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each transmissionTypes as transmission}
                            <SelectItem value={transmission.value}>{transmission.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.transmission ? [{message: addCarContext.errors.transmission}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="engine">Motor *</Label>
                <Input
                    id="engine"
                    name="engine"
                    bind:value={addCarContext.formData.engine}
                    placeholder="5.0L V8"
                    class={addCarContext.errors.engine ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.engine ? [{message: addCarContext.errors.engine}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="powerHp">Snaga (HP) *</Label>
                <Input
                    id="powerHp"
                    name="powerHp"
                    type="number"
                    bind:value={addCarContext.formData.powerHp}
                    placeholder="450"
                    class={addCarContext.errors.powerHp ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.powerHp ? [{message: addCarContext.errors.powerHp}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="drivetrain">Pogon *</Label>
                <Select type="single" name="drivetrain" bind:value={selectedDrivetrain}>
                    <SelectTrigger class={addCarContext.errors.drivetrain ? 'border-destructive' : ''}>
                        <span>{drivetrainTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each drivetrainTypes as drivetrain}
                            <SelectItem value={drivetrain.value}>{drivetrain.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.drivetrain ? [{message: addCarContext.errors.drivetrain}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="colorExterior">Spoljašnja boja *</Label>
                <Input
                    id="colorExterior"
                    name="colorExterior"
                    bind:value={addCarContext.formData.colorExterior}
                    placeholder="Crvena"
                    class={addCarContext.errors.colorExterior ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.colorExterior ? [{message: addCarContext.errors.colorExterior}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="colorInterior">Unutrašnja boja *</Label>
                <Input
                    id="colorInterior"
                    name="colorInterior"
                    bind:value={addCarContext.formData.colorInterior}
                    placeholder="Crna"
                    class={addCarContext.errors.colorInterior ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.colorInterior ? [{message: addCarContext.errors.colorInterior}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="interiorMaterial">Materijal enterijera *</Label>
                <Select type="single" name="interiorMaterial" bind:value={selectedInteriorMaterial}>
                    <SelectTrigger class={addCarContext.errors.interiorMaterial ? 'border-destructive' : ''}>
                        <span>{interiorMaterialTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each interiorMaterials as material}
                            <SelectItem value={material.value}>{material.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.interiorMaterial ? [{message: addCarContext.errors.interiorMaterial}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="location">Lokacija *</Label>
                <Input
                    id="location"
                    name="location"
                    bind:value={addCarContext.formData.location}
                    placeholder="Beograd, Srbija"
                    class={addCarContext.errors.location ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.location ? [{message: addCarContext.errors.location}] : undefined} />
            </div>

            <div class="space-y-2 md:col-span-2">
                <Label for="description">Opis *</Label>
                <Textarea
                    id="description"
                    name="description"
                    bind:value={addCarContext.formData.description}
                    placeholder="Detaljni opis vozila, stanja, dodatne opreme..."
                    rows={4}
                    class={addCarContext.errors.description ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.description ? [{message: addCarContext.errors.description}] : undefined} />
            </div>
        </div>
    </CardContent>
</Card>