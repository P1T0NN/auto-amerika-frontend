<script lang="ts">
    // LIBRARIES
    import { m } from '@/shared/lib/paraglide/messages';

    // CONFIG
    import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

    // COMPONENTS
    import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/shared/components/ui/breadcrumb';

    let { car } = $props();
</script>

<div class="bg-muted py-4">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href={UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE}>{m['CarPage.CarHeader.home']()}</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbLink href={UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE}>{m['CarPage.CarHeader.cars']()}</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbPage>{car.brand.toUpperCase()} {car.model}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </div>
</div>