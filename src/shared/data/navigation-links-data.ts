// LIBRARIES
import { m } from '../lib/paraglide/messages';

// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

export const navigationLinks = [
    { name: m['Header.NavigationLinks.home'](), href: UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE },
    { name: m['Header.NavigationLinks.cars'](), href: UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE },
    { name: m['Header.NavigationLinks.about'](), href: UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE },
    { name: m['Header.NavigationLinks.contact'](), href: UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE },
    {/*{ name: m['Header.NavigationLinks.reviews'](), href: UNPROTECTED_PAGE_ENDPOINTS.REVIEWS_PAGE }*/}
];