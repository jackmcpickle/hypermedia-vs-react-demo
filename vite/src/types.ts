import { CartWithItems } from '~/db/schema';

export interface CartContext {
    count: 0;
    items: CartWithItems[];
    total: 0;
}
