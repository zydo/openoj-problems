## 1043 — Partition Array for Maximum Sum

- New id / title / slug: 1043 / Largest Sum After Block Replacement / `largest-sum-after-block-replacement`
- Old → new API: `maxSumAfterPartitioning` → `largestSumAfterBlockReplacement` (go `largestSumAfterBlockReplacement`, rust `largest_sum_after_block_replacement`, ts `largestSumAfterBlockReplacement`); parameters `arr`, `k` kept
- Core algorithm / difficulty: prefix DP, last block of length j ≤ k, running maximum per prefix / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,12,6,10,3,8]` k=3 → 66 (two full blocks, hand-checkable), `[1,5,2]` k=3 → 15 (single whole-array block), `[7,4,9]` k=1 → 20 (identity partition)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `return_type` is 64-bit (`arr[i]` up to 10⁹ times 500 entries) — kept
  byte-for-byte per decision 5; the identity-partition example still fits in
  any width but the statement keeps the original 10⁹ bound.
- Example 1 was tuned to land on exactly two full blocks so the walkthrough
  (12s then 10s) matches what a reader would try first.
