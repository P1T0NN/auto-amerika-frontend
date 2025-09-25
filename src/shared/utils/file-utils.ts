/**
 * Converts a File to base64 string
 * @param file - The File object to convert
 * @returns Promise that resolves to base64 string
 */
export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result === 'string') {
                // Remove data URL prefix (data:image/jpeg;base64,) and keep only base64 data
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            } else {
                reject(new Error('Failed to read file as base64'));
            }
        };

        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

/**
 * Converts multiple Files to base64 strings
 * @param files - Array of File objects to convert
 * @returns Promise that resolves to array of base64 strings
 */
export async function filesToBase64(files: File[]): Promise<string[]> {
    const promises = files.map(file => fileToBase64(file));
    return Promise.all(promises);
}

/**
 * Converts a File to base64 with data URL prefix
 * @param file - The File object to convert
 * @returns Promise that resolves to data URL string (data:image/jpeg;base64,...)
 */
export function fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result);
            } else {
                reject(new Error('Failed to read file as data URL'));
            }
        };

        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}