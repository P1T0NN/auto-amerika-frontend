// LIBRARIES
import { getLocale } from "../lib/paraglide/runtime";

export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toLocaleDateString(getLocale(), {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}