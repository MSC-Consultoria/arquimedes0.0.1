#!/usr/bin/env bash
set -euo pipefail

if [ ! -d "src/tests" ] && [ ! -d "tests" ]; then
  echo "Nenhum diretório de testes encontrado. Crie 'src/tests' ou 'tests' e adicione testes com pytest." >&2
  exit 0
fi

if ! command -v pytest >/dev/null 2>&1; then
  echo "pytest não encontrado. Instale as dependências antes de executar os testes." >&2
  exit 1
fi

PYTHONPATH=src pytest "$@"
