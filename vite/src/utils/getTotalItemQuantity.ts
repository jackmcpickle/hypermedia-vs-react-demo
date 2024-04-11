export function getTotalItemQuantity(items: { quantity: number }[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalItemPrice(
    items: { quantity: number; product: { price: number } }[],
): number {
    return items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
    );
}
