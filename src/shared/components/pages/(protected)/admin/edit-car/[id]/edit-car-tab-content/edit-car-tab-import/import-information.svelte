<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Label } from '@/shared/components/ui/label';
    import { Input } from '@/shared/components/ui/input';
    import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared/components/ui/select';
    import ErrorMessage from '@/shared/components/ui/error-message/error-message.svelte';

    // DATA
    import { originCountries, purchaseSources, homologationStatusOptions, registrationStatusOptions } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesEditCarImportData } from "@/features/cars/schemas/cars-schemas";

    let { car, editCarForm }: {
        car: typesCar;
        editCarForm: RemoteForm<typesEditCarImportData, ApiResponse<void>>
    } = $props();

    let selectedOriginCountry = $state(editCarForm.input?.originCountry || car.import?.originCountry || "");
    let selectedPurchaseSource = $state(editCarForm.input?.purchaseSource || car.import?.purchaseSource || "");
    let selectedHomologationStatus = $state(editCarForm.input?.homologationStatus || car.import?.homologationStatus || "");
    let selectedRegistrationStatus = $state(editCarForm.input?.registrationStatus || car.import?.registrationStatus || "");

    const originCountryTriggerContent = $derived(
        originCountries.find(option => option.value === selectedOriginCountry)?.text || m['EditCarPage.EditCarTabImport.ImportInformation.originCountryPlaceholder']()
    );
    const purchaseSourceTriggerContent = $derived(
        purchaseSources.find(option => option.value === selectedPurchaseSource)?.text || m['EditCarPage.EditCarTabImport.ImportInformation.purchaseSourcePlaceholder']()
    );
    const homologationStatusTriggerContent = $derived(
        homologationStatusOptions.find(option => option.value === selectedHomologationStatus)?.text || m['EditCarPage.EditCarTabImport.ImportInformation.homologationStatusPlaceholder']()
    );
    const registrationStatusTriggerContent = $derived(
        registrationStatusOptions.find(option => option.value === selectedRegistrationStatus)?.text || m['EditCarPage.EditCarTabImport.ImportInformation.registrationStatusPlaceholder']()
    );
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-xl">{m['EditCarPage.EditCarTabImport.ImportInformation.title']}</CardTitle>
        <CardDescription>{m['EditCarPage.EditCarTabImport.ImportInformation.description']}</CardDescription>
    </CardHeader>
    
    <CardContent class="space-y-6">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <!-- Hidden carId field -->
            <input type="hidden" name="carId" value={car.id} />

            <div class="space-y-2">
                <Label for="originCountry" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.originCountry']}</Label>
                <Select type="single" name="originCountry" bind:value={selectedOriginCountry}>
                    <SelectTrigger class={editCarForm.issues?.originCountry ? 'border-destructive' : ''}>
                        <span>{originCountryTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each originCountries as country}
                            <SelectItem value={country.value}>{country.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.originCountry} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseSource" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.purchaseSource']}</Label>
                <Select type="single" name="purchaseSource" bind:value={selectedPurchaseSource}>
                    <SelectTrigger class={editCarForm.issues?.purchaseSource ? 'border-destructive' : ''}>
                        <span>{purchaseSourceTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each purchaseSources as source}
                            <SelectItem value={source.value}>{source.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.purchaseSource} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseDate" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.purchaseDate']}</Label>
                <Input
                    id="purchaseDate"
                    name="purchaseDate"
                    type="date"
                    value={editCarForm.input?.purchaseDate || car.import?.purchaseDate || ''}
                    class={editCarForm.issues?.purchaseDate ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.purchaseDate} />
            </div>

            <div class="space-y-2">
                <Label for="usPurchasePrice" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.usPurchasePrice']}</Label>
                <Input
                    id="usPurchasePrice"
                    name="usPurchasePrice"
                    type="number"
                    placeholder="25000"
                    value={editCarForm.input?.usPurchasePrice || car.import?.usPurchasePrice || ''}
                    class={editCarForm.issues?.usPurchasePrice ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.usPurchasePrice} />
            </div>

            <div class="space-y-2">
                <Label for="shippingCost" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.shippingCost']}</Label>
                <Input
                    id="shippingCost"
                    name="shippingCost"
                    type="number"
                    placeholder="1500"
                    value={editCarForm.input?.shippingCost || car.import?.shippingCost || ''}
                    class={editCarForm.issues?.shippingCost ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.shippingCost} />
            </div>

            <div class="space-y-2">
                <Label for="customsTax" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.customsTax']}</Label>
                <Input
                    id="customsTax"
                    name="customsTax"
                    type="number"
                    placeholder="3000"
                    value={editCarForm.input?.customsTax || car.import?.customsTax || ''}
                    class={editCarForm.issues?.customsTax ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.customsTax} />
            </div>

            <div class="space-y-2">
                <Label for="importDate" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.importDate']}</Label>
                <Input
                    id="importDate"
                    name="importDate"
                    type="date"
                    value={editCarForm.input?.importDate || car.import?.importDate || ''}
                    class={editCarForm.issues?.importDate ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.importDate} />
            </div>

            <div class="space-y-2">
                <Label for="homologationStatus" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.homologationStatus']}</Label>
                <Select type="single" name="homologationStatus" bind:value={selectedHomologationStatus}>
                    <SelectTrigger class={editCarForm.issues?.homologationStatus ? 'border-destructive' : ''}>
                        <span>{homologationStatusTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each homologationStatusOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.homologationStatus} />
            </div>

            <div class="space-y-2">
                <Label for="registrationStatus" class="text-sm font-medium">{m['EditCarPage.EditCarTabImport.ImportInformation.registrationStatus']}</Label>
                <Select type="single" name="registrationStatus" bind:value={selectedRegistrationStatus}>
                    <SelectTrigger class={editCarForm.issues?.registrationStatus ? 'border-destructive' : ''}>
                        <span>{registrationStatusTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each registrationStatusOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.registrationStatus} />
            </div>
        </div>
    </CardContent>
</Card>