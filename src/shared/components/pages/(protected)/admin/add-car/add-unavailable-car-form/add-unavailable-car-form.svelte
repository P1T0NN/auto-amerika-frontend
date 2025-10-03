<script lang="ts">
    // SVELTEKIT IMPORTS
    import { goto } from "$app/navigation";

    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from "@/shared/config";

    // COMPONENTS
    import { Button } from "@/shared/components/ui/button";
    import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
    import { Label } from "@/shared/components/ui/label";
    import { Input } from "@/shared/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger } from "@/shared/components/ui/select";
    import ErrorMessage from "@/shared/components/ui/error-message/error-message.svelte";
    import { toast } from "svelte-sonner";

    // DATA
    import { brands, carTypes } from '@/features/cars/data/cars-data';

    // CONTEXT
    import { addUnavailableCarContext } from '@/features/cars/context/cars-context.svelte';

    // ACTIONS
    import { addUnavailableCar } from "@/features/cars/actions/cars-actions";

    // UTILS
    import { validateForm } from "@/shared/utils/validation-utils";
    import { fileToBase64 } from '@/shared/utils/file-utils';

    // SCHEMAS
    import { addUnavailableCarSchema } from "@/features/cars/schemas/cars-schemas";

    // LUCIDE ICONS
    import { Loader, Upload, X, Image as ImageIcon } from "@lucide/svelte";

    let selectedBrand = $state(addUnavailableCarContext.formData.brand || "");
    let selectedCarType = $state(addUnavailableCarContext.formData.carType || "");

    const brandTriggerContent = $derived(brands.find(b => b.value === selectedBrand)?.text || m['AddCarPage.AddUnavailableCar.brandPlaceholder']());
    const carTypeTriggerContent = $derived(carTypes.find(ct => ct.value === selectedCarType)?.text || m['AddCarPage.AddUnavailableCar.carTypePlaceholder']());

    $effect(() => {
        addUnavailableCarContext.formData.brand = selectedBrand;
        addUnavailableCarContext.formData.carType = selectedCarType;
    });

    const handleAddUnavailableCar = async () => {
        const base64Image = addUnavailableCarContext.selectedImage
            ? await fileToBase64(addUnavailableCarContext.selectedImage)
            : '';

        // Create validation data with proper types
        const validationData = {
            ...addUnavailableCarContext.formData,
            year: Number(addUnavailableCarContext.formData.year),
            carType: addUnavailableCarContext.formData.carType,
            image: base64Image
        };

        if (!validateForm(addUnavailableCarSchema, validationData, (newErrors) => addUnavailableCarContext.errors = newErrors)) {
            return;
        }

        if (!addUnavailableCarContext.validateImageForSubmission()) {
            return;
        }

        addUnavailableCarContext.isSubmitting = true;

        // Prepare data for API (already has proper types from validation)
        const carData = {
            ...validationData,
            status: 'unavailable'
        };

        const result = await addUnavailableCar(carData);

        if (!result.success) {
            toast.error(result.message);
            addUnavailableCarContext.isSubmitting = false;
        } else {
            toast.success(result.message);
            addUnavailableCarContext.reset();
            goto(ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE);
            addUnavailableCarContext.isSubmitting = false;
        }
    };
</script>

