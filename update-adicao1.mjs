import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { eq } from 'drizzle-orm';
import { readFileSync } from 'fs';
import * as dotenv from 'dotenv';
import { mysqlTable, int, varchar, text, timestamp } from 'drizzle-orm/mysql-core';

dotenv.config();

const pages = mysqlTable('pages', {
  id: int('id').primaryKey().autoincrement(),
  moduleId: int('moduleId').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  order: int('order').notNull(),
  mainText: text('mainText'),
  conceptSummary: text('conceptSummary'),
  videoUrl: varchar('videoUrl', { length: 500 }),
  estimatedMinutes: int('estimatedMinutes'),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection);

const adicao1 = readFileSync('/home/ubuntu/arquimedes/content-adicao-pagina1.md', 'utf-8');
await db.update(pages).set({ mainText: adicao1 }).where(eq(pages.id, 1));
console.log('✅ Adição Página 1 atualizada - 1.406 palavras, 30 exercícios');

await connection.end();
