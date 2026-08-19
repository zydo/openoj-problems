## 3351 — Sum of Good Subsequences

- New id / title / slug: 3351 / Stepping Subsequence Sum / `stepping-subsequence-sum`
- Old → new API: `sumOfGoodSubsequences` → `steppingSum` (go `steppingSum`, rust `stepping_sum`, ts `steppingSum`); parameter `nums` kept
- Core algorithm / difficulty: per-ending-value count+sum dictionaries, batch sums charged when the batch's last element closes it / H3 (unchanged)
- Statement rewritten from spec: yes ("stepping" replaces the source's "good"; the adjacency condition restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,1,2]` → 16 (duplicate values extending each other), `[4,3,2]` → 30 (downhill run), `[5,7,6]` → 42 (a gap of 2 blocks pairing)
  - Brute-force verified (`.localonly/wave-g-01/exp_3351.py`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- "Good" is LeetCode's throwaway adjective; "stepping" carries the
  differ-by-one semantics in the name itself.
