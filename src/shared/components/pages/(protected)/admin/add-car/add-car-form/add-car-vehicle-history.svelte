<script lang="ts">
    // COMPONENTS
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import { Textarea } from "@/shared/components/ui/textarea";
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";

    // CONTEXT
    import { addCarContext } from "@/features/cars/context/cars-context.svelte";

    // DATA
    import { titleStatusOptions, accidentsOptions } from "@/features/cars/data/cars-data";

    let selectedTitleStatus = $state(addCarContext.formData.titleStatus || "");
    let selectedAccidents = $state(addCarContext.formData.accidents || "");

    const titleStatusTriggerContent = $derived(
        titleStatusOptions.find(option => option.value === selectedTitleStatus)?.text || "Izaberite status"
    );
    const accidentsTriggerContent = $derived(
        accidentsOptions.find(option => option.value === selectedAccidents)?.text || "Izaberite"
    );

    $effect(() => {
        addCarContext.formData.titleStatus = selectedTitleStatus;
        addCarContext.formData.accidents = selectedAccidents;
    });
</script>

<Card>
    <CardHeader>
        <CardTitle>Istorija vozila</CardTitle>
    </CardHeader>
    <CardContent>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-2">
                <Label for="titleStatus">Status vlasništva *</Label>
                <Select type="single" name="titleStatus" bind:value={selectedTitleStatus}>
                    <SelectTrigger class={addCarContext.errors.titleStatus ? 'border-destructive' : ''}>
                        <span>{titleStatusTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each titleStatusOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.titleStatus ? [{message: addCarContext.errors.titleStatus}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="firstRegistration">Prva registracija *</Label>
                <Input
                    id="firstRegistration"
                    name="firstRegistration"
                    type="date"
                    bind:value={addCarContext.formData.firstRegistration}
                    class={addCarContext.errors.firstRegistration ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.firstRegistration ? [{message: addCarContext.errors.firstRegistration}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="owners">Broj vlasnika *</Label>
                <Input
                    id="owners"
                    name="owners"
                    type="number"
                    min="1"
                    placeholder="1"
                    bind:value={addCarContext.formData.owners}
                    class={addCarContext.errors.owners ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.owners ? [{message: addCarContext.errors.owners}] : undefined} />
            </div>

            <div class="space-y-2">
                <Label for="accidents">Nesreće *</Label>
                <Select type="single" name="accidents" bind:value={selectedAccidents}>
                    <SelectTrigger class={addCarContext.errors.accidents ? 'border-destructive' : ''}>
                        <span>{accidentsTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each accidentsOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={addCarContext.errors.accidents ? [{message: addCarContext.errors.accidents}] : undefined} />
            </div>

            <div class="space-y-2 md:col-span-2">
                <Label for="serviceHistory">Istorija servisiranja *</Label>
                <Textarea
                    id="serviceHistory"
                    name="serviceHistory"
                    placeholder="Detalji o servisnoj istoriji vozila..."
                    bind:value={addCarContext.formData.serviceHistory}
                    rows={3}
                    class={addCarContext.errors.serviceHistory ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={addCarContext.errors.serviceHistory ? [{message: addCarContext.errors.serviceHistory}] : undefined} />
            </div>
        </div>
    </CardContent>
</Card>