<div class="space-y-8">
    <Card>
        <CardHeader>
            <CardTitle>{m['AddCarPage.AddUnavailableCar.title']()}</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <!-- Brand -->
                <div class="space-y-2">
                    <Label for="brand">{m['AddCarPage.AddUnavailableCar.brandLabel']()}</Label>
                    <Select type="single" name="brand" bind:value={selectedBrand}>
                        <SelectTrigger class={addUnavailableCarContext.errors.brand ? 'border-destructive' : ''}>
                            <span>{brandTriggerContent}</span>
                        </SelectTrigger>
                        <SelectContent>
                            {#each brands as brand}
                                <SelectItem value={brand.value}>{brand.text}</SelectItem>
                            {/each}
                        </SelectContent>
                    </Select>
                    <ErrorMessage issues={addUnavailableCarContext.errors.brand ? [{message: addUnavailableCarContext.errors.brand}] : undefined} />
                </div>

                <!-- Model -->
                <div class="space-y-2">
                    <Label for="model">{m['AddCarPage.AddUnavailableCar.modelLabel']()}</Label>
                    <Input
                        id="model"
                        name="model"
                        type="text"
                        placeholder={m['AddCarPage.AddUnavailableCar.modelPlaceholder']()}
                        bind:value={addUnavailableCarContext.formData.model}
                        class={addUnavailableCarContext.errors.model ? 'border-destructive' : ''}
                    />
                    <ErrorMessage issues={addUnavailableCarContext.errors.model ? [{message: addUnavailableCarContext.errors.model}] : undefined} />
                </div>

                <!-- Year -->
                <div class="space-y-2">
                    <Label for="year">{m['AddCarPage.AddUnavailableCar.yearLabel']()}</Label>
                    <Input
                        id="year"
                        name="year"
                        type="number"
                        placeholder={m['AddCarPage.AddUnavailableCar.yearPlaceholder']()}
                        bind:value={addUnavailableCarContext.formData.year}
                        class={addUnavailableCarContext.errors.year ? 'border-destructive' : ''}
                    />
                    <ErrorMessage issues={addUnavailableCarContext.errors.year ? [{message: addUnavailableCarContext.errors.year}] : undefined} />
                </div>

                <!-- Car Type -->
                <div class="space-y-2">
                    <Label for="carType">{m['AddCarPage.AddUnavailableCar.carTypeLabel']()}</Label>
                    <Select type="single" name="carType" bind:value={selectedCarType}>
                        <SelectTrigger class={addUnavailableCarContext.errors.carType ? 'border-destructive' : ''}>
                            <span>{carTypeTriggerContent}</span>
                        </SelectTrigger>
                        <SelectContent>
                            {#each carTypes as carType}
                                <SelectItem value={carType.value}>{carType.text}</SelectItem>
                            {/each}
                        </SelectContent>
                    </Select>
                    <ErrorMessage issues={addUnavailableCarContext.errors.carType ? [{message: addUnavailableCarContext.errors.carType}] : undefined} />
                </div>
            </div>
        </CardContent>
    </Card>

    <!-- Image Upload -->
    <Card class={addUnavailableCarContext.imageValidationError ? "border-red-500 border-2" : ""}>
        <CardHeader>
            <CardTitle>{m['AddCarPage.AddUnavailableCar.imageTitle']()}</CardTitle>
            {#if addUnavailableCarContext.imageValidationError}
                <div class="bg-red-50 border border-red-200 rounded-md p-3 mt-3">
                    <p class="text-red-800 text-sm font-medium">{addUnavailableCarContext.imageValidationError}</p>
                </div>
            {/if}
        </CardHeader>
        <CardContent>
            <div class="space-y-6">
                <!-- File Input (Hidden) -->
                <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    id="image-upload"
                    onchange={addUnavailableCarContext.handleImageSelect}
                />

                <!-- Upload Button -->
                <div class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-gray-400 transition-colors">
                    <div class="text-center">
                        <Upload class="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p class="text-lg font-medium text-gray-900 mb-2">{m['AddCarPage.AddUnavailableCar.imageTitle']()}</p>
                        <p class="text-sm text-gray-500 mb-2">{m['AddCarPage.AddUnavailableCar.uploadDescription']()}</p>
                        <p class="text-xs text-gray-400 mb-4">
                            {m['AddCarPage.AddUnavailableCar.uploadInfo']()}
                        </p>

                        <Button
                            type="button"
                            variant="secondary"
                            onclick={() => document.getElementById('image-upload')?.click()}
                            class="inline-flex items-center gap-2"
                        >
                            <ImageIcon class="h-4 w-4" />
                            {m['AddCarPage.AddUnavailableCar.selectImageButton']()}
                        </Button>
                    </div>
                </div>

                <!-- Selected Image Preview -->
                {#if addUnavailableCarContext.selectedImage}
                    <div class="space-y-4">
                        <Label class="text-base font-medium">
                            {m['AddCarPage.AddUnavailableCar.selectedImage']()}
                            <span class="text-green-600 text-sm font-normal">{m['AddCarPage.AddCarImages.checkmark']()}</span>
                        </Label>

                        <div class="relative group max-w-sm">
                            <div class="aspect-square overflow-hidden rounded-lg border border-gray-200">
                                <img
                                    src={addUnavailableCarContext.imagePreview}
                                    alt="Preview"
                                    class="h-full w-full object-cover"
                                />
                            </div>

                            <button
                                type="button"
                                onclick={addUnavailableCarContext.removeImage}
                                class="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white hover:bg-red-600 flex items-center justify-center transition-colors"
                                aria-label={m['AddCarPage.AddCarImages.removeImage']()}
                            >
                                <X class="h-4 w-4" />
                            </button>

                            <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg">
                                {addUnavailableCarContext.selectedImage.name}
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        </CardContent>
    </Card>

    <!-- Submit Button -->
    <div class="flex justify-end">
        <Button
            type="submit"
            class="bg-primary hover:bg-primary/90"
            disabled={addUnavailableCarContext.isSubmitting}
            onclick={handleAddUnavailableCar}
        >
            {#if addUnavailableCarContext.isSubmitting}
                <Loader class="mr-2 h-4 w-4 animate-spin" />
            {/if}
            {m['AddCarPage.AddUnavailableCar.submitButton']()}
        </Button>
    </div>
</div>
