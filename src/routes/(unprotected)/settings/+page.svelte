<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

	// COMPONENTS
	import SettingsPreferences from '@/shared/components/pages/(unprotected)/settings/settings-preferences.svelte';
</script>

<svelte:head>
	<title>{m["SettingsPage.pageTitle"]()}</title>
    <meta name="description" content={m["SettingsPage.pageDescription"]()} />
</svelte:head>

<main class="min-h-screen">
	<section class="mx-auto max-w-4xl px-4 py-16 md:py-24">
		<div class="mb-8">
			<h1 class="mb-2 text-4xl font-bold">{m["SettingsPage.title"]()}</h1>
			<p class="text-muted-foreground">
				{m["SettingsPage.description"]()}
			</p>
		</div>


		<SettingsPreferences />
	</section>
</main>
