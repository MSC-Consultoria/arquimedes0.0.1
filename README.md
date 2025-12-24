# 🏛️ Artemis - Sistema de Preparação para OAB Segunda Fase

<div align="center">

![Artemis Logo](https://via.placeholder.com/200x200/1e3a5f/d4af37?text=ARTEMIS)

**Sistema completo de preparação para a segunda fase da OAB em Direito Constitucional**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22.13-339933.svg)](https://nodejs.org/)

[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias) •
[Instalação](#-instalação) •
[Uso](#-uso) •
[Documentação](#-documentação) •
[Contribuindo](#-contribuindo)

</div>

---

## 📋 Sobre o Projeto

**Artemis** é uma plataforma completa e moderna de preparação para a segunda fase do Exame da Ordem dos Advogados do Brasil (OAB), com foco em **Direito Constitucional**. O sistema foi desenvolvido pela **MSC Consultoria** como projeto piloto para auxiliar candidatos a alcançarem a aprovação através de conteúdo rico, exercícios práticos e metodologias comprovadas.

O nome "Artemis" faz referência à deusa grega da justiça, simbolizando a busca pela excelência e equidade no exercício da advocacia.

### 🎯 Objetivos

- Fornecer conteúdo programático completo alinhado aos padrões da FGV
- Oferecer exercícios práticos com correção automática e feedback detalhado
- Simular condições reais de prova (5 horas, 1 peça + 4 questões)
- Acompanhar progresso individual com métricas e estatísticas
- Gamificar o aprendizado com badges e conquistas
- Recomendar conteúdo personalizado baseado em desempenho

---

## ✨ Funcionalidades

### 📚 Conteúdo Programático

- **9 temas de Direito Constitucional** com teoria completa, legislação, jurisprudência e exemplos práticos
- **10 peças processuais** com estrutura detalhada, lei aplicável e modelos
- **154 exercícios de múltipla escolha** distribuídos por tema e nível de dificuldade
- Banco de provas antigas (4º ao 44º EOU) com gabaritos e padrões de resposta

### 🎯 Sistema de Exercícios

- Exercícios de múltipla escolha com correção automática
- Questões discursivas com correção via LLM
- Redação de peças processuais com feedback personalizado
- Cronômetro e controle de tempo
- Filtros por tema, tipo e dificuldade
- Histórico completo de exercícios resolvidos

### 🏆 Gamificação

- Sistema de pontos acumulados
- Badges em 3 níveis (bronze, prata, ouro)
- Conquistas por tema dominado, velocidade e acurácia
- Sequência de dias de estudo (streaks)
- Ranking e comparação de desempenho

### 📊 Acompanhamento de Progresso

- Dashboard com métricas em tempo real
- Gráficos de evolução temporal
- Taxa de acerto por tema
- Identificação de pontos fracos
- Heatmap de padrão de estudo
- Relatórios detalhados de desempenho

### 🎓 Simulador de Provas

- Simulador completo (5 horas, 10 pontos)
- Estrutura idêntica ao exame real (1 peça + 4 questões)
- Cronômetro e salvamento automático
- Correção via LLM com padrão FGV
- Relatório detalhado de desempenho

### 🤖 Inteligência Artificial

- Correção automática de questões discursivas
- Avaliação de peças processuais
- Feedback personalizado sobre fundamentação jurídica
- Recomendações inteligentes de conteúdo
- Análise de erros frequentes

### 📱 Interface Moderna

- Design profissional com estética de justiça (azul marinho e dourado)
- Responsivo (Mobile First)
- Animações suaves e profissionais
- Componentes reutilizáveis (shadcn/ui)
- Tipografia elegante (Montserrat + Lato)

---

## 🛠️ Tecnologias

### Frontend

- **React 19.2** - Biblioteca JavaScript para interfaces
- **TypeScript 5.9** - Superset tipado de JavaScript
- **Tailwind CSS 4** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos
- **Wouter** - Roteamento leve
- **Recharts** - Biblioteca de gráficos
- **Framer Motion** - Animações fluidas

### Backend

- **Node.js 22.13** - Runtime JavaScript
- **Express 4** - Framework web minimalista
- **tRPC 11** - TypeScript RPC framework
- **Drizzle ORM** - ORM TypeScript-first
- **MySQL/TiDB** - Banco de dados relacional
- **Superjson** - Serialização de dados complexos

### Infraestrutura

- **Vite 7** - Build tool e dev server
- **Vitest** - Framework de testes
- **AWS S3** - Armazenamento de arquivos
- **Manus OAuth** - Autenticação
- **LLM Integration** - Correção via IA

---

## 📦 Instalação

### Pré-requisitos

- Node.js 22.13 ou superior
- pnpm 10.4.1 ou superior
- MySQL 8.0 ou superior (ou TiDB)

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/MSC-Consultoria/artemis.git
cd artemis
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/artemis

# Authentication
JWT_SECRET=your-jwt-secret-here
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://auth.manus.im

# Manus Integration
BUILT_IN_FORGE_API_URL=https://forge.manus.im
BUILT_IN_FORGE_API_KEY=your-api-key-here
VITE_FRONTEND_FORGE_API_KEY=your-frontend-api-key-here
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.im

# App Configuration
VITE_APP_ID=artemis
VITE_APP_TITLE=Artemis - OAB Segunda Fase
VITE_APP_LOGO=/logo.png

# Owner Information
OWNER_OPEN_ID=your-owner-open-id
OWNER_NAME=Your Name

# Analytics (opcional)
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

4. **Execute as migrações do banco de dados**

```bash
pnpm db:push
```

5. **Popule o banco de dados com conteúdo inicial**

```bash
pnpm exec tsx seed-database.mjs
pnpm exec tsx seed-exercises.mjs
pnpm exec tsx seed-exercises-expanded.mjs
pnpm exec tsx seed-exercises-remaining.mjs
pnpm exec tsx seed-exercises-final.mjs
```

6. **Inicie o servidor de desenvolvimento**

```bash
pnpm dev
```

O sistema estará disponível em `http://localhost:3000`

---

## 🚀 Uso

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Executar testes
pnpm test

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

### Banco de Dados

```bash
# Gerar e aplicar migrações
pnpm db:push

# Validar distribuição de exercícios
pnpm exec tsx validate-exercises.mjs
```

---

## 📚 Documentação

### Estrutura do Projeto

```
artemis/
├── client/                 # Frontend React
│   ├── public/            # Arquivos estáticos
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── contexts/      # Contextos React
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Bibliotecas e utilitários
│   │   ├── App.tsx        # Componente principal
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                # Backend Express + tRPC
│   ├── _core/             # Infraestrutura (OAuth, LLM, etc.)
│   ├── db.ts              # Query helpers
│   ├── routers.ts         # tRPC procedures
│   └── *.test.ts          # Testes unitários
├── drizzle/               # Schema e migrações
│   └── schema.ts          # Definição de tabelas
├── shared/                # Código compartilhado
├── storage/               # Helpers S3
├── docs/                  # Documentação adicional
│   ├── metodologias_estrategias_oab.md
│   └── guia_completo_banca_fgv.md
├── seed-*.mjs             # Scripts de população do banco
├── validate-exercises.mjs # Script de validação
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
├── tailwind.config.ts     # Configuração Tailwind
└── README.md              # Este arquivo
```

### Documentação Adicional

- **[Metodologias e Estratégias de Estudo](docs/metodologias_estrategias_oab.md)** - Guia completo com dicas de especialistas, ciclos de estudo e depoimentos de aprovados
- **[Guia Completo da Banca FGV](docs/guia_completo_banca_fgv.md)** - Análise profunda sobre a FGV, estatísticas, padrões de correção e estratégias específicas

### Arquitetura

O Artemis segue uma arquitetura **cliente-servidor** com comunicação via **tRPC**:

**Frontend (React):**
- Componentes funcionais com hooks
- Estado gerenciado via Context API
- Comunicação com backend via tRPC hooks
- Estilização com Tailwind CSS + shadcn/ui

**Backend (Express + tRPC):**
- Procedures públicas e protegidas
- Autenticação via Manus OAuth
- Integração com LLM para correção
- Armazenamento de arquivos em S3

**Banco de Dados (MySQL/TiDB):**
- 13 tabelas principais
- Relacionamentos bem definidos
- Índices otimizados

---

## 🧪 Testes

O projeto utiliza **Vitest** para testes unitários. Atualmente, há **15 testes** cobrindo funcionalidades críticas:

```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test --watch

# Executar testes com cobertura
pnpm test --coverage
```

### Cobertura de Testes

- ✅ Autenticação (logout)
- ✅ Listagem de temas
- ✅ Busca de tema por slug
- ✅ Listagem de peças
- ✅ Busca de peça por slug
- ✅ Estatísticas do usuário
- ✅ Listagem de exercícios
- ✅ Filtros de exercícios (dificuldade, tema)
- ✅ Busca de exercício por ID
- ✅ Submissão de resposta
- ✅ Validações de códigos únicos
- ✅ Validações de níveis de dificuldade
- ✅ Validações de tipos de exercício
- ✅ Validações de pontuação

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e o processo de envio de pull requests.

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👥 Autores

**MSC Consultoria**
- Website: [mscconsultoria.com.br](https://mscconsultoria.com.br)
- GitHub: [@MSC-Consultoria](https://github.com/MSC-Consultoria)

**Desenvolvedor Principal:**
- Moisés Silva Costa

**Projeto Piloto para:**
- Isaías Costa (candidato OAB)

---

## 🙏 Agradecimentos

- FGV (Fundação Getúlio Vargas) pela organização do Exame de Ordem
- OAB (Ordem dos Advogados do Brasil) pela regulamentação da advocacia
- Estratégia OAB, Damásio Educacional e demais cursinhos pelas metodologias
- Comunidade de aprovados que compartilharam suas experiências
- Manus AI pela plataforma de desenvolvimento

---

## 📊 Status do Projeto

- ✅ **v1.0** - Sistema base com autenticação e dashboard
- ✅ **v2.0** - Sistema de exercícios interativos
- ✅ **v3.0** - Banco de exercícios expandido (154 exercícios)
- 🚧 **v4.0** - Sistema de simulados e correção via LLM (em desenvolvimento)
- 📅 **v5.0** - Sistema completo de gamificação (planejado)
- 📅 **v6.0** - Banco de provas antigas completo (planejado)

---

## 📞 Suporte

Para suporte, envie um email para suporte@mscconsultoria.com.br ou abra uma issue no GitHub.

---

<div align="center">

**Desenvolvido com ⚖️ pela MSC Consultoria**

[⬆ Voltar ao topo](#️-artemis---sistema-de-preparação-para-oab-segunda-fase)

</div>
