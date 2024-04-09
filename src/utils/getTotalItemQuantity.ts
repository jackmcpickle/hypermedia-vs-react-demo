import type { Dictionary } from 'lodash';
import type { CartItem, Product } from '../../db/schema';

export function getTotalItemQuantity(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalItemPrice(product: Product, items: CartItem[]): number {
    return items.reduce((sum, item) => sum + product.price * item.quantity, 0);
}

export function getTotalItemPrices(
    products: Product[],
    items: Dictionary<CartItem[]>,
): number {
    return products.reduce(
        (sum, product) => sum + getTotalItemPrice(product, items[product.id]),
        0,
    );
}
