// LIBRARIES
import { m } from '../lib/paraglide/messages';

// CONFIG
import { UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/config';

// LUCIDE ICONS
import { Home, Car, Info, Mail } from '@lucide/svelte';

export const navigationLinks = [
    { name: m['Header.NavigationLinks.home'](), href: UNPROTECTED_PAGE_ENDPOINTS.HOME_PAGE, icon: Home },
    { name: m['Header.NavigationLinks.cars'](), href: UNPROTECTED_PAGE_ENDPOINTS.CARS_PAGE, icon: Car },
    { name: m['Header.NavigationLinks.about'](), href: UNPROTECTED_PAGE_ENDPOINTS.ABOUT_PAGE, icon: Info },
    { name: m['Header.NavigationLinks.contact'](), href: UNPROTECTED_PAGE_ENDPOINTS.CONTACT_PAGE, icon: Mail },
    {/*{ name: m['Header.NavigationLinks.reviews'](), href: UNPROTECTED_PAGE_ENDPOINTS.REVIEWS_PAGE }*/}
];