/**
 * Converts FormData to a typed object
 * @param formData - The FormData to convert
 * @returns Object with all FormData entries
 */
export function formDataToObject(formData: FormData): Record<string, any> {
    const result: Record<string, any> = {};

    for (const [key, value] of formData.entries()) {
        // Handle checkboxes (they send 'on' when checked)
        if (value === 'on') {
            result[key] = true;
            continue;
        }

        // Handle boolean strings
        if (value === 'true') {
            result[key] = true;
            continue;
        }

        if (value === 'false') {
            result[key] = false;
            continue;
        }

        // Handle numbers (if the string is a valid number)
        if (typeof value === 'string' && value !== '' && !isNaN(Number(value))) {
            // Check if it's an integer or decimal
            const numValue = Number(value);
            if (Number.isInteger(numValue)) {
                result[key] = numValue;
            } else {
                result[key] = numValue;
            }
            continue;
        }

        // Default to string
        result[key] = value as string;
    }

    return result;
}

/**
 * Converts FormData to a typed object with explicit type casting
 * @param formData - The FormData to convert
 * @returns Object with all FormData entries as the specified type
 */
export function formDataToTypedObject<T>(formData: FormData): T {
    return formDataToObject(formData) as T;
}