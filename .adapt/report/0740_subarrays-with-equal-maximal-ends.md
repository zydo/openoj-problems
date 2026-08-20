## 740 — Find the Number of Subarrays Where Boundary Elements Are Maximum

- New id / title / slug: 740 / Subarrays with Equal Maximal Ends /
  `subarrays-with-equal-maximal-ends`
- Old → new API: `numberOfSubarrays` → `countMaximalEnds` (go
  `countMaximalEnds`, rust `count_maximal_ends`, ts `countMaximalEnds`);
  parameter `nums` kept
- Core algorithm / difficulty: monotonic stack for the nearest
  strictly-greater left index, per-value sorted position lists with
  binary search, plus-one singleton tally / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,2,2,6,3]` → 7 (singles, an equal pair, and a long span bounded
    by equal maxima with smaller interior)
  - `[7,7,7,7]` → 10 (all-equal run: every subarray qualifies)
  - `[3,1,3,9,3]` → 6 (a strictly greater interior element blocks the
    flanking pair)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Title deliberately avoids the 2832 pattern ("... Where Each Element Is
  Maximum"); the two problems sit close together in the bank and the
  ledger keeps them distinguishable.
- The natural "all equal" example at `n = 3` would collide with the
  source's Example 2 values, so the run example uses `n = 4`
  (`[7,7,7,7]` → 10), which also exercises the triangular count
  `n(n+1)/2`.
