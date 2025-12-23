import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { pages } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("❌ DATABASE_URL não encontrada");
  process.exit(1);
}

const connection = await mysql.createConnection(DATABASE_URL);
const db = drizzle(connection);

console.log("🔧 Corrigindo formatação Markdown no banco de dados...\n");

// Buscar todas as páginas
const allPages = await db.select().from(pages);

console.log(`📄 Encontradas ${allPages.length} páginas para processar\n`);

let updatedCount = 0;

for (const page of allPages) {
  if (!page.mainText) continue;

  // Converter separadores ; para quebras de linha Markdown
  const fixedContent = page.mainText
    .replace(/;\s*/g, '\n\n') // Substituir ; por quebras de linha duplas
    .replace(/\n{3,}/g, '\n\n') // Remover quebras de linha excessivas
    .trim();

  // Atualizar no banco
  await db.update(pages)
    .set({ mainText: fixedContent })
    .where(eq(pages.id, page.id));

  updatedCount++;
  console.log(`✅ Página ${page.id}: "${page.title}" - formatação corrigida`);
}

await connection.end();

console.log(`\n✨ Concluído! ${updatedCount} páginas atualizadas com formatação Markdown correta.`);
