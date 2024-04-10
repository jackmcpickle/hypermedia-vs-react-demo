'use server';
import groupBy from 'lodash/groupBy';
import type { CartItemWithProduct } from '~/db/schema';
import {
    getTotalItemPrice,
    getTotalItemQuantity,
} from '@/utils/getTotalItemQuantity';
import { deleteItem } from '@/app/cart/actions';

interface CartItemsProps {
    cartProducts: CartItemWithProduct[];
}

export async function CartItems({ cartProducts }: CartItemsProps) {
    const itemsByProductid = groupBy(cartProducts, 'productId');
    return (
        <ul
            className='flex flex-col gap-4 my-8'
            id='cartItems'
            data-astro-reload
        >
            {cartProducts.length === 0 && (
                <li className='inline-flex items-center justify-between border rounded p-2 max-w-96'>
                    <div>Cart is empty</div>
                </li>
            )}
            {cartProducts.length !== 0 &&
                Object.entries(itemsByProductid).map(
                    ([productId, cartItems]) => (
                        <li
                            key={productId}
                            className='inline-flex items-center justify-between border rounded p-2 max-w-96'
                        >
                            <div>
                                {getTotalItemQuantity(cartItems)} &times;
                                {cartItems?.at(0)?.product?.name} - $
                                {getTotalItemPrice(cartItems)}
                            </div>
                            <form action={deleteItem}>
                                <input
                                    type='hidden'
                                    name='productId'
                                    value={productId}
                                />
                                <button
                                    type='submit'
                                    className='p-2 text-gray-500 float-right hover:text-black'
                                >
                                    remove
                                </button>
                            </form>
                        </li>
                    ),
                )}
        </ul>
    );
}
