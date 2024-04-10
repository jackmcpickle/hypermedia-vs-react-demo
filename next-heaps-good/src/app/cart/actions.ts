'use server';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { cartItemTable, db } from '~/db/schema';

export async function deleteItem(formData: FormData) {
    const productId = formData.get('productId') as string;

    if (productId) {
        const deleted = await db
            .delete(cartItemTable)
            .where(eq(cartItemTable.productId, Number(productId)))
            .returning();

        console.log('Deleted: ', deleted);
        revalidatePath('/');
    }
}
