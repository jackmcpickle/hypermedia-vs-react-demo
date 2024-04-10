import { Link } from '@tanstack/react-router';

interface HeroProps {}

export function Hero({}: HeroProps) {
    return (
        <div className='relative isolate px-6 pt-14 lg:px-8'>
            <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                        Mcpickle-Fruit
                    </h1>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua.
                    </p>
                    <div className='mt-10 flex items-center justify-center gap-x-6'>
                        <Link
                            to='/products'
                            className='rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                        >
                            View Fruit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
