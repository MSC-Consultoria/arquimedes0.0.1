# 📦 Resumo do Repositório - Arquimedes

## 📊 Estatísticas do Projeto

### Estrutura de Arquivos

```
Total de arquivos: ~150
Linhas de código: ~15,000
Linguagens principais:
  - TypeScript: 85%
  - CSS/Tailwind: 10%
  - Markdown: 5%
```

### Commits

```
Total de commits: 3
Branch principal: main
Último commit: feat: initial commit - Arquimedes v0.2.0
```

---

## 📁 Estrutura Completa

```
arquimedes/
├── .github/                          # Configurações do GitHub
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md            # Template para reportar bugs
│   │   └── feature_request.md       # Template para solicitar features
│   └── PULL_REQUEST_TEMPLATE.md     # Template para pull requests
│
├── client/                           # Frontend React
│   ├── public/                      # Assets estáticos
│   └── src/
│       ├── _core/                   # Hooks e utilitários core
│       ├── components/              # Componentes reutilizáveis
│       │   ├── ui/                  # shadcn/ui components (40+ componentes)
│       │   ├── MathContent.tsx      # Renderização de LaTeX
│       │   ├── ExerciseCard.tsx     # Exercício interativo
│       │   ├── DashboardLayout.tsx  # Layout do dashboard
│       │   └── ...
│       ├── pages/                   # Páginas da aplicação
│       │   ├── Home.tsx
│       │   ├── DisciplinePage.tsx
│       │   ├── ModulePage.tsx
│       │   └── LessonPage.tsx
│       ├── contexts/                # Contextos React
│       ├── lib/                     # Utilitários
│       ├── App.tsx                  # Rotas principais
│       ├── main.tsx                 # Entry point
│       └── index.css                # Estilos globais
│
├── server/                           # Backend tRPC
│   ├── _core/                       # Configuração do servidor
│   │   ├── llm.ts                   # Integração LLM
│   │   ├── notification.ts          # Sistema de notificações
│   │   ├── context.ts               # Contexto tRPC
│   │   ├── trpc.ts                  # Configuração tRPC
│   │   └── ...
│   ├── db.ts                        # Queries do banco de dados
│   ├── routers.ts                   # Endpoints tRPC
│   ├── routers.test.ts              # Testes dos routers
│   └── auth.logout.test.ts          # Testes de autenticação
│
├── drizzle/                          # Migrations do banco
│   └── schema.ts                    # Schema do banco de dados
│
├── docs/                             # Documentação
│   ├── ARCHITECTURE.md              # Arquitetura detalhada
│   ├── DATABASE.md                  # Guia do banco de dados
│   ├── DEPLOY_GITHUB.md             # Guia de deploy no GitHub
│   └── images/
│       └── screenshot-home.png      # Screenshot da aplicação
│
├── shared/                           # Código compartilhado
│   └── const.ts                     # Constantes
│
├── .gitignore                        # Arquivos ignorados pelo Git
├── CHANGELOG.md                      # Histórico de mudanças
├── CONTRIBUTING.md                   # Guia de contribuição
├── LICENSE                           # Licença MIT
├── README.md                         # Documentação principal
├── package.json                      # Dependências e scripts
├── tsconfig.json                     # Configuração TypeScript
├── tailwind.config.ts                # Configuração Tailwind
├── vite.config.ts                    # Configuração Vite
├── vitest.config.ts                  # Configuração Vitest
├── seed-data.mjs                     # Script de população inicial
└── todo.md                           # Lista de tarefas
```

---

## 📚 Documentação Disponível

### Documentos Principais

1. **README.md** (3,500+ palavras)
   - Visão geral do projeto
   - Funcionalidades implementadas
   - Guia de instalação
   - Stack tecnológico
   - Estrutura do projeto
   - Instruções de uso

2. **CONTRIBUTING.md** (2,500+ palavras)
   - Código de conduta
   - Como contribuir
   - Configuração do ambiente
   - Processo de desenvolvimento
   - Padrões de código
   - Convenções de commits
   - Guia de testes

3. **ARCHITECTURE.md** (4,000+ palavras)
   - Arquitetura de alto nível
   - Estrutura do frontend
   - Estrutura do backend
   - Schema do banco de dados
   - Fluxos de dados
   - Segurança
   - Performance

4. **DATABASE.md** (3,500+ palavras)
   - Schema completo
   - Relacionamentos
   - Guia de acesso
   - Queries úteis
   - Migrations
   - Backup e restore
   - Otimizações

5. **DEPLOY_GITHUB.md** (2,000+ palavras)
   - Passo a passo para deploy
   - Configurações recomendadas
   - Workflow de desenvolvimento
   - Autenticação SSH
   - Troubleshooting

6. **CHANGELOG.md**
   - Histórico de versões
   - Mudanças por release
   - Tipos de mudanças

---

## 🧪 Testes

### Cobertura de Testes

```
Total de testes: 14
Testes passando: 14 (100%)
Arquivos de teste: 2

Áreas cobertas:
✅ Autenticação (logout)
✅ Listagem de disciplinas
✅ Listagem de módulos
✅ Listagem de páginas
✅ Sistema de exercícios
✅ Submissão de respostas
✅ Gestão de progresso
✅ Dashboard
✅ Recomendações
```

### Executar Testes

```bash
pnpm test                # Executar todos os testes
pnpm test --watch        # Modo watch
pnpm test --coverage     # Com coverage
pnpm check               # Verificar tipagem TypeScript
```

---

## 🔧 Scripts Disponíveis

```json
{
  "dev": "Iniciar servidor de desenvolvimento",
  "build": "Build para produção",
  "start": "Iniciar em produção",
  "test": "Executar testes",
  "check": "Verificar tipagem TypeScript",
  "format": "Formatar código com Prettier",
  "db:push": "Aplicar migrations do banco"
}
```

---

## 📦 Dependências Principais

### Frontend

- react@19.2.1
- typescript@5.9.3
- tailwindcss@4.1.14
- wouter@3.3.5
- katex@latest
- @tanstack/react-query@5.90.2

### Backend

- express@4.21.2
- @trpc/server@11.6.0
- drizzle-orm@0.44.5
- mysql2@3.15.0
- zod@4.1.12

### Desenvolvimento

- vitest@2.1.4
- typescript@5.9.3
- vite@7.1.7
- prettier@3.6.2

---

## 🎯 Funcionalidades Implementadas

### ✅ Completas

1. Sistema de navegação hierárquica
2. Renderização de conteúdo com LaTeX
3. Exercícios interativos com validação
4. Gestão de progresso do usuário
5. Dashboard personalizado
6. Geração de exercícios por IA
7. Sistema de notificações
8. Autenticação Manus OAuth
9. 3 módulos completos (9 páginas)
10. Testes unitários

### 🔜 Roadmap

1. Embeds de vídeos do YouTube
2. Diagramas interativos (SVG/Canvas)
3. Sistema de conquistas gamificado
4. Módulos de Física (5 módulos)
5. Fórum de discussão
6. Certificados de conclusão

---

## 🔗 Links Importantes

- **Repositório**: https://github.com/msc-consultorias/arquimedes
- **Demo**: https://3000-izawxsbz194xne7hs1lhx-bbd42229.us2.manus.computer
- **Issues**: https://github.com/msc-consultorias/arquimedes/issues
- **Pull Requests**: https://github.com/msc-consultorias/arquimedes/pulls

---

## 👥 Informações do Projeto

- **Organização**: MSC Consultorias
- **Licença**: MIT
- **Versão Atual**: 0.2.0
- **Status**: Em desenvolvimento ativo
- **Linguagem**: Português (Brasil)

---

## 📞 Contato

- **Email**: contato@mscconsultorias.com.br
- **Suporte**: suporte@mscconsultorias.com.br
- **Website**: mscconsultorias.com.br

---

**Gerado em**: Dezembro 2024  
**Última atualização**: v0.2.0
