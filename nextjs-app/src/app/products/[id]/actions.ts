'use server';

import { eq } from 'drizzle-orm';
import {
    type Cart,
    db,
    cartTable,
    NewCartItem,
    cartItemTable,
} from '~/db/schema';
import { cookies } from 'next/headers';
import { CART_ID_COOKIE } from '@/constants';
import { isNil } from '@/typeGuards';
import { revalidatePath } from 'next/cache';

export type CartFormState = {
    errors: string[];
    success: boolean;
};

export async function addToCart(_prevState: CartFormState, formData: FormData) {
    try {
        const quantity = formData.get('quantity');
        const productId = formData.get('productId');
        // Validate the data - you'll probably want to do more than this
        if (!quantity || !productId) {
            throw new Error('Missing product details');
        }

        const product = await db.query.productTable.findFirst({
            where: (products) => eq(products.id, Number(productId)),
        });

        if (!product) {
            throw new Error('Product not found');
        }

        let cart: Cart | undefined = undefined;
        const cookie = cookies().get(CART_ID_COOKIE);

        if (!cookie) {
            const newCart = await db.insert(cartTable).values({}).returning();
            cookies().set(CART_ID_COOKIE, newCart.at(0)!.id.toString());
            cart = newCart.at(0);
        } else {
            const existingCart = await db.query.cartTable.findFirst({
                where: (cart) => eq(cart.id, Number(cookie.value)),
            });
            cart = existingCart;
        }

        if (isNil(cart)) {
            throw new Error('Cart not found');
        }

        const newCartItem = {
            cartId: cart.id,
            productId: product.id,
            quantity: Number(quantity),
        } satisfies NewCartItem;

        await db.insert(cartItemTable).values(newCartItem).returning();

        revalidatePath('/');

        return {
            errors: [],
            success: true,
        };
    } catch (error) {
        return {
            success: false,
            errors: [(error as Error).message],
        };
    }
}
