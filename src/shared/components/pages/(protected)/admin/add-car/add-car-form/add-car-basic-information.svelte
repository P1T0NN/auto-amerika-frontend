<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // DATA
    import { brands, carTypes, fuelTypes, transmissionTypes, drivetrainTypes, interiorMaterials, colors } from '@/features/cars/data/cars-data';

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    let selectedBrand = $state(addCarContext.formData.brand || "");
    let selectedCarType = $state(addCarContext.formData.carType || "");
    let selectedFuel = $state(addCarContext.formData.fuel || "");
    let selectedTransmission = $state(addCarContext.formData.transmission || "");
    let selectedDrivetrain = $state(addCarContext.formData.drivetrain || "");
    let selectedInteriorMaterial = $state(addCarContext.formData.interiorMaterial || "");
    let selectedColorExterior = $state(addCarContext.formData.colorExterior || "");
    let selectedColorInterior = $state(addCarContext.formData.colorInterior || "");
    let selectedCurrency = $state(addCarContext.formData.currency || "EUR");

    const brandTriggerContent = $derived(brands.find(b => b.value === selectedBrand)?.text || m['AddCarPage.AddCarBasicInformation.brandPlaceholder']());
    const carTypeTriggerContent = $derived(carTypes.find(bt => bt.value === selectedCarType)?.text || m['AddCarPage.AddCarBasicInformation.carTypePlaceholder']());
    const fuelTriggerContent = $derived(fuelTypes.find(f => f.value === selectedFuel)?.text || m['AddCarPage.AddCarBasicInformation.fuelPlaceholder']());
    const transmissionTriggerContent = $derived(transmissionTypes.find(t => t.value === selectedTransmission)?.text || m['AddCarPage.AddCarBasicInformation.transmissionPlaceholder']());
    const drivetrainTriggerContent = $derived(drivetrainTypes.find(d => d.value === selectedDrivetrain)?.text || m['AddCarPage.AddCarBasicInformation.drivetrainPlaceholder']());
    const interiorMaterialTriggerContent = $derived(interiorMaterials.find(m => m.value === selectedInteriorMaterial)?.text || m['AddCarPage.AddCarBasicInformation.interiorMaterialPlaceholder']());
    const colorExteriorTriggerContent = $derived(colors.find(c => c.value === selectedColorExterior)?.text || m['AddCarPage.AddCarBasicInformation.colorExteriorPlaceholder']());
    const colorInteriorTriggerContent = $derived(colors.find(c => c.value === selectedColorInterior)?.text || m['AddCarPage.AddCarBasicInformation.colorInteriorPlaceholder']());
    const currencyTriggerContent = $derived(selectedCurrency || "EUR");

    $effect(() => {
        addCarContext.formData.brand = selectedBrand;
        addCarContext.formData.carType = selectedCarType;
        addCarContext.formData.fuel = selectedFuel;
        addCarContext.formData.transmission = selectedTransmission;
        addCarContext.formData.drivetrain = selectedDrivetrain;
        addCarContext.formData.interiorMaterial = selectedInteriorMaterial;
        addCarContext.formData.colorExterior = selectedColorExterior;
        addCarContext.formData.colorInterior = selectedColorInterior;
        addCarContext.formData.currency = selectedCurrency;
    });
</script>

