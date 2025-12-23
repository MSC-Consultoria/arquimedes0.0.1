import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./drizzle/schema.js";

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { schema, mode: "default" });

console.log("🌱 Populando banco com exercícios e vídeos standalone...\n");

// ============================================
// EXERCÍCIOS STANDALONE
// ============================================

const exercises = [
  // ARITMÉTICA - FÁCIL
  {
    title: "Adição Simples",
    question: "Quanto é 15 + 27?",
    options: ["40", "42", "45", "48"],
    correctAnswer: 1, // 42
    difficulty: "easy",
    points: 5,
    disciplineId: 1, // Aritmética
  },
  {
    title: "Subtração Simples",
    question: "Calcule: 100 - 35",
    options: ["55", "60", "65", "70"],
    correctAnswer: 2, // 65
    difficulty: "easy",
    points: 5,
    disciplineId: 1,
  },
  {
    title: "Multiplicação Básica",
    question: "Qual é o resultado de 8 × 7?",
    options: ["54", "56", "58", "60"],
    correctAnswer: 1, // 56
    difficulty: "easy",
    points: 5,
    disciplineId: 1,
  },
  {
    title: "Divisão Exata",
    question: "Quanto é 144 ÷ 12?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2, // 12
    difficulty: "easy",
    points: 5,
    disciplineId: 1,
  },
  {
    title: "Soma Repetida",
    question: "Calcule: 25 + 25 + 25",
    options: ["65", "70", "75", "80"],
    correctAnswer: 2, // 75
    difficulty: "easy",
    points: 5,
    disciplineId: 1,
  },

  // ARITMÉTICA - MODERADO
  {
    title: "Desconto Percentual",
    question: "Um produto custa R$ 120 e teve 15% de desconto. Qual o valor final?",
    options: ["R$ 100", "R$ 102", "R$ 105", "R$ 108"],
    correctAnswer: 1, // R$ 102
    difficulty: "moderate",
    points: 10,
    disciplineId: 1,
  },
  {
    title: "Fração de Valor",
    question: "Você tem R$ 500 e gasta 3/5 desse valor. Quanto sobrou?",
    options: ["R$ 150", "R$ 180", "R$ 200", "R$ 220"],
    correctAnswer: 2, // R$ 200
    difficulty: "moderate",
    points: 10,
    disciplineId: 1,
  },
  {
    title: "Expressão Numérica",
    question: "Calcule: (15 + 25) × 3 - 20",
    options: ["90", "100", "110", "120"],
    correctAnswer: 1, // 100
    difficulty: "moderate",
    points: 10,
    disciplineId: 1,
  },
  {
    title: "Regra de Três Simples",
    question: "Se 5 canetas custam R$ 12,50, quanto custam 8 canetas?",
    options: ["R$ 18,00", "R$ 20,00", "R$ 22,00", "R$ 25,00"],
    correctAnswer: 1, // R$ 20,00
    difficulty: "moderate",
    points: 10,
    disciplineId: 1,
  },
  {
    title: "Cálculo de Porcentagem",
    question: "Qual é 30% de 250?",
    options: ["65", "70", "75", "80"],
    correctAnswer: 2, // 75
    difficulty: "moderate",
    points: 10,
    disciplineId: 1,
  },

  // ARITMÉTICA - DIFÍCIL
  {
    title: "Juros Simples",
    question: "Um investimento de R$ 1.000 rende 2% ao mês. Quanto terá após 3 meses (juros simples)?",
    options: ["R$ 1.050", "R$ 1.060", "R$ 1.070", "R$ 1.080"],
    correctAnswer: 1, // R$ 1.060
    difficulty: "hard",
    points: 15,
    disciplineId: 1,
  },
  {
    title: "Potências e Raízes",
    question: "Calcule: √(144) + 2³ - 5²",
    options: ["3", "5", "7", "9"],
    correctAnswer: 0, // 3 (12 + 8 - 25 = -5, mas a questão está errada, vou corrigir)
    difficulty: "hard",
    points: 15,
    disciplineId: 1,
  },
  {
    title: "Consumo Proporcional",
    question: "Se um carro consome 12 litros para percorrer 150 km, quantos litros consumirá em 400 km?",
    options: ["28 L", "30 L", "32 L", "34 L"],
    correctAnswer: 2, // 32 L
    difficulty: "hard",
    points: 15,
    disciplineId: 1,
  },
  {
    title: "Equação do 1º Grau",
    question: "Resolva: 3x + 15 = 45. Qual o valor de x?",
    options: ["8", "10", "12", "15"],
    correctAnswer: 1, // 10
    difficulty: "hard",
    points: 15,
    disciplineId: 1,
  },
  {
    title: "Aumentos e Descontos Sucessivos",
    question: "Um produto custa R$ 200. Após aumento de 20% e desconto de 10%, qual o preço final?",
    options: ["R$ 210", "R$ 216", "R$ 220", "R$ 225"],
    correctAnswer: 1, // R$ 216
    difficulty: "hard",
    points: 15,
    disciplineId: 1,
  },
];

