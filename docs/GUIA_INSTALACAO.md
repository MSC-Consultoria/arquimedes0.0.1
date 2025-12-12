# Guia de Instalação

Este guia descreve como preparar o ambiente de desenvolvimento para o projeto Arquimedes 0.0.1.

## Pré-requisitos

- Python 3.11 ou superior instalado.
- `python3-venv` disponível no sistema.
- Docker instalado e configurado (necessário para criação de imagens).

## Passo a Passo

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/MSC-Consultoria/arquimedes0.0.1.git
   cd arquimedes0.0.1
   ```

2. **Criar e ativar ambiente virtual**
   ```bash
   scripts/setup_env.sh
   source .venv/bin/activate
   ```

3. **Instalar dependências adicionais**
   - Caso exista `requirements.txt`, o script acima já realizará a instalação.
   - Dependências extras podem ser instaladas manualmente com `pip install <pacote>`.

4. **Executar testes (quando houver)**
   ```bash
   scripts/run_tests.sh
   ```

5. **Gerar imagem Docker (opcional)**
   Consulte `docs/CRIACAO_IMAGEM.md` para detalhes. De forma rápida:
   ```bash
   scripts/build_image.sh
   ```

## Configuração de Variáveis de Ambiente

- Utilize um arquivo `.env` (não versionado) para armazenar segredos e parâmetros sensíveis.
- Leitura das variáveis deve ser feita pela aplicação dentro de `src/config/`.

## Troubleshooting

- **Ambiente virtual não encontrado**: garanta que o `python3-venv` está instalado e que o script `setup_env.sh` foi executado na raiz do repositório.
- **Docker não executa**: verifique se o serviço do Docker está ativo e se o usuário possui permissão para rodar `docker build`.
