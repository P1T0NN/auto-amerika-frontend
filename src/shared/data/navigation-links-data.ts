// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

export const navigationLinks = [
    { name: 'Početna', href: UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE },
    { name: 'Automobili', href: UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE },
    { name: 'O nama', href: UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE },
    { name: 'Kontakt', href: UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE },
    { name: 'Recenzije', href: UNPROTECTED_PAGE_ENDPOINTS.REVIEWS_PAGE }
];