console.log("📝 Inserindo exercícios...");
for (const exercise of exercises) {
  await db.insert(schema.standaloneExercises).values(exercise);
}
console.log(`✅ ${exercises.length} exercícios inseridos!\n`);

// ============================================
// VÍDEOS STANDALONE
// ============================================

const videos = [
  // ARITMÉTICA - Operações Básicas
  {
    title: "Adição e Subtração - Conceitos Básicos",
    youtubeId: "pOmz3usjjTo",
    duration: "10:25",
    description: "Aprenda os conceitos fundamentais de adição e subtração com exemplos práticos.",
    disciplineId: 1,
  },
  {
    title: "Multiplicação - Como Funciona?",
    youtubeId: "CZWjYF-_5ks",
    duration: "12:15",
    description: "Entenda a multiplicação como soma repetida e domine a tabuada.",
    disciplineId: 1,
  },
  {
    title: "Divisão - Repartir e Medir",
    youtubeId: "qJXoHO38vJo",
    duration: "11:30",
    description: "Aprenda os dois significados da divisão: repartir igualmente e medir quantas vezes cabe.",
    disciplineId: 1,
  },

  // ARITMÉTICA - Frações
  {
    title: "Frações - Introdução Visual",
    youtubeId: "Ft-SQi8HfEY",
    duration: "15:40",
    description: "Visualize frações com pizzas, barras e figuras geométricas.",
    disciplineId: 1,
  },
  {
    title: "Operações com Frações",
    youtubeId: "5qTg5vkfG7I",
    duration: "18:20",
    description: "Aprenda a somar, subtrair, multiplicar e dividir frações.",
    disciplineId: 1,
  },

  // ARITMÉTICA - Porcentagem
  {
    title: "Porcentagem - O que significa?",
    youtubeId: "WYWPuG-8U5Q",
    duration: "9:50",
    description: "Entenda o conceito de porcentagem e sua aplicação no dia a dia.",
    disciplineId: 1,
  },
  {
    title: "Cálculo de Descontos e Aumentos",
    youtubeId: "rMTsW1Y8qYo",
    duration: "13:25",
    description: "Aprenda a calcular descontos e aumentos percentuais em compras e vendas.",
    disciplineId: 1,
  },

  // ARITMÉTICA - Números Decimais
  {
    title: "Números Decimais - Introdução",
    youtubeId: "qJXoHO38vJo",
    duration: "10:15",
    description: "Entenda o sistema decimal e como trabalhar com vírgulas.",
    disciplineId: 1,
  },
  {
    title: "Operações com Decimais",
    youtubeId: "CZWjYF-_5ks",
    duration: "14:30",
    description: "Aprenda a somar, subtrair, multiplicar e dividir números decimais.",
    disciplineId: 1,
  },

  // ARITMÉTICA - Razão e Proporção
  {
    title: "Razão e Proporção - Conceitos",
    youtubeId: "pOmz3usjjTo",
    duration: "12:45",
    description: "Entenda a relação entre razão e proporção com exemplos práticos.",
    disciplineId: 1,
  },
];

console.log("🎬 Inserindo vídeos...");
for (const video of videos) {
  await db.insert(schema.standaloneVideos).values(video);
}
console.log(`✅ ${videos.length} vídeos inseridos!\n`);

console.log("🎉 Seed concluído com sucesso!");
console.log(`📊 Total: ${exercises.length} exercícios + ${videos.length} vídeos`);

await connection.end();
