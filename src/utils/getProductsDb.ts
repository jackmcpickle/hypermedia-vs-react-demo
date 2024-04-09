import { db, type Product } from '../../db/schema';

export async function getProductsDb(): Promise<Product[]> {
    return await db.query.productTable.findMany();
}
