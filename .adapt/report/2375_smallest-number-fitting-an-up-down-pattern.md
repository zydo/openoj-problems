## 2375 — Construct Smallest Number From DI String

- New id / title / slug: 2375 / Smallest Number Fitting an Up-Down Pattern / `smallest-number-fitting-an-up-down-pattern`
- Old → new API: `smallestNumber` → `smallestFromPattern` (go `smallestFromPattern`, rust `smallest_from_pattern`, ts `smallestFromPattern`)
- Core algorithm / difficulty: push 1,2,3,... onto a stack, flush at each 'I' or the end, emitting fall runs descending / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `"IIDDI" → "125436"`, `"DDDD" → "54321"`, `"DDIIDI" → "3214657"`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the solution figure's block widths, pattern letters, and stack snapshots all encode the source example over a two-letter alphabet; no structure to preserve and no renderer for the family
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
