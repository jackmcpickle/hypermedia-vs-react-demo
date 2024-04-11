import { getCart } from '@/api/db';
import { initialCart } from '@/constants';
import { CartContext } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext } from 'react';

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
