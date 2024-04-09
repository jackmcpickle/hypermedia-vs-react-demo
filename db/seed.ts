import { db, productTable, type NewProduct } from './schema';

const products = [
    {
        name: 'Apple',
        price: 3,
        body: 'A fruit',
    },
    {
        name: 'Banana',
        price: 5,
        body: 'Another fruit',
    },
    {
        name: 'Orange',
        price: 2,
        body: 'Another fruit',
    },
] satisfies NewProduct[];

await db
    .insert(productTable)
    .values(products)
    .execute()
    .then((sds) => console.log('Success seeded', sds.rows));
