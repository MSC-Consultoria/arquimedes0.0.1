-- Exercícios de Aritmética - Respostas Validadas Matematicamente
-- Formato: options é JSON array de strings, correctAnswer é o índice (0-3)

-- =====================================================
-- MÓDULO 1: ADIÇÃO (moduleId = 1, disciplineId = 1)
-- =====================================================

-- Exercício 1: 25 + 25 + 25 = 75 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-ADD-001', 'Soma Repetida', 'Calcule: 25 + 25 + 25', 'multiple_choice', 
'["65", "70", "75", "80"]', '2', 
'25 + 25 = 50\n50 + 25 = 75', 'easy', 5, 1, 1);

-- Exercício 2: 47 + 38 = 85 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-ADD-002', 'Soma de Dois Números', 'Calcule: 47 + 38', 'multiple_choice', 
'["75", "85", "95", "80"]', '1', 
'47 + 38:\n7 + 8 = 15 (escreve 5, vai 1)\n4 + 3 + 1 = 8\nResultado: 85', 'easy', 5, 1, 1);

-- Exercício 3: 156 + 89 = 245 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-ADD-003', 'Soma com Centenas', 'Calcule: 156 + 89', 'multiple_choice', 
'["245", "235", "255", "244"]', '0', 
'156 + 89:\n6 + 9 = 15 (escreve 5, vai 1)\n5 + 8 + 1 = 14 (escreve 4, vai 1)\n1 + 0 + 1 = 2\nResultado: 245', 'easy', 5, 1, 1);

-- Exercício 4: 234 + 567 = 801 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-ADD-004', 'Soma de Três Dígitos', 'Calcule: 234 + 567', 'multiple_choice', 
'["791", "811", "801", "800"]', '2', 
'234 + 567:\n4 + 7 = 11 (escreve 1, vai 1)\n3 + 6 + 1 = 10 (escreve 0, vai 1)\n2 + 5 + 1 = 8\nResultado: 801', 'moderate', 10, 1, 1);

-- Exercício 5: 1.250 + 3.750 = 5.000 (índice 3 = D)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-ADD-005', 'Soma de Milhares', 'Calcule: 1.250 + 3.750', 'multiple_choice', 
'["4.000", "4.500", "5.500", "5.000"]', '3', 
'1.250 + 3.750:\n250 + 750 = 1.000\n1.000 + 3.000 = 4.000\n4.000 + 1.000 = 5.000', 'moderate', 10, 1, 1);

-- Exercício 6: R$ 45,50 + R$ 32,75 = R$ 78,25 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-ADD-006', 'Soma de Valores', 'Maria comprou um caderno por R$ 45,50 e uma caneta por R$ 32,75. Quanto ela gastou no total?', 'multiple_choice', 
'["R$ 77,25", "R$ 78,25", "R$ 79,25", "R$ 76,25"]', '1', 
'45,50 + 32,75:\nCentavos: 50 + 75 = 125 = R$ 1,25\nReais: 45 + 32 = 77\nTotal: 77 + 1,25 = R$ 78,25', 'moderate', 10, 1, 1);

-- =====================================================
-- MÓDULO 90002: SUBTRAÇÃO (moduleId = 90002, disciplineId = 1)
-- =====================================================

-- Exercício 7: 85 - 37 = 48 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-SUB-001', 'Subtração Simples', 'Calcule: 85 - 37', 'multiple_choice', 
'["48", "52", "42", "58"]', '0', 
'85 - 37:\nUnidades: 5 - 7 (não dá, pega emprestado)\n15 - 7 = 8\nDezenas: 7 - 3 = 4\nResultado: 48', 'easy', 5, 1, 90002);

-- Exercício 8: 200 - 75 = 125 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-SUB-002', 'Subtração com Centenas', 'Calcule: 200 - 75', 'multiple_choice', 
'["115", "135", "125", "145"]', '2', 
'200 - 75:\n200 - 100 = 100\n100 + 25 = 125\nOu: 200 - 75 = 125', 'easy', 5, 1, 90002);

