## 2305 — Fair Distribution of Cookies

- New id / title / slug: 2305 / Smallest Largest Group Sum / `smallest-largest-group-sum`
- Old → new API: `distributeCookies` → `smallestLargestGroupSum` (go `smallestLargestGroupSum`, rust `smallest_largest_group_sum`, ts `smallestLargestGroupSum`); parameters `cookies` → `nums`, `k` kept
- Core algorithm / difficulty: backtracking over bag→child assignments with bound pruning on the running max and symmetry breaking over equal child totals / H3 (unchanged)
- Statement rewritten from spec: yes — cookies/children scenario dropped; framed as grouping entries into `k` groups and minimizing the largest group sum (sibling of `0410_smallest-largest-split-sum`, which is the contiguous variant — titles kept recognizably parallel, method names likewise)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,13,9,17,6], k=2 → 26` (unequal best split), `[10,4,6,3], k=2 → 13` (infeasibility argument), `[7,2,9,4,5], k=3 → 9` (perfect balance hitting the ceiling bound)
- Constraints: domain unchanged (2–8 entries, values 1–10⁵, 2 ≤ k ≤ length), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Verified all three example expectations against an independent
  brute-force enumerator (k^n assignments) in addition to the reference
  — worth doing whenever the reference is a pruned search.
- Example wording gotcha caught mid-write: "pairing 10 with anything
  reaches at least 14" was false (10+3 = 13); explanations that argue
  optimality need the same care as the answers.
- Renames ordered plurals before singulars (`children`→`groups` before
  `child`→`group`, `bags`→`items` before `bag`→`item`) and
  `unfairness`→`cost`; no source local collided (checked first).
