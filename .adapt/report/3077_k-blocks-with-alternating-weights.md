## 3077 — Maximum Strength of K Disjoint Subarrays

- New id / title / slug: 3077 / K Blocks with Alternating Weights /
  `k-blocks-with-alternating-weights`
- Old → new API: `maximumStrength` → `maxBlockScore` (go `maxBlockScore`,
  rust `max_block_score`, ts `maxBlockScore`); parameters `nums`, `k`
  kept
- Core algorithm / difficulty: suffix DP `dp[i][j][x]` counting blocks
  from the right so the weight is `±j`, rolling `(k+1) x 2` layers /
  H4 (unchanged)
- Statement rewritten from spec: yes ("strength" reframed as a weighted
  score over blocks)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-1,4,-1,5], k=3` → 25 (merging a loss into the big block and
    buying the other loss alone at negative weight both pay)
  - `[7,-2,-2,-2,7], k=5` → 48 (k == n: forced singletons)
  - `[-4,-2,-7], k=1` → -2 (all negative, least-damage single block)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Function-kind public `input` must be a positional argument list
  `[[...], k]`, not a named object — the compatibility gate caught the
  named-dict shape instantly via the staged source solutions.
- Interval prose like `nums[0..2]` is a tracked stale literal (three
  distinct characters after the comma strip); explanations now name
  elements by position ("the first three elements") instead of ranges.
- Example expectations were cross-checked with an independent brute-force
  enumerator before being written into prose.
