# Arquitetura do Projeto

Este repositório serve como ponto de partida para serviços do Arquimedes. A arquitetura é modular e prioriza automação, isolamento de ambiente e entrega containerizada.

## Visão Geral

- **Aplicação**: código em `src/`, organizado por domínios e camadas de negócio.
- **Documentação**: localizada em `docs/`, cobre arquitetura, instalação e criação de imagem.
- **Automação**: scripts em `scripts/` padronizam tarefas de setup, testes e build de imagem.
- **Contêiner**: `Dockerfile` na raiz define a base para empacotamento da aplicação.

## Organização Sugerida do Código

```
src/
├── core/          # regras de negócio e contratos
├── adapters/      # integrações externas (APIs, filas, bancos)
├── api/           # handlers, controllers ou endpoints
├── config/        # configuração e variáveis de ambiente
└── tests/         # suíte de testes automatizados
```

> Utilize `src/tests/` para manter os testes próximos ao código e facilitar a execução via `pytest`.

## Fluxo de Desenvolvimento

1. **Planejar**: criar ou atualizar o backlog e alinhar o desenho arquitetural aqui documentado.
2. **Implementar**: desenvolver em branch dedicada, mantendo a estrutura de pastas e padrões de código definidos.
3. **Automatizar**: usar os scripts em `scripts/` para preparar o ambiente, rodar testes e gerar artefatos.
4. **Validar**: garantir cobertura de testes e aderência às dependências declaradas no `requirements.txt` (quando existir).
5. **Entregar**: gerar a imagem Docker e publicar no registro configurado pelo time.

## Dependências Esperadas

- **Python 3.11+** como base do runtime.
- **Docker** para empacotamento e distribuição.
- **pytest** para testes (recomendado).

## Próximos Passos

- Definir o layout exato das camadas de aplicação conforme o domínio do serviço.
- Adicionar pipelines CI/CD que utilizem os scripts fornecidos.
- Documentar integrações específicas (bancos, mensageria, APIs internas) nesta seção conforme forem adicionadas.
