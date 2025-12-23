import mysql from 'mysql2/promise';
import * as fs from 'fs';
import * as path from 'path';

// Conectar ao banco
const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Ler conteúdo dos arquivos
const multContent = fs.readFileSync(path.join(process.cwd(), 'content/multiplicacao-expandida.md'), 'utf-8');
const divContent = fs.readFileSync(path.join(process.cwd(), 'content/divisao-expandida.md'), 'utf-8');

// Extrair seções do conteúdo de Multiplicação
const multSections = multContent.split('## Página ');
const mult1 = multSections[1].split('\n---\n')[0].trim();
const mult2 = multSections[2].split('\n---\n')[0].trim();
const mult3 = multSections[3].split('\n\n**Parabéns')[0].trim();

// Extrair seções do conteúdo de Divisão
const divSections = divContent.split('## Página ');
const div1 = divSections[1].split('\n---\n')[0].trim();
const div2 = divSections[2].split('\n---\n')[0].trim();
const div3 = divSections[3].split('\n---\n')[0].trim();
const div4 = divSections[4].split('\n\n**Parabéns')[0].trim();

console.log('📚 Aplicando conteúdo de Multiplicação e Divisão ao banco de dados...\n');

// Buscar módulo de Multiplicação por nome
const [multModules] = await connection.query(
  'SELECT id FROM modules WHERE name LIKE "%Multiplica%"'
);

if (multModules.length === 0) {
  console.log('❌ Módulo de Multiplicação não encontrado!');
  await connection.end();
  process.exit(1);
}

const multModuleId = multModules[0].id;
console.log(`✅ Módulo de Multiplicação encontrado (ID: ${multModuleId})`);

// Buscar módulo de Divisão por nome
const [divModules] = await connection.query(
  'SELECT id FROM modules WHERE name LIKE "%Divis%"'
);

if (divModules.length === 0) {
  console.log('❌ Módulo de Divisão não encontrado!');
  await connection.end();
  process.exit(1);
}

const divModuleId = divModules[0].id;
console.log(`✅ Módulo de Divisão encontrado (ID: ${divModuleId})\n`);

// Buscar páginas de Multiplicação
const [multPages] = await connection.query(
  'SELECT id, title FROM pages WHERE moduleId = ? ORDER BY `order`',
  [multModuleId]
);
console.log(`✅ Encontradas ${multPages.length} páginas de Multiplicação`);

// Buscar páginas de Divisão
const [divPages] = await connection.query(
  'SELECT id, title FROM pages WHERE moduleId = ? ORDER BY `order`',
  [divModuleId]
);
console.log(`✅ Encontradas ${divPages.length} páginas de Divisão\n`);

// Atualizar páginas de Multiplicação
if (multPages.length >= 3) {
  console.log('📝 Atualizando Multiplicação Página 1...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 45 WHERE id = ?',
    [mult1, multPages[0].id]
  );
  console.log(`   ✓ Página "${multPages[0].title}" atualizada (${mult1.length} caracteres)`);

  console.log('📝 Atualizando Multiplicação Página 2...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 50 WHERE id = ?',
    [mult2, multPages[1].id]
  );
  console.log(`   ✓ Página "${multPages[1].title}" atualizada (${mult2.length} caracteres)`);

  console.log('📝 Atualizando Multiplicação Página 3...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 50 WHERE id = ?',
    [mult3, multPages[2].id]
  );
  console.log(`   ✓ Página "${multPages[2].title}" atualizada (${mult3.length} caracteres)\n`);
}

// Atualizar páginas de Divisão
if (divPages.length >= 3) {
  console.log('📝 Atualizando Divisão Página 1...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 45 WHERE id = ?',
    [div1, divPages[0].id]
  );
  console.log(`   ✓ Página "${divPages[0].title}" atualizada (${div1.length} caracteres)`);

  console.log('📝 Atualizando Divisão Página 2...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 45 WHERE id = ?',
    [div2, divPages[1].id]
  );
  console.log(`   ✓ Página "${divPages[1].title}" atualizada (${div2.length} caracteres)`);

  console.log('📝 Atualizando Divisão Página 3...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 50 WHERE id = ?',
    [div3, divPages[2].id]
  );
  console.log(`   ✓ Página "${divPages[2].title}" atualizada (${div3.length} caracteres)`);
}

// Adicionar 4ª página de Divisão se não existir
if (divPages.length === 3) {
  console.log('📝 Criando Divisão Página 4...');
  await connection.query(
    `INSERT INTO pages (moduleId, title, slug, \`order\`, mainText, estimatedMinutes) 
     VALUES (?, 'Divisão por 10, 100 e 1000', 'divisao-por-10-100-1000', 4, ?, 40)`,
    [divModuleId, div4]
  );
  console.log(`   ✓ Página "Divisão por 10, 100 e 1000" criada (${div4.length} caracteres)\n`);
} else if (divPages.length >= 4) {
  console.log('📝 Atualizando Divisão Página 4...');
  await connection.query(
    'UPDATE pages SET mainText = ?, estimatedMinutes = 40 WHERE id = ?',
    [div4, divPages[3].id]
  );
  console.log(`   ✓ Página "${divPages[3].title}" atualizada (${div4.length} caracteres)\n`);
}

console.log('🎉 Conteúdo aplicado com sucesso!');
console.log('\n📊 Resumo:');
console.log(`   • Multiplicação: 3 páginas (~5.500 palavras)`);
console.log(`   • Divisão: 4 páginas (~5.800 palavras)`);
console.log(`   • Total: 7 páginas com conteúdo rico e escaneável`);

await connection.end();
process.exit(0);
