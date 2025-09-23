<script lang="ts">
    // COMPONENTS
    import { Input } from "@/shared/components/ui/input";
    import { Label } from "@/shared/components/ui/label";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div class="space-y-2">
        <Label for="originCountry">Zemlja porekla</Label>
        <Input id="originCountry" bind:value={addCarContext.importData.originCountry} placeholder="USA" />
    </div>

    <div class="space-y-2">
        <Label for="purchaseSource">Izvor kupovine</Label>
        <Input
            id="purchaseSource"
            bind:value={addCarContext.importData.purchaseSource}
            placeholder="Copart, IAAI, Dealer..."
        />
    </div>

    <div class="space-y-2">
        <Label for="purchaseDate">Datum kupovine</Label>
        <Input id="purchaseDate" type="date" bind:value={addCarContext.importData.purchaseDate} />
    </div>

    <div class="space-y-2">
        <Label for="usPurchasePrice">Kupovna cena (USD)</Label>
        <Input
            id="usPurchasePrice"
            type="number"
            bind:value={addCarContext.importData.usPurchasePrice}
            placeholder="25000"
        />
    </div>

    <div class="space-y-2">
        <Label for="shippingCost">Troškovi transporta (USD)</Label>
        <Input
            id="shippingCost"
            type="number"
            bind:value={addCarContext.importData.shippingCost}
            placeholder="1500"
        />
    </div>

    <div class="space-y-2">
        <Label for="customsTax">Carinska taksa (EUR)</Label>
        <Input
            id="customsTax"
            type="number"
            bind:value={addCarContext.importData.customsTax}
            placeholder="5000"
        />
    </div>

    <div class="space-y-2">
        <Label for="importDate">Datum uvoza</Label>
        <Input id="importDate" type="date" bind:value={addCarContext.importData.importDate} />
    </div>

    <div class="space-y-2">
        <Label for="homologationStatus">Status homologacije</Label>
        <Select type="single" bind:value={addCarContext.importData.homologationStatus as string}>
            <SelectTrigger>
                <span>Izaberite status</span>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="completed">Završena</SelectItem>
                <SelectItem value="in-progress">U toku</SelectItem>
                <SelectItem value="pending">Na čekanju</SelectItem>
                <SelectItem value="not-required">Nije potrebna</SelectItem>
            </SelectContent>
        </Select>
    </div>

    <div class="space-y-2">
        <Label for="registrationStatus">Status registracije</Label>
        <Select type="single" bind:value={addCarContext.importData.registrationStatus as string}>
            <SelectTrigger>
                <span>Izaberite status</span>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="registered">Registrovan</SelectItem>
                <SelectItem value="pending">Na čekanju</SelectItem>
                <SelectItem value="in-progress">U toku</SelectItem>
                <SelectItem value="not-started">Nije započeto</SelectItem>
            </SelectContent>
        </Select>
    </div>
</div>