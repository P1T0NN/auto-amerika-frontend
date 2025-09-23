<script lang="ts">
    // COMPONENTS
    import ImageGallery from '@/shared/components/ui/image-gallery/image-gallery.svelte';

    let { car } = $props();
</script>

<ImageGallery images={car.images} />