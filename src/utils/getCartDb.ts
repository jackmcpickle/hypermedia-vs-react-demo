import type { AstroCookies } from 'astro';
import { CART_ID_COOKIE } from '../constants';
import { db, type Cart } from '../../db/schema';
import { eq } from 'drizzle-orm';

export async function getCartDb(
    cookie: AstroCookies,
): Promise<Cart | undefined> {
    const cartCookie = cookie.get(CART_ID_COOKIE);

    console.log({ CART_ID_COOKIE: cartCookie?.value });

    if (!cartCookie) {
        return;
    }

    return await db.query.cartTable.findFirst({
        where: (cart) => eq(cart.id, cartCookie.number()),
    });
}
