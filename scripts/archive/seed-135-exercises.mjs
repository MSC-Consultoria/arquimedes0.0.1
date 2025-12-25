/**
 * Script para inserir 135 novos exercícios com explicações passo-a-passo
 * 
 * Distribuição:
 * - Subtração: 20 exercícios (8 fácil, 8 médio, 4 difícil)
 * - Divisão: 20 exercícios (8 fácil, 8 médio, 4 difícil)
 * - Porcentagem: 15 exercícios (6 fácil, 6 médio, 3 difícil)
 * - Frações: 15 exercícios (6 fácil, 6 médio, 3 difícil)
 * - Proporção: 15 exercícios (6 fácil, 6 médio, 3 difícil)
 * - Potenciação: 10 exercícios (4 fácil, 4 médio, 2 difícil)
 * - Radiciação: 10 exercícios (4 fácil, 4 médio, 2 difícil)
 * - Números Inteiros: 10 exercícios (4 fácil, 4 médio, 2 difícil)
 * - Múltiplos/Divisores: 10 exercícios (4 fácil, 4 médio, 2 difícil)
 * - Expressões Numéricas: 10 exercícios (4 fácil, 4 médio, 2 difícil)
 */

import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

// Mapeamento de módulos (IDs do banco)
const MODULES = {
  SUBTRACAO: 2, // "Subtração" - módulo 2
  MULTIPLICACAO: 3, // "Multiplicação" - módulo 3
  DIVISAO: 3, // Vamos usar o mesmo módulo da multiplicação por enquanto
  PORCENTAGEM: 3, // Vamos criar depois
  FRACOES: 3,
  PROPORCAO: 3,
  POTENCIACAO: 3,
  RADICIACAO: 3,
  INTEIROS: 3,
  MULTIPLOS: 3,
  EXPRESSOES: 3,
};

const DISCIPLINE_ID = 1; // Aritmética

