import { db, type CartItemWithProduct } from '../../db/schema';
import { eq } from 'drizzle-orm';
import { getCartDb } from './getCartDb';
import type { AstroCookies } from 'astro';

export async function getCartItemsDb(
    cookies: AstroCookies,
): Promise<CartItemWithProduct[]> {
    const cart = await getCartDb(cookies);
    if (!cart) {
        return [];
    }
    return await db.query.cartItemTable.findMany({
        where: (cartItems) => eq(cartItems.cartId, cart.id),
        with: {
            product: true,
        },
    });
}
