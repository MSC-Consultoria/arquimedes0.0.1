# Artemis - Lista de Funcionalidades

## 1. Infraestrutura e Banco de Dados
- [x] Definir schema completo do banco de dados
- [x] Criar tabelas para temas, peças, exercícios, provas antigas
- [x] Criar tabelas para progresso, badges, conquistas
- [x] Criar tabelas para materiais do usuário e notificações
- [x] Executar migrações do banco de dados

## 2. Sistema de Autenticação e Perfil
- [x] Configurar autenticação com Manus OAuth
- [ ] Criar página de perfil do usuário
- [ ] Implementar edição de dados pessoais
- [ ] Adicionar configurações de preferências
- [ ] Implementar sistema de metas personalizadas

## 3. Dashboard Principal
- [x] Criar layout do dashboard com cards de métricas
- [x] Implementar card de progresso geral (%)
- [x] Implementar card de pontos acumulados
- [x] Implementar card de exercícios completados
- [x] Implementar card de temas em estudo
- [ ] Criar gráfico de progresso ao longo do tempo (linha)
- [ ] Criar gráfico de distribuição por tema (pizza)
- [x] Adicionar seção de próximas atividades recomendadas
- [x] Adicionar seção de badges recentes

## 4. Módulo de Conteúdo
- [x] Criar estrutura de navegação para 9 temas principais
- [x] Implementar página de tema individual com teoria
- [x] Adicionar legislação relevante por tema
- [x] Adicionar jurisprudência e súmulas por tema
- [x] Adicionar exemplos práticos por tema
- [x] Criar estrutura de navegação para 10 peças processuais
- [ ] Implementar página de peça individual com estrutura
- [x] Adicionar lei aplicável por peça
- [x] Adicionar exemplos de peças por tipo
- [ ] Implementar sistema de busca de conteúdo

## 5. Sistema de Exercícios
- [ ] Criar página de listagem de exercícios
- [ ] Implementar exercícios de múltipla escolha
- [ ] Implementar questões discursivas
- [ ] Implementar redação de peças processuais
- [ ] Criar sistema de correção automática (múltipla escolha)
- [ ] Integrar LLM para correção de questões discursivas
- [ ] Integrar LLM para correção de peças processuais
- [ ] Implementar feedback detalhado com explicações
- [ ] Adicionar sistema de pontuação por exercício
- [ ] Implementar cronômetro para exercícios
- [ ] Criar filtros por tema, peça, dificuldade
- [ ] Adicionar código único para cada exercício

## 6. Banco de Provas Antigas
- [ ] Criar estrutura para armazenar provas do 4º ao 44º EOU
- [ ] Implementar página de listagem de provas antigas
- [ ] Adicionar filtros por exame, tema, peça, dificuldade
- [ ] Implementar visualização de prova completa
- [ ] Adicionar gabaritos oficiais
- [ ] Adicionar padrões de resposta da FGV
- [ ] Criar análise comparativa de provas
- [ ] Implementar estatísticas por tema/peça

## 7. Simulador de Provas
- [ ] Criar página de simulador com cronômetro de 5 horas
- [ ] Implementar estrutura de prova (1 peça + 4 questões)
- [ ] Adicionar sistema de pontuação (10 pontos totais)
- [ ] Implementar salvamento automático de progresso
- [ ] Criar sistema de submissão de prova
- [ ] Integrar correção via LLM
- [ ] Implementar página de resultado detalhado
- [ ] Adicionar comparação com padrão FGV
- [ ] Criar histórico de simulados realizados

## 8. Sistema de Progresso
- [ ] Criar tabela de progresso por tema
- [ ] Implementar cálculo de percentual de conclusão
- [ ] Criar sistema de pontos acumulados
- [ ] Implementar taxa de acerto por tema
- [ ] Adicionar tempo médio de resolução
- [ ] Criar gráfico de barras (progresso por tema)
- [ ] Criar gráfico de linha (evolução temporal)
- [ ] Criar gráfico de pizza (distribuição de exercícios)
- [ ] Criar heatmap de padrão de estudo
- [ ] Implementar identificação de temas fracos

