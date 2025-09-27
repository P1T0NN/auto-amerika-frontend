<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    let selectedHomologationStatus = $state(addCarContext.formData.homologationStatus || "");
    let selectedRegistrationStatus = $state(addCarContext.formData.registrationStatus || "");

    const homologationStatusTriggerContent = $derived(selectedHomologationStatus || "Izaberite status");
    const registrationStatusTriggerContent = $derived(selectedRegistrationStatus || "Izaberite status");

    $effect(() => {
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
                <Input
                    id="originCountry"
                    name="originCountry"
                    placeholder="USA"
                    bind:value={addCarContext.formData.originCountry}
                    class={addCarContext.errors.originCountry ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.originCountry ? [{message: addCarContext.errors.originCountry}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseSource">Izvor kupovine *</Label>
                <Input
                    id="purchaseSource"
                    name="purchaseSource"
                    placeholder="Aukcija, dealer, privatno..."
                    bind:value={addCarContext.formData.purchaseSource}
                    class={addCarContext.errors.purchaseSource ? 'border-destructive' : ''}
                />
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
                        <SelectItem value="completed">Završena</SelectItem>
                        <SelectItem value="in_progress">U toku</SelectItem>
                        <SelectItem value="not_started">Nije započeta</SelectItem>
                        <SelectItem value="not_required">Nije potrebna</SelectItem>
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
                        <SelectItem value="registered">Registrovano</SelectItem>
                        <SelectItem value="pending">Na čekanju</SelectItem>
                        <SelectItem value="not_registered">Nije registrovano</SelectItem>
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.registrationStatus ? [{message: addCarContext.errors.registrationStatus}] : undefined} />
            </div>
        </div>
    </CardContent>
</Card>