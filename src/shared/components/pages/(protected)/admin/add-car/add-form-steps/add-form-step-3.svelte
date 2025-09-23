<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import { Input } from "@/shared/components/ui/input";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from '@/features/cars/context/cars-context.svelte';
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div class="space-y-2">
        <Label for="titleStatus">Status vlasništva</Label>
        <Select type="single" bind:value={addCarContext.historyData.titleStatus as string}>
            <SelectTrigger>
                <span>Izaberite status</span>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="clean">Čist</SelectItem>
                <SelectItem value="salvage">Oštećen</SelectItem>
                <SelectItem value="flood">Poplavljen</SelectItem>
                <SelectItem value="lemon">Lemon</SelectItem>
                <SelectItem value="rebuilt">Obnovljen</SelectItem>
            </SelectContent>
        </Select>
    </div>

    <div class="space-y-2">
        <Label for="firstRegistration">Prva registracija</Label>
        <Input
            id="firstRegistration"
            type="date"
            bind:value={addCarContext.historyData.firstRegistration}
        />
    </div>

    <div class="space-y-2">
        <Label for="owners">Broj vlasnika</Label>
        <Input
            id="owners"
            type="number"
            bind:value={addCarContext.historyData.owners}
            min="1"
            placeholder="1"
        />
    </div>

    <div class="space-y-2">
        <Label for="accidents">Informacije o nesrećama</Label>
        <Select type="single" bind:value={addCarContext.historyData.accidents as string}>
            <SelectTrigger>
                <span>Izaberite</span>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="none">Bez nesreća</SelectItem>
                <SelectItem value="minor">Manje oštećenje</SelectItem>
                <SelectItem value="major">Veće oštećenje</SelectItem>
                <SelectItem value="unknown">Nepoznato</SelectItem>
            </SelectContent>
        </Select>
    </div>

    <div class="space-y-2 md:col-span-2">
        <Label for="serviceHistory">Istorija servisiranja</Label>
        <Textarea
            id="serviceHistory"
            bind:value={addCarContext.historyData.serviceHistory}
            placeholder="Detalji o servisiranju, zamenama delova, održavanju..."
            rows={4}
        />
    </div>
</div>