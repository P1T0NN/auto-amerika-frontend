// LIBRARIES
import * as v from 'valibot';

/**
 * Generic validation utility function using Valibot schemas
 * @param schema - Valibot schema to validate against
 * @param data - Data to validate
 * @returns Object containing validation result and errors
 */
export function validateWithValibot<T extends Record<string, unknown>>(
    schema: v.GenericSchema<T>,
    data: T
): {
    isValid: boolean;
    errors: Partial<Record<keyof T, string>>;
} {
    const errors: Partial<Record<keyof T, string>> = {};

    try {
        v.parse(schema, data);
        return { isValid: true, errors: {} };
    } catch (error) {
        if (error instanceof v.ValiError) {
            error.issues.forEach((issue) => {
                if (issue.path && issue.path[0]) {
                    const fieldName = issue.path[0]?.key as keyof T;
                    if (fieldName) {
                        errors[fieldName] = issue.message;
                    }
                }
            });
        }
        return { isValid: false, errors };
    }
}

/**
 * Complete form validation function that updates errors state
 * @param schema - Valibot schema to validate against
 * @param formData - Form data to validate
 * @param setErrors - Function to update errors state
 * @returns Boolean indicating if validation passed
 */
export function validateForm<T extends Record<string, unknown>>(
    schema: v.GenericSchema<T>,
    formData: T,
    setErrors: (errors: Partial<Record<keyof T, string>>) => void
): boolean {
    const validation = validateWithValibot(schema, formData);
    setErrors(validation.errors);
    return validation.isValid;
}

/**
 * Helper function to combine RemoteForm issues with any additional errors
 * @param remoteFormIssues - Issues from SvelteKit RemoteForm
 * @param additionalError - Optional additional error message
 * @returns Combined errors array or undefined if no errors
 */
export function combineFormErrors(
    remoteFormIssues?: { message: string }[],
    additionalError?: string
): { message: string }[] | undefined {
    const combined = [...(remoteFormIssues || [])];
    if (additionalError) {
        combined.push({ message: additionalError });
    }
    return combined.length > 0 ? combined : undefined;
}