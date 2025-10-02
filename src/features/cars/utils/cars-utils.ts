// LIBRARIES
import { m } from '@/shared/lib/paraglide/messages';

// TYPES
import type { typesCarStatusType } from '@/features/cars/types/types';

export const carStatusClass = {
    sold: {
        label: m["CarStatus.sold"],
        bgColor: 'bg-red-500/90',
        textColor: 'text-white',
        borderColor: 'border-red-600'
    },
    pending: {
        label: m["CarStatus.pending"],
        bgColor: 'bg-orange-500/90',
        textColor: 'text-white',
        borderColor: 'border-orange-600'
    },
    unavailable: {
        label: m["CarStatus.unavailable"],
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
            return m['CarStatus.availableText'];
        case 'sold':
            return m['CarStatus.soldText'];
        case 'pending':
            return m['CarStatus.pendingText'];
        case 'unavailable':
            return m['CarStatus.unavailableText'];
        default:
            return m['CarStatus.unknownText'];
    }
}

