import { fetchCarById } from '@/features/cars/queries/cars-queries.remote';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    // Await the query to get the car data
    const { data: car } = await fetchCarById(params.id);

    return {
        car
    };
};
