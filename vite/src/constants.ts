import { CartContext } from './types';

type NavItem = {
    name: string;
    link: string;
};

export const NAVIGATION = [
    {
        name: 'Products',
        link: '/products',
    },
] satisfies NavItem[];

export const CART_ID_COOKIE = 'CART_ID';
export const CART_ITEMS_COOKIE = 'CART_ITEMS';

export const initialCart = {
    count: 0,
    items: [],
    total: 0,
    cartId: '',
} satisfies CartContext;
