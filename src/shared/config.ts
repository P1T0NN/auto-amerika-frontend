export const CONTACT_INFO = {
    EMAIL: "info@autoamerika.rs",
    PHONE: "+381 11 123 4567",
    ADDRESS: "Beograd, Srbija"
}

export const UNPROTECTED_PAGE_ENDPOINTS = {
    HOME_PAGE: "/",
    CARS_PAGE: "/cars",
    CONTACT_PAGE: "/contact",
    ABOUT_PAGE: "/about",
    FAQ_PAGE: "/faq",
    REVIEWS_PAGE: "/reviews",
    LOGIN_PAGE: "/login",
    TERMS_OF_USE: "/terms-of-use",
    PRIVACY_POLICY: "/privacy-policy"
}

export const ADMIN_PROTECTED_PAGE_ENDPOINTS = {
    DASHBOARD_PAGE: "/admin/dashboard",
    ADD_CAR_PAGE: "/admin/add-car",
    EDIT_CAR_PAGE: "/admin/edit-car"
}

export const CACHE_TAGS = {
    PAGES: {
        ADMIN: {
            FETCH_ALL_CARS: "admin-fetch-all-cars"
        }
    }
}