## 9. Sistema de Badges e Conquistas
- [ ] Criar tabela de badges/conquistas
- [ ] Implementar badges por tema (bronze/prata/ouro)
- [ ] Implementar badges por peça (bronze/prata/ouro)
- [ ] Implementar badges por velocidade (bronze/prata/ouro)
- [ ] Implementar badges por acurácia (bronze/prata/ouro)
- [ ] Criar badges especiais (primeiro exercício, semana perfeita, etc.)
- [ ] Implementar sistema de desbloqueio de badges
- [ ] Criar página de exibição de badges
- [ ] Adicionar seleção de badges para perfil
- [ ] Implementar animações de conquista

## 10. Sistema de Recomendações
- [ ] Criar algoritmo de identificação de temas fracos
- [ ] Implementar recomendação de exercícios baseada em erros
- [ ] Adicionar sugestão de provas antigas relacionadas
- [ ] Criar recomendação de tempo de estudo
- [ ] Implementar seção de "Próximas atividades" no dashboard

## 11. Relatórios Detalhados
- [ ] Criar página de relatórios
- [ ] Implementar relatório de desempenho por tema
- [ ] Implementar relatório de desempenho por peça
- [ ] Criar análise de erros frequentes
- [ ] Adicionar comparação com padrão FGV
- [ ] Implementar sugestões de melhoria personalizadas
- [ ] Adicionar exportação de relatórios (PDF)

## 12. Sistema de Notificações
- [ ] Criar tabela de notificações
- [ ] Implementar notificação de conquista desbloqueada
- [ ] Implementar notificação de meta atingida
- [ ] Criar lembretes de estudo
- [ ] Adicionar alertas de temas para revisão
- [ ] Implementar centro de notificações
- [ ] Adicionar configurações de notificações

## 13. Upload e Armazenamento de Materiais
- [ ] Criar sistema de upload de arquivos (PDF/DOCX)
- [ ] Integrar com S3 para armazenamento
- [ ] Implementar página de biblioteca de materiais
- [ ] Adicionar categorização de materiais
- [ ] Implementar busca de materiais
- [ ] Adicionar visualização de PDFs
- [ ] Criar sistema de anotações em materiais
- [ ] Implementar compartilhamento de materiais (opcional)

## 14. Design e Interface
- [x] Definir paleta de cores (estética de justiça)
- [x] Escolher tipografia adequada
- [x] Criar componentes de UI reutilizáveis
- [x] Implementar design responsivo (Mobile First)
- [x] Adicionar ícones relacionados a justiça
- [x] Criar animações suaves e profissionais
- [ ] Implementar tema dark/light (opcional)
- [x] Adicionar elementos visuais de justiça (balança, martelo, etc.)

## 15. Testes e Qualidade
- [ ] Criar testes unitários para funções críticas
- [ ] Testar correção via LLM
- [ ] Testar sistema de pontuação
- [ ] Testar sistema de badges
- [ ] Testar simulador de provas
- [ ] Realizar testes de usabilidade
- [ ] Corrigir bugs identificados
- [ ] Otimizar performance

## 16. Conteúdo Inicial
- [x] Popular banco com 9 temas de Direito Constitucional
- [x] Popular banco com 10 peças processuais
- [ ] Adicionar exercícios de múltipla escolha
- [ ] Adicionar questões discursivas
- [ ] Adicionar exercícios de peças
- [ ] Importar provas antigas (4º ao 44º EOU)
- [ ] Adicionar gabaritos e padrões de resposta