-- Exercício 9: 543 - 278 = 265 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-SUB-003', 'Subtração com Empréstimo', 'Calcule: 543 - 278', 'multiple_choice', 
'["255", "265", "275", "245"]', '1', 
'543 - 278:\n3 - 8 (pega emprestado): 13 - 8 = 5\n3 - 7 (pega emprestado): 13 - 7 = 6\n4 - 2 = 2\nResultado: 265', 'moderate', 10, 1, 90002);

-- Exercício 10: 1.000 - 456 = 544 (índice 3 = D)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-SUB-004', 'Subtração de Mil', 'Calcule: 1.000 - 456', 'multiple_choice', 
'["554", "534", "564", "544"]', '3', 
'1.000 - 456:\n1.000 - 500 = 500\n500 + 44 = 544\nOu: 999 - 456 + 1 = 543 + 1 = 544', 'moderate', 10, 1, 90002);

-- Exercício 11: R$ 100,00 - R$ 67,35 = R$ 32,65 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-SUB-005', 'Troco', 'João pagou uma compra de R$ 67,35 com uma nota de R$ 100,00. Qual foi o troco?', 'multiple_choice', 
'["R$ 32,65", "R$ 33,65", "R$ 31,65", "R$ 32,35"]', '0', 
'100,00 - 67,35:\n100 - 68 = 32\n32 + 0,65 = 32,65\nTroco: R$ 32,65', 'moderate', 10, 1, 90002);

-- =====================================================
-- MÓDULO 2: MULTIPLICAÇÃO (moduleId = 2, disciplineId = 1)
-- =====================================================

-- Exercício 12: 7 × 8 = 56 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-MUL-001', 'Tabuada', 'Calcule: 7 × 8', 'multiple_choice', 
'["54", "56", "58", "52"]', '1', 
'7 × 8 = 56\nDica: 7 × 8 = 7 × (10 - 2) = 70 - 14 = 56', 'easy', 5, 1, 2);

-- Exercício 13: 12 × 5 = 60 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-MUL-002', 'Multiplicação por 5', 'Calcule: 12 × 5', 'multiple_choice', 
'["50", "55", "60", "65"]', '2', 
'12 × 5:\n12 × 5 = 12 × 10 ÷ 2 = 120 ÷ 2 = 60', 'easy', 5, 1, 2);

-- Exercício 14: 25 × 4 = 100 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-MUL-003', 'Multiplicação por 4', 'Calcule: 25 × 4', 'multiple_choice', 
'["100", "90", "110", "95"]', '0', 
'25 × 4 = 100\nDica: 25 × 4 = 25 × 2 × 2 = 50 × 2 = 100', 'easy', 5, 1, 2);

-- Exercício 15: 15 × 12 = 180 (índice 3 = D)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-MUL-004', 'Multiplicação de Dois Dígitos', 'Calcule: 15 × 12', 'multiple_choice', 
'["160", "170", "190", "180"]', '3', 
'15 × 12:\n15 × 10 = 150\n15 × 2 = 30\n150 + 30 = 180', 'moderate', 10, 1, 2);

-- Exercício 16: 23 × 7 = 161 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-MUL-005', 'Multiplicação Prática', 'Uma caixa tem 23 lápis. Quantos lápis há em 7 caixas?', 'multiple_choice', 
'["151", "161", "171", "141"]', '1', 
'23 × 7:\n20 × 7 = 140\n3 × 7 = 21\n140 + 21 = 161 lápis', 'moderate', 10, 1, 2);

-- =====================================================
-- MÓDULO 3: DIVISÃO (moduleId = 3, disciplineId = 1)
-- =====================================================

-- Exercício 17: 72 ÷ 8 = 9 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-DIV-001', 'Divisão Exata', 'Calcule: 72 ÷ 8', 'multiple_choice', 
'["7", "8", "9", "10"]', '2', 
'72 ÷ 8 = 9\nVerificação: 9 × 8 = 72 ✓', 'easy', 5, 1, 3);

-- Exercício 18: 144 ÷ 12 = 12 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-DIV-002', 'Divisão por 12', 'Calcule: 144 ÷ 12', 'multiple_choice', 
'["11", "12", "13", "14"]', '1', 
'144 ÷ 12 = 12\nVerificação: 12 × 12 = 144 ✓', 'easy', 5, 1, 3);

