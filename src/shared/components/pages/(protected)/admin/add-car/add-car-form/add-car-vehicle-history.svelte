<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // TYPES
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesAddCarCompleteData } from "@/features/cars/schemas/cars-schemas";

    let { addCar }: { addCar: RemoteForm<typesAddCarCompleteData, ApiResponse<void>> } = $props();

    let selectedTitleStatus = $state(addCar.input?.titleStatus || "");
    let selectedAccidents = $state(addCar.input?.accidents || "");

    const titleStatusTriggerContent = $derived(selectedTitleStatus || "Izaberite status");
    const accidentsTriggerContent = $derived(selectedAccidents || "Izaberite");
</script>

<Card>
    <CardHeader>
        <CardTitle>Istorija vozila</CardTitle>
    </CardHeader>
    <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-2">
                <Label for="titleStatus">Status vlasništva *</Label>
                <Select
                    type="single"
                    name="titleStatus"
                    bind:value={selectedTitleStatus}
                >
                    <SelectTrigger class={addCar.issues?.titleStatus ? 'border-destructive' : ''}>
                        {titleStatusTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="clean">Čist</SelectItem>
                        <SelectItem value="salvage">Oštećen</SelectItem>
                        <SelectItem value="rebuilt">Obnovljen</SelectItem>
                        <SelectItem value="lemon">Lemon</SelectItem>
                        <SelectItem value="flood">Poplavljeno</SelectItem>
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.titleStatus} />
            </div>

            <div class="space-y-2">
                <Label for="firstRegistration">Prva registracija *</Label>
                <Input
                    id="firstRegistration"
                    name="firstRegistration"
                    type="date"
                    value={addCar.input?.firstRegistration}
                    class={addCar.issues?.firstRegistration ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.firstRegistration} />
            </div>

            <div class="space-y-2">
                <Label for="owners">Broj vlasnika *</Label>
                <Input
                    id="owners"
                    name="owners"
                    type="number"
                    min="1"
                    placeholder="1"
                    value={addCar.input?.owners}
                    class={addCar.issues?.owners ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.owners} />
            </div>

            <div class="space-y-2">
                <Label for="accidents">Nesreće *</Label>
                <Select
                    type="single"
                    name="accidents"
                    bind:value={selectedAccidents}
                >
                    <SelectTrigger class={addCar.issues?.accidents ? 'border-destructive' : ''}>
                        {accidentsTriggerContent}
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">Bez nesreća</SelectItem>
                        <SelectItem value="minor">Manje nesreće</SelectItem>
                        <SelectItem value="major">Veće nesreće</SelectItem>
                        <SelectItem value="unknown">Nepoznato</SelectItem>
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCar.issues?.accidents} />
            </div>

            <div class="space-y-2 md:col-span-2">
                <Label for="serviceHistory">Istorija servisiranja *</Label>
                <Textarea
                    id="serviceHistory"
                    name="serviceHistory"
                    placeholder="Detalji o servisnoj istoriji vozila..."
                    value={addCar.input?.serviceHistory}
                    rows={3}
                    class={addCar.issues?.serviceHistory ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCar.issues?.serviceHistory} />
            </div>
        </div>
    </CardContent>
</Card>