## 17. Sistema de Exercícios Interativos (Nova Funcionalidade)
- [x] Criar banco de exercícios de múltipla escolha por tema
- [ ] Criar exercícios discursivos por tema
- [ ] Criar exercícios de redação de peças
- [x] Adicionar identificação única para cada exercício (ex: EX-CTRL-001)
- [x] Classificar exercícios por nível de dificuldade (Fácil, Médio, Difícil)
- [x] Definir pontuação diferenciada por dificuldade
- [x] Adicionar tempo estimado de resolução
- [x] Vincular exercícios ao conteúdo programático da FGV
- [x] Implementar página de listagem de exercícios
- [x] Adicionar filtros por tema, tipo e dificuldade
- [x] Criar página de resolução de exercícios
- [x] Implementar cronômetro de tempo
- [x] Criar sistema de correção automática (múltipla escolha)
- [x] Implementar feedback detalhado com explicações
- [x] Adicionar histórico de exercícios resolvidos
- [ ] Criar estatísticas de desempenho por tema
- [ ] Implementar sistema de progresso baseado em exercícios


## 18. Expansão do Banco de Exercícios (Nova Funcionalidade)
- [x] Criar 5 exercícios fáceis para cada um dos 9 temas (45 exercícios)
- [x] Criar 5 exercícios médios para cada um dos 9 temas (45 exercícios)
- [x] Criar 5 exercícios difíceis para cada um dos 9 temas (45 exercícios)
- [x] Garantir cobertura de todos os subtemas por tema
- [x] Validar alinhamento com conteúdo programático da FGV
- [x] Popular banco de dados com novos exercícios
- [x] Testar distribuição e qualidade dos exercícios
- [x] Atualizar testes unitários


## 19. Pesquisa de Metodologias e Estratégias de Estudo (Nova Pesquisa)
- [x] Pesquisar metodologias de estudo para segunda fase da OAB
- [x] Buscar ciclos de estudo e cronogramas eficazes
- [x] Coletar dicas de especialistas e professores renomados
- [x] Pesquisar depoimentos e estratégias de aprovados
- [x] Buscar técnicas de redação de peças processuais
- [x] Pesquisar técnicas para questões discursivas
- [x] Coletar materiais de apoio (PDFs, guias, apostilas)
- [x] Pesquisar sobre gestão de tempo durante a prova
- [x] Buscar dicas sobre revisão e memorização
- [x] Compilar e organizar todas as informações
- [x] Criar documento final com metodologias e materiais


## 20. Pesquisa Profunda sobre a Banca FGV (Nova Pesquisa)
- [x] Pesquisar perfil e histórico da FGV como organizadora da OAB
- [x] Analisar filosofia de elaboração de questões da FGV
- [x] Pesquisar padrões de correção e critérios avaliativos
- [x] Coletar estatísticas de temas mais cobrados na 1ª fase
- [x] Coletar estatísticas de temas mais cobrados na 2ª fase (Constitucional)
- [x] Analisar peças mais frequentes na 2ª fase
- [x] Investigar evolução temporal das cobranças
- [x] Pesquisar como a FGV estrutura enunciados
- [x] Analisar o que a banca valoriza nas respostas
- [x] Estudar padrões de espelhos de resposta
- [x] Comparar diferenças entre FGV e outras bancas
- [x] Pesquisar questões anuladas e motivos
- [x] Investigar recursos procedentes
- [x] Analisar pontos controversos e polêmicas
- [x] Pesquisar mudanças de entendimento da banca
- [x] Coletar estratégias específicas para provas da FGV
- [x] Buscar dicas de aprovados sobre como lidar com a FGV
- [x] Identificar armadilhas comuns da FGV
- [x] Compilar e organizar todas as informações
- [x] Criar documento final completo sobre a banca FGV


## 21. Documentação e Deploy no GitHub (Nova Funcionalidade)
- [ ] Criar README.md completo do projeto
- [ ] Criar CONTRIBUTING.md com guia de contribuição
- [ ] Criar LICENSE.md com licença do projeto
- [ ] Criar CHANGELOG.md com histórico de versões
- [ ] Criar .gitignore adequado para o projeto
- [ ] Organizar estrutura de pastas e arquivos
- [ ] Mover documentações de pesquisa para pasta docs/
- [ ] Criar repositório no GitHub (MSC-Consultoria/artemis)
- [ ] Configurar repositório adequadamente
- [ ] Fazer commit inicial com todo o código
- [ ] Push para o GitHub
- [ ] Verificar deploy no GitHub
