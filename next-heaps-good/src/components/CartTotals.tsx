import type { CartItemWithProduct } from '~/db/schema';
import {
    getTotalItemQuantity,
    getTotalItemPrice,
} from '../utils/getTotalItemQuantity';

interface CartTotalsProps {
    cartProducts: CartItemWithProduct[];
}

export function CartTotals({ cartProducts }: CartTotalsProps) {
    return (
        <div
            id='cartTotal'
            hx-swap='outerHTML'
            hx-get='/cart/totals'
            hx-trigger='cartupdate from:document'
        >
            <hr className='my-8' />
            <p>Items: {getTotalItemQuantity(cartProducts)}</p>
            <p>Total: ${getTotalItemPrice(cartProducts)}</p>
        </div>
    );
}
