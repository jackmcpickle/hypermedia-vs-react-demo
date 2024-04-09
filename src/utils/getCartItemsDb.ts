import { type CartItem } from './../../db/schema';
import { db, type Cart } from '../../db/schema';
import { eq } from 'drizzle-orm';

export async function getCartItemsDb(cart: Cart): Promise<CartItem[]> {
    return await db.query.cartItemTable.findMany({
        where: (cartItems) => eq(cartItems.cartId, cart.id),
    });
}
