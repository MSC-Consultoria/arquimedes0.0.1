# Criação da Imagem Docker

Este documento descreve como gerar e testar a imagem Docker da aplicação.

## Pré-requisitos

- Docker instalado e com permissão para execução de `docker build`.
- Código-fonte disponível na raiz do repositório.

## Estrutura Utilizada

- `Dockerfile` na raiz define a imagem base (`python:3.11-slim`) e copia os arquivos do projeto.
- Dependências são instaladas se houver `requirements.txt` presente.

## Construindo a Imagem

Use o script de automação para simplificar o processo:

```bash
scripts/build_image.sh               # usa a tag padrão arquimedes:latest
scripts/build_image.sh meu-namespace/arquimedes:0.0.1  # define tag customizada
```

Caso prefira, execute o comando diretamente:

```bash
docker build -t arquimedes:latest .
```

## Testando a Imagem

1. Execute o contêiner:
   ```bash
   docker run --rm -p 8000:8000 arquimedes:latest
   ```
2. A imagem padrão inicia um servidor HTTP simples na porta `8000`. Ajuste o comando `CMD` no `Dockerfile` conforme a aplicação evoluir.

## Publicando

- Autentique no registro desejado (`docker login <registro>`).
- Faça push da imagem:
  ```bash
  docker push <tag>
  ```

## Boas Práticas

- Mantenha o `Dockerfile` enxuto e use dependências mínimas.
- Adicione estágios de build para otimizar imagens quando o projeto crescer.
- Atualize este guia sempre que o processo de build for alterado.