-- Exercício 19: 225 ÷ 15 = 15 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-DIV-003', 'Divisão de Três Dígitos', 'Calcule: 225 ÷ 15', 'multiple_choice', 
'["15", "14", "16", "13"]', '0', 
'225 ÷ 15 = 15\nVerificação: 15 × 15 = 225 ✓', 'moderate', 10, 1, 3);

-- Exercício 20: 360 ÷ 24 = 15 (índice 3 = D)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-DIV-004', 'Divisão Prática', 'Uma escola tem 360 alunos divididos igualmente em 24 turmas. Quantos alunos há em cada turma?', 'multiple_choice', 
'["12", "13", "14", "15"]', '3', 
'360 ÷ 24 = 15\n360 ÷ 24 = 360 ÷ 6 ÷ 4 = 60 ÷ 4 = 15 alunos', 'moderate', 10, 1, 3);

-- Exercício 21: 500 ÷ 25 = 20 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-DIV-005', 'Divisão por 25', 'Calcule: 500 ÷ 25', 'multiple_choice', 
'["18", "20", "22", "25"]', '1', 
'500 ÷ 25 = 20\nDica: 25 × 4 = 100, então 500 ÷ 25 = 500 × 4 ÷ 100 = 2000 ÷ 100 = 20', 'moderate', 10, 1, 3);

-- =====================================================
-- MÓDULO 120006: PORCENTAGEM (moduleId = 120006, disciplineId = 1)
-- =====================================================

-- Exercício 22: 10% de 200 = 20 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-PER-001', 'Porcentagem Básica', 'Calcule: 10% de 200', 'multiple_choice', 
'["20", "25", "15", "30"]', '0', 
'10% de 200:\n10% = 10/100 = 0,10\n200 × 0,10 = 20', 'easy', 5, 1, 120006);

-- Exercício 23: 25% de 80 = 20 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-PER-002', 'Porcentagem de 25%', 'Calcule: 25% de 80', 'multiple_choice', 
'["15", "18", "20", "22"]', '2', 
'25% de 80:\n25% = 1/4\n80 ÷ 4 = 20', 'easy', 5, 1, 120006);

-- Exercício 24: 15% de 300 = 45 (índice 1 = B)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-PER-003', 'Porcentagem de 15%', 'Calcule: 15% de 300', 'multiple_choice', 
'["40", "45", "50", "55"]', '1', 
'15% de 300:\n10% de 300 = 30\n5% de 300 = 15\n15% = 30 + 15 = 45', 'moderate', 10, 1, 120006);

-- Exercício 25: Desconto de 20% em R$ 150 = R$ 120 (índice 3 = D)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-PER-004', 'Desconto', 'Um produto custa R$ 150,00 e está com 20% de desconto. Qual o preço final?', 'multiple_choice', 
'["R$ 100,00", "R$ 110,00", "R$ 130,00", "R$ 120,00"]', '3', 
'Desconto de 20% em R$ 150:\n20% de 150 = 150 × 0,20 = R$ 30\nPreço final: 150 - 30 = R$ 120,00', 'moderate', 10, 1, 120006);

-- Exercício 26: 50% de 250 = 125 (índice 0 = A)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-PER-005', 'Metade', 'Calcule: 50% de 250', 'multiple_choice', 
'["125", "120", "130", "115"]', '0', 
'50% de 250:\n50% = metade\n250 ÷ 2 = 125', 'easy', 5, 1, 120006);

-- Exercício 27: Aumento de 30% em R$ 200 = R$ 260 (índice 2 = C)
INSERT INTO standalone_exercises (uniqueId, title, question, exerciseType, options, correctAnswer, stepByStepExplanation, difficulty, points, disciplineId, moduleId)
VALUES ('EX-ARIT-PER-006', 'Aumento', 'Um salário de R$ 200,00 teve aumento de 30%. Qual o novo salário?', 'multiple_choice', 
'["R$ 230,00", "R$ 250,00", "R$ 260,00", "R$ 240,00"]', '2', 
'Aumento de 30% em R$ 200:\n30% de 200 = 200 × 0,30 = R$ 60\nNovo salário: 200 + 60 = R$ 260,00', 'moderate', 10, 1, 120006);
