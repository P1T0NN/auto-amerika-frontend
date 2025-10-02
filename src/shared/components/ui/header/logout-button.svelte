<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';

    // ACTIONS
    import { logout } from '@/features/auth/actions/auth-actions.remote';

    // LUCIDE ICONS
    import { LogOut } from '@lucide/svelte';
</script>

<form {...logout}>
    <Button
        variant="destructive"
        class="w-full text-left"
        type="submit"
    >
        <LogOut class="mr-2 h-4 w-4" />
        
        {m['Header.logout']()}
    </Button>
</form>
