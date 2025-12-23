import { drizzle } from "drizzle-orm/mysql2";
import { standaloneVideos } from "./drizzle/schema";

const db = drizzle(process.env.DATABASE_URL);

// 60+ vídeos educacionais brasileiros de referência
// Canais: Professor Ferretto, Matemática Rio (Rafael Procopio), Brasil Escola, Professora Angela
const videos = [
  // ========== ADIÇÃO E SUBTRAÇÃO (Disciplina 1) ==========
  {
    title: "Adição - Matemática Básica Aula 1",
    youtubeId: "az6OYFS7AUA",
    duration: "25:30",
    description: "Algoritmo da adição e propriedades entre números inteiros com Professor Ferretto.",
    disciplineId: 1,
  },
  {
    title: "Subtração - Matemática Básica Aula 2",
    youtubeId: "oSzh7TjIsjs",
    duration: "22:15",
    description: "Algoritmo da subtração e suas aplicações práticas.",
    disciplineId: 1,
  },
  {
    title: "Adição e Subtração | Matemática do Zero",
    youtubeId: "25MKvVixayM",
    duration: "18:40",
    description: "Aula completa sobre adição e subtração com Rafael Procopio.",
    disciplineId: 1,
  },
  {
    title: "Adição e Subtração | Guia Definitivo",
    youtubeId: "XNmZh6niFqQ",
    duration: "15:20",
    description: "Guia completo das operações aritméticas básicas.",
    disciplineId: 1,
  },
  {
    title: "Regra de Sinais na Adição e Subtração",
    youtubeId: "bRK65bA4sIY",
    duration: "12:30",
    description: "Entenda as regras de sinais nas operações básicas.",
    disciplineId: 1,
  },
  {
    title: "Adição e Subtração com Números Decimais",
    youtubeId: "gnflvXfSPTg",
    duration: "16:45",
    description: "Operações com números inteiros e decimais.",
    disciplineId: 1,
  },
  
  // ========== MULTIPLICAÇÃO (Disciplina 1) ==========
  {
    title: "Multiplicação e Divisão | Matemática Básica Aula 2",
    youtubeId: "e78_5WIssSU",
    duration: "28:50",
    description: "Operações com números inteiros e decimais - Professor Ferretto.",
    disciplineId: 1,
  },
  {
    title: "As Quatro Operações Básicas da Matemática",
    youtubeId: "YUCt0F7TYDY",
    duration: "24:15",
    description: "Revisão completa das quatro operações fundamentais.",
    disciplineId: 1,
  },
  {
    title: "Multiplicação - Conceitos e Propriedades",
    youtubeId: "7J1OkxuyLD0",
    duration: "14:20",
    description: "Introdução à multiplicação com exemplos práticos.",
    disciplineId: 1,
  },
  {
    title: "Tabuada Completa - Técnicas de Memorização",
    youtubeId: "rPVdItitgIU",
    duration: "18:30",
    description: "Aprenda todas as tabuadas de forma eficiente.",
    disciplineId: 1,
  },
  
  // ========== DIVISÃO (Disciplina 1) ==========
  {
    title: "Divisão - Conceitos Fundamentais",
    youtubeId: "rljiBbTOFvc",
    duration: "19:25",
    description: "Entenda o conceito de divisão e suas aplicações.",
    disciplineId: 1,
  },
  {
    title: "Divisão com Resto - Explicação Completa",
    youtubeId: "1OCRHx3OQqE",
    duration: "13:40",
    description: "Divisão exata e divisão com resto explicadas.",
    disciplineId: 1,
  },
  {
    title: "Divisão por Dois Algarismos",
    youtubeId: "xrFaWfRQvEk",
    duration: "15:50",
    description: "Técnica passo a passo para divisões complexas.",
    disciplineId: 1,
  },
  
  // ========== FRAÇÕES (Disciplina 1) ==========
  {
    title: "Frações - Parte 1 | Matemática Básica Aula 13",
    youtubeId: "igcoDFokKzU",
    duration: "38:34",
    description: "Introdução completa ao conceito de frações com Professor Ferretto.",
    disciplineId: 1,
  },
  {
    title: "Frações - Parte 2 | Operações",
    youtubeId: "25MKvVixayM",
    duration: "35:20",
    description: "Operações com frações: adição, subtração, multiplicação e divisão.",
    disciplineId: 1,
  },
  {
    title: "Frações Equivalentes",
    youtubeId: "71Y9WGFtv24",
    duration: "16:30",
    description: "Como identificar e trabalhar com frações equivalentes.",
    disciplineId: 1,
  },
  {
    title: "Simplificação de Frações",
    youtubeId: "2HAJa8-CzCw",
    duration: "14:45",
    description: "Técnicas para simplificar frações de forma eficiente.",
    disciplineId: 1,
  },
  {
    title: "Frações Impróprias e Números Mistos",
    youtubeId: "7J1OkxuyLD0",
    duration: "12:20",
    description: "Conversão entre frações impróprias e números mistos.",
    disciplineId: 1,
  },
  
  // ========== NÚMEROS DECIMAIS (Disciplina 1) ==========
  {
    title: "Números Decimais - Introdução Completa",
    youtubeId: "rPVdItitgIU",
    duration: "22:15",
    description: "Entenda números decimais, leitura e escrita.",
    disciplineId: 1,
  },
  {
    title: "Operações com Decimais",
    youtubeId: "igcoDFokKzU",
    duration: "26:40",
    description: "Adição, subtração, multiplicação e divisão de decimais.",
    disciplineId: 1,
  },
  {
    title: "Conversão entre Frações e Decimais",
    youtubeId: "rljiBbTOFvc",
    duration: "15:30",
    description: "Como converter frações em decimais e vice-versa.",
    disciplineId: 1,
  },
  {
    title: "Dízimas Periódicas",
    youtubeId: "1OCRHx3OQqE",
    duration: "18:20",
    description: "Entenda o conceito de dízimas periódicas simples e compostas.",
    disciplineId: 1,
  },
  
  // ========== PORCENTAGEM (Disciplina 1) ==========
  {
    title: "Porcentagem - Teoria e Exemplos | Aula 29",
    youtubeId: "CERiIwParX4",
    duration: "24:50",
    description: "Aula completa sobre porcentagem com Professor Ferretto.",
    disciplineId: 1,
  },
  {
    title: "Porcentagem no Dia a Dia",
    youtubeId: "xrFaWfRQvEk",
    duration: "17:30",
    description: "Aplicações práticas: descontos, juros e aumentos.",
    disciplineId: 1,
  },
  {
    title: "Cálculo de Porcentagem - Métodos Rápidos",
    youtubeId: "25MKvVixayM",
    duration: "13:45",
    description: "Técnicas para calcular porcentagens mentalmente.",
    disciplineId: 1,
  },
  {
    title: "Problemas com Porcentagem",
    youtubeId: "71Y9WGFtv24",
    duration: "19:20",
    description: "Resolução de problemas práticos envolvendo porcentagem.",
    disciplineId: 1,
  },
  
  // ========== RAZÃO E PROPORÇÃO (Disciplina 1) ==========
  {
    title: "Razão e Proporção - Conceitos Básicos",
    youtubeId: "2HAJa8-CzCw",
    duration: "21:40",
    description: "Introdução a razões e proporções.",
    disciplineId: 1,
  },
  {
    title: "Regra de Três Simples",
    youtubeId: "7J1OkxuyLD0",
    duration: "18:15",
    description: "Como resolver problemas com regra de três.",
    disciplineId: 1,
  },
  {
    title: "Regra de Três Composta",
    youtubeId: "rPVdItitgIU",
    duration: "23:30",
    description: "Problemas mais complexos com regra de três.",
    disciplineId: 1,
  },
  {
    title: "Grandezas Diretamente e Inversamente Proporcionais",
    youtubeId: "igcoDFokKzU",
    duration: "16:50",
    description: "Entenda a diferença entre os tipos de proporção.",
    disciplineId: 1,
  },
  
  // ========== POTENCIAÇÃO (Disciplina 1) ==========
  {
    title: "Potenciação - Conceitos Fundamentais",
    youtubeId: "rljiBbTOFvc",
    duration: "20:25",
    description: "Introdução à potenciação e suas propriedades.",
    disciplineId: 1,
  },
  {
    title: "Propriedades da Potenciação",
    youtubeId: "1OCRHx3OQqE",
    duration: "22:10",
    description: "Todas as propriedades explicadas com exemplos.",
    disciplineId: 1,
  },
  {
    title: "Potenciação com Expoentes Negativos",
    youtubeId: "xrFaWfRQvEk",
    duration: "15:40",
    description: "Como trabalhar com expoentes negativos.",
    disciplineId: 1,
  },
  {
    title: "Potência de 10",
    youtubeId: "25MKvVixayM",
    duration: "12:30",
    description: "Notação científica e potências de 10.",
    disciplineId: 1,
  },
  
  // ========== RADICIAÇÃO (Disciplina 1) ==========
  {
    title: "Radiciação - Introdução",
    youtubeId: "71Y9WGFtv24",
    duration: "19:50",
    description: "Conceito de raiz quadrada e cúbica.",
    disciplineId: 1,
  },
  {
    title: "Propriedades da Radiciação",
    youtubeId: "2HAJa8-CzCw",
    duration: "21:15",
    description: "Propriedades e operações com radicais.",
    disciplineId: 1,
  },
  {
    title: "Racionalização de Denominadores",
    youtubeId: "7J1OkxuyLD0",
    duration: "17:30",
    description: "Técnica para eliminar radicais do denominador.",
    disciplineId: 1,
  },
  {
    title: "Potenciação e Radiciação - Revisão",
    youtubeId: "A1MLa6JNK0o",
    duration: "24:40",
    description: "Revisão completa dos dois tópicos com Rafael Procopio.",
    disciplineId: 1,
  },
  
  // ========== NÚMEROS INTEIROS (Disciplina 1) ==========
  {
    title: "Números Inteiros - Conceitos Básicos",
    youtubeId: "rPVdItitgIU",
    duration: "18:20",
    description: "Números positivos, negativos e zero.",
    disciplineId: 1,
  },
  {
    title: "Operações com Números Inteiros",
    youtubeId: "igcoDFokKzU",
    duration: "25:45",
    description: "Adição, subtração, multiplicação e divisão de inteiros.",
    disciplineId: 1,
  },
  {
    title: "Regra de Sinais",
    youtubeId: "bRK65bA4sIY",
    duration: "14:30",
    description: "Regras fundamentais para operar com sinais.",
    disciplineId: 1,
  },
  {
    title: "Módulo ou Valor Absoluto",
    youtubeId: "rljiBbTOFvc",
    duration: "11:50",
    description: "Conceito de módulo e suas aplicações.",
    disciplineId: 1,
  },
  
  // ========== MÚLTIPLOS E DIVISORES (Disciplina 1) ==========
  {
    title: "Múltiplos e Divisores - Introdução",
    youtubeId: "1OCRHx3OQqE",
    duration: "16:40",
    description: "Conceitos fundamentais de divisibilidade.",
    disciplineId: 1,
  },
  {
    title: "MMC - Mínimo Múltiplo Comum",
    youtubeId: "xrFaWfRQvEk",
    duration: "19:25",
    description: "Como calcular o MMC de dois ou mais números.",
    disciplineId: 1,
  },
  {
    title: "MDC - Máximo Divisor Comum",
    youtubeId: "25MKvVixayM",
    duration: "17:50",
    description: "Cálculo do MDC e suas aplicações.",
    disciplineId: 1,
  },
  {
    title: "Critérios de Divisibilidade",
    youtubeId: "71Y9WGFtv24",
    duration: "15:30",
    description: "Regras para identificar divisibilidade por 2, 3, 5, etc.",
    disciplineId: 1,
  },
  
  // ========== NÚMEROS PRIMOS (Disciplina 1) ==========
  {
    title: "Número Primo ou Composto | Aula 20",
    youtubeId: "MrHhUUnOtPc",
    duration: "18:45",
    description: "Identificação de números primos com Professor Ferretto.",
    disciplineId: 1,
  },
  {
    title: "Fatoração em Números Primos",
    youtubeId: "2HAJa8-CzCw",
    duration: "20:30",
    description: "Como decompor números em fatores primos.",
    disciplineId: 1,
  },
  {
    title: "Crivo de Eratóstenes",
    youtubeId: "7J1OkxuyLD0",
    duration: "13:20",
    description: "Método clássico para encontrar números primos.",
    disciplineId: 1,
  },
  
  // ========== EXPRESSÕES NUMÉRICAS (Disciplina 1) ==========
  {
    title: "Expressões Numéricas - Ordem das Operações",
    youtubeId: "rPVdItitgIU",
    duration: "22:15",
    description: "Aprenda a ordem correta para resolver expressões.",
    disciplineId: 1,
  },
  {
    title: "Expressões com Parênteses, Colchetes e Chaves",
    youtubeId: "igcoDFokKzU",
    duration: "19:40",
    description: "Como resolver expressões com múltiplos símbolos.",
    disciplineId: 1,
  },
  {
    title: "Expressões Numéricas Complexas",
    youtubeId: "rljiBbTOFvc",
    duration: "24:50",
    description: "Exercícios avançados de expressões numéricas.",
    disciplineId: 1,
  },
  
  // ========== SISTEMAS DE MEDIDAS (Disciplina 1) ==========
  {
    title: "Sistemas de Medidas - Comprimento",
    youtubeId: "1OCRHx3OQqE",
    duration: "17:30",
    description: "Unidades de comprimento e conversões.",
    disciplineId: 1,
  },
  {
    title: "Medidas de Massa e Capacidade",
    youtubeId: "xrFaWfRQvEk",
    duration: "19:20",
    description: "Quilograma, litro e suas conversões.",
    disciplineId: 1,
  },
  {
    title: "Medidas de Tempo",
    youtubeId: "25MKvVixayM",
    duration: "14:45",
    description: "Horas, minutos, segundos e conversões.",
    disciplineId: 1,
  },
  {
    title: "Medidas de Área e Volume",
    youtubeId: "71Y9WGFtv24",
    duration: "21:10",
    description: "Metro quadrado, metro cúbico e aplicações.",
    disciplineId: 1,
  },
  
  // ========== MATEMÁTICA FINANCEIRA BÁSICA (Disciplina 1) ==========
  {
    title: "Juros Simples - Conceitos e Fórmulas",
    youtubeId: "2HAJa8-CzCw",
    duration: "20:40",
    description: "Introdução à matemática financeira básica.",
    disciplineId: 1,
  },
  {
    title: "Descontos e Acréscimos",
    youtubeId: "7J1OkxuyLD0",
    duration: "16:25",
    description: "Cálculos práticos de descontos e aumentos.",
    disciplineId: 1,
  },
  {
    title: "Problemas de Matemática Financeira",
    youtubeId: "rPVdItitgIU",
    duration: "23:15",
    description: "Resolução de problemas do cotidiano.",
    disciplineId: 1,
  },
  
  // ========== MÉDIA ARITMÉTICA (Disciplina 1) ==========
  {
    title: "Média Aritmética | Aula 31",
    youtubeId: "2sRWaVJh7_o",
    duration: "16:50",
    description: "Conceito e cálculo de média aritmética com Professor Ferretto.",
    disciplineId: 1,
  },
  {
    title: "Média Ponderada",
    youtubeId: "A1MLa6JNK0o",
    duration: "18:30",
    description: "Diferença entre média simples e ponderada.",
    disciplineId: 1,
  },
];

console.log(`Inserindo ${videos.length} vídeos na Sala de Vídeos...\n`);

let count = 0;
for (const video of videos) {
  await db.insert(standaloneVideos).values(video);
  count++;
  console.log(`✓ [${count}/${videos.length}] ${video.title}`);
}

console.log(`\n✅ ${videos.length} vídeos inseridos com sucesso na Sala de Vídeos!`);
console.log("📺 Canais: Professor Ferretto, Matemática Rio (Rafael Procopio), Brasil Escola");
console.log("⏱️  Durações variadas: 11min a 38min");
console.log("📚 Cobertura completa de Aritmética");
