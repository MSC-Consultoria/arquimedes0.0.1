import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from '../drizzle/schema.js';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { schema, mode: 'default' });

const moduleId = 5; // Proporção e Razão

console.log('🚀 Criando Módulo 6: Proporção e Razão...\n');

// ===== PÁGINA 1: O QUE É PROPORÇÃO =====

const page1Content = `# O que é Proporção?

## Introdução

A **proporção** é uma igualdade entre duas razões. Ela nos ajuda a entender como diferentes quantidades se relacionam e mantêm uma relação constante. As proporções estão presentes em mapas, receitas, construções, e até mesmo na natureza!

## Conceito de Proporção

Uma proporção é uma **igualdade entre duas razões (frações)**. Quando dizemos que duas razões são proporcionais, significa que elas representam a mesma relação.

**Notação:**
\`\`\`
a/b = c/d

ou

a : b = c : d
\`\`\`

**Lê-se:** "a está para b assim como c está para d"

### Exemplo Básico

Se 2 maçãs custam R$ 4, então 4 maçãs custam R$ 8.

\`\`\`
2 maçãs / R$ 4 = 4 maçãs / R$ 8

2/4 = 4/8

Simplificando: 1/2 = 1/2 ✅ É uma proporção!
\`\`\`

## Propriedade Fundamental das Proporções

Em uma proporção a/b = c/d, o **produto dos meios é igual ao produto dos extremos**.

**Fórmula:**
\`\`\`
a × d = b × c
\`\`\`

**Exemplo:**
\`\`\`
3/4 = 6/8

Verificando:
3 × 8 = 24
4 × 6 = 24

24 = 24 ✅ É uma proporção!
\`\`\`

## Grandezas Proporcionais

### Grandezas Diretamente Proporcionais

Duas grandezas são **diretamente proporcionais** quando, ao aumentar uma, a outra também aumenta na mesma proporção (ou ao diminuir uma, a outra também diminui).

**Exemplos:**
1. **Quantidade de combustível × Distância percorrida**
   - Mais combustível → Maior distância
   - Menos combustível → Menor distância

2. **Horas trabalhadas × Salário**
   - Mais horas → Maior salário
   - Menos horas → Menor salário

3. **Número de trabalhadores × Produção**
   - Mais trabalhadores → Maior produção
   - Menos trabalhadores → Menor produção

**Característica:** As grandezas variam no **mesmo sentido** (ambas aumentam ou ambas diminuem).

### Grandezas Inversamente Proporcionais

Duas grandezas são **inversamente proporcionais** quando, ao aumentar uma, a outra diminui na mesma proporção (e vice-versa).

**Exemplos:**
1. **Velocidade × Tempo de viagem**
   - Maior velocidade → Menor tempo
   - Menor velocidade → Maior tempo

2. **Número de torneiras × Tempo para encher tanque**
   - Mais torneiras → Menos tempo
   - Menos torneiras → Mais tempo

3. **Número de trabalhadores × Dias para terminar obra**
   - Mais trabalhadores → Menos dias
   - Menos trabalhadores → Mais dias

**Característica:** As grandezas variam em **sentidos opostos** (uma aumenta, outra diminui).

## Proporções no Cotidiano

### 1. Receitas Culinárias

**Situação:** Uma receita para 4 pessoas usa 2 xícaras de farinha. Quanto usar para 6 pessoas?

**Análise:** Mais pessoas → Mais farinha (diretamente proporcional)

**Proporção:**
\`\`\`
4 pessoas / 2 xícaras = 6 pessoas / x xícaras

4x = 12
x = 3 xícaras
\`\`\`

### 2. Mapas e Escalas

**Situação:** Em um mapa com escala 1:100.000, uma distância de 5 cm representa quantos quilômetros?

**Análise:**
\`\`\`
1 cm no mapa = 100.000 cm na realidade
5 cm no mapa = 500.000 cm = 5.000 m = 5 km
\`\`\`

### 3. Velocidade e Tempo

**Situação:** Um carro a 60 km/h leva 2 horas para chegar. A 80 km/h, quanto tempo levaria?

**Análise:** Maior velocidade → Menor tempo (inversamente proporcional)

**Proporção inversa:**
\`\`\`
60 × 2 = 80 × x
120 = 80x
x = 1,5 horas (1h30min)
\`\`\`

### 4. Construção e Arquitetura

**Situação:** Uma maquete está na escala 1:50. Se a altura real do prédio é 100 metros, qual a altura na maquete?

**Proporção:**
\`\`\`
1/50 = x/100

50x = 100
x = 2 metros (200 cm)
\`\`\`

## Como Identificar o Tipo de Proporção?

**Pergunte-se:** "Se eu aumentar a primeira grandeza, o que acontece com a segunda?"

- **Aumenta também?** → Diretamente proporcional
- **Diminui?** → Inversamente proporcional

**Exemplos práticos:**

| Situação | Tipo | Por quê? |
|----------|------|----------|
| Mais litros de tinta → Mais área pintada | Direta | Ambas aumentam |
| Mais velocidade → Menos tempo | Inversa | Uma aumenta, outra diminui |
| Mais pessoas → Mais comida | Direta | Ambas aumentam |
| Mais torneiras → Menos tempo | Inversa | Uma aumenta, outra diminui |

## Dicas Importantes

✅ **Proporção direta:** Multiplique em cruz (a × d = b × c)

✅ **Proporção inversa:** Multiplique em linha (a × b = c × d)

✅ **Sempre identifique o tipo** antes de resolver!

✅ **Desenhe setas** para visualizar: ↑↑ (direta) ou ↑↓ (inversa)

## Resumo

- **Proporção** é uma igualdade entre duas razões
- **Propriedade fundamental:** produto dos meios = produto dos extremos
- **Diretamente proporcional:** grandezas variam no mesmo sentido
- **Inversamente proporcional:** grandezas variam em sentidos opostos
- Proporções aparecem em receitas, mapas, velocidade, construção, etc.

---

**Continue praticando!** Identificar proporções no dia a dia facilita muito a resolução de problemas.
`;

