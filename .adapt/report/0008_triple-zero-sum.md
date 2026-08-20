## 8 — 3Sum

- New id / title / slug: 8 / Triple Zero Sum / `triple-zero-sum`
- Old → new API: `threeSum` → `tripleZeroSum` (go `tripleZeroSum`, rust `triple_zero_sum`, ts `tripleZeroSum`)
- Core algorithm / difficulty: sort + pinned two-pointer sweeps with run-skipping dedupe / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-4,2,6,-6,3,-2,4]` → `[[-6,2,4],[-6,3,3],[-4,-2,6]]` (three triples, one
    using a repeated value), `[4,7,9]` → `[]` (all positive), `[3,-6,3]` →
    `[[-6,3,3]]` (repeated value forms the only triple)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate earned its keep here: my first example 1 produced the triple
  `[-1,-1,2]`, byte-identical to one of the source's example outputs, and the
  gate flagged it. Outputs are example data as much as inputs — when the task
  is "find triples summing to zero", low-magnitude triples collide easily.
  Values with magnitude ≥ 2 avoid the trap.
