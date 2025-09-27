export function getCarStatusClass(status: string) {
    switch(status) {
        case 'active': return 'bg-green-100 text-green-800';
        case 'sold': return 'bg-yellow-100 text-yellow-800';
        case 'pending': return 'bg-blue-100 text-blue-800';
        default: return 'bg-blue-100 text-blue-800';
    }
}

export function getCarStatusText(status: string) {
    switch (status) {
        case 'active':
            return 'Aktivan';
        case 'sold':
            return 'Prodat';
        case 'pending':
            return 'Na čekanju';
        default:
            return 'Nepoznato';
    }
}