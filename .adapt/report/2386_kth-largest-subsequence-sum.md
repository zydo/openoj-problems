## 2386 — Find the K-Sum of an Array

- New id / title / slug: 2386 / Kth Largest Subsequence Sum / `kth-largest-subsequence-sum`
- Old → new API: `kSum` → `kthSubsequenceSum` (go `kthSubsequenceSum`, rust `kth_subsequence_sum`, ts `kthSubsequenceSum`)
- Core algorithm / difficulty: base = sum of positives; kth largest sum = base − kth smallest subset sum of |values|, min-heap two-branch enumeration / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-1,5] k=5 → 3` (mixed signs, full 8-sum list followable); `[7,2,9] k=4 → 9` (all positive, tied sums from {7,2} and {9}); `[6,-3,1] k=1 → 7` (k=1 shortcut)
  - public expectations cross-checked against a brute-force subset enumeration
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The Go port keeps its own `kSumPair`/`kSumHeap` helper types: `\bkSum\b`
  does not match inside `kSumPair` (word boundary), so both the compatibility
  rename and the stale scan leave them alone.
