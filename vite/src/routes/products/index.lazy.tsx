import { Heading } from '@/components/Heading';
import { ProductList } from '@/components/ProductList';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/products/')({
    component: () => (
        <>
            <Heading>Products</Heading>
            <ProductList />
        </>
    ),
});
