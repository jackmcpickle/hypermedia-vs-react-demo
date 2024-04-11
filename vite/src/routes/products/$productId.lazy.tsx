import { ProductPage } from '@/components/ProductPage';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/products/$productId')({
    component: () => <ProductPage />,
});
