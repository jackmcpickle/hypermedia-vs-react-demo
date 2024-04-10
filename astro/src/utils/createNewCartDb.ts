import type { AstroCookies } from 'astro';
import { cartTable, db, type Cart } from '../../db/schema';
import { CART_ID_COOKIE } from '../constants';

export async function createNewCartDb(cookies: AstroCookies): Promise<Cart> {
    const newCart = await db.insert(cartTable).values({}).returning();
    cookies.set(CART_ID_COOKIE, newCart.at(0)!.id.toString(), {
        path: '/',
        httpOnly: true,
        maxAge: 10 * 60 * 60,
    });
    return newCart.at(0)!;
}
