import { CART_ID_COOKIE } from '@/constants';
import { db, type Cart } from '~/db/schema';
import { eq } from 'drizzle-orm';
import type { AstroCookies } from 'astro';

export async function getCartDb(
    cookies: AstroCookies,
): Promise<Cart | undefined> {
    const cartCookie = cookies.get(CART_ID_COOKIE);

    if (!cartCookie) {
        return;
    }

    return await db.query.cartTable.findFirst({
        where: (cart) => eq(cart.id, cartCookie.number()),
    });
}
