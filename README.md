# arquimedes0.0.1 - Semente futura do Prometheus

> **ARQUIVADO em 2026-06-15** - mantido intencionalmente como snapshot historico.
> **Destino futuro:** este codigo e a semente conceitual do **Prometheus** (agente IA multi-tenant para WhatsApp) que sera reconstruido em 2026+.

**Status:** Arquivado (read-only) - Decisao documentada em 2026-06-15

---

## O que era

Versao 0.0.1 do projeto "Arquimedes" (criado 2025-12-12, abandonado 2025-12-26).
Tentativa inicial de sistema educacional MSC Consultoria com 142MB de:
- `client/` - interface React
- `curriculum/` - conteudo programatico
- `content/` - assets educacionais
- `docs/` - documentacao tecnica
- `LICENSE` (MIT)
- `PROJECT_OVERVIEW.md` - visao original
- `TODO_ARCHIVE.md` - lista de pendencias

## Por que foi arquivado (e NAO deletado)

Decisao do owner em 2026-06-15 (sessao de curadoria GitHub):

1. **Semente conceitual do Prometheus** - a ideia de "atendente IA multi-tenant com backend robusto + dataset rico" nasceu aqui e deve ser revisitada
2. **Historico preservado** - 3 branches (`main`, `copilot/initialize-git-repo`, `codex/complete-project-structure-and-documentation`) documentam iteracao
3. **Possivel fonte de assets** - curriculum/ e content/ podem ter material reutilizavel

## Roadmap - Evolucao para Prometheus

O **Prometheus Agent** (Msc-Company-Org/prometheus-agent) e a encarnacao atual.
A evolucao planejada e:
- **Curto prazo:** consolidar msc-landing-funnel (Msc-Company-Org) como base de captura
- **Medio prazo:** portar logica de curriculum/dataset para o Prometheus
- **Longo prazo:** revisa-lo como "v0 do Prometheus" caso queira reescrever do zero

Referencias cruzadas:
- [Msc-Company-Org/prometheus-agent](https://github.com/Msc-Company-Org/prometheus-agent) - encarnacao atual
- [Msc-Company-Org/msc-landing-funnel](https://github.com/Msc-Company-Org/msc-landing-funnel) - template base (secao "Roadmap - Prometheus")
- [Msc-Company-Org/harness-msc](https://github.com/Msc-Company-Org/harness-msc) - harness MSC

## Estrutura preservada (NAO modificar)

```
client/        # interface (legado)
components.json
content/       # assets educacionais (analisar antes de usar)
curriculum/    # conteudo programatico (analisar antes de usar)
docs/          # documentacao
LICENSE        # MIT
PROJECT_OVERVIEW.md
TODO_ARCHIVE.md
TESTING.md
```

## Contato

Owner: Moises Costa (Finish-Him)
Para revisitar este codigo, abrir issue no [Msc-Company-Org/prometheus-agent](https://github.com/Msc-Company-Org/prometheus-agent)
