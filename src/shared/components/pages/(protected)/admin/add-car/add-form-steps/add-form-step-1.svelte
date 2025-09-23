<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';

    const brands = [
		'Ford',
		'Chevrolet',
		'Dodge',
		'Cadillac',
		'Tesla',
		'Jeep',
		'GMC',
		'Buick',
		'Lincoln',
		'Chrysler'
	];
	const fuelTypes = ['Benzin', 'Dizel', 'Hibrid', 'Električni', 'Flex Fuel'];
	const transmissionTypes = ['Automatski', 'Manuelni', 'CVT', 'Poluautomatski'];
	const drivetrainTypes = ['FWD', 'RWD', 'AWD', '4WD'];
	const interiorMaterials = ['Tkanina', 'Koža', 'Veštačka koža', 'Alcantara', 'Kombinovano'];
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div class="space-y-2">
        <Label for="vin">VIN broj *</Label>
        <Input
            id="vin"
            bind:value={addCarContext.carData.vin}
            placeholder="1HGBH41JXMN109186"
            class={addCarContext.errors.vin ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.vin ? [{message: addCarContext.errors.vin}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="brand">Brend *</Label>
        <Select type="single" bind:value={addCarContext.carData.brand as string}>
            <SelectTrigger class={addCarContext.errors.brand ? 'border-destructive' : ''}>
                <span>Izaberite brend</span>
            </SelectTrigger>
            <SelectContent>
                {#each brands as brand}
                    <SelectItem value={brand}>{brand}</SelectItem>
                {/each}
            </SelectContent>
        </Select>
        <ErrorMessage issues={addCarContext.errors.brand ? [{message: addCarContext.errors.brand}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="model">Model *</Label>
        <Input
            id="model"
            bind:value={addCarContext.carData.model}
            placeholder="Mustang GT"
            class={addCarContext.errors.model ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.model ? [{message: addCarContext.errors.model}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="year">Godina *</Label>
        <Input
            id="year"
            type="number"
            bind:value={addCarContext.carData.year}
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
                type="number"
                bind:value={addCarContext.carData.price}
                placeholder="45000"
                class="rounded-r-none {addCarContext.errors.price ? 'border-destructive' : ''}"
            />
            <Select type="single" bind:value={addCarContext.carData.currency as string}>
                <SelectTrigger class="w-20 rounded-l-none border-l-0">
                    <span>EUR</span>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="RSD">RSD</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <ErrorMessage issues={addCarContext.errors.price ? [{message: addCarContext.errors.price}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="mileageKm">Kilometraža (km) *</Label>
        <Input
            id="mileageKm"
            type="number"
            bind:value={addCarContext.carData.mileageKm}
            placeholder="50000"
            class={addCarContext.errors.mileageKm ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.mileageKm ? [{message: addCarContext.errors.mileageKm}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="fuel">Gorivo *</Label>
        <Select type="single" bind:value={addCarContext.carData.fuel as string}>
            <SelectTrigger class={addCarContext.errors.fuel ? 'border-destructive' : ''}>
                <span>Izaberite gorivo</span>
            </SelectTrigger>
            <SelectContent>
                {#each fuelTypes as fuel}
                    <SelectItem value={fuel}>{fuel}</SelectItem>
                {/each}
            </SelectContent>
        </Select>
        <ErrorMessage issues={addCarContext.errors.fuel ? [{message: addCarContext.errors.fuel}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="transmission">Menjač *</Label>
        <Select type="single" bind:value={addCarContext.carData.transmission as string}>
            <SelectTrigger class={addCarContext.errors.transmission ? 'border-destructive' : ''}>
                <span>Izaberite menjač</span>
            </SelectTrigger>
            <SelectContent>
                {#each transmissionTypes as transmission}
                    <SelectItem value={transmission}>{transmission}</SelectItem>
                {/each}
            </SelectContent>
        </Select>
        <ErrorMessage issues={addCarContext.errors.transmission ? [{message: addCarContext.errors.transmission}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="engine">Motor *</Label>
        <Input
            id="engine"
            bind:value={addCarContext.carData.engine}
            placeholder="5.0L V8"
            class={addCarContext.errors.engine ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.engine ? [{message: addCarContext.errors.engine}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="powerHp">Snaga (HP) *</Label>
        <Input
            id="powerHp"
            type="number"
            bind:value={addCarContext.carData.powerHp}
            placeholder="450"
            class={addCarContext.errors.powerHp ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.powerHp ? [{message: addCarContext.errors.powerHp}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="drivetrain">Pogon *</Label>
        <Select type="single" bind:value={addCarContext.carData.drivetrain as string}>
            <SelectTrigger class={addCarContext.errors.drivetrain ? 'border-destructive' : ''}>
                <span>Izaberite pogon</span>
            </SelectTrigger>
            <SelectContent>
                {#each drivetrainTypes as drivetrain}
                    <SelectItem value={drivetrain}>{drivetrain}</SelectItem>
                {/each}
            </SelectContent>
        </Select>
        <ErrorMessage issues={addCarContext.errors.drivetrain ? [{message: addCarContext.errors.drivetrain}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="colorExterior">Spoljašnja boja *</Label>
        <Input
            id="colorExterior"
            bind:value={addCarContext.carData.colorExterior}
            placeholder="Crvena"
            class={addCarContext.errors.colorExterior ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.colorExterior ? [{message: addCarContext.errors.colorExterior}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="colorInterior">Unutrašnja boja *</Label>
        <Input
            id="colorInterior"
            bind:value={addCarContext.carData.colorInterior}
            placeholder="Crna"
            class={addCarContext.errors.colorInterior ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.colorInterior ? [{message: addCarContext.errors.colorInterior}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="interiorMaterial">Materijal enterijera *</Label>
        <Select type="single" bind:value={addCarContext.carData.interiorMaterial as string}>
            <SelectTrigger class={addCarContext.errors.interiorMaterial ? 'border-destructive' : ''}>
                <span>Izaberite materijal</span>
            </SelectTrigger>
            <SelectContent>
                {#each interiorMaterials as material}
                    <SelectItem value={material}>{material}</SelectItem>
                {/each}
            </SelectContent>
        </Select>
        <ErrorMessage issues={addCarContext.errors.interiorMaterial ? [{message: addCarContext.errors.interiorMaterial}] : undefined} />
    </div>

    <div class="space-y-2">
        <Label for="location">Lokacija *</Label>
        <Input
            id="location"
            bind:value={addCarContext.carData.location}
            placeholder="Beograd, Srbija"
            class={addCarContext.errors.location ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.location ? [{message: addCarContext.errors.location}] : undefined} />
    </div>

    <div class="space-y-2 md:col-span-2">
        <Label for="description">Opis *</Label>
        <Textarea
            id="description"
            bind:value={addCarContext.carData.description}
            placeholder="Detaljni opis vozila, stanja, dodatne opreme..."
            rows={4}
            class={addCarContext.errors.description ? 'border-destructive' : ''}
        />
        <ErrorMessage issues={addCarContext.errors.description ? [{message: addCarContext.errors.description}] : undefined} />
    </div>
</div>