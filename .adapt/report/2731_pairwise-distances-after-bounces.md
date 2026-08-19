## 2731 — Movement of Robots

- New id / title / slug: 2731 / Pairwise Distances After Bounces / `pairwise-distances-after-bounces`
- Old → new API: `sumDistance` → `sumPairDistances` (go `sumPairDistances`, rust `sum_pair_distances`, ts `sumPairDistances`); parameters `nums`, `s`, `d` kept (conventional)
- Core algorithm / difficulty: pass-through equivalence (x ± d), sort, prefix-sum of pairwise distances, mod 10⁹+7 / H3 (unchanged)
- Statement rewritten from spec: yes — "robots" → "particles"; bounce semantics (same-point meeting and adjacent crossing) restated from the spec, both example notes rebuilt with new data
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[-1,1,3], "RLL", 2 → 4` (two bounces; second-by-second simulator cross-checked the narrative), `[0,4], "RR", 3 → 4` (no interaction), `[2,5,9], "RLR", 0 → 14` (d = 0)
- Constraints: domain unchanged (2 ≤ n ≤ 10⁵, ±2·10⁹ positions, 0 ≤ d ≤ 10⁹, L/R string, distinct), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The example narrative with real bounces was validated by a discrete
  second-by-second simulator (reverse on shared cell or adjacent crossing)
  against the pass-through multiset — worth doing whenever the statement
  narrates collision steps.
