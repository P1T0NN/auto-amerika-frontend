<script lang="ts">
    // CONFIG
    import { CONTACT_INFO } from "@/shared/config";
</script>

<div>
    <h3 class="mb-4 text-sm font-semibold tracking-wider uppercase">Kontakt</h3>
    <ul class="space-y-2 text-accent-foreground/80">
        <li>{CONTACT_INFO.PHONE}</li>
        <li>{CONTACT_INFO.EMAIL}</li>
        <li>{CONTACT_INFO.ADDRESS}</li>
    </ul>
</div>