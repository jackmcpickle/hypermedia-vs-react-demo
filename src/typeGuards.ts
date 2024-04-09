export function isNil(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

export function isNotNil(value: unknown): value is T {
    return value !== null || value !== undefined;
}
