<script lang="ts">
    // SVELTEKIT IMPORTS
    import { page } from '$app/stores';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Button } from '@/shared/components/ui/button';
    import { Card, CardContent } from '@/shared/components/ui/card';

    // LUCIDE ICONS
    import { AlertCircle, Home, ArrowLeft, RefreshCw, Shield, ServerCrash, FileX } from '@lucide/svelte';

    // Extract error information from page store
    $: ({ status, error } = $page);

    // Get appropriate icon based on error status
    function getErrorIcon(status: number) {
        switch (status) {
            case 404:
                return FileX;
            case 403:
                return Shield;
            case 500:
            case 502:
            case 503:
                return ServerCrash;
            default:
                return AlertCircle;
        }
    }

    // Get appropriate title based on error status
    function getErrorTitle(status: number) {
        switch (status) {
            case 404:
                return 'Page Not Found';
            case 403:
                return 'Access Forbidden';
            case 500:
                return 'Internal Server Error';
            case 502:
                return 'Bad Gateway';
            case 503:
                return 'Service Unavailable';
            default:
                return 'Something Went Wrong';
        }
    }

    // Get appropriate description based on error status
    function getErrorDescription(status: number) {
        switch (status) {
            case 404:
                return 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.';
            case 403:
                return 'You do not have permission to access this resource. Please contact an administrator if you believe this is an error.';
            case 500:
                return 'We are experiencing technical difficulties. Our team has been notified and is working to resolve the issue.';
            case 502:
                return 'The server received an invalid response. Please try again in a few moments.';
            case 503:
                return 'The service is temporarily unavailable due to maintenance or high load. Please try again later.';
            default:
                return 'An unexpected error occurred. Please try again or contact support if the problem persists.';
        }
    }

    // Handle page refresh
    function handleRefresh() {
        window.location.reload();
    }

    // Handle go back
    function handleGoBack() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    }
</script>

<svelte:head>
    <title>Error {status} - AutoAmerika</title>
    <meta name="description" content="An error occurred while processing your request." />
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-background p-4">
    <div class="w-full max-w-md">
        <Card class="border-destructive/20">
            <CardContent class="pt-8 pb-8 px-6">
                <div class="text-center space-y-6">
                    <!-- Error Icon -->
                    <div class="flex justify-center">
                        <div class="rounded-full bg-destructive/10 p-4">
                            <svelte:component this={getErrorIcon(status)} class="h-8 w-8 text-destructive" />
                        </div>
                    </div>

                    <!-- Error Status and Title -->
                    <div class="space-y-2">
                        <h1 class="text-6xl font-bold text-foreground">{status}</h1>
                        <h2 class="text-xl font-semibold text-foreground">
                            {getErrorTitle(status)}
                        </h2>
                    </div>

                    <!-- Error Description -->
                    <div class="space-y-3">
                        <p class="text-sm text-muted-foreground leading-relaxed">
                            {getErrorDescription(status)}
                        </p>

                        <!-- Show custom error message if available -->
                        {#if error?.message && error.message !== getErrorTitle(status)}
                            <div class="rounded-lg bg-muted p-3">
                                <p class="text-xs text-muted-foreground font-mono">
                                    {error.message}
                                </p>
                            </div>
                        {/if}
                    </div>

                    <!-- Action Buttons -->
                    <div class="space-y-3">
                        <div class="flex flex-col sm:flex-row gap-2">
                            <Button onclick={handleGoBack} variant="outline" class="flex-1" size="sm">
                                <ArrowLeft class="h-4 w-4 mr-2" />
                                Go Back
                            </Button>

                            <Button href={UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE} class="flex-1" size="sm">
                                <Home class="h-4 w-4 mr-2" />
                                Go Home
                            </Button>
                        </div>

                        <!-- Refresh button for server errors -->
                        {#if status >= 500}
                            <Button onclick={handleRefresh} variant="secondary" class="w-full" size="sm">
                                <RefreshCw class="h-4 w-4 mr-2" />
                                Try Again
                            </Button>
                        {/if}
                    </div>

                    <!-- Additional Help -->
                    <div class="pt-4 border-t border-border">
                        <p class="text-xs text-muted-foreground">
                            Need help?
                            <a href="mailto:support@autoamerika.com" class="text-primary hover:underline">
                                Contact Support
                            </a>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</div>