#!/usr/bin/env bash
set -euo pipefail

TAG="${1:-arquimedes:latest}"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker não encontrado. Instale o Docker para criar a imagem." >&2
  exit 1
fi

docker build -t "$TAG" .
