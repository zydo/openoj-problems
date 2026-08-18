## 0286 — Walls and Gates

- New id / title / slug: 286 / Nearest Source Distances / `nearest-source-distances`
- Old → new API: `wallsAndGates` → `nearestSourceDistances`
- Core algorithm / difficulty: multi-source BFS in layers / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes — a 4x4 grid with two sources and a sealed cell that keeps the sentinel, a single row, and a grid whose corner is unreachable
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **dropped** — grid contents are drawn geometrically
- Gates: check ✓ verify ✓ compatibility ✓ stale ✓ overlap ✓ sandbox pending (batch run)

### Notes

solutions.md was missing. More importantly the **stale gate caught real reuse**: example 1's third row was copied verbatim from the source's grid. The example was rebuilt from scratch, and the replacement is better — it now contains an unreachable cell, so the sentinel rule is demonstrated in example 1 rather than only in a later one.

Recovered by the main agent after the chunk agents hit the 5-hour quota
mid-problem; the surviving artifacts were kept as written and only the
missing pieces authored, with all gates run fresh.
