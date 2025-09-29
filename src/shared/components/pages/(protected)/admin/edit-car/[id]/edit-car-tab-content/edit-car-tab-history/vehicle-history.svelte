<script lang="ts">
    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
    import { Label } from '@/shared/components/ui/label';
    import { Input } from '@/shared/components/ui/input';
    import { Select, SelectContent, SelectItem, SelectTrigger } from '@/shared/components/ui/select';
    import { Textarea } from '@/shared/components/ui/textarea';
    import ErrorMessage from '@/shared/components/ui/error-message/error-message.svelte';

    // DATA
    import { titleStatusOptions, accidentsOptions } from '@/features/cars/data/cars-data';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';
    import type { RemoteForm } from "@sveltejs/kit";
    import type { ApiResponse } from "@/shared/lib/api-client/api-client";
    import type { typesEditCarHistoryData } from "@/features/cars/schemas/cars-schemas";

    let { car, editCarForm }: {
        car: typesCar;
        editCarForm: RemoteForm<typesEditCarHistoryData, ApiResponse<void>>
    } = $props();

    // State for select components
    let selectedTitleStatus = $state(editCarForm.input?.titleStatus || car.history?.titleStatus || "");
    let selectedAccidents = $state(editCarForm.input?.accidents || car.history?.accidents || "");

    // Derived trigger content for selects
    const titleStatusTriggerContent = $derived(
        titleStatusOptions.find(option => option.value === selectedTitleStatus)?.text || "Izaberite status"
    );
    const accidentsTriggerContent = $derived(
        accidentsOptions.find(option => option.value === selectedAccidents)?.text || "Izaberite"
    );
</script>

<Card>
    <CardHeader>
        <CardTitle class="text-xl">Vehicle History</CardTitle>
        <CardDescription>Title status, ownership, and service records</CardDescription>
    </CardHeader>
    
    <CardContent class="space-y-6">
        <!-- Hidden carId field -->
        <input type="hidden" name="carId" value={car.id} />

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="space-y-2">
                <Label for="titleStatus" class="text-sm font-medium">Title Status *</Label>
                <Select type="single" name="titleStatus" bind:value={selectedTitleStatus}>
                    <SelectTrigger class={editCarForm.issues?.titleStatus ? 'border-destructive' : ''}>
                        <span>{titleStatusTriggerContent}</span>
                    </SelectTrigger>
                    <SelectContent>
                        {#each titleStatusOptions as option}
                            <SelectItem value={option.value}>{option.text}</SelectItem>
                        {/each}
                    </SelectContent>
                </Select>
                <ErrorMessage issues={editCarForm.issues?.titleStatus} />
            </div>

            <div class="space-y-2">
                <Label for="firstRegistration" class="text-sm font-medium">First Registration *</Label>
                <Input
                    id="firstRegistration"
                    name="firstRegistration"
                    type="date"
                    value={editCarForm.input?.firstRegistration || car.history?.firstRegistration || ''}
                    class={editCarForm.issues?.firstRegistration ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.firstRegistration} />
            </div>

            <div class="space-y-2">
                <Label for="owners" class="text-sm font-medium">Number of Previous Owners *</Label>
                <Input
                    id="owners"
                    name="owners"
                    type="number"
                    min="1"
                    placeholder="1"
                    value={editCarForm.input?.owners || car.history?.owners || ''}
                    class={editCarForm.issues?.owners ? 'border-destructive' : ''}
                />
                <ErrorMessage issues={editCarForm.issues?.owners} />
            </div>
        </div>

        <div class="space-y-2">
            <Label for="serviceHistory" class="text-sm font-medium">Service History *</Label>
            <Textarea
                id="serviceHistory"
                name="serviceHistory"
                placeholder="Regular maintenance, oil changes, inspections..."
                value={editCarForm.input?.serviceHistory || car.history?.serviceHistory || ''}
                rows={3}
                class={editCarForm.issues?.serviceHistory ? 'border-destructive' : ''}
            />
            <ErrorMessage issues={editCarForm.issues?.serviceHistory} />
        </div>

        <div class="space-y-2">
            <Label for="accidents" class="text-sm font-medium">Accident History *</Label>
            <Select type="single" name="accidents" bind:value={selectedAccidents}>
                <SelectTrigger class={editCarForm.issues?.accidents ? 'border-destructive' : ''}>
                    <span>{accidentsTriggerContent}</span>
                </SelectTrigger>
                <SelectContent>
                    {#each accidentsOptions as option}
                        <SelectItem value={option.value}>{option.text}</SelectItem>
                    {/each}
                </SelectContent>
            </Select>
            <ErrorMessage issues={editCarForm.issues?.accidents} />
        </div>
    </CardContent>
</Card>