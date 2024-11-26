
import { integer, pgTable, varchar, timestamp, doublePrecision } from "drizzle-orm/pg-core";
//Need to delete .js so that drizzle can find these modules then return the .js so that it can be built with npm
import { usersTable } from "./usersSchema";
import { productsTable } from "./productsSchema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";


export const ordersTable = pgTable("orders", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    createdAt: timestamp().notNull().defaultNow(),
    status: varchar({ length: 50 }).notNull().default('New'),
    
    userId: integer().references(() => usersTable.id).notNull(),
  });

export const orderItemsTable= pgTable('order_items', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    orderId: integer().references(() => ordersTable.id).notNull(),
    productId: integer().references(() => productsTable.id).notNull(),
    quantity: integer().notNull(),
    price: doublePrecision().notNull(),
});

export const insertOrderSchema= createInsertSchema(ordersTable).omit({
    id: true,
    userId: true,
    status: true,
    createdAt: true,
});

export const insertOrderItemSchema = createInsertSchema(orderItemsTable).omit({
    id: true,
    orderId: true,
})
export const insertOrderWithItemSchema= z.object({
    order: insertOrderSchema,
    items: z.array(insertOrderItemSchema),

})

export const updateOrderSchema = createInsertSchema(ordersTable).pick({
    status: true,
});