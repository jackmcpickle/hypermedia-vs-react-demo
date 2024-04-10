'use server';
import { Heading } from '@/components/Heading';
import { CartItems } from '@/components/CartItems';
import { CartTotals } from '@/components/CartTotals';
import { cookies } from 'next/headers';
import { getCartItemsDb } from '@/utils/getCartItemsDb';

export default async function CartPage() {
    const items = await getCartItemsDb(cookies());

    return (
        <>
            <Heading>Cart</Heading>
            <CartItems cartProducts={items} />
            <CartTotals cartProducts={items} />
        </>
    );
}
