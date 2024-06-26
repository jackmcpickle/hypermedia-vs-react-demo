import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { sql, relations } from 'drizzle-orm';
import * as dotenv from 'dotenv';
dotenv.config();

export const libsqlClient = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const productTable = sqliteTable('product', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    price: integer('price').notNull(),
    body: text('body').notNull(),
});

export const cartTable = sqliteTable('cart', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    // Date/time values queried as JavaScript Date objects.
    createdAt: text('created_at')
        .notNull()
        .default(sql`CURRENT_TIMESTAMP`),
});

export const cartItemTable = sqliteTable('cart_items', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    productId: integer('productId')
        .references(() => productTable.id)
        .notNull(),
    cartId: integer('cartId')
        .references(() => cartTable.id)
        .notNull(),
    quantity: integer('quantity').notNull(),
});

export const cartRelations = relations(cartTable, ({ many }) => ({
    items: many(cartItemTable),
}));

export const cartItemTableRelations = relations(cartItemTable, ({ one }) => ({
    cart: one(cartTable, {
        fields: [cartItemTable.cartId],
        references: [cartTable.id],
    }),
    product: one(productTable, {
        fields: [cartItemTable.productId],
        references: [productTable.id],
    }),
}));

export const db = drizzle(libsqlClient, {
    schema: {
        productTable,
        cartTable,
        cartItemTable,
        cartRelations,
        cartItemTableRelations,
    },
});

export type NewProduct = typeof productTable.$inferInsert;
export type Product = typeof productTable.$inferSelect;
export type CartItem = typeof cartItemTable.$inferSelect;
export type Cart = typeof cartTable.$inferSelect;
export type CartWithItems = Cart & {
    items: CartItem[];
};
export type CartItemWithProduct = CartItem & { product: Product };
export type NewCartItem = typeof cartItemTable.$inferInsert;
