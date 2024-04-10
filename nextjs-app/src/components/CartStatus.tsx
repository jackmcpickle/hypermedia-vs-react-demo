import { CartIcon } from '@/components/icons/CartIcon';

interface Props {
    count: number;
}

export function CartStatus({ count }: Props) {
    return (
        <div
            className='ml-4 flow-root lg:ml-6'
            id='cartStatus'
            hx-get='/cart/status'
            hx-trigger='cartupdate from:document'
        >
            <a
                href='/cart'
                className='group -m-2 flex items-center p-2'
            >
                <CartIcon />
                <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                    {count}
                </span>
                <span className='sr-only'>items in cart, view bag</span>
            </a>
        </div>
    );
}
