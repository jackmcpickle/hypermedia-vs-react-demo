export interface CartContext {
    count: number;
    items: CartItem[];
    total: number;
    cartId: string;
}

export interface CartItem {
    id: string;
    productId: string;
    product: ProductItem;
    cartId: string;
    quantity: number;
}

export interface ProductItem {
    id: string;
    price: number;
    name: string;
    body: string;
}
