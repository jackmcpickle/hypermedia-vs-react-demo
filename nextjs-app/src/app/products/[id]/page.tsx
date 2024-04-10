'use server';
import { ProductDetails } from '@/components/ProductDetails';
import { eq } from 'drizzle-orm';
import { db } from '~/db/schema';
import { redirect } from 'next/navigation';

interface ProductsProps {
    params: { id: string };
}

export default async function ProductPage({ params }: ProductsProps) {
    const product = await db.query.productTable.findFirst({
        where: (products) => eq(products.id, Number(params.id)),
    });

    if (!product) {
        redirect('/404');
    }
    return (
        <>
            <ProductDetails
                id={product.id}
                description={product.body}
                name={product.name}
                price={product.price}
            />
        </>
    );
}
