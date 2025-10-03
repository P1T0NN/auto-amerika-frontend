<script lang="ts">
    // LIBRARIES
    import { setLocale, getLocale } from '@/shared/lib/paraglide/runtime';

    // COMPONENTS
    import { Select, SelectTrigger, SelectContent, SelectItem } from '../select';

    // SVGS
    import UnitedKingdomFlag from '@/shared/svgs/countries/united-kingdom-flag.svelte';
    import SerbiaFlag from '@/shared/svgs/countries/serbia-flag.svelte';

    interface Props {
        class?: string;
        classPlaceholder?: string;
    }

    let { class: className = '', classPlaceholder = 'text-foreground' }: Props = $props();

    let selectedLanguage = $state(getLocale() === 'sr' ? 'sr' : 'en');

    const languages = [
        { name: 'English', locale: 'en' },
        { name: 'Srpski', locale: 'sr' }
    ];

    function handleLanguageChange(languageCode: string) {
        selectedLanguage = languageCode;
        const locale = languageCode === 'sr' ? 'sr' : 'en';
        setLocale(locale);
    }
</script>

<Select type="single" bind:value={selectedLanguage} onValueChange={handleLanguageChange}>
    <SelectTrigger class="flex items-center space-x-2 w-auto {className}">
        {#if selectedLanguage === 'en'}
            <UnitedKingdomFlag />
        {:else}
            <SerbiaFlag />
        {/if}

        <span class="font-dm-sans text-sm font-medium {classPlaceholder}">
            {selectedLanguage === 'en' ? 'EN' : 'SR'}
        </span>
    </SelectTrigger>

    <SelectContent>
        {#each languages as language}
            <SelectItem value={language.locale === 'en' ? 'en' : 'sr'}>
                {#snippet children()}
                    <div class="flex items-center space-x-3">
                        {#if language.locale === 'en'}
                            <UnitedKingdomFlag />
                        {:else}
                            <SerbiaFlag />
                        {/if}

                        <div class="flex flex-col">
                            <span class="font-dm-sans text-sm font-medium">
                                {language.name}
                            </span>

                            <span class="font-dm-sans text-xs text-muted-foreground">
                                {language.locale === 'en' ? 'EN' : 'SR'}
                            </span>
                        </div>
                    </div>
                {/snippet}
            </SelectItem>
        {/each}
    </SelectContent>
</Select>