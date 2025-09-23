
<script lang="ts">
    // CONFIG
    import { CONTACT_INFO } from '@/shared/config';

    // COMPONENTS
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';

    // LUCIDE ICONS
    import { Phone, Mail, MapPin } from '@lucide/svelte';
</script>

<Card>
    <CardHeader>
        <CardTitle>AutoAmerika</CardTitle>
        <CardDescription>Vaš partner za uvoz vozila</CardDescription>
    </CardHeader>

    <CardContent class="space-y-3">
        <div class="flex items-center gap-2 text-sm">
            <MapPin class="h-4 w-4 text-muted-foreground" />
            <span>{CONTACT_INFO.ADDRESS}</span>
        </div>

        <div class="flex items-center gap-2 text-sm">
            <Phone class="h-4 w-4 text-muted-foreground" />
            <span>{CONTACT_INFO.PHONE}</span>
        </div>
        
        <div class="flex items-center gap-2 text-sm">
            <Mail class="h-4 w-4 text-muted-foreground" />
            <span>{CONTACT_INFO.EMAIL}</span>
        </div>
    </CardContent>
</Card>