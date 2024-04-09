import { eq } from 'drizzle-orm';
import {
    cartItemTable,
    cartTable,
    db,
    type Cart,
    type NewCartItem,
} from '../../../../db/schema';
import { type APIRoute } from 'astro';
import { CART_ID_COOKIE } from '../../../constants';
import { isNil } from '../../../typeGuards';

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const data = await request.formData();
        const quantity = data.get('quantity');
        const productId = data.get('productId');
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
        const cookie = cookies.get(CART_ID_COOKIE);
        console.log({ CART_ID_COOKIE: cookie?.value });

        if (!cookie) {
            const newCart = await db.insert(cartTable).values({}).returning();
            cookies.set(CART_ID_COOKIE, newCart.at(0)!.id.toString());
            cart = newCart.at(0);
        } else {
            const existingCart = await db.query.cartTable.findFirst({
                where: (cart) => eq(cart.id, cookie.number()),
            });
            cart = existingCart;
        }

        if (isNil(cart)) {
            throw new Error('Cart not found');
        }

        console.log({ cart, cookie });

        const newCartItem = {
            cartId: cart.id,
            productId: product.id,
            quantity: Number(quantity),
        } satisfies NewCartItem;

        const items = await db
            .insert(cartItemTable)
            .values(newCartItem)
            .returning();

        console.log(items);

        // get new cart items
        const allCartItems = await db.query.cartItemTable.findMany({
            where: (cartItems) => eq(cartItems.cartId, cart!.id),
        });

        return new Response(
            JSON.stringify({
                message: 'Success!',
                cartId: cart.id,
                items: allCartItems,
                itemCount: allCartItems.reduce(
                    (total, item) => total + item.quantity,
                    0,
                ),
                totalPrice: allCartItems.reduce(
                    (total, item) => total + item.quantity * product.price,
                    0,
                ),
            }),
            { status: 200 },
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                message: (error as Error).message,
            }),
            { status: 400 },
        );
    }
};
