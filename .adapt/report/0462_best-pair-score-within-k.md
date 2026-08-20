## 462 — Max Value of Equation

- New id / title / slug: 462 / Best Pair Score Within k / `best-pair-score-within-k`
- Old → new API: `findMaxValueOfEquation` → `bestPairScore` (go `bestPairScore`, rust `best_pair_score`, ts `bestPairScore`); parameters `points`, `k` kept
- Core algorithm / difficulty: score regrouped as (y[j]+x[j]) + (y[i]−x[i]), monotonic deque sliding-window maximum on the key y−x / H3 (unchanged)
- Statement rewritten from spec: yes — "equation" recast as a pair score with a window legality rule
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[0,4],[2,1],[3,7],[6,2]] k=2 → 9` (promising pair excluded by distance), `[[0,-5],[4,0],[7,-5]] k=4 → -1` (negative best), `[[0,2],[1,2],[2,2]] k=5 → 6` (widest pair wins on ties) — cross-checked by a double loop
- Constraints: domain unchanged (length ≤ 10⁵, |x|,|y| ≤ 10⁸, 0 ≤ k ≤ 2·10⁸, strictly increasing x), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the pilot's.
