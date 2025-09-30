/**
 * Simple in-memory cache class for storing and retrieving data
 * Cache is lost on page refresh
 */
export class SimpleCache<K, V> {
    private cache = $state(new Map<K, V>());

    /**
     * Get cached value or fetch and cache it
     */
    async getOrFetch(key: K, fetchFn: () => Promise<V>): Promise<V> {
        if (this.cache.has(key)) {
            return this.cache.get(key)!;
        }

        const value = await fetchFn();
        this.cache.set(key, value);
        return value;
    }

    /**
     * Get cached value without fetching
     */
    get(key: K): V | undefined {
        return this.cache.get(key);
    }

    /**
     * Set a value in the cache
     */
    set(key: K, value: V): void {
        this.cache.set(key, value);
    }

    /**
     * Check if key exists in cache
     */
    has(key: K): boolean {
        return this.cache.has(key);
    }

    /**
     * Remove a specific key from cache
     */
    delete(key: K): boolean {
        return this.cache.delete(key);
    }

    /**
     * Clear all cache
     */
    clear(): void {
        this.cache.clear();
    }

    /**
     * Get cache size
     */
    get size(): number {
        return this.cache.size;
    }

    /**
     * Get all keys
     */
    keys(): IterableIterator<K> {
        return this.cache.keys();
    }

    /**
     * Get all values
     */
    values(): IterableIterator<V> {
        return this.cache.values();
    }

    /**
     * Get all entries
     */
    entries(): IterableIterator<[K, V]> {
        return this.cache.entries();
    }
}

/**
 * Create a cached version of any async function
 * Automatically handles cache management based on function arguments
 *
 * @example
 * const fetchCarsCached = createCachedQuery(fetchAllCars);
 * // Use it like the original function
 * await fetchCarsCached(1); // Fetches and caches
 * await fetchCarsCached(1); // Returns from cache
 * await fetchCarsCached(2); // Fetches and caches page 2
 */
export function createCachedQuery<TArgs extends any[], TReturn>(
    fetchFn: (...args: TArgs) => Promise<TReturn>
) {
    const cache = new SimpleCache<string, TReturn>();

    const cachedFn = (...args: TArgs): Promise<TReturn> => {
        // Create a unique cache key from the arguments
        const key = JSON.stringify(args);
        return cache.getOrFetch(key, () => fetchFn(...args));
    };

    // Expose cache management methods
    cachedFn.cache = cache;
    cachedFn.clearCache = () => cache.clear();
    cachedFn.deleteFromCache = (...args: TArgs) => cache.delete(JSON.stringify(args));

    return cachedFn;
}