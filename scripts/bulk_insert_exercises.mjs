#!/usr/bin/env node
/**
 * Script para inserir exercícios em lote no banco de dados
 * Lê o arquivo SQL gerado e executa as inserções
 */

import { readFileSync } from 'fs';
import mysql from 'mysql2/promise';

async function main() {
  // Ler variáveis de ambiente
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    console.error('DATABASE_URL não definida');
    process.exit(1);
  }
  
  // Parse DATABASE_URL
  const url = new URL(dbUrl);
  const config = {
    host: url.hostname,
    port: parseInt(url.port) || 3306,
    user: url.username,
    password: url.password,
    database: url.pathname.slice(1),
    ssl: { rejectUnauthorized: false }
  };
  
  console.log('Conectando ao banco de dados...');
  const connection = await mysql.createConnection(config);
  
  // Ler arquivo SQL
  const sqlContent = readFileSync('/home/ubuntu/arquimedes/scripts/insert_arithmetic_exercises.sql', 'utf-8');
  const statements = sqlContent.split('\n').filter(line => line.startsWith('INSERT'));
  
  console.log(`Total de statements: ${statements.length}`);
  
  let inserted = 0;
  let errors = 0;
  
  for (const sql of statements) {
    try {
      await connection.execute(sql);
      inserted++;
      if (inserted % 50 === 0) {
        console.log(`Inseridos: ${inserted}/${statements.length}`);
      }
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        // Ignorar duplicatas
      } else {
        console.error(`Erro: ${err.message}`);
        errors++;
      }
    }
  }
  
  console.log(`\nResultado:`);
  console.log(`- Inseridos: ${inserted}`);
  console.log(`- Erros: ${errors}`);
  
  await connection.end();
}

main().catch(console.error);
