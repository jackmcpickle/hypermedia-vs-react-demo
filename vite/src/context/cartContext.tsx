import { getCart } from '@/api/getCart';
import { CartContext } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext } from 'react';

const initialCart = {
    count: 0,
    items: [],
    total: 0,
} satisfies CartContext;

const cartContext = createContext<CartContext>(initialCart);

export const useCartContext = () => useContext(cartContext);

export function CartContextProvider({ children }: { children: ReactNode }) {
    const { data } = useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
        initialData: initialCart,
    });

    return <cartContext.Provider value={data}>{children}</cartContext.Provider>;
}
