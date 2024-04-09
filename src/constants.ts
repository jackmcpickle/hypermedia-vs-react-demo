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
