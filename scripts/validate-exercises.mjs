import { drizzle } from 'drizzle-orm/mysql2';
import { exercises } from './drizzle/schema.ts';
import { count } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL);

console.log('🔍 Validando distribuição de exercícios...\n');

// Total geral
const total = await db.select({ count: count() }).from(exercises);
console.log(`🎯 Total Geral: ${total[0].count} exercícios\n`);

// Por tema
const themes = await db.select({ 
  id: exercises.themeId, 
  count: count() 
}).from(exercises).groupBy(exercises.themeId);

console.log('📚 Distribuição por Tema:');
themes.forEach(t => {
  console.log(`  Tema ${t.id}: ${t.count} exercícios`);
});

// Por dificuldade
const difficulties = await db.select({ 
  difficulty: exercises.difficulty, 
  count: count() 
}).from(exercises).groupBy(exercises.difficulty);

console.log('\n📊 Distribuição por Dificuldade:');
difficulties.forEach(d => {
  console.log(`  ${d.difficulty}: ${d.count} exercícios`);
});

// Por tipo
const types = await db.select({ 
  type: exercises.type, 
  count: count() 
}).from(exercises).groupBy(exercises.type);

console.log('\n📝 Distribuição por Tipo:');
types.forEach(t => {
  console.log(`  ${t.type}: ${t.count} exercícios`);
});

console.log('\n✅ Validação concluída!');

process.exit(0);