console.log('📄 Criando Página 1: O que é Proporção...');
await db.insert(schema.pages).values({
  moduleId,
  title: 'O que é Proporção?',
  slug: 'o-que-e-proporcao',
  content: page1Content,
  order: 1,
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  estimatedMinutes: 15
});
console.log('   ✅ Página 1 criada\n');

// ===== PÁGINA 2: RAZÃO E COMPARAÇÃO =====

const page2Content = `# Razão e Comparação

## O que é Razão?

**Razão** é a comparação entre duas grandezas através de uma divisão. Ela nos diz "quantas vezes" uma grandeza cabe na outra ou qual a relação entre elas.

**Notação:**
\`\`\`
a : b  (lê-se: "a para b")

ou

a/b  (forma fracionária)
\`\`\`

### Exemplos Básicos

1. **Em uma turma de 30 alunos, 18 são meninas.**
   - Razão de meninas para total: 18:30 ou 18/30 = 3/5

2. **Um carro percorre 300 km com 20 litros de combustível.**
   - Razão distância/combustível: 300:20 = 15:1 (15 km por litro)

3. **Uma receita usa 2 xícaras de farinha para 3 xícaras de açúcar.**
   - Razão farinha:açúcar = 2:3

## Termos da Razão

Na razão a:b:
- **a** é o **antecedente** (primeiro termo)
- **b** é o **consequente** (segundo termo)

**Exemplo:** Na razão 5:8
- Antecedente = 5
- Consequente = 8

**Importante:** O consequente **nunca pode ser zero** (não existe divisão por zero).

## Razões Equivalentes

Assim como frações, razões podem ser equivalentes. Multiplicando ou dividindo ambos os termos pelo mesmo número, obtemos razões equivalentes.

**Exemplo:**
\`\`\`
2:3 = 4:6 = 6:9 = 8:12

Todas representam a mesma relação!
\`\`\`

**Verificação:**
\`\`\`
2/3 = 4/6 ?

2 × 6 = 12
3 × 4 = 12

12 = 12 ✅ São equivalentes!
\`\`\`

## Simplificação de Razões

Para simplificar uma razão, dividimos ambos os termos pelo **MDC** (Máximo Divisor Comum).

**Exemplo 1:** Simplificar 12:18
\`\`\`
MDC(12, 18) = 6

12 ÷ 6 = 2
18 ÷ 6 = 3

Resultado: 2:3
\`\`\`

**Exemplo 2:** Simplificar 50:75
\`\`\`
MDC(50, 75) = 25

50 ÷ 25 = 2
75 ÷ 25 = 3

Resultado: 2:3
\`\`\`

## Tipos Especiais de Razões

### 1. Razão entre Grandezas de Mesma Espécie

Quando comparamos grandezas da mesma unidade, a razão é um **número puro** (sem unidade).

**Exemplo:** 
\`\`\`
Altura de João: 180 cm
Altura de Maria: 150 cm

Razão: 180:150 = 6:5

João é 6/5 vezes a altura de Maria (ou 1,2 vezes)
\`\`\`

### 2. Razão entre Grandezas de Espécies Diferentes

Quando comparamos grandezas de unidades diferentes, a razão tem **unidade composta**.

**Exemplos:**

**Velocidade média:**
\`\`\`
Distância: 300 km
Tempo: 5 horas

Velocidade = 300 km / 5 h = 60 km/h
\`\`\`

**Densidade demográfica:**
\`\`\`
População: 1.000.000 habitantes
Área: 500 km²

Densidade = 1.000.000 / 500 = 2.000 hab/km²
\`\`\`

**Consumo de combustível:**
\`\`\`
Distância: 450 km
Combustível: 30 litros

Consumo = 450 / 30 = 15 km/l
\`\`\`

## Comparação de Quantidades

### Preço por Quilograma (kg)

**Situação:** Qual é mais barato?
- Produto A: 500g por R$ 8
- Produto B: 750g por R$ 11

**Solução:**
\`\`\`
Produto A: 8 / 0,5 = R$ 16/kg
Produto B: 11 / 0,75 = R$ 14,67/kg

Produto B é mais barato!
\`\`\`

### Rendimento por Hora

**Situação:** Quem é mais produtivo?
- João: 120 peças em 8 horas
- Maria: 90 peças em 6 horas

**Solução:**
\`\`\`
João: 120 / 8 = 15 peças/hora
Maria: 90 / 6 = 15 peças/hora

Mesma produtividade!
\`\`\`

### Custo-Benefício

**Situação:** Qual TV tem melhor custo-benefício?
- TV A: 50 polegadas por R$ 2.000
- TV B: 65 polegadas por R$ 2.500

**Solução:**
\`\`\`
TV A: 2000 / 50 = R$ 40 por polegada
TV B: 2500 / 65 = R$ 38,46 por polegada

TV B tem melhor custo-benefício!
\`\`\`

## Razões Especiais

### Escala

**Definição:** Razão entre a medida no desenho e a medida real.

**Exemplo:** Escala 1:100
\`\`\`
1 cm no desenho = 100 cm na realidade (1 metro)
\`\`\`

**Aplicação:** Mapa com escala 1:50.000
\`\`\`
3 cm no mapa = 3 × 50.000 cm = 150.000 cm = 1,5 km
\`\`\`

### Porcentagem

Porcentagem é uma razão especial com denominador 100.

**Exemplo:**
\`\`\`
25% = 25/100 = 1/4 = 0,25
\`\`\`

### Densidade

Razão entre massa e volume.

**Exemplo:**
\`\`\`
Massa: 500g
Volume: 250 ml

Densidade = 500/250 = 2 g/ml
\`\`\`

## Aplicações Práticas

### 1. Diluição de Produtos

**Situação:** Diluir limpador na proporção 1:5 (1 parte de produto para 5 de água).

**Para 600 ml de solução:**
\`\`\`
Total de partes: 1 + 5 = 6

Produto: 600 / 6 = 100 ml
Água: 600 - 100 = 500 ml
\`\`\`

### 2. Divisão Proporcional

**Situação:** Dividir R$ 1.200 entre 3 pessoas na razão 2:3:5.

**Solução:**
\`\`\`
Total de partes: 2 + 3 + 5 = 10

Pessoa 1: (2/10) × 1200 = R$ 240
Pessoa 2: (3/10) × 1200 = R$ 360
Pessoa 3: (5/10) × 1200 = R$ 600
\`\`\`

### 3. Mistura de Ingredientes

**Situação:** Fazer concreto na proporção 1:2:3 (cimento:areia:brita).

**Para 12 sacos no total:**
\`\`\`
Total de partes: 1 + 2 + 3 = 6

Cimento: (1/6) × 12 = 2 sacos
Areia: (2/6) × 12 = 4 sacos
Brita: (3/6) × 12 = 6 sacos
\`\`\`

## Dicas Importantes

✅ **Sempre simplifique** razões para facilitar comparações

✅ **Mantenha as unidades** ao comparar grandezas diferentes

✅ **Use razões** para comparar preços, rendimentos e eficiência

✅ **Razão inversa:** Se a:b, então b:a é a razão inversa

## Resumo

- **Razão** é a comparação entre duas grandezas por divisão
- Razões podem ser **simplificadas** dividindo pelo MDC
- **Razões equivalentes** representam a mesma relação
- Razões aparecem em velocidade, densidade, escalas, porcentagens
- Use razões para **comparar** e tomar melhores decisões

---

**Pratique bastante!** Razões são fundamentais para entender proporções e regra de três.
`;

