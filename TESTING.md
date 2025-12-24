# 🧪 Sistema de Testes Automatizados - Arquimedes

**Versão:** 1.0.0  
**Data:** 23 de dezembro de 2025  
**Objetivo:** Garantir qualidade de código, detectar regressões e identificar oportunidades de simplificação sem perda de performance

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Comandos Disponíveis](#comandos-disponíveis)
3. [Estrutura de Testes](#estrutura-de-testes)
4. [Cobertura de Código](#cobertura-de-código)
5. [Monitoramento Contínuo](#monitoramento-contínuo)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Métricas de Qualidade](#métricas-de-qualidade)
8. [Boas Práticas](#boas-práticas)

---

## 🎯 Visão Geral

O sistema de testes automatizados do Arquimedes monitora continuamente a qualidade do código através de:

- ✅ **Testes Unitários** (Vitest) - 66 testes, 89.4% passando
- ✅ **Cobertura de Código** (v8) - Mínimo 70% de cobertura
- ✅ **Análise Estática** (ESLint + TypeScript strict)
- ✅ **Monitoramento de Complexidade** - Detecta arquivos >500 linhas
- ✅ **Benchmarks de Performance** - Tempo de resposta de endpoints
- ✅ **CI/CD Automatizado** (GitHub Actions)

---

## 🚀 Comandos Disponíveis

### Testes Básicos

```bash
# Executar todos os testes uma vez
pnpm test

# Executar testes em modo watch (desenvolvimento)
pnpm test:watch

# Executar testes com interface visual
pnpm test:ui

# Executar testes com cobertura
pnpm test:coverage
```

### Monitoramento de Qualidade

```bash
# Executar análise completa de qualidade
pnpm quality

# Monitorar qualidade em tempo real (watch mode)
pnpm quality:watch

# Verificar erros TypeScript
pnpm check

# Análise de linting
pnpm lint

# Corrigir problemas de linting automaticamente
pnpm lint:fix
```

### Formatação

```bash
# Formatar código com Prettier
pnpm format
```

---

## 📁 Estrutura de Testes

```
server/
├── auth.logout.test.ts          # Testes de autenticação
├── gamification.test.ts         # Testes de gamificação (XP, níveis)
├── routers.test.ts              # Testes de endpoints tRPC
├── points.test.ts               # Testes de sistema de pontos
├── standalone.test.ts           # Testes de exercícios standalone
├── dailyChallenge.test.ts       # Testes de desafio diário
├── moduleVideos.test.ts         # Testes de vídeos
├── enrollment.test.ts           # Testes de matrículas
├── progress.test.ts             # Testes de progresso
├── achievements.test.ts         # Testes de conquistas
└── test-setup.ts                # Configuração global de testes
```

### Anatomia de um Teste

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import * as db from './db';

describe('Feature Name', () => {
  beforeEach(async () => {
    // Setup: criar dados de teste
    await db.createTestUser({ name: 'Test User' });
  });

  it('should do something specific', async () => {
    // Arrange: preparar dados
    const input = { userId: 1, action: 'test' };
    
    // Act: executar ação
    const result = await db.performAction(input);
    
    // Assert: verificar resultado
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  });
});
```

---

## 📊 Cobertura de Código

### Configuração (vitest.config.ts)

```typescript
coverage: {
  provider: 'v8',
  reporter: ['text', 'json', 'html', 'lcov'],
  thresholds: {
    lines: 70,        // Mínimo 70% de linhas cobertas
    functions: 70,    // Mínimo 70% de funções cobertas
    branches: 60,     // Mínimo 60% de branches cobertas
    statements: 70,   // Mínimo 70% de statements cobertos
  },
}
```

### Visualizar Relatório de Cobertura

```bash
# Gerar relatório HTML
pnpm test:coverage

# Abrir relatório no navegador
open coverage/index.html
```

### Arquivos Excluídos da Cobertura

- `node_modules/`
- `dist/`
- `**/*.test.ts` (arquivos de teste)
- `client/**` (frontend não testado pelo Vitest)
- `drizzle/**` (schemas de banco)
- `scripts/**` (scripts utilitários)
- `content/**` (conteúdo educacional)
- `curriculum/**` (planejamento curricular)

---

## 🔍 Monitoramento Contínuo

### Script de Qualidade (scripts/quality-monitor.mjs)

O script `quality-monitor.mjs` executa automaticamente:

1. **Testes Unitários** - Verifica se todos os testes passam
2. **Cobertura de Código** - Calcula % de cobertura
3. **Erros TypeScript** - Detecta problemas de tipagem
4. **Análise de Complexidade** - Identifica arquivos grandes
5. **Bundle Size** - Monitora tamanho do build

### Score de Qualidade (0-100)

| Métrica | Peso | Critério |
|---------|------|----------|
| Testes passando | 30 pontos | 100% = 30, proporcional |
| Cobertura de código | 25 pontos | 100% = 25, proporcional |
| Erros TypeScript | 25 pontos | 0 erros = 25, -1 por erro |
| Complexidade | 10 pontos | 0 arquivos grandes = 10 |
| Bundle size | 10 pontos | <5MB = 10, <10MB = 5 |

### Interpretação do Score

- **90-100:** ✅ EXCELENTE - Código de alta qualidade
- **75-89:** 🟢 BOM - Qualidade aceitável, pequenas melhorias
- **60-74:** 🟡 REGULAR - Precisa de atenção
- **0-59:** 🔴 PRECISA MELHORAR - Problemas críticos

### Executar Monitoramento

```bash
# Executar uma vez
pnpm quality

# Monitorar continuamente (re-executa ao salvar arquivos)
pnpm quality:watch
```

### Exemplo de Saída

```
🚀 Iniciando monitoramento de qualidade...

📊 Executando testes unitários...
✅ Todos os 66 testes passaram!

📈 Analisando cobertura de código...
✅ Cobertura média: 75.3%

🔍 Verificando erros TypeScript...
⚠️  12 erros TypeScript encontrados

📏 Analisando complexidade de código...
⚠️  4 arquivos com mais de 500 linhas

📦 Analisando tamanho do bundle...
✅ Bundle size: 2.3MB

============================================================
📊 RELATÓRIO DE QUALIDADE DE CÓDIGO
============================================================

🎯 SCORE DE QUALIDADE
   78/100
   Status: 🟢 BOM

📄 Relatório salvo em: quality-report.json
```

---

## 🤖 CI/CD Pipeline

### GitHub Actions (.github/workflows/quality-check.yml)

O pipeline automatizado executa em:
- ✅ Push para `main` ou `develop`
- ✅ Pull Requests para `main` ou `develop`

### Etapas do Pipeline

1. **Checkout** - Baixa código do repositório
2. **Setup Node.js** - Instala Node.js 22
3. **Install pnpm** - Instala gerenciador de pacotes
4. **Install dependencies** - Instala dependências do projeto
5. **TypeScript check** - Verifica erros de tipagem
6. **Run tests** - Executa testes unitários
7. **Generate coverage** - Gera relatório de cobertura
8. **Upload coverage** - Envia para Codecov
9. **Run quality monitor** - Executa análise completa
10. **Archive report** - Salva relatório como artifact
11. **Comment PR** - Comenta resultado no Pull Request

### Visualizar Resultados

- **GitHub Actions:** `https://github.com/seu-usuario/arquimedes/actions`
- **Codecov:** `https://codecov.io/gh/seu-usuario/arquimedes`

---

## 📈 Métricas de Qualidade

### Métricas Atuais (23/12/2025)

| Métrica | Valor Atual | Meta | Status |
|---------|-------------|------|--------|
| **Testes Totais** | 66 | 100+ | 🟡 |
| **Taxa de Sucesso** | 89.4% | 100% | 🟡 |
| **Cobertura Média** | ~75% | 80%+ | 🟡 |
| **Erros TypeScript** | 12 | 0 | 🔴 |
| **Arquivos Grandes** | 4 | 0 | 🔴 |
| **Bundle Size** | ~2MB | <5MB | ✅ |

### Metas de Curto Prazo (1 mês)

- ✅ Corrigir 12 erros TypeScript
- ✅ Aumentar cobertura para 80%+
- ✅ Reduzir arquivos grandes de 4 para 0
- ✅ Adicionar 34 novos testes (total 100)
- ✅ Atingir 100% de testes passando

### Metas de Longo Prazo (3 meses)

- ✅ Cobertura de 90%+
- ✅ 200+ testes unitários
- ✅ Testes de integração E2E
- ✅ Testes de performance automatizados
- ✅ Score de qualidade 95+

---

## ✅ Boas Práticas

### 1. Escrever Testes Antes de Código (TDD)

```typescript
// ❌ Ruim: Escrever código sem testes
export async function createUser(data: UserData) {
  // implementação
}

// ✅ Bom: Escrever teste primeiro
describe('createUser', () => {
  it('should create user with valid data', async () => {
    const result = await createUser({ name: 'Test' });
    expect(result).toBeDefined();
  });
});
```

### 2. Testes Isolados e Independentes

```typescript
// ❌ Ruim: Testes dependentes
it('should create user', async () => {
  userId = await createUser({ name: 'Test' }); // global state
});

it('should update user', async () => {
  await updateUser(userId, { name: 'Updated' }); // depende do anterior
});

// ✅ Bom: Testes independentes
describe('User operations', () => {
  let testUserId: number;
  
  beforeEach(async () => {
    testUserId = await createUser({ name: 'Test' });
  });
  
  it('should update user', async () => {
    await updateUser(testUserId, { name: 'Updated' });
    // verificações
  });
});
```

### 3. Nomear Testes Descritivamente

```typescript
// ❌ Ruim: Nome vago
it('works', () => { /* ... */ });

// ✅ Bom: Nome descritivo
it('should return 404 when user does not exist', () => { /* ... */ });
```

### 4. Testar Casos de Erro

```typescript
// ❌ Ruim: Apenas happy path
it('should create user', async () => {
  const result = await createUser({ name: 'Test' });
  expect(result).toBeDefined();
});

// ✅ Bom: Testar erros também
it('should throw error when name is empty', async () => {
  await expect(createUser({ name: '' }))
    .rejects
    .toThrow('Name is required');
});
```

### 5. Manter Testes Rápidos

```typescript
// ❌ Ruim: Testes lentos
it('should process data', async () => {
  await sleep(5000); // espera desnecessária
  // ...
});

// ✅ Bom: Testes rápidos
it('should process data', async () => {
  const result = await processData(mockData);
  expect(result).toBeDefined();
});
```

### 6. Usar Mocks Apropriadamente

```typescript
// ❌ Ruim: Testar dependências externas
it('should fetch user from API', async () => {
  const user = await fetch('https://api.example.com/user/1'); // chamada real
  expect(user).toBeDefined();
});

// ✅ Bom: Mockar dependências
it('should fetch user from API', async () => {
  vi.mock('fetch', () => ({
    default: vi.fn(() => Promise.resolve({ id: 1, name: 'Test' }))
  }));
  
  const user = await fetchUser(1);
  expect(user.name).toBe('Test');
});
```

### 7. Limpar Estado Após Testes

```typescript
describe('Database operations', () => {
  afterEach(async () => {
    // Limpar dados de teste
    await db.clearTestData();
  });
  
  it('should create record', async () => {
    await db.create({ name: 'Test' });
    // ...
  });
});
```

---

## 🔧 Troubleshooting

### Testes Falhando

```bash
# Ver detalhes dos erros
pnpm test -- --reporter=verbose

# Executar apenas um arquivo
pnpm test server/auth.logout.test.ts

# Executar apenas um teste específico
pnpm test -- -t "should login user"
```

### Cobertura Baixa

```bash
# Ver quais arquivos têm baixa cobertura
pnpm test:coverage

# Abrir relatório HTML detalhado
open coverage/index.html
```

### Erros TypeScript

```bash
# Ver todos os erros
pnpm check

# Ver erros em arquivo específico
pnpm tsc --noEmit server/routers.ts
```

### Performance Lenta

```bash
# Executar testes em paralelo
pnpm test -- --threads

# Desabilitar cobertura (mais rápido)
pnpm test -- --coverage=false
```

---

## 📚 Recursos Adicionais

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [TypeScript Testing](https://www.typescriptlang.org/docs/handbook/testing.html)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 🤝 Contribuindo

Ao adicionar novas funcionalidades:

1. ✅ Escrever testes primeiro (TDD)
2. ✅ Garantir 80%+ de cobertura
3. ✅ Executar `pnpm quality` antes de commit
4. ✅ Corrigir todos os erros TypeScript
5. ✅ Seguir boas práticas de testes

---

**Mantido por:** Equipe Arquimedes  
**Última atualização:** 23 de dezembro de 2025
