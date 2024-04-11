import { useQuery } from '@tanstack/react-query';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/db';
import { Loader } from './Loader';

export function ProductList() {
    const { data, isFetching } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        initialData: [],
    });

    if (isFetching) {
        return <Loader />;
    }

    return (
        <div className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {data.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                />
            ))}
        </div>
    );
}
