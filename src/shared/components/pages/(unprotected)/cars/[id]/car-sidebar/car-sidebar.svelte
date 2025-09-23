<script lang="ts">
    // COMPONENTS
    import CarContactForm from './car-contact-form.svelte';
	import CarContactInformation from './car-contact-information.svelte';
	import CarQuickInformation from './car-quick-information.svelte';

    let { car } = $props();
</script>

<div class="space-y-6">
    <CarQuickInformation {car} />

    <CarContactForm carTitle="{car.brand} {car.model} {car.year}" />

    <CarContactInformation />
</div>