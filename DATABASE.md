# 🗄️ Documentação do Banco de Dados - Arquimedes

Este documento descreve o schema completo do banco de dados do projeto **Arquimedes**, incluindo todas as tabelas, relacionamentos, índices e decisões de design.

---

## 📊 Visão Geral

O banco de dados do Arquimedes usa **MySQL 8+** ou **TiDB** como sistema de gerenciamento, com **Drizzle ORM** como camada de acesso. O schema é gerenciado via migrations automáticas usando `drizzle-kit`.

### Estatísticas

| Métrica | Valor |
|---------|-------|
| **Total de Tabelas** | 12 |
| **Total de Colunas** | ~120 |
| **Relacionamentos** | 15+ |
| **Índices** | 20+ |
| **Enums** | 5 |

---

## 📋 Tabelas

### 1. `users` - Usuários do Sistema

Tabela central que armazena informações dos usuários autenticados via Manus OAuth.

```typescript
users {
  id: int (PK, auto-increment)
  openId: varchar(64) (unique, not null)
  name: text
  email: varchar(320)
  loginMethod: varchar(64)
  role: enum('user', 'admin') (default: 'user')
  hasCompletedOnboarding: boolean (default: false)
  avatar: text // URL S3
  language: varchar(10) (default: 'pt')
  themeColor: varchar(20) (default: 'blue')
  darkMode: boolean (default: false)
  favoriteAchievements: json // Array de IDs (max 3)
  createdAt: timestamp (default: NOW())
  updatedAt: timestamp (on update: NOW())
  lastSignedIn: timestamp (default: NOW())
}
```

**Campos Importantes**:
- `openId`: Identificador único do Manus OAuth
- `role`: Controle de acesso (user vs admin)
- `hasCompletedOnboarding`: Flag para exibir tour guiado
- `themeColor`: Tema de cores (blue, red, green, purple, orange, pink, teal, indigo)
- `favoriteAchievements`: Badges favoritas exibidas no perfil

**Índices**:
- PRIMARY KEY (`id`)
- UNIQUE (`openId`)
- INDEX (`email`)

---

### 2. `disciplines` - Disciplinas/Áreas de Conhecimento

Grandes áreas de conhecimento (Aritmética, Álgebra, Geometria, Cálculo).

```typescript
disciplines {
  id: int (PK, auto-increment)
  name: varchar(255) (not null)
  slug: varchar(255) (unique, not null)
  description: text
  order: int (default: 0)
  createdAt: timestamp (default: NOW())
}
```

**Exemplo de Dados**:
```sql
INSERT INTO disciplines (name, slug, description, order) VALUES
('Aritmética', 'aritmetica', 'Fundamentos de números e operações básicas', 1),
('Álgebra', 'algebra', 'Equações, funções e polinômios', 2),
('Geometria', 'geometria', 'Formas, medidas e teoremas', 3),
('Cálculo', 'calculo', 'Limites, derivadas e integrais', 4);
```

**Índices**:
- PRIMARY KEY (`id`)
- UNIQUE (`slug`)
- INDEX (`order`)

---

### 3. `modules` - Módulos dentro de Disciplinas

Subdivisões de disciplinas (ex: "Adição e Subtração" dentro de Aritmética).

```typescript
modules {
  id: int (PK, auto-increment)
  disciplineId: int (FK → disciplines.id, not null)
  name: varchar(255) (not null)
  slug: varchar(255) (not null)
  description: text
  order: int (default: 0)
  createdAt: timestamp (default: NOW())
}
```

**Relacionamento**:
- `disciplineId` → `disciplines.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`disciplineId`)
- INDEX (`slug`)
- INDEX (`order`)

---

### 4. `pages` - Páginas/Aulas dentro de Módulos

Páginas individuais de conteúdo educacional.

```typescript
pages {
  id: int (PK, auto-increment)
  moduleId: int (FK → modules.id, not null)
  title: varchar(255) (not null)
  slug: varchar(255) (not null)
  order: int (default: 0)
  
  // Conteúdo
  mainText: text // Markdown com LaTeX
  conceptSummary: text // Resumo conceitual
  
  // Recursos visuais
  diagrams: json // Array de { url, caption }
  videoUrl: varchar(500)
  
  // Metadados
  estimatedMinutes: int (default: 30)
  createdAt: timestamp (default: NOW())
  updatedAt: timestamp (on update: NOW())
}
```

**Campos Importantes**:
- `mainText`: Conteúdo principal em Markdown com suporte a LaTeX (KaTeX)
- `diagrams`: Array JSON de diagramas com URLs S3
- `estimatedMinutes`: Tempo estimado de leitura

**Relacionamento**:
- `moduleId` → `modules.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`moduleId`)
- INDEX (`slug`)
- INDEX (`order`)

---

### 5. `exercises` - Exercícios Tradicionais

Exercícios de múltipla escolha, input simples e problemas práticos.

```typescript
exercises {
  id: int (PK, auto-increment)
  pageId: int (FK → pages.id, not null)
  order: int (default: 0)
  
  // Conteúdo
  type: enum('simple_input', 'practical_problem', 'multiple_choice')
  question: text (not null)
  description: text
  
  // Validação
  expectedAnswer: text (not null)
  alternativeAnswers: json // Array de strings
  choices: json // Para multiple_choice
  
  // Feedback
  correctFeedback: text
  incorrectFeedback: text
  hint: text
  
  // Metadados
  difficulty: enum('easy', 'medium', 'hard') (default: 'easy')
  points: int (default: 5)
  createdAt: timestamp (default: NOW())
}
```

**Tipos de Exercício**:
- `simple_input`: Resposta curta (número ou texto)
- `practical_problem`: Problema contextualizado
- `multiple_choice`: Múltipla escolha

**Pontos por Dificuldade**:
- Easy: 5 pontos
- Medium: 10 pontos
- Hard: 15 pontos

**Relacionamento**:
- `pageId` → `pages.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`pageId`)
- INDEX (`difficulty`)

---

### 6. `achievements` - Conquistas/Badges

Conquistas desbloqueáveis por marcos alcançados.

```typescript
achievements {
  id: int (PK, auto-increment)
  name: varchar(255) (not null)
  description: text (not null)
  icon: varchar(100) // Emoji ou nome de ícone
  type: enum('lesson', 'exercise', 'streak', 'special')
  requirement: int // Valor necessário (ex: 7 para streak_7)
  createdAt: timestamp (default: NOW())
}
```

**Tipos de Conquista**:
- `lesson`: Baseada em aulas completadas
- `exercise`: Baseada em exercícios completados
- `streak`: Baseada em dias consecutivos
- `special`: Conquistas especiais (ex: "Primeira Aula")

**Exemplos**:
```sql
INSERT INTO achievements (name, description, icon, type, requirement) VALUES
('Primeira Aula', 'Completou sua primeira aula', '🎓', 'lesson', 1),
('Sequência de 7 Dias', 'Estudou por 7 dias consecutivos', '🔥', 'streak', 7),
('Mestre da Adição', 'Completou 100% do módulo de Adição', '➕', 'lesson', 100);
```

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`type`)

---

### 7. `userProgress` - Progresso de Aulas

Rastreamento de aulas completadas por usuário.

```typescript
userProgress {
  id: int (PK, auto-increment)
  userId: int (FK → users.id, not null)
  pageId: int (FK → pages.id, not null)
  completed: boolean (default: false)
  completedAt: timestamp
  xpEarned: int (default: 10)
  createdAt: timestamp (default: NOW())
}
```

**Lógica de XP**:
- Cada aula completada ganha **10 XP**
- XP é registrado no momento da conclusão

**Relacionamentos**:
- `userId` → `users.id` (N:1)
- `pageId` → `pages.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`userId`)
- INDEX (`pageId`)
- UNIQUE (`userId`, `pageId`) // Evita duplicatas

---

### 8. `userExercises` - Histórico de Exercícios

Rastreamento de exercícios completados e tentativas.

```typescript
userExercises {
  id: int (PK, auto-increment)
  userId: int (FK → users.id, not null)
  exerciseId: int (FK → exercises.id, not null)
  userAnswer: text
  isCorrect: boolean (not null)
  attempts: int (default: 1)
  pointsEarned: int (default: 0)
  completedAt: timestamp (default: NOW())
}
```

**Lógica de Pontos**:
- Primeira tentativa correta: pontos completos (5/10/15)
- Tentativas subsequentes: pontos reduzidos

**Relacionamentos**:
- `userId` → `users.id` (N:1)
- `exerciseId` → `exercises.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`userId`)
- INDEX (`exerciseId`)
- INDEX (`completedAt`)

---

### 9. `userAchievements` - Conquistas Desbloqueadas

Rastreamento de conquistas desbloqueadas por usuário.

```typescript
userAchievements {
  id: int (PK, auto-increment)
  userId: int (FK → users.id, not null)
  achievementId: int (FK → achievements.id, not null)
  unlockedAt: timestamp (default: NOW())
}
```

**Relacionamentos**:
- `userId` → `users.id` (N:1)
- `achievementId` → `achievements.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`userId`)
- INDEX (`achievementId`)
- UNIQUE (`userId`, `achievementId`) // Evita duplicatas

---

### 10. `userEnrollments` - Matrículas em Disciplinas

Rastreamento de disciplinas em que o usuário está matriculado.

```typescript
userEnrollments {
  id: int (PK, auto-increment)
  userId: int (FK → users.id, not null)
  disciplineId: int (FK → disciplines.id, not null)
  enrolledAt: timestamp (default: NOW())
}
```

**Lógica de Matrícula**:
- Novos usuários são automaticamente matriculados em "Aritmética"
- Usuários podem se matricular em múltiplas disciplinas

**Relacionamentos**:
- `userId` → `users.id` (N:1)
- `disciplineId` → `disciplines.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`userId`)
- INDEX (`disciplineId`)
- UNIQUE (`userId`, `disciplineId`) // Evita duplicatas

---

### 11. `gamification` - Métricas de Gamificação

Métricas agregadas de gamificação por usuário.

```typescript
gamification {
  id: int (PK, auto-increment)
  userId: int (FK → users.id, unique, not null)
  totalXP: int (default: 0)
  currentLevel: int (default: 1)
  totalPoints: int (default: 0)
  currentStreak: int (default: 0)
  longestStreak: int (default: 0)
  lastActivityDate: date
  createdAt: timestamp (default: NOW())
  updatedAt: timestamp (on update: NOW())
}
```

**Cálculo de Nível**:
```typescript
// Nível baseado em XP total
// Nível 1: 0-99 XP
// Nível 2: 100-299 XP
// Nível 3: 300-599 XP
// Nível N: (N-1)^2 * 100 XP
```

**Cálculo de Streak**:
- Incrementa se `lastActivityDate` foi ontem
- Reseta se `lastActivityDate` foi há 2+ dias
- Mantém se `lastActivityDate` é hoje

**Relacionamento**:
- `userId` → `users.id` (1:1)

**Índices**:
- PRIMARY KEY (`id`)
- UNIQUE (`userId`)
- INDEX (`totalXP`)
- INDEX (`currentStreak`)

---

### 12. `dailyChallenges` - Desafios Diários

Rastreamento de desafios cronometrados completados.

```typescript
dailyChallenges {
  id: int (PK, auto-increment)
  userId: int (FK → users.id, not null)
  exerciseIds: json // Array de IDs de exercícios
  score: int (default: 0) // Baseado em acertos
  timeSeconds: int // Tempo total em segundos
  completedAt: timestamp (default: NOW())
}
```

**Lógica de Desafio**:
- 5 exercícios aleatórios
- 3 minutos (180 segundos) de limite
- Score: (acertos / 5) * 100

**Relacionamento**:
- `userId` → `users.id` (N:1)

**Índices**:
- PRIMARY KEY (`id`)
- INDEX (`userId`)
- INDEX (`score`)
- INDEX (`completedAt`)

---

## 🔗 Diagrama de Relacionamentos

```
users (1) ──────── (N) userProgress
  │                      │
  │                      └─ (N) pages
  │
  ├─────── (N) userExercises
  │                │
  │                └─ (N) exercises
  │
  ├─────── (N) userAchievements
  │                │
  │                └─ (N) achievements
  │
  ├─────── (N) userEnrollments
  │                │
  │                └─ (N) disciplines
  │
  ├─────── (1) gamification
  │
  └─────── (N) dailyChallenges

disciplines (1) ──── (N) modules
                          │
                          └─ (N) pages
                                  │
                                  └─ (N) exercises
```

---

## 📈 Queries Comuns

### 1. Buscar Progresso do Usuário em um Módulo

```sql
SELECT 
  m.name AS module_name,
  COUNT(DISTINCT p.id) AS total_pages,
  COUNT(DISTINCT up.pageId) AS completed_pages,
  ROUND(COUNT(DISTINCT up.pageId) * 100.0 / COUNT(DISTINCT p.id), 2) AS progress_percentage
FROM modules m
LEFT JOIN pages p ON p.moduleId = m.id
LEFT JOIN userProgress up ON up.pageId = p.id AND up.userId = ?
WHERE m.id = ?
GROUP BY m.id;
```

### 2. Buscar Conquistas Desbloqueadas do Usuário

```sql
SELECT 
  a.name,
  a.description,
  a.icon,
  ua.unlockedAt
