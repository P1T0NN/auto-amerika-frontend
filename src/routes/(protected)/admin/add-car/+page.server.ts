import type { Actions } from './$types';
import { addCar } from '@/features/cars/actions/cars-actions';

export const actions: Actions = {
    default: addCar
};