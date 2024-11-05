import { drizzle } from 'drizzle-orm';
import { varchar, integer, decimal, text, jsonb } from 'drizzle-orm/schema';

export const carListingSchema = drizzle.defineTable('car_listings', {
  id: integer('id').primaryKey().autoIncrement(),
  make: varchar('make', { length: 50 }).notNull(),
  model: varchar('model', { length: 50 }).notNull(),
  year: integer('year').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  mileage: integer('mileage'),
  color: varchar('color', { length: 30 }),
  description: text('description'),
  images: jsonb('images')
});

export default carListingSchema;