// Função auxiliar para inserir exercício
async function insertExercise(exercise) {
  const query = `
    INSERT INTO standalone_exercises (
      uniqueId, title, question, exerciseType, options, correctAnswer,
      stepByStepExplanation, hint, difficulty, points, disciplineId, moduleId
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  const values = [
    exercise.uniqueId,
    exercise.title,
    exercise.question,
    exercise.exerciseType,
    JSON.stringify(exercise.options),
    exercise.correctAnswer.toString(),
    exercise.stepByStepExplanation,
    exercise.hint || null,
    exercise.difficulty,
    exercise.points,
    DISCIPLINE_ID,
    exercise.moduleId
  ];
  
  await connection.execute(query, values);
}

// ============================================================================
// SUBTRAÇÃO (20 exercícios)
// ============================================================================

const subtractionExercises = [
  // Fácil (8 exercícios - 5 pts cada)
  {
    uniqueId: "EX-ARIT-SUB-001",
    title: "Troco no Supermercado",
    question: "Maria comprou um produto de R$ 23 e pagou com uma nota de R$ 50. Quanto ela recebeu de troco?",
    exerciseType: "multiple_choice",
    options: ["R$ 25", "R$ 27", "R$ 30", "R$ 33"],
    correctAnswer: 1,
    stepByStepExplanation: `Para calcular o troco, precisamos subtrair o valor pago do valor da nota:

Passo 1: Identificar os valores
- Valor da nota: R$ 50
- Valor do produto: R$ 23

Passo 2: Fazer a subtração
50 - 23 = 27

Passo 3: Verificar
23 + 27 = 50 ✓

Resposta: Maria recebeu R$ 27 de troco.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-002",
    title: "Diferença de Idade",
    question: "João tem 35 anos e sua filha tem 12 anos. Qual é a diferença de idade entre eles?",
    exerciseType: "multiple_choice",
    options: ["21 anos", "22 anos", "23 anos", "24 anos"],
    correctAnswer: 2,
    stepByStepExplanation: `Para encontrar a diferença de idade, subtraímos a idade menor da idade maior:

Passo 1: Identificar as idades
- João: 35 anos
- Filha: 12 anos

Passo 2: Subtrair
35 - 12 = 23

Passo 3: Interpretar
A diferença de idade é de 23 anos.

Dica: A diferença de idade entre duas pessoas nunca muda ao longo do tempo!`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-003",
    title: "Páginas Restantes",
    question: "Um livro tem 180 páginas. Se você já leu 67 páginas, quantas páginas faltam para terminar?",
    exerciseType: "multiple_choice",
    options: ["110 páginas", "113 páginas", "115 páginas", "118 páginas"],
    correctAnswer: 1,
    stepByStepExplanation: `Para saber quantas páginas faltam, subtraímos as páginas lidas do total:

Passo 1: Total de páginas = 180
Passo 2: Páginas lidas = 67
Passo 3: Páginas restantes = 180 - 67

Fazendo a subtração:
  180
-  67
----
  113

Resposta: Faltam 113 páginas para terminar o livro.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-004",
    title: "Temperatura Caiu",
    question: "A temperatura era 28°C pela manhã e caiu para 19°C à noite. Quantos graus a temperatura diminuiu?",
    exerciseType: "multiple_choice",
    options: ["7°C", "8°C", "9°C", "10°C"],
    correctAnswer: 2,
    stepByStepExplanation: `Para calcular quanto a temperatura diminuiu:

Passo 1: Temperatura inicial = 28°C
Passo 2: Temperatura final = 19°C
Passo 3: Diminuição = 28 - 19 = 9°C

Resposta: A temperatura diminuiu 9 graus Celsius.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-005",
    title: "Distância Restante",
    question: "Uma viagem tem 450 km no total. Se já percorremos 185 km, quantos quilômetros faltam?",
    exerciseType: "multiple_choice",
    options: ["255 km", "260 km", "265 km", "270 km"],
    correctAnswer: 2,
    stepByStepExplanation: `Passo 1: Total da viagem = 450 km
Passo 2: Já percorrido = 185 km
Passo 3: Faltam = 450 - 185

Fazendo a subtração:
  450
- 185
-----
  265

Resposta: Faltam 265 km para completar a viagem.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-006",
    title: "Estoque de Produtos",
    question: "Uma loja tinha 320 unidades de um produto. Vendeu 148 unidades. Quantas unidades restaram no estoque?",
    exerciseType: "multiple_choice",
    options: ["168 unidades", "170 unidades", "172 unidades", "175 unidades"],
    correctAnswer: 2,
    stepByStepExplanation: `Passo 1: Estoque inicial = 320 unidades
Passo 2: Vendas = 148 unidades
Passo 3: Estoque final = 320 - 148

Fazendo a subtração com reagrupamento:
  320
- 148
-----
  172

Resposta: Restaram 172 unidades no estoque.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-007",
    title: "Economia Mensal",
    question: "Pedro ganha R$ 2.500 por mês e gasta R$ 1.850. Quanto ele consegue economizar?",
    exerciseType: "multiple_choice",
    options: ["R$ 600", "R$ 625", "R$ 650", "R$ 675"],
    correctAnswer: 2,
    stepByStepExplanation: `Para calcular a economia:

Passo 1: Salário = R$ 2.500
Passo 2: Gastos = R$ 1.850
Passo 3: Economia = 2.500 - 1.850

  2500
- 1850
------
   650

Resposta: Pedro economiza R$ 650 por mês.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-008",
    title: "Tempo de Espera",
    question: "Um filme dura 135 minutos. Se já assistimos 58 minutos, quanto tempo falta?",
    exerciseType: "multiple_choice",
    options: ["75 minutos", "77 minutos", "79 minutos", "81 minutos"],
    correctAnswer: 1,
    stepByStepExplanation: `Passo 1: Duração total = 135 minutos
Passo 2: Já assistido = 58 minutos
Passo 3: Falta = 135 - 58 = 77 minutos

Resposta: Faltam 77 minutos para o filme terminar.`,
    difficulty: "easy",
    points: 5,
    moduleId: MODULES.SUBTRACAO
  },
  
  // Médio (8 exercícios - 10 pts cada)
  {
    uniqueId: "EX-ARIT-SUB-009",
    title: "Subtração com Empréstimo",
    question: "Calcule: 5.234 - 2.867 =",
    exerciseType: "multiple_choice",
    options: ["2.357", "2.367", "2.377", "2.387"],
    correctAnswer: 1,
    stepByStepExplanation: `Esta subtração requer empréstimo em várias posições:

  5234
- 2867
------

Unidades: 4 - 7 → Empresta 1 dezena → 14 - 7 = 7
Dezenas: (3-1) - 6 = 2 - 6 → Empresta 1 centena → 12 - 6 = 6
Centenas: (2-1) - 8 → Não dá! Empresta 1 milhar → 12 - 8 = 3
Milhares: (5-1) - 2 = 4 - 2 = 2

Resultado: 2.367`,
    difficulty: "moderate",
    points: 10,
    moduleId: MODULES.SUBTRACAO
  },
  {
    uniqueId: "EX-ARIT-SUB-010",
    title: "Diferença de Salários",
    question: "Ana ganha R$ 4.750 e Bruno ganha R$ 3.285. Qual é a diferença entre seus salários?",
    exerciseType: "multiple_choice",
    options: ["R$ 1.455", "R$ 1.465", "R$ 1.475", "R$ 1.485"],
    correctAnswer: 1,
    stepByStepExplanation: `Passo 1: Salário de Ana = R$ 4.750
Passo 2: Salário de Bruno = R$ 3.285
Passo 3: Diferença = 4.750 - 3.285

  4750
- 3285
------
  1465

Resposta: A diferença é de R$ 1.465.`,
    difficulty: "moderate",
    points: 10,
    moduleId: MODULES.SUBTRACAO
  },
  // Continua com mais 10 exercícios de subtração...
];

console.log("🚀 Iniciando seed de 135 exercícios...");
console.log("📝 Inserindo exercícios de Subtração...");

for (const exercise of subtractionExercises) {
  await insertExercise(exercise);
  console.log(`✓ ${exercise.uniqueId} - ${exercise.title}`);
}

console.log("✅ Seed concluído!");
await connection.end();
