<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // TYPES
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesAddCarCompleteData } from "@/features/cars/schemas/cars-schemas";

    let { addCar }: { addCar: RemoteForm<typesAddCarCompleteData, ApiResponse<void>> } = $props();

    // State variables for select components
    let selectedHomologationStatus = $state(addCar.input?.homologationStatus || "");
    let selectedRegistrationStatus = $state(addCar.input?.registrationStatus || "");

    // Derived trigger content
    const homologationStatusTriggerContent = $derived(selectedHomologationStatus || "Izaberite status");
    const registrationStatusTriggerContent = $derived(selectedRegistrationStatus || "Izaberite status");
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
                    value={addCar.input?.originCountry}
                    class={addCar.issues?.originCountry ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.originCountry} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseSource">Izvor kupovine *</Label>
                <Input
                    id="purchaseSource"
                    name="purchaseSource"
                    placeholder="Aukcija, dealer, privatno..."
                    value={addCar.input?.purchaseSource}
                    class={addCar.issues?.purchaseSource ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.purchaseSource} />
            </div>

            <div class="space-y-2">
                <Label for="purchaseDate">Datum kupovine *</Label>
                <Input
                    id="purchaseDate"
                    name="purchaseDate"
                    type="date"
                    value={addCar.input?.purchaseDate}
                    class={addCar.issues?.purchaseDate ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.purchaseDate} />
            </div>

            <div class="space-y-2">
                <Label for="usPurchasePrice">Kupovna cena (USD) *</Label>
                <Input
                    id="usPurchasePrice"
                    name="usPurchasePrice"
                    type="number"
                    placeholder="25000"
                    value={addCar.input?.usPurchasePrice}
                    class={addCar.issues?.usPurchasePrice ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.usPurchasePrice} />
            </div>

            <div class="space-y-2">
                <Label for="shippingCost">Troškovi transporta (USD) *</Label>
                <Input
                    id="shippingCost"
                    name="shippingCost"
                    type="number"
                    placeholder="2000"
                    value={addCar.input?.shippingCost}
                    class={addCar.issues?.shippingCost ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.shippingCost} />
            </div>

            <div class="space-y-2">
                <Label for="customsTax">Carinska taksa (EUR) *</Label>
                <Input
                    id="customsTax"
                    name="customsTax"
                    type="number"
                    placeholder="5000"
                    value={addCar.input?.customsTax}
                    class={addCar.issues?.customsTax ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.customsTax} />
            </div>

            <div class="space-y-2">
                <Label for="importDate">Datum uvoza *</Label>
                <Input
                    id="importDate"
                    name="importDate"
                    type="date"
                    value={addCar.input?.importDate}
                    class={addCar.issues?.importDate ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.importDate} />
            </div>

            <div class="space-y-2">
                <Label for="homologationStatus">Status homologacije *</Label>
                <Select
                    type="single"
                    name="homologationStatus"
                    bind:value={selectedHomologationStatus}
                >
                    <SelectTrigger class={addCar.issues?.homologationStatus ? 'border-destructive' : ''}>
                        {homologationStatusTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="completed">Završena</SelectItem>
                        <SelectItem value="in_progress">U toku</SelectItem>
                        <SelectItem value="not_started">Nije započeta</SelectItem>
                        <SelectItem value="not_required">Nije potrebna</SelectItem>
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.homologationStatus} />
            </div>

            <div class="space-y-2">
                <Label for="registrationStatus">Status registracije *</Label>
                <Select
                    type="single"
                    name="registrationStatus"
                    bind:value={selectedRegistrationStatus}
                >
                    <SelectTrigger class={addCar.issues?.registrationStatus ? 'border-destructive' : ''}>
                        {registrationStatusTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="registered">Registrovano</SelectItem>
                        <SelectItem value="pending">Na čekanju</SelectItem>
                        <SelectItem value="not_registered">Nije registrovano</SelectItem>
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.registrationStatus} />
            </div>
        </div>
    </CardContent>
</Card>