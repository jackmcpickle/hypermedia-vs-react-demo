import { CART_ID_COOKIE, CART_ITEMS_COOKIE } from '@/constants';
import { CartContext, CartItem, ProductItem } from '@/types';
import { delay, getLocalStore, setLocalStore } from './localStore';
import {
    getTotalItemPrice,
    getTotalItemQuantity,
} from '@/utils/getTotalItemQuantity';

export interface ProductInfo extends FormData {
    productId: string;
    quantity: number;
}

const products = [
    {
        id: '1',
        name: 'Apple',
        price: 3,
        body: 'Description',
    },
    {
        id: '2',
        name: 'Banana',
        price: 5,
        body: 'Description',
    },
    {
        id: '3',
        name: 'Orange',
        price: 6,
        body: 'Description',
    },
] satisfies ProductItem[];

export async function addToCart(productInfo: ProductInfo) {
    const productId = productInfo.get('productId') as string;
    const quantity = Number(productInfo.get('quantity'));

    if (!productId || !quantity) {
        throw new Error('Missing product data');
    }

    const { cartId } = await getCart();
    const allCartItems = getLocalStore<CartItem[]>(CART_ITEMS_COOKIE, []);
    const products = await getProducts();
    const product = products.find((p) => p.id === productInfo.get('productId'));

    if (!product) {
        throw new Error('Product not found');
    }

    const item = {
        id: crypto.randomUUID(),
        cartId,
        quantity,
        productId,
        product: product,
    } satisfies CartItem;

    setLocalStore(CART_ITEMS_COOKIE, [...allCartItems, item]);

    return delay(productInfo);
}

export async function getCart(): Promise<CartContext> {
    const cartId = getLocalStore<string>(CART_ID_COOKIE, crypto.randomUUID());
    setLocalStore(CART_ID_COOKIE, cartId);
    const allCartItems = getLocalStore<CartItem[]>(CART_ITEMS_COOKIE, []);
    const cartItems = allCartItems.filter((items) => items.cartId === cartId);

    return delay({
        cartId,
        count: getTotalItemQuantity(cartItems),
        items: cartItems,
        total: getTotalItemPrice(cartItems),
    });
}

export async function getProducts(): Promise<ProductItem[]> {
    return delay(products);
}

export async function getProduct(
    productId: string,
): Promise<ProductItem | undefined> {
    return delay(products.find((p) => p.id === productId));
}
