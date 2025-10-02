
<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // COMPONENTS
    import { Card } from '@/shared/components/ui/card';
    import { Label } from '@/shared/components/ui/label';
    import LanguageSelector from '@/shared/components/ui/language-selector/language-selector.svelte';
</script>

<Card class="p-8">
    <h2 class="mb-6 text-2xl font-bold">{m["SettingsPage.SettingsPreferences.title"]()}</h2>

    <div class="space-y-6">
        <div class="space-y-2">
            <Label for="language">{m["SettingsPage.SettingsPreferences.language"]()}</Label>
            <div class="flex items-center">
                <LanguageSelector />
            </div>
        </div>
    </div>
</Card>