<Card>
    <CardHeader>
        <CardTitle>{m['AddCarPage.AddCarBasicInformation.title']()}</CardTitle>
    </CardHeader>
    <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-2">
                <Label for="vin">{m['AddCarPage.AddCarBasicInformation.vinLabel']()}</Label>
                <Input
                    id="vin"
                    name="vin"
                    bind:value={addCarContext.formData.vin}
                    placeholder={m['AddCarPage.AddCarBasicInformation.vinPlaceholder']()}
                    class={addCarContext.errors.vin ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.vin ? [{message: addCarContext.errors.vin}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="brand">{m['AddCarPage.AddCarBasicInformation.brandLabel']()}</Label>
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
                <Label for="model">{m['AddCarPage.AddCarBasicInformation.modelLabel']()}</Label>
                <Input
                    id="model"
                    name="model"
                    bind:value={addCarContext.formData.model}
                    placeholder={m['AddCarPage.AddCarBasicInformation.modelPlaceholder']()}
                    class={addCarContext.errors.model ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.model ? [{message: addCarContext.errors.model}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="year">{m['AddCarPage.AddCarBasicInformation.yearLabel']()}</Label>
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
                <Label for="carType">{m['AddCarPage.AddCarBasicInformation.carTypeLabel']()}</Label>
                <Select type="single" name="carType" bind:value={selectedCarType}>
                    <SelectTrigger class={addCarContext.errors.carType ? 'border-destructive' : ''}>
                        <span>{carTypeTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each carTypes as carType}
                            <SelectItem value={carType.value}>{carType.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.carType ? [{message: addCarContext.errors.carType}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="price">{m['AddCarPage.AddCarBasicInformation.priceLabel']()}</Label>
                <div class="flex">
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        bind:value={addCarContext.formData.price}
                        placeholder={m['AddCarPage.AddCarBasicInformation.pricePlaceholder']()}
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
                <Label for="mileageKm">{m['AddCarPage.AddCarBasicInformation.mileageLabel']()}</Label>
                <Input
                    id="mileageKm"
                    name="mileageKm"
                    type="number"
                    bind:value={addCarContext.formData.mileageKm}
                    placeholder={m['AddCarPage.AddCarBasicInformation.mileagePlaceholder']()}
                    class={addCarContext.errors.mileageKm ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.mileageKm ? [{message: addCarContext.errors.mileageKm}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="fuel">{m['AddCarPage.AddCarBasicInformation.fuelLabel']()}</Label>
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
                <Label for="transmission">{m['AddCarPage.AddCarBasicInformation.transmissionLabel']()}</Label>
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
                <Label for="engine">{m['AddCarPage.AddCarBasicInformation.engineLabel']()}</Label>
                <Input
                    id="engine"
                    name="engine"
                    bind:value={addCarContext.formData.engine}
                    placeholder={m['AddCarPage.AddCarBasicInformation.enginePlaceholder']()}
                    class={addCarContext.errors.engine ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.engine ? [{message: addCarContext.errors.engine}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="powerHp">{m['AddCarPage.AddCarBasicInformation.powerLabel']()}</Label>
                <Input
                    id="powerHp"
                    name="powerHp"
                    type="number"
                    bind:value={addCarContext.formData.powerHp}
                    placeholder={m['AddCarPage.AddCarBasicInformation.powerPlaceholder']()}
                    class={addCarContext.errors.powerHp ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.powerHp ? [{message: addCarContext.errors.powerHp}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="drivetrain">{m['AddCarPage.AddCarBasicInformation.drivetrainLabel']()}</Label>
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
                <Label for="colorExterior">{m['AddCarPage.AddCarBasicInformation.colorExteriorLabel']()}</Label>
                <Select type="single" name="colorExterior" bind:value={selectedColorExterior}>
                    <SelectTrigger class={addCarContext.errors.colorExterior ? 'border-destructive' : ''}>
                        <span>{colorExteriorTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each colors as color}
                            <SelectItem value={color.value}>{color.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.colorExterior ? [{message: addCarContext.errors.colorExterior}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="colorInterior">{m['AddCarPage.AddCarBasicInformation.colorInteriorLabel']()}</Label>
                <Select type="single" name="colorInterior" bind:value={selectedColorInterior}>
                    <SelectTrigger class={addCarContext.errors.colorInterior ? 'border-destructive' : ''}>
                        <span>{colorInteriorTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each colors as color}
                            <SelectItem value={color.value}>{color.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.colorInterior ? [{message: addCarContext.errors.colorInterior}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="interiorMaterial">{m['AddCarPage.AddCarBasicInformation.interiorMaterialLabel']()}</Label>
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
                <Label for="location">{m['AddCarPage.AddCarBasicInformation.locationLabel']()}</Label>
                <Input
                    id="location"
                    name="location"
                    bind:value={addCarContext.formData.location}
                    placeholder={m['AddCarPage.AddCarBasicInformation.locationPlaceholder']()}
                    class={addCarContext.errors.location ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.location ? [{message: addCarContext.errors.location}] : undefined} />
            </div>

            <div class="space-y-2 md:col-span-2">
                <Label for="description">{m['AddCarPage.AddCarBasicInformation.descriptionLabel']()}</Label>
                <Textarea
                    id="description"
                    name="description"
                    bind:value={addCarContext.formData.description}
                    placeholder={m['AddCarPage.AddCarBasicInformation.descriptionPlaceholder']()}
                    rows={4}
                    class={addCarContext.errors.description ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.description ? [{message: addCarContext.errors.description}] : undefined} />
            </div>
        </div>
    </CardContent>
</Card>