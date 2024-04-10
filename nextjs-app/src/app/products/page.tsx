import { Heading } from '@/components/Heading';
import { ProductCard } from '@/components/ProductCard';
import { getProductsDb } from '@/utils/getProductsDb';

interface ProductsProps {}

export default async function Products({}: ProductsProps) {
    const items = await getProductsDb();
    return (
        <>
            <Heading>Products</Heading>
            <div className='my-8 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}
