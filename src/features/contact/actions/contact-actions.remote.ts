// SVELTEKIT IMPORTS
import { form } from "$app/server";

// LIBRARIES
import { serverApiClient } from "@/shared/lib/api-client/api-client";
import { m } from "@/shared/lib/paraglide/messages";

// SCHEMAS
import { contactFormSchema } from "../schemas/contact-schemas";

export const sendContactForm = form(
    contactFormSchema,
    async (data) => {
        const response = await serverApiClient.contact.sendContactForm(data);

        if (!response.success) {
            return {
                success: false,
                message: m["GenericMessages.CONTACT_FORM_FAILED"](),
                data: null
            };
        }

        return {
            success: true,
            message: m["GenericMessages.CONTACT_FORM_SUCCESS"](),
            data: null
        };
    }
);