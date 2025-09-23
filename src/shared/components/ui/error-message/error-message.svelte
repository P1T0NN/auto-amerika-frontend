<script lang="ts">
    type Issue = {
        message: string;
    };

    interface Props {
        issues?: Issue[];
    }

    let { issues }: Props = $props();
</script>

{#if issues && issues.length > 0}
    {#each issues as issue}
        <p class="text-red-500 text-sm mt-1">{issue.message}</p>
    {/each}
{/if}