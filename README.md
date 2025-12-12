# arquimedes0.0.1

Projeto base para estruturar serviços do Arquimedes na versão 0.0.1. Este repositório define a organização inicial de diretórios, scripts de automação e documentação de suporte para instalação, arquitetura e criação de imagens containerizadas.

## Estrutura de Pastas

```
.
├── docs/
│   ├── ARQUITETURA.md
│   ├── CRIACAO_IMAGEM.md
│   └── GUIA_INSTALACAO.md
├── scripts/
│   ├── build_image.sh
│   ├── run_tests.sh
│   └── setup_env.sh
├── src/
│   └── .gitkeep
├── CONTRIBUTING.md
├── Dockerfile
└── README.md
```

- **docs/**: documentação detalhada do projeto.
- **scripts/**: automações para preparar ambiente, executar testes e gerar imagens.
- **src/**: código-fonte da aplicação (a ser adicionado conforme as features forem implementadas).

## Automação

- `scripts/setup_env.sh`: cria e configura um ambiente virtual Python (usa `requirements.txt` se existir).
- `scripts/run_tests.sh`: executa a suíte de testes com `pytest` quando houver testes definidos.
- `scripts/build_image.sh`: gera a imagem Docker usando o `Dockerfile` na raiz, permitindo definir a tag como argumento opcional.

Consulte a pasta `docs/` para instruções detalhadas sobre instalação, arquitetura e geração da imagem.

## Contribuindo

1. Crie uma branch a partir da `main` (`git checkout -b feature/minha-feature`).
2. Desenvolva e mantenha o código e a documentação sincronizados com a estrutura descrita acima.
3. Execute os scripts de automação relevantes antes de abrir o PR.
4. Abra o Pull Request seguindo as orientações de `CONTRIBUTING.md`.

## Tópicos recomendados

Adicione tags no repositório para facilitar a descoberta (via interface do GitHub): `arquimedes`, `template`, `devops`, `docker`, `python`, `automation`.

## Observações

- A revisão e o merge do PR #1 devem ser feitos manualmente na plataforma de versionamento.
- Ajuste os scripts conforme as dependências específicas do serviço forem definidas.
