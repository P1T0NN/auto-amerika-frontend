// LIBRARIES
import * as v from 'valibot';
import { m } from '@/shared/lib/paraglide/messages';

export const contactFormSchema = v.object({
	name: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.ContactFormSchema.NAME_MIN_LENGTH"]())),
	email: v.pipe(v.string(), v.email(m["ValidationMessages.ContactFormSchema.EMAIL_MIN_LENGTH"]())),
	phone: v.optional(v.string()),
	subject: v.pipe(v.string(), v.minLength(1, m["ValidationMessages.ContactFormSchema.SUBJECT_MIN_LENGTH"]())),
	message: v.pipe(v.string(), v.minLength(10, m["ValidationMessages.ContactFormSchema.MESSAGE_MIN_LENGTH"]()))
});

export type ContactFormData = v.InferOutput<typeof contactFormSchema>;
