# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não Lançado]

### Planejado
- Sistema de simulados completos com cronômetro de 5 horas
- Correção via LLM para questões discursivas e peças
- Sistema completo de gamificação com badges e conquistas
- Banco de provas antigas (4º ao 44º EOU)
- Sistema de notificações inteligentes
- Upload e armazenamento de materiais de estudo
- Gráficos interativos de progresso
- Sistema de recomendações personalizadas
- Relatórios detalhados de desempenho

## [3.0.0] - 2025-12-24

### Adicionado
- Expansão massiva do banco de exercícios de 19 para 154 exercícios
- 135 novos exercícios distribuídos pelos 9 temas de Direito Constitucional
- 5 exercícios por tema em cada nível de dificuldade (fácil, médio, difícil)
- Cobertura completa de todos os subtemas
- Script de validação de distribuição de exercícios
- Pesquisa profunda sobre metodologias e estratégias de estudo para OAB
- Pesquisa detalhada sobre a banca FGV e seus padrões
- Documentação completa com guias de metodologias e estratégias
- Guia completo sobre a banca FGV com análise de 39 exames

### Melhorado
- Qualidade e diversidade dos exercícios
- Alinhamento com padrão FGV
- Cobertura de subtemas por tema
- Documentação do projeto

### Testado
- Validação de distribuição equilibrada de exercícios
- Testes unitários para funcionalidades de exercícios
- 15 testes passando com sucesso

## [2.0.0] - 2025-12-24

### Adicionado
- Sistema completo de exercícios interativos
- 19 exercícios iniciais de múltipla escolha
- Página de listagem de exercícios com filtros
- Página de resolução individual com cronômetro
- Sistema de correção automática para múltipla escolha
- Feedback detalhado com explicações
- Histórico de exercícios resolvidos
- Filtros por tema, tipo e dificuldade
- Identificação única para cada exercício (ex: EX-CTRL-001)
- Classificação por nível de dificuldade
- Pontuação diferenciada por dificuldade
- Tempo estimado de resolução
- Vinculação ao conteúdo programático da FGV

### Melhorado
- Rotas tRPC para exercícios
- Funções de banco de dados para queries de exercícios
- Testes unitários (9 novos testes adicionados)

### Corrigido
- Erros de TypeScript em componentes
- Problemas de cache do servidor

## [1.0.0] - 2025-12-24

### Adicionado
- Estrutura inicial do projeto com React 19 + TypeScript 5.9
- Sistema de autenticação com Manus OAuth
- Dashboard principal com métricas de progresso
- Cards de estatísticas (progresso, pontos, exercícios, sequência)
- Seção de próximas atividades recomendadas
- Seção de conquistas/badges
- 9 temas de Direito Constitucional com conteúdo completo
- 10 peças processuais com estrutura detalhada
- Página de listagem de temas
- Design profissional com estética de justiça
- Paleta de cores azul marinho e dourado
- Tipografia elegante (Montserrat + Lato)
- Schema completo do banco de dados (13 tabelas)
- Migrações do banco de dados
- Scripts de população inicial (temas e peças)
- Testes unitários iniciais (6 testes)
- Configuração de tRPC para comunicação cliente-servidor
- Integração com S3 para armazenamento de arquivos
- Integração com LLM para correção futura
- Componentes reutilizáveis com shadcn/ui
- Design responsivo (Mobile First)

### Configurado
- Vite 7 como build tool
- Tailwind CSS 4 para estilização
- Drizzle ORM para banco de dados
- Express 4 como servidor backend
- Vitest para testes unitários
- ESLint e Prettier para qualidade de código

## [0.1.0] - 2025-12-24

### Adicionado
- Pesquisa inicial sobre OAB Segunda Fase
- Pesquisa sobre a banca FGV
- Análise de estatísticas de aprovação
- Estudo de peças cobradas em Direito Constitucional
- Planejamento inicial do projeto
- Definição de requisitos e funcionalidades
- Especificação técnica do sistema

---

## Tipos de Mudanças

- `Adicionado` para novas funcionalidades
- `Alterado` para mudanças em funcionalidades existentes
- `Descontinuado` para funcionalidades que serão removidas
- `Removido` para funcionalidades removidas
- `Corrigido` para correções de bugs
- `Segurança` para vulnerabilidades corrigidas
- `Melhorado` para melhorias de performance ou qualidade
- `Testado` para adição ou melhoria de testes

---

[Não Lançado]: https://github.com/MSC-Consultoria/artemis/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/MSC-Consultoria/artemis/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/MSC-Consultoria/artemis/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/MSC-Consultoria/artemis/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/MSC-Consultoria/artemis/releases/tag/v0.1.0
