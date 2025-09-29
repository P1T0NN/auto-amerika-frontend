<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    // DATA
    import { originCountries, purchaseSources, homologationStatusOptions, registrationStatusOptions } from "@/features/cars/data/cars-data";

    let selectedOriginCountry = $state(addCarContext.formData.originCountry || "");
    let selectedPurchaseSource = $state(addCarContext.formData.purchaseSource || "");
    let selectedHomologationStatus = $state(addCarContext.formData.homologationStatus || "");
    let selectedRegistrationStatus = $state(addCarContext.formData.registrationStatus || "");

    const originCountryTriggerContent = $derived(
        originCountries.find(option => option.value === selectedOriginCountry)?.text || "Izaberite zemlju"
    );
    const purchaseSourceTriggerContent = $derived(
        purchaseSources.find(option => option.value === selectedPurchaseSource)?.text || "Izaberite izvor"
    );
    const homologationStatusTriggerContent = $derived(
        homologationStatusOptions.find(option => option.value === selectedHomologationStatus)?.text || "Izaberite status"
    );
    const registrationStatusTriggerContent = $derived(
        registrationStatusOptions.find(option => option.value === selectedRegistrationStatus)?.text || "Izaberite status"
    );

    $effect(() => {
        addCarContext.formData.originCountry = selectedOriginCountry;
        addCarContext.formData.purchaseSource = selectedPurchaseSource;
        addCarContext.formData.homologationStatus = selectedHomologationStatus;
        addCarContext.formData.registrationStatus = selectedRegistrationStatus;
    });
</script>

<Card>
    <CardHeader>
        <CardTitle>Informacije o uvozu</CardTitle>
    </CardHeader>
    <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-2">
                <Label for="originCountry">Zemlja porekla *</Label>
                <Select type="single" name="originCountry" bind:value={selectedOriginCountry}>
                    <SelectTrigger class={addCarContext.errors.originCountry ? 'border-destructive' : ''}>
                        <span>{originCountryTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each originCountries as country}
                            <SelectItem value={country.value}>{country.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.originCountry ? [{message: addCarContext.errors.originCountry}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseSource">Izvor kupovine *</Label>
                <Select type="single" name="purchaseSource" bind:value={selectedPurchaseSource}>
                    <SelectTrigger class={addCarContext.errors.purchaseSource ? 'border-destructive' : ''}>
                        <span>{purchaseSourceTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each purchaseSources as source}
                            <SelectItem value={source.value}>{source.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.purchaseSource ? [{message: addCarContext.errors.purchaseSource}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseDate">Datum kupovine *</Label>
                <Input
                    id="purchaseDate"
                    name="purchaseDate"
                    type="date"
                    bind:value={addCarContext.formData.purchaseDate}
                    class={addCarContext.errors.purchaseDate ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.purchaseDate ? [{message: addCarContext.errors.purchaseDate}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="usPurchasePrice">Kupovna cena (USD) *</Label>
                <Input
                    id="usPurchasePrice"
                    name="usPurchasePrice"
                    type="number"
                    placeholder="25000"
                    bind:value={addCarContext.formData.usPurchasePrice}
                    class={addCarContext.errors.usPurchasePrice ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.usPurchasePrice ? [{message: addCarContext.errors.usPurchasePrice}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="shippingCost">Troškovi transporta (USD) *</Label>
                <Input
                    id="shippingCost"
                    name="shippingCost"
                    type="number"
                    placeholder="2000"
                    bind:value={addCarContext.formData.shippingCost}
                    class={addCarContext.errors.shippingCost ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.shippingCost ? [{message: addCarContext.errors.shippingCost}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="customsTax">Carinska taksa (EUR) *</Label>
                <Input
                    id="customsTax"
                    name="customsTax"
                    type="number"
                    placeholder="5000"
                    bind:value={addCarContext.formData.customsTax}
                    class={addCarContext.errors.customsTax ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.customsTax ? [{message: addCarContext.errors.customsTax}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="importDate">Datum uvoza *</Label>
                <Input
                    id="importDate"
                    name="importDate"
                    type="date"
                    bind:value={addCarContext.formData.importDate}
                    class={addCarContext.errors.importDate ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.importDate ? [{message: addCarContext.errors.importDate}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="homologationStatus">Status homologacije *</Label>
                <Select type="single" name="homologationStatus" bind:value={selectedHomologationStatus}>
                    <SelectTrigger class={addCarContext.errors.homologationStatus ? 'border-destructive' : ''}>
                        <span>{homologationStatusTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each homologationStatusOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.homologationStatus ? [{message: addCarContext.errors.homologationStatus}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="registrationStatus">Status registracije *</Label>
                <Select type="single" name="registrationStatus" bind:value={selectedRegistrationStatus}>
                    <SelectTrigger class={addCarContext.errors.registrationStatus ? 'border-destructive' : ''}>
                        <span>{registrationStatusTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each registrationStatusOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.registrationStatus ? [{message: addCarContext.errors.registrationStatus}] : undefined} />
            </div>
        </div>
    </CardContent>
</Card>