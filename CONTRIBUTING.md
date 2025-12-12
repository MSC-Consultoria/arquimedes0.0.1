# Guia de Contribuição

Obrigado por contribuir com o Arquimedes! Siga estas orientações para manter o projeto organizado e fácil de evoluir.

## Fluxo de Trabalho

1. **Branching**: crie branches a partir de `main` usando o padrão `feature/<descricao>` ou `fix/<descricao>`.
2. **Commits**: use mensagens descritivas em português, no imperativo. Ex.: `Adiciona script de build`.
3. **Testes**: execute `scripts/run_tests.sh` antes de abrir o PR.
4. **Documentação**: atualize os arquivos em `docs/` sempre que alterar comportamento, arquitetura ou processos.
5. **Pull Requests**: descreva o objetivo, as principais mudanças e como validar. Marque revisores apropriados.

## Padrões de Código

- Mantenha o código organizado conforme a estrutura em `docs/ARQUITETURA.md`.
- Prefira tipagem estática (type hints) e tratamento explícito de erros.
- Não inclua segredos ou credenciais no repositório; use variáveis de ambiente.

## Revisão

- A revisão do PR #1 deve ser realizada no repositório remoto. Use esta base para validar se as mudanças aderem à estrutura e aos scripts descritos aqui.
- Feedbacks devem ser objetivos e acompanhados de sugestões de ajuste.

## Comunicação

- Registre decisões de arquitetura em `docs/ARQUITETURA.md`.
- Para novas integrações ou mudanças de build, inclua detalhes em `docs/CRIACAO_IMAGEM.md`.
