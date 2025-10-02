<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Label } from '@/shared/components/ui/label';
    import { Input } from '@/shared/components/ui/input';
    import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared/components/ui/select';
    import { Textarea } from '@/shared/components/ui/textarea';
    import ErrorMessage from '@/shared/components/ui/error-message/error-message.svelte';

    // DATA
    import { brands, carTypes } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesEditCarInformationData } from "@/features/cars/schemas/cars-schemas";

    let { car, editCarForm }: {
        car: typesCar;
        editCarForm: RemoteForm<typesEditCarInformationData, ApiResponse<void>>
    } = $props();

    let selectedBrand = $state(editCarForm.input?.brand || car.brand || "");
    let selectedCarType = $state(editCarForm.input?.carType || car.carType || "");
    let selectedCurrency = $state(editCarForm.input?.currency || car.currency || "EUR");

    const brandTriggerContent = $derived(brands.find(b => b.value === selectedBrand)?.text || m['EditCarPage.EditCarTabInformation.BasicInformation.brandPlaceholder']());
    const carTypeTriggerContent = $derived(carTypes.find(bt => bt.value === selectedCarType)?.text || m['EditCarPage.EditCarTabInformation.BasicInformation.carTypePlaceholder']());
    const currencyTriggerContent = $derived(selectedCurrency || "EUR");
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-xl">{m['EditCarPage.EditCarTabInformation.BasicInformation.title']()}</CardTitle>
        <CardDescription>{m['EditCarPage.EditCarTabInformation.BasicInformation.description']()}</CardDescription>
    </CardHeader>

    <CardContent class="space-y-6">
        <!-- Hidden id field -->
        <input type="hidden" name="id" value={car.id} />

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="space-y-2">
                <Label for="vin" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.vinNumber']}</Label>
                <Input
                    id="vin"
                    name="vin"
                    placeholder="1HGBH41JXMN109186"
                    value={editCarForm.input?.vin || car.vin || ''}
                    class={editCarForm.issues?.vin ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.vin} />
            </div>

            <div class="space-y-2">
                <Label for="brand" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.brand']}</Label>
                <Select type="single" name="brand" bind:value={selectedBrand}>
                    <SelectTrigger class={editCarForm.issues?.brand ? 'border-destructive' : ''}>
                        <span>{brandTriggerContent}</span>
                    </SelectTrigger>

                    <SelectContent>
                        {#each brands as brand}
                            <SelectItem value={brand.value}>{brand.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.brand} />
            </div>

            <div class="space-y-2">
                <Label for="model" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.model']}</Label>
                <Input
                    id="model"
                    name="model"
                    placeholder="Mustang GT"
                    value={editCarForm.input?.model || car.model || ''}
                    class={editCarForm.issues?.model ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.model} />
            </div>

            <div class="space-y-2">
                <Label for="year" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.year']}</Label>
                <Input
                    id="year"
                    name="year"
                    type="number"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={editCarForm.input?.year || car.year || ''}
                    class={editCarForm.issues?.year ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.year} />
            </div>

            <div class="space-y-2">
                <Label for="carType" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.carType']}</Label>
                <Select type="single" name="carType" bind:value={selectedCarType}>
                    <SelectTrigger class={editCarForm.issues?.carType ? 'border-destructive' : ''}>
                        <span>{carTypeTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each carTypes as carType}
                            <SelectItem value={carType.value}>{carType.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.carType} />
            </div>

            <div class="space-y-2">
                <Label for="price" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.price']}</Label>
                <div class="flex">
                    <Input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="45000"
                        value={editCarForm.input?.price || car.price || ''}
                        class="rounded-r-none {editCarForm.issues?.price ? 'border-destructive' : ''}"
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
                <ErrorMessage issues={editCarForm.issues?.price} />
            </div>

            <div class="space-y-2">
                <Label for="location" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.location']}</Label>
                <Input
                    id="location"
                    name="location"
                    placeholder="Beograd, Srbija"
                    value={editCarForm.input?.location || car.location || ''}
                    class={editCarForm.issues?.location ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.location} />
            </div>
        </div>

        <div class="space-y-2">
            <Label for="description" class="text-sm font-medium">{m['EditCarPage.EditCarTabInformation.BasicInformation.carDescription']}</Label>
            <Textarea
                id="description"
                name="description"
                placeholder={m['EditCarPage.EditCarTabInformation.BasicInformation.carDescriptionPlaceholder']()}
                value={editCarForm.input?.description || car.description || ''}
                rows={4}
                class={editCarForm.issues?.description ? 'border-destructive' : ''}
            />
            <ErrorMessage issues={editCarForm.issues?.description} />
        </div>
    </CardContent>
</Card>