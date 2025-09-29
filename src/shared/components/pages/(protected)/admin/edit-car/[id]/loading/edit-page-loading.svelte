<script lang="ts">
    // CONFIG
    import { ADMIN_PROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
    import { Skeleton } from '@/shared/components/ui/skeleton';

    // LUCIDE ICONS
    import { ChevronLeft } from '@lucide/svelte';
</script>

<svelte:head>
    <title>Loading... - AutoAmerika Admin</title>
</svelte:head>

<div class="min-h-screen bg-background">
    <!-- Header Skeleton -->
    <div class="border-b border-border bg-card">
        <div class="mx-auto max-w-7xl px-6 py-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <Button
                        href={ADMIN_PROTECTED_PAGE_ENDPOINTS.DASHBOARD_PAGE}
                        variant="secondary"
                        size="sm"
                        class="text-muted-foreground hover:text-foreground"
                    >
                        <ChevronLeft class="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Button>
                </div>

                <div class="text-right space-y-2">
                    <Skeleton class="h-8 w-48" />
                    <Skeleton class="h-4 w-32" />
                </div>
            </div>
        </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 py-8">
        <!-- Tab Navigation Skeleton -->
        <div class="mb-8">
            <div class="flex w-full rounded-lg bg-muted p-1">
                <Skeleton class="flex-1 h-12 rounded-md mx-0.5" />
                <Skeleton class="flex-1 h-12 rounded-md mx-0.5" />
                <Skeleton class="flex-1 h-12 rounded-md mx-0.5" />
            </div>
        </div>

        <!-- Content Skeleton -->
        <div class="space-y-8">
            <!-- Card 1 -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                    <Skeleton class="h-6 w-48" />
                    <Skeleton class="h-4 w-64" />
                </div>
                <div class="p-6 pt-0 space-y-6">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {#each Array(6) as _}
                            <div class="space-y-2">
                                <Skeleton class="h-4 w-24" />
                                <Skeleton class="h-10 w-full" />
                            </div>
                        {/each}
                    </div>
                    <div class="space-y-2">
                        <Skeleton class="h-4 w-20" />
                        <Skeleton class="h-20 w-full" />
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                    <Skeleton class="h-6 w-56" />
                    <Skeleton class="h-4 w-72" />
                </div>
                <div class="p-6 pt-0 space-y-6">
                    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {#each Array(9) as _}
                            <div class="space-y-2">
                                <Skeleton class="h-4 w-28" />
                                <Skeleton class="h-10 w-full" />
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>

        <!-- Action Buttons Skeleton -->
        <div class="flex items-center justify-between border-t border-border pt-8 mt-8">
            <Skeleton class="h-11 w-24" />
            <div class="flex space-x-4">
                <Skeleton class="h-11 w-32" />
            </div>
        </div>
    </div>
</div>