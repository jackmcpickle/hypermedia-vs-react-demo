import { useQuery } from '@tanstack/react-query';
import { ProductDetails } from './ProductDetails';
import { getProduct } from '@/api/db';
import { useParams } from '@tanstack/react-router';
import { Loader } from './Loader';

export function ProductPage() {
    const params = useParams({ from: '/products/$productId' });

    const { data, isFetching } = useQuery({
        queryKey: ['products', params.productId],
        queryFn: () => getProduct(params.productId),
    });

    if (!data || isFetching) {
        return <Loader />;
    }

    return (
        <ProductDetails
            id={data.id}
            description={data.body}
            name={data.name}
            price={data.price}
        />
    );
}
