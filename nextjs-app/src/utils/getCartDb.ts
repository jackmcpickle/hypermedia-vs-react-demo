import { CART_ID_COOKIE } from '@/constants';
import { db, type Cart } from '~/db/schema';
import { eq } from 'drizzle-orm';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export async function getCartDb(
    cookies: ReadonlyRequestCookies,
): Promise<Cart | undefined> {
    const cartCookie = cookies.get(CART_ID_COOKIE);

    if (!cartCookie) {
        return;
    }

    return await db.query.cartTable.findFirst({
        where: (cart) => eq(cart.id, Number(cartCookie.value)),
    });
}
