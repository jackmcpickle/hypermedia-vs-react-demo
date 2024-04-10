'use server';
import type { CartItemWithProduct } from '~/db/schema';
import {
    getTotalItemQuantity,
    getTotalItemPrice,
} from '../utils/getTotalItemQuantity';

interface CartTotalsProps {
    cartProducts: CartItemWithProduct[];
}

export async function CartTotals({ cartProducts }: CartTotalsProps) {
    return (
        <div id='cartTotal'>
            <hr className='my-8' />
            <p>Items: {getTotalItemQuantity(cartProducts)}</p>
            <p>Total: ${getTotalItemPrice(cartProducts)}</p>
        </div>
    );
}
