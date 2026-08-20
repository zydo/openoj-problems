## 616 — Shortest Impossible Sequence of Rolls

- New id / title / slug: 616 / Shortest Missing Roll Pattern / `shortest-missing-roll-pattern`
- Old → new API: `shortestSequence` → `shortestMissing` (go `shortestMissing`, rust `shortest_missing`, ts `shortestMissing`)
- Core algorithm / difficulty: greedy count of maximal all-faces stretches, answer = stretches + 1 / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,1,3,1,2,3,3,2] k 3 → 3`, `[1,1,2,1] k 2 → 2`, `[3,1,1,2,3,2,1] k 4 → 1`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
