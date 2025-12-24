# 🤝 Guia de Contribuição - Projeto Arquimedes

Obrigado por considerar contribuir com o **Arquimedes**! Este documento fornece diretrizes para contribuir com o projeto de forma eficaz e organizada.

---

## 📋 Índice

1. [Código de Conduta](#código-de-conduta)
2. [Como Posso Contribuir?](#como-posso-contribuir)
3. [Configuração do Ambiente](#configuração-do-ambiente)
4. [Processo de Contribuição](#processo-de-contribuição)
5. [Padrões de Código](#padrões-de-código)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Testes](#testes)
8. [Documentação](#documentação)

---

## 📜 Código de Conduta

Este projeto segue um Código de Conduta para garantir um ambiente acolhedor e respeitoso para todos os contribuidores. Ao participar, você concorda em seguir estas diretrizes:

- **Seja respeitoso:** Trate todos com respeito e consideração
- **Seja colaborativo:** Trabalhe em equipe e ajude outros contribuidores
- **Seja construtivo:** Forneça feedback construtivo e aceite críticas
- **Seja inclusivo:** Valorize perspectivas diversas

---

## 🎯 Como Posso Contribuir?

### 1. 📝 Criação de Conteúdo Educacional
**Ideal para:** Educadores, professores de matemática, pedagogos

- Escrever páginas de aulas em Markdown
- Criar exercícios práticos contextualizados
- Desenvolver exemplos do cotidiano brasileiro
- Revisar conteúdo existente para clareza e precisão

**Habilidades necessárias:**
- Conhecimento de matemática (nível básico a avançado)
- Habilidade de explicar conceitos de forma clara
- Experiência com ensino para adultos (desejável)

### 2. 🎯 Criação de Exercícios
**Ideal para:** Professores, designers instrucionais

- Desenvolver problemas práticos
- Criar exercícios interativos (FillInBlanks, Slider, Matching)
- Escrever dicas estratégicas
- Balancear dificuldade dos exercícios

**Habilidades necessárias:**
- Criatividade para contextualização
- Conhecimento de pedagogia
- Noções de gamificação (desejável)

### 3. 🎨 Design Visual e UX
**Ideal para:** Designers, UX/UI designers

- Melhorar interface e experiência do usuário
- Criar ilustrações e diagramas
- Desenvolver componentes visuais interativos
- Melhorar acessibilidade

**Habilidades necessárias:**
- Design UI/UX
- Figma ou ferramentas similares
- Noções de acessibilidade (WCAG)
- Tailwind CSS (desejável)

### 4. 💻 Desenvolvimento Frontend
**Ideal para:** Desenvolvedores React, frontend engineers

- Implementar novos componentes
- Melhorar performance
- Corrigir bugs
- Adicionar funcionalidades

**Habilidades necessárias:**
- React 19 e TypeScript
- Tailwind CSS 4
- tRPC e React Query
- Git e GitHub

### 5. 🔧 Desenvolvimento Backend
**Ideal para:** Desenvolvedores Node.js, backend engineers

- Implementar novos endpoints tRPC
- Otimizar queries do banco de dados
- Melhorar performance do servidor
- Adicionar integrações

**Habilidades necessárias:**
- Node.js e TypeScript
- tRPC e Express
- Drizzle ORM
- MySQL/TiDB

### 6. 🧪 Testes
**Ideal para:** QA engineers, desenvolvedores

- Escrever testes unitários
- Criar testes E2E
- Testar acessibilidade
- Reportar bugs

**Habilidades necessárias:**
- Vitest (testes unitários)
- Playwright (E2E) (desejável)
- Conhecimento de testing best practices

### 7. 📚 Documentação
**Ideal para:** Technical writers, desenvolvedores

- Melhorar documentação técnica
- Escrever tutoriais
- Criar guias de uso
- Traduzir documentação

**Habilidades necessárias:**
- Escrita técnica clara
- Markdown
- Conhecimento do projeto

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos
- **Node.js** 22+ ([Download](https://nodejs.org/))
- **pnpm** 9+ (`npm install -g pnpm`)
- **Git** ([Download](https://git-scm.com/))
- **MySQL** 8+ ou **TiDB** (para desenvolvimento local)

### Instalação

1. **Fork o repositório**
   ```bash
   # Clique em "Fork" no GitHub
   ```

2. **Clone seu fork**
   ```bash
   git clone https://github.com/SEU-USUARIO/arquimedes0.0.1.git
   cd arquimedes0.0.1
   ```

3. **Adicione o repositório original como upstream**
   ```bash
   git remote add upstream https://github.com/MSC-Consultoria/arquimedes0.0.1.git
   ```

4. **Instale as dependências**
   ```bash
   pnpm install
   ```

5. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Edite .env com suas credenciais
   ```

6. **Execute as migrations do banco**
   ```bash
   pnpm db:push
   ```

7. **Popule o banco com dados de exemplo**
   ```bash
   pnpm seed
   ```

8. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

9. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

---

## 🔄 Processo de Contribuição

### 1. Escolha uma Issue
- Navegue pelas [issues abertas](https://github.com/MSC-Consultoria/arquimedes0.0.1/issues)
- Procure por labels `good first issue` ou `help wanted`
- Comente na issue dizendo que você vai trabalhar nela

### 2. Crie uma Branch
```bash
# Atualize seu fork
git checkout main
git pull upstream main

# Crie uma branch para sua feature/bugfix
git checkout -b feature/nome-da-feature
# ou
git checkout -b bugfix/nome-do-bug
```

### 3. Faça suas Mudanças
- Escreva código limpo e bem documentado
- Siga os [padrões de código](#padrões-de-código)
- Adicione testes quando aplicável
- Atualize a documentação se necessário

### 4. Commit suas Mudanças
```bash
git add .
git commit -m "feat: Adiciona nova funcionalidade X"
```

**Formato de commit messages:**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adicionar ou corrigir testes
- `chore:` Manutenção, dependências, etc

### 5. Push para seu Fork
```bash
git push origin feature/nome-da-feature
```

### 6. Abra um Pull Request
- Vá para o repositório original no GitHub
- Clique em "New Pull Request"
- Selecione sua branch
- Preencha o template de PR
- Aguarde review

### 7. Responda ao Review
- Responda comentários dos reviewers
- Faça ajustes solicitados
- Push das mudanças (o PR será atualizado automaticamente)

### 8. Merge
- Após aprovação, um mantenedor fará o merge
- Sua branch será deletada automaticamente

---

## 📏 Padrões de Código

### TypeScript
- Use TypeScript estrito (`strict: true`)
- Evite `any`, prefira tipos específicos
- Use interfaces para objetos complexos
- Documente funções públicas com JSDoc

```typescript
/**
 * Calcula a área de um retângulo
 * @param width - Largura do retângulo
 * @param height - Altura do retângulo
 * @returns Área do retângulo
 */
function calculateArea(width: number, height: number): number {
  return width * height;
}
```

### React
- Use componentes funcionais com hooks
- Prefira `const` para componentes
- Use TypeScript para props
- Extraia lógica complexa para custom hooks

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant}`}>
      {label}
    </button>
  );
};
```

### Tailwind CSS
- Use classes utilitárias do Tailwind
- Evite CSS customizado quando possível
- Use `@apply` apenas para padrões repetidos
- Siga a ordem: layout → spacing → sizing → typography → visual → misc

```tsx
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  {/* Conteúdo */}
</div>
```

### tRPC
- Organize routers por feature
- Use `publicProcedure` ou `protectedProcedure`
- Valide inputs com Zod
- Documente endpoints complexos

```typescript
export const userRouter = router({
  getProfile: protectedProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input, ctx }) => {
      return await db.getUserProfile(input.userId);
    }),
});
```

### Naming Conventions
- **Componentes:** PascalCase (`UserProfile.tsx`)
- **Funções:** camelCase (`calculateTotal()`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_RETRIES`)
- **Arquivos:** kebab-case (`user-profile.ts`)
- **CSS classes:** kebab-case (`btn-primary`)

---

## 📁 Estrutura do Projeto

```
arquimedes/
├── client/                 # Frontend React
│   ├── public/            # Assets estáticos
│   └── src/
│       ├── components/    # Componentes React
│       │   ├── ui/        # Componentes shadcn/ui
│       │   └── interactive/ # Componentes interativos
│       ├── pages/         # Páginas da aplicação
│       ├── hooks/         # Custom hooks
│       ├── contexts/      # React contexts
│       └── lib/           # Utilitários
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # Definição de routers tRPC
│   ├── db.ts              # Helpers de banco de dados
│   └── _core/             # Infraestrutura
├── drizzle/               # Schema e migrations
│   └── schema.ts          # Definição de tabelas
├── shared/                # Código compartilhado
├── storage/               # Helpers de S3
├── curriculum/            # Planejamento curricular
├── content/               # Conteúdo educacional
└── docs/                  # Documentação
```

---

## 🧪 Testes

### Executar Testes
```bash
# Todos os testes
pnpm test

# Modo watch
pnpm test:watch

# Com cobertura
pnpm test:coverage
```

### Escrever Testes
```typescript
import { describe, it, expect } from 'vitest';
import { calculateArea } from './math';

describe('calculateArea', () => {
  it('should calculate rectangle area correctly', () => {
    expect(calculateArea(5, 10)).toBe(50);
  });

  it('should handle zero dimensions', () => {
    expect(calculateArea(0, 10)).toBe(0);
  });
});
```

### Cobertura Mínima
- **Backend:** 80%+
- **Frontend:** 60%+ (desejável)

---

## 📚 Documentação

### Documentar Código
- Use JSDoc para funções públicas
- Adicione comentários para lógica complexa
- Mantenha README.md atualizado
- Atualize CHANGELOG.md

### Documentar Conteúdo Educacional
- Use Markdown para aulas
- Inclua exemplos práticos
- Adicione exercícios intercalados
- Estime tempo de leitura

---

## 🎨 Áreas que Precisam de Ajuda

### Alta Prioridade
1. 📝 **Conteúdo de Aritmética** - Módulos 6-10 (15 aulas)
2. 🐛 **Correção de Bugs** - 12 erros TypeScript
3. 📚 **Documentação Técnica** - ARCHITECTURE.md, API_REFERENCE.md

### Média Prioridade
1. 🎯 **Álgebra Básica** - 20 aulas
2. 🧪 **Testes E2E** - Playwright
3. 🎨 **Modo Escuro** - Theme switcher

### Baixa Prioridade
1. 📏 **Geometria Básica** - 21 aulas
2. 🔧 **PWA** - Service worker
3. 🌐 **Internacionalização** - i18n

---

## 💬 Comunicação

### Canais
- **Issues:** Para bugs e features
- **Pull Requests:** Para código
- **Discussions:** Para perguntas e ideias

### Dicas
- Seja claro e objetivo
- Forneça contexto suficiente
- Inclua screenshots quando relevante
- Seja paciente e respeitoso

---

## 🏆 Reconhecimento

Todos os contribuidores serão reconhecidos:
- **README.md:** Lista de contribuidores
- **CHANGELOG.md:** Créditos por versão
- **GitHub:** Contributors page

---

## 📞 Precisa de Ajuda?

- **Issues:** [GitHub Issues](https://github.com/MSC-Consultoria/arquimedes0.0.1/issues)
- **Discussions:** [GitHub Discussions](https://github.com/MSC-Consultoria/arquimedes0.0.1/discussions)
- **Email:** contato@mscconsultorias.com.br

---

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a [Licença MIT](LICENSE).

---

**Obrigado por contribuir com o Arquimedes! Juntos, estamos democratizando o acesso à educação matemática de qualidade. 🎓✨**
