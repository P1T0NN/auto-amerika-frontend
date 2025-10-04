<script lang="ts">
    // LIBRARIES
    import { m } from "@/shared/lib/paraglide/messages";

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
    import { toast } from 'svelte-sonner';
    
    // ACTIONS
    import { logout } from '@/features/auth/actions/auth-actions.remote';

    // LUCIDE ICONS
    import { LogOut, Loader } from '@lucide/svelte';

    let logoutPending = $state(false);

    const handleLogout = logout.enhance(async ({ submit }) => {
        logoutPending = true;

        await submit();

        const result = await logout.result;

        if (result?.success) {
            toast.success(result.message);
        } else {
            toast.error(result?.message as string);
        }

        logoutPending = false;
    });
</script>

<form {...handleLogout}>
    <Button
        variant="destructive"
        class="w-full text-left"
        type="submit"
        disabled={logoutPending}
    >
        {#if logoutPending}
            <Loader class="mr-2 h-4 w-4 animate-spin" />
        {/if}
        
        <LogOut class="mr-2 h-4 w-4" />
        
        {m['Header.logout']()}
    </Button>
</form>
