// LIBRARIES
import { type ZodType } from 'zod';

/**
 * Generic validation utility function using Zod schemas
 * @param schema - Zod schema to validate against
 * @param data - Data to validate
 * @returns Object containing validation result and errors
 */
export function validateWithZod<T extends Record<string, unknown>>(
    schema: ZodType<T>,
    data: T
): {
    isValid: boolean;
    errors: Partial<Record<keyof T, string>>;
} {
    const errors: Partial<Record<keyof T, string>> = {};

    const result = schema.safeParse(data);

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            if (issue.path[0]) {
                errors[issue.path[0] as keyof T] = issue.message;
            }
        });
        return { isValid: false, errors };
    }

    return { isValid: true, errors: {} };
}

/**
 * Complete form validation function that updates errors state
 * @param schema - Zod schema to validate against
 * @param formData - Form data to validate
 * @param setErrors - Function to update errors state
 * @returns Boolean indicating if validation passed
 */
export function validateForm<T extends Record<string, unknown>>(
    schema: ZodType<T>,
    formData: T,
    setErrors: (errors: Partial<Record<keyof T, string>>) => void
): boolean {
    const validation = validateWithZod(schema, formData);
    setErrors(validation.errors);
    return validation.isValid;
}