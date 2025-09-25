<script lang="ts">
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
        
        Sign Out
    </Button>
</form>
