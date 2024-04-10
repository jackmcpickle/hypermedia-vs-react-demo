import { CartContext } from '@/types';
import { CartWithItems } from '~/db/schema';

export function getCart(): Promise<CartContext> {
    return Promise.resolve({
        count: 0,
        items: [] as CartWithItems[],
        total: 0,
    } satisfies CartContext);
    // return fetch('/api/cart');
}
