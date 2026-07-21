# Arquimedes 0.0.1

Snapshot histórico de uma experiência que combinava conteúdo educacional, interface React e a ideia inicial de um atendente de IA multi-tenant.

> **Estado lógico:** arquivado e somente leitura desde 15 de junho de 2026. Não use este código diretamente em produção.

## Visão geral

| Item | Definição |
|---|---|
| Período ativo | Dezembro de 2025 |
| Estado | Snapshot histórico |
| Destino de produto | [MSC Consultoria](https://github.com/Msc-Company-Org/msc-consultoria) |
| Destino de engenharia de IA | [MSC Labs](https://github.com/Msc-Company-Org/msc-labs) |
| Destino de conhecimento | [Alexandria](https://github.com/Msc-Company-Org/alexandria) |

## O que foi o projeto

A versão 0.0.1 do Arquimedes reuniu:

- uma interface em `client/`;
- conteúdo em `content/`;
- currículo em `curriculum/`;
- documentação técnica em `docs/`;
- experimentos que anteciparam conceitos posteriormente associados ao Prometheus.

A implementação foi abandonada em dezembro de 2025. Ela não representa os padrões atuais de segurança, arquitetura ou operação.

## Estrutura preservada

```text
client/             interface legada
content/            ativos educacionais
curriculum/         conteúdo programático
docs/               documentação técnica
LICENSE             licença MIT
PROJECT_OVERVIEW.md visão original
TODO_ARCHIVE.md     pendências históricas
TESTING.md          estratégia de testes da época
```

## Valor histórico

1. Preserva a origem conceitual do Prometheus.
2. Pode conter conteúdo educacional reutilizável.
3. Registra decisões e limitações da primeira implementação.
4. Mantém branches independentes que ainda precisam de classificação.

## Caminho de consolidação

| Conteúdo | Destino recomendado |
|---|---|
| Landing e operação comercial do Prometheus | `Msc-Company-Org/msc-consultoria/apps/prometheus-landing` |
| Runtime, agentes e avaliações de IA | `Msc-Company-Org/msc-labs` |
| Conteúdo educacional válido | `Msc-Company-Org/msc-academy` |
| Decisões e documentação transversal | `Msc-Company-Org/alexandria` |

## Regras para reutilização

- não faça merge direto das branches antigas;
- compare arquivos individualmente;
- elimine segredos e dependências obsoletas;
- atualize testes e contratos;
- registre a proveniência na Alexandria;
- valide licença, dados pessoais e direitos sobre os conteúdos antes da migração.

## Próxima decisão

Após a curadoria das branches e migração do conteúdo útil, o repositório pode ser marcado como arquivado também nas configurações do GitHub.

## Responsável

Moisés Costa — [Finish-Him](https://github.com/Finish-Him)
