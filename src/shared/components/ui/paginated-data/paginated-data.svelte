<script lang="ts">
    // COMPONENTS
	import {
		Pagination,
		PaginationContent,
		PaginationItem,
		PaginationLink,
		PaginationNextButton,
		PaginationPrevButton,
		PaginationEllipsis
	} from '@/shared/components/ui/pagination';

	interface Props {
		totalCount: number;
		currentPage: number;
		perPage: number;
		totalPages: number;
		hasNextPage: boolean;
		hasPrevPage: boolean;
		onPageChange?: (page: number) => void;
		class?: string;
	}

	let {
		totalCount,
		currentPage = $bindable(1),
		perPage,
		totalPages,
		hasNextPage,
		hasPrevPage,
		onPageChange,
		class: className
	}: Props = $props();

	// Generate page numbers to display
	const getPageNumbers = (current: number, total: number) => {
		const pages: (number | 'ellipsis')[] = [];
		const maxVisible = 5;

		if (total <= maxVisible) {
			// Show all pages if total is small
			for (let i = 1; i <= total; i++) {
				pages.push(i);
			}
		} else {
			// Always show first page
			pages.push(1);

			// Calculate start and end of middle pages
			let start = Math.max(2, current - 1);
			let end = Math.min(total - 1, current + 1);

			// Add ellipsis after first page if needed
			if (start > 2) {
				pages.push('ellipsis');
			}

			// Add middle pages
			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			// Add ellipsis before last page if needed
			if (end < total - 1) {
				pages.push('ellipsis');
			}

			// Always show last page
			pages.push(total);
		}

		return pages;
	};

	const pages = $derived(getPageNumbers(currentPage, totalPages));

	const handlePageChange = (page: number) => {
		currentPage = page;
		onPageChange?.(page);
	};
</script>

{#if totalPages > 1}
	<div class={className}>
		<Pagination bind:page={currentPage} count={totalCount} {perPage}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevButton
						class="bg-white hover:bg-red-500 hover:text-white hover:border-red-500"
						disabled={!hasPrevPage}
						onclick={() => hasPrevPage && handlePageChange(currentPage - 1)}
					/>
				</PaginationItem>

				{#each pages as pageNumber}
					{#if pageNumber === 'ellipsis'}
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
					{:else}
						<PaginationItem>
							<PaginationLink
								class={currentPage === pageNumber ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' : 'bg-white hover:bg-red-500 hover:text-white hover:border-red-500'}
								page={{ value: pageNumber, type: 'page' }}
								isActive={currentPage === pageNumber}
								onclick={() => handlePageChange(pageNumber)}
							/>
						</PaginationItem>
					{/if}
				{/each}

				<PaginationItem>
					<PaginationNextButton
						class="bg-white hover:bg-red-500 hover:text-white hover:border-red-500"
						disabled={!hasNextPage}
						onclick={() => hasNextPage && handlePageChange(currentPage + 1)}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	</div>
{/if}