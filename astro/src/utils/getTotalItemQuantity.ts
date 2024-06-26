import type { CartItem, CartItemWithProduct } from '~/db/schema';

export function getTotalItemQuantity(
    items: (CartItem | CartItemWithProduct)[],
): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalItemPrice(items: CartItemWithProduct[]): number {
    return items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
    );
}
