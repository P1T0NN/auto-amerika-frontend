<script lang="ts">
	// COMPONENTS
	import { Skeleton } from '@/shared/components/ui/skeleton';
	import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
</script>

<div class="min-h-screen bg-background">
	<!-- Header Breadcrumb -->
	<div class="bg-muted py-4">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex items-center gap-2">
				<Skeleton class="h-4 w-16" />
				<Skeleton class="h-4 w-4" />
				<Skeleton class="h-4 w-24" />
				<Skeleton class="h-4 w-4" />
				<Skeleton class="h-4 w-32" />
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<!-- Left Column -->
			<div class="space-y-8 lg:col-span-2">
				<!-- Hero Section -->
				<div>
					<div class="mb-2 flex items-center gap-2">
						<Skeleton class="h-6 w-16" />
						<Skeleton class="h-6 w-24" />
					</div>

					<Skeleton class="mb-2 h-10 w-3/4 md:h-12" />

					<div class="flex items-center gap-4">
						<Skeleton class="h-4 w-20" />
						<Skeleton class="h-4 w-20" />
						<Skeleton class="h-4 w-20" />
					</div>
				</div>

				<!-- Image Gallery -->
				<Skeleton class="h-96 w-full rounded-lg" />

				<!-- Tabs -->
				<div class="space-y-6">
					<div class="border-b border-border">
						<div class="flex space-x-8">
							<Skeleton class="h-10 w-20" />
							<Skeleton class="h-10 w-28" />
							<Skeleton class="h-10 w-20" />
						</div>
					</div>

					<!-- Tab Content -->
					<div class="space-y-4">
						<Skeleton class="h-6 w-48" />
						<Skeleton class="h-4 w-full" />
						<Skeleton class="h-4 w-full" />
						<Skeleton class="h-4 w-3/4" />
						<div class="mt-6 grid grid-cols-2 gap-4">
							<Skeleton class="h-20 w-full" />
							<Skeleton class="h-20 w-full" />
							<Skeleton class="h-20 w-full" />
							<Skeleton class="h-20 w-full" />
						</div>
					</div>
				</div>
			</div>

			<!-- Right Column - Sidebar -->
			<div class="space-y-6">
				<!-- Quick Information Card -->
				<Card>
					<CardHeader>
						<Skeleton class="h-10 w-32" />
						<Skeleton class="h-4 w-full" />
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div>
								<Skeleton class="mb-2 h-4 w-20" />
								<Skeleton class="h-5 w-16" />
							</div>
							<div>
								<Skeleton class="mb-2 h-4 w-24" />
								<Skeleton class="h-5 w-20" />
							</div>
							<div>
								<Skeleton class="mb-2 h-4 w-16" />
								<Skeleton class="h-5 w-16" />
							</div>
							<div>
								<Skeleton class="mb-2 h-4 w-16" />
								<Skeleton class="h-5 w-20" />
							</div>
						</div>

						<div class="flex flex-col space-y-2">
							<Skeleton class="h-10 w-full" />
							<Skeleton class="h-10 w-full" />
						</div>
					</CardContent>
				</Card>

				<!-- Contact Form Card -->
				<Card>
					<CardHeader>
						<Skeleton class="h-6 w-40" />
						<Skeleton class="h-4 w-full" />
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<Skeleton class="h-10 w-full" />
							<Skeleton class="h-10 w-full" />
						</div>
						<Skeleton class="h-10 w-full" />
						<Skeleton class="h-24 w-full" />
						<Skeleton class="h-10 w-full" />
					</CardContent>
				</Card>

				<!-- Contact Information Card -->
				<Card>
					<CardHeader>
						<Skeleton class="h-6 w-32" />
					</CardHeader>
					<CardContent class="space-y-3">
						<Skeleton class="h-4 w-full" />
						<Skeleton class="h-4 w-full" />
						<Skeleton class="h-4 w-3/4" />
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</div>
