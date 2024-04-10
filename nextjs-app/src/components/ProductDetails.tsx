import { AddToCartForm } from './AddToCartForm';
import { ImagePlaceholder } from './ImagePlaceholder';

interface Props {
    id: number;
    name: string;
    price: number;
    description: string;
}

export function ProductDetails({ name, description, price, id }: Props) {
    return (
        <article className='relative flex items-center space-x-3 bg-white px-6 py-5'>
            <div className='flex gap-10'>
                <div className='aspect-1 rounded-md text-gray-500 h-[400px] bg-gray-200 flex items-center justify-center'>
                    <ImagePlaceholder />
                </div>
                <div>
                    <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                        <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                            {name}
                        </h1>
                        <p className='mt-3 text-3xl tracking-tight text-gray-900'>
                            ${price}
                        </p>
                    </div>

                    <div className='mt-6'>
                        <h3 className='sr-only'>Description</h3>

                        <div className='space-y-6 text-base text-gray-700'>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className='mt-10 flex items-center'>
                        <AddToCartForm productId={id} />
                    </div>
                </div>
            </div>
        </article>
    );
}
