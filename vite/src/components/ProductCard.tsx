import { Link } from '@tanstack/react-router';

import { ImagePlaceholder } from './ImagePlaceholder';

interface ProductCardProps {
    name: string;
    id: string;
    price: number;
}

export function ProductCard({ name, price, id }: ProductCardProps) {
    return (
        <article className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400'>
            <div className='flex-shrink-0 aspect-1 rounded-md text-gray-300 h-[80px] bg-gray-200 flex items-center justify-center'>
                <ImagePlaceholder />
            </div>
            <section className='min-w-0 flex-1'>
                <Link
                    to={`/products/$productId`}
                    params={{ productId: `${id}` }}
                    className='focus:outline-none'
                >
                    <span
                        className='absolute inset-0'
                        aria-hidden='true'
                    ></span>
                    <h1 className='text-lg font-medium text-gray-900'>
                        {name}
                    </h1>
                    <p className='truncate text-sm text-gray-500'>${price}</p>
                </Link>
            </section>
        </article>
    );
}
