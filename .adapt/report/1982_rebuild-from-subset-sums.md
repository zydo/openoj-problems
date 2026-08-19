## 1982 — Find Array Given Subset Sums

- New id / title / slug: 1982 / Rebuild From Subset Sums / `rebuild-from-subset-sums`
- Old → new API: `recoverArray` → `rebuildFromSubsetSums` (go `rebuildFromSubsetSums`, rust `rebuild_from_subset_sums`, ts `rebuildFromSubsetSums`); parameters `n`, `sums` kept
- Core algorithm / difficulty: sort + peel largest-gap pairs, recurse on the half containing 0, O(2ⁿ·n) / H4 (unchanged)
- Statement rewritten from spec: yes (lost-array framing replaced by plain reconstruction)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - hidden `[-2,5]`, `[0,4,4]` (zero element + duplicates), `[-5,-1,2]` (negatives); sums shuffled before use
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `comparison` is `sorted`, so the reference's natural output order (e.g.
  `[-1,2,-5]`) is fine as the public expected value; the greedy is
  shuffle-invariant because it sorts first, which keeps every language port
  and the staged source solutions agreeing.
- Verification checked the stronger property — the output's own subset-sum
  multiset equals the input — rather than string equality with the hidden
  array.
- Source fenced literals (`[-3,-2,-1,0,0,1,2,3]` etc.) avoided in all new
  arrays and walkthroughs.