FROM userAchievements ua
JOIN achievements a ON a.id = ua.achievementId
WHERE ua.userId = ?
ORDER BY ua.unlockedAt DESC;
```

### 3. Buscar Ranking de Pontos

```sql
SELECT 
  u.name,
  g.totalPoints,
  g.currentLevel,
  g.currentStreak
FROM users u
JOIN gamification g ON g.userId = u.id
ORDER BY g.totalPoints DESC
LIMIT 10;
```

### 4. Buscar Exercícios Não Completados de um Módulo

```sql
SELECT 
  e.id,
  e.question,
  e.difficulty,
  e.points
FROM exercises e
JOIN pages p ON p.id = e.pageId
JOIN modules m ON m.id = p.moduleId
LEFT JOIN userExercises ue ON ue.exerciseId = e.id AND ue.userId = ? AND ue.isCorrect = true
WHERE m.id = ? AND ue.id IS NULL
ORDER BY e.order;
```

---

## 🔧 Migrations

### Gerenciamento de Migrations

O projeto usa **Drizzle Kit** para gerenciar migrations automaticamente.

**Comandos**:
```bash
# Gerar migration baseada em mudanças no schema
pnpm drizzle-kit generate:mysql

# Aplicar migrations (development)
pnpm db:push

# Aplicar migrations (production)
pnpm db:migrate
```

### Histórico de Migrations

| Versão | Data | Descrição |
|--------|------|-----------|
| 0001 | 2024-12-05 | Schema inicial (users, disciplines, modules, pages) |
| 0002 | 2024-12-10 | Adicionadas tabelas de exercícios |
| 0003 | 2024-12-15 | Adicionadas tabelas de gamificação |
| 0004 | 2024-12-18 | Adicionada tabela de conquistas |
| 0005 | 2024-12-20 | Adicionada tabela de desafios diários |
| 0006 | 2024-12-23 | Adicionados campos de onboarding e temas |

---

## 🔒 Segurança e Performance

### Índices Otimizados

Todos os campos frequentemente consultados têm índices:
- Foreign keys (`userId`, `pageId`, `exerciseId`, etc.)
- Campos de busca (`slug`, `email`)
- Campos de ordenação (`order`, `completedAt`)

### Prevenção de SQL Injection

Drizzle ORM usa **prepared statements** automaticamente, prevenindo SQL injection.

### Transações ACID

Operações críticas (ex: completar aula + ganhar XP + desbloquear conquista) são executadas em transações:

```typescript
await db.transaction(async (tx) => {
  // 1. Registrar conclusão de aula
  await tx.insert(userProgress).values({ userId, pageId, completed: true });
  
  // 2. Adicionar XP
  await tx.update(gamification)
    .set({ totalXP: sql`totalXP + 10` })
    .where(eq(gamification.userId, userId));
  
  // 3. Verificar e desbloquear conquistas
  // ...
});
```

---

## 📊 Estatísticas de Uso

### Tamanho Estimado do Banco

| Tabela | Linhas Estimadas | Tamanho Estimado |
|--------|------------------|------------------|
| users | 10.000 | ~5 MB |
| disciplines | 4 | < 1 KB |
| modules | 50 | ~50 KB |
| pages | 200 | ~20 MB (conteúdo Markdown) |
| exercises | 500 | ~5 MB |
| achievements | 50 | ~50 KB |
| userProgress | 500.000 | ~50 MB |
| userExercises | 2.000.000 | ~200 MB |
| userAchievements | 100.000 | ~10 MB |
| userEnrollments | 20.000 | ~2 MB |
| gamification | 10.000 | ~1 MB |
| dailyChallenges | 50.000 | ~5 MB |
| **Total** | **~2.7M linhas** | **~300 MB** |

---

## 🔮 Evolução Futura

### Melhorias Planejadas

**Particionamento de Tabelas**
- Particionar `userExercises` por data (mensal)
- Particionar `dailyChallenges` por data (mensal)

**Caching**
- Redis para cache de queries frequentes (disciplinas, módulos)
- Cache de progresso do usuário (invalidar ao completar aula)

**Replicação**
- Read replicas para queries de leitura
- Master-slave replication para alta disponibilidade

**Arquivamento**
- Arquivar `userExercises` antigos (> 1 ano) para cold storage

---

## 📚 Referências

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [MySQL 8 Reference Manual](https://dev.mysql.com/doc/refman/8.0/en/)
- [TiDB Documentation](https://docs.pingcap.com/tidb/stable)

---

**Última Atualização**: 24 de Dezembro de 2024

**Autor**: MSC Consultorias + Manus AI

**Versão do Documento**: 1.0.0
