## 3473 — Sum of K Subarrays With Length at Least M

- New id / title / slug: 3473 / Best k Disjoint Windows of Minimum Length m / `best-k-disjoint-windows-of-minimum-length-m`
- Old → new API: `maxSum` → `bestWindows` (go `bestWindows`, rust `best_windows`, ts `bestWindows`); parameters `nums`, `k`, `m` kept
- Core algorithm / difficulty: layered DP over window count with prefix sums; one running maximum of `dp[t] - prefix[t]` per row makes each layer linear / H3 (unchanged)
- Statement rewritten from spec: yes ("worth" of a selection, mandatory-k wording, unused-elements freedom restated from the task)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3,-4,5,6,-1,2] k=2 m=2` → 17 (second window swallows the -1 for the trailing 2), `[-8,4,-3,-6] k=4 m=1` → -13 (k·m = n forces every element spent), `[5,-2,-2,5] k=1 m=3` → 6 (both ends worth sheltering tolls)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Constraint-domain trap caught late: my first example 3 used `m = 4` while
  the statement constrains `m <= 3`. When a parameter's bound is small
  (`m <= 3` here), check candidate examples against every bound before
  writing them into the statement — the gates do not test example legality.
- The placement brute force (`exp_3473.py`, 400 random inputs) returns -inf
  for `k > floor(n/m)` candidates; such inputs violate the constraint and
  must not become examples either.
