export function getLocalStore<T = unknown>(
    key: string,
    defaultValue = '' as T,
): T {
    const raw = localStorage.getItem(key);
    return JSON.parse(raw ?? JSON.stringify(defaultValue)) as T;
}

export function setLocalStore<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

export function delay<T>(data: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
    });
}
