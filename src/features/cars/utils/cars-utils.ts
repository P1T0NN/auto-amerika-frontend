// TYPES
import type { typesCarStatusType } from '@/features/cars/types/types';

export const carStatusClass = {
    sold: {
        label: 'PRODATO',
        bgColor: 'bg-red-500/90',
        textColor: 'text-white',
        borderColor: 'border-red-600'
    },
    pending: {
        label: 'USKORO',
        bgColor: 'bg-orange-500/90',
        textColor: 'text-white',
        borderColor: 'border-orange-600'
    },
    unavailable: {
        label: 'NEDOSTUPNO',
        bgColor: 'bg-zinc-600/90',
        textColor: 'text-white',
        borderColor: 'border-zinc-700'
    }
} as const;

export function getCarStatusClass(status: typesCarStatusType) {
    switch(status) {
        case 'available': return 'bg-green-100 text-green-800';
        case 'sold': return 'bg-yellow-100 text-yellow-800';
        case 'pending': return 'bg-blue-100 text-blue-800';
        case 'unavailable': return 'bg-red-100 text-red-800';
        default: return 'bg-blue-100 text-blue-800';
    }
}

export function getCarStatusText(status: typesCarStatusType) {
    switch (status) {
        case 'available':
            return 'Dostupan';
        case 'sold':
            return 'Prodat';
        case 'pending':
            return 'Na čekanju';
        case 'unavailable':
            return 'Nedostupan';
        default:
            return 'Nepoznato';
    }
}

