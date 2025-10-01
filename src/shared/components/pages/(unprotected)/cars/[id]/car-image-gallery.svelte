<script lang="ts">
    // COMPONENTS
    import ImageGallery from '@/shared/components/ui/image-gallery/image-gallery.svelte';

    // TYPES
    import type { typesCar } from '@/features/cars/types/types';

    let { car }: { car: typesCar } = $props();

    let images = $derived(car.images?.map(image => image.imageUrl));
</script>

<ImageGallery images={images} />