import { integer, pgTable, varchar, text, doublePrecision } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

//TODO: ADD Size, and multiple images for clothing
export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
  modelSpecs: text(),
  materialMakeUp: text(),
});

export const createProductSchema= createInsertSchema(productsTable).omit({
  id: true,
});

export const updateProductSchema= createInsertSchema(productsTable).omit({
  id: true,
}).partial();