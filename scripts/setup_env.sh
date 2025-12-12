#!/usr/bin/env bash
set -euo pipefail

# Cria ambiente virtual e instala dependências, se definidas
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip

if [ -f requirements.txt ]; then
  python -m pip install --no-cache-dir -r requirements.txt
else
  echo "Nenhum requirements.txt encontrado. Adicione o arquivo se precisar de dependências." >&2
fi