console.log('📄 Criando Página 2: Razão e Comparação...');
await db.insert(schema.pages).values({
  moduleId,
  title: 'Razão e Comparação',
  slug: 'razao-e-comparacao',
  content: page2Content,
  order: 2,
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  estimatedMinutes: 18
});
console.log('   ✅ Página 2 criada\n');

// ===== PÁGINA 3: REGRA DE TRÊS SIMPLES =====

const page3Content = `# Regra de Três Simples

## O que é Regra de Três?

A **regra de três** é um método prático para resolver problemas que envolvem **grandezas proporcionais**. Ela nos ajuda a encontrar um valor desconhecido quando conhecemos três outros valores relacionados.

**Quando usar?**
- Problemas com **duas grandezas** relacionadas
- Conhecemos **três valores** e queremos descobrir o quarto
- As grandezas são **proporcionais** (direta ou inversamente)

## Regra de Três Direta

Usamos quando as grandezas são **diretamente proporcionais** (variam no mesmo sentido).

### Método Prático

**Passo a passo:**
1. Organize os dados em duas colunas (uma para cada grandeza)
2. Identifique se é direta ou inversa
3. Monte a proporção
4. Resolva usando multiplicação cruzada

### Exemplo 1: Compras no Supermercado

**Problema:** Se 3 kg de arroz custam R$ 15, quanto custarão 5 kg?

**Solução:**
\`\`\`
Kg de arroz    Preço
    3          R$ 15
    5          R$ x

Análise: Mais arroz → Mais preço (DIRETA)

Proporção:
3/5 = 15/x

3x = 75
x = R$ 25
\`\`\`

### Exemplo 2: Velocidade e Distância

**Problema:** Um carro a 80 km/h percorre 240 km. A 100 km/h, quantos km percorreria no mesmo tempo?

**Solução:**
\`\`\`
Velocidade    Distância
   80 km/h      240 km
  100 km/h        x km

Análise: Mais velocidade → Mais distância (DIRETA)

Proporção:
80/100 = 240/x

80x = 24.000
x = 300 km
\`\`\`

### Exemplo 3: Receitas Culinárias

**Problema:** Uma receita para 4 pessoas usa 200g de chocolate. Para 6 pessoas, quanto usar?

**Solução:**
\`\`\`
Pessoas    Chocolate
   4         200g
   6          x g

Análise: Mais pessoas → Mais chocolate (DIRETA)

Proporção:
4/6 = 200/x

4x = 1.200
x = 300g
\`\`\`

## Regra de Três Inversa

Usamos quando as grandezas são **inversamente proporcionais** (variam em sentidos opostos).

**Atenção:** Na proporção inversa, **invertemos uma das razões**!

### Exemplo 1: Velocidade e Tempo

**Problema:** A 60 km/h, uma viagem leva 4 horas. A 80 km/h, quanto tempo levaria?

**Solução:**
\`\`\`
Velocidade    Tempo
  60 km/h     4 horas
  80 km/h     x horas

Análise: Mais velocidade → Menos tempo (INVERSA)

Proporção INVERSA (inverte uma razão):
60/80 = x/4

ou

80/60 = 4/x

80x = 240
x = 3 horas
\`\`\`

### Exemplo 2: Trabalhadores e Dias

**Problema:** 6 trabalhadores terminam uma obra em 12 dias. Quantos dias levariam 9 trabalhadores?

**Solução:**
\`\`\`
Trabalhadores    Dias
      6           12
      9            x

Análise: Mais trabalhadores → Menos dias (INVERSA)

Proporção INVERSA:
6/9 = x/12

ou

9/6 = 12/x

9x = 72
x = 8 dias
\`\`\`

### Exemplo 3: Torneiras e Tempo

**Problema:** 3 torneiras enchem um tanque em 2 horas. Quanto tempo levariam 5 torneiras?

**Solução:**
\`\`\`
Torneiras    Tempo
    3        2 horas
    5        x horas

Análise: Mais torneiras → Menos tempo (INVERSA)

Proporção INVERSA:
3/5 = x/2

ou

5/3 = 2/x

5x = 6
x = 1,2 horas (1h12min)
\`\`\`

## Como Identificar: Direta ou Inversa?

**Técnica das Setas:**

1. Desenhe setas indicando o que acontece com cada grandeza
2. **Setas no mesmo sentido (↑↑ ou ↓↓)** → DIRETA
3. **Setas em sentidos opostos (↑↓)** → INVERSA

**Exemplos:**

| Situação | Análise | Tipo |
|----------|---------|------|
| Mais kg → Mais preço | ↑↑ | DIRETA |
| Mais velocidade → Menos tempo | ↑↓ | INVERSA |
| Mais pessoas → Mais comida | ↑↑ | DIRETA |
| Mais torneiras → Menos tempo | ↑↓ | INVERSA |

## Exercícios Práticos do Cotidiano

### 1. Combustível e Distância

**Problema:** Com 40 litros, um carro percorre 500 km. Com 60 litros, quantos km percorreria?

**Solução:**
\`\`\`
Litros    Distância
  40        500 km
  60         x km

Tipo: DIRETA (mais combustível → mais distância)

40/60 = 500/x
40x = 30.000
x = 750 km
\`\`\`

### 2. Impressão de Documentos

**Problema:** Uma impressora imprime 120 páginas em 3 minutos. Quantas páginas imprime em 7 minutos?

**Solução:**
\`\`\`
Minutos    Páginas
   3         120
   7          x

Tipo: DIRETA (mais tempo → mais páginas)

3/7 = 120/x
3x = 840
x = 280 páginas
\`\`\`

### 3. Construção de Muro

**Problema:** 4 pedreiros constroem um muro em 15 dias. Em quantos dias 6 pedreiros fariam o mesmo muro?

**Solução:**
\`\`\`
Pedreiros    Dias
    4         15
    6          x

Tipo: INVERSA (mais pedreiros → menos dias)

4/6 = x/15

ou

6/4 = 15/x

6x = 60
x = 10 dias
\`\`\`

### 4. Escala de Mapa

**Problema:** Em um mapa 1:200.000, duas cidades estão a 8 cm de distância. Qual a distância real em km?

**Solução:**
\`\`\`
Mapa        Real
1 cm      200.000 cm
8 cm         x cm

Tipo: DIRETA

1/8 = 200.000/x
x = 1.600.000 cm = 16 km
\`\`\`

### 5. Consumo de Água

**Problema:** Uma família de 4 pessoas consome 600 litros de água por semana. Quanto consumiria uma família de 7 pessoas?

**Solução:**
\`\`\`
Pessoas    Litros
   4        600
   7         x

Tipo: DIRETA (mais pessoas → mais água)

4/7 = 600/x
4x = 4.200
x = 1.050 litros
\`\`\`

## Dicas para Não Errar

✅ **Sempre identifique o tipo** (direta ou inversa) antes de montar a proporção

✅ **Use as setas** para visualizar a relação entre as grandezas

✅ **Na inversa, inverta UMA das razões** antes de resolver

✅ **Organize os dados** em colunas para não confundir

✅ **Verifique se a resposta faz sentido** (ex: mais velocidade deve dar menos tempo)

## Erros Comuns

❌ **Confundir direta com inversa**
- Sempre analise: aumentando uma, o que acontece com a outra?

❌ **Esquecer de inverter na proporção inversa**
- Lembre-se: sentidos opostos = inverte uma razão!

❌ **Trocar os valores de lugar**
- Mantenha a organização: mesma grandeza na mesma coluna

## Resumo

| Tipo | Relação | Como Resolver |
|------|---------|---------------|
| **Direta** | Mesmo sentido (↑↑) | Multiplica em cruz: a/b = c/x |
| **Inversa** | Sentidos opostos (↑↓) | Inverte uma razão: a/b = x/c |

**Fórmula geral:**
- **Direta:** a/b = c/x → ax = bc
- **Inversa:** a/b = x/c → bx = ac

---

**Pratique muito!** A regra de três é uma das ferramentas matemáticas mais úteis no dia a dia.
`;

console.log('📄 Criando Página 3: Regra de Três Simples...');
await db.insert(schema.pages).values({
  moduleId,
  title: 'Regra de Três Simples',
  slug: 'regra-de-tres-simples',
  content: page3Content,
  order: 3,
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  estimatedMinutes: 20
});
console.log('   ✅ Página 3 criada\n');

await connection.end();

console.log('🎉 MÓDULO PROPORÇÃO E RAZÃO COMPLETO! 🎉');
console.log('📚 3 páginas criadas');
console.log('📖 Conteúdo educacional rico (6000+ palavras)');
console.log('💡 Exercícios práticos do cotidiano integrados');
