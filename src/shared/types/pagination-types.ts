export interface typesPaginatedResponse<T> {
    items: T[];
    totalCount: number;
    page: number;
    perPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}