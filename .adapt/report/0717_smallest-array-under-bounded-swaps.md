## 717 — Make Lexicographically Smallest Array by Swapping Elements

- New id / title / slug: 717 / Smallest Array Under Bounded Swaps / `smallest-array-under-bounded-swaps`
- Old → new API: `lexicographicallySmallestArray` → `smallestArrayUnderBoundedSwaps` (go `smallestArrayUnderBoundedSwaps`, rust `smallest_array_under_bounded_swaps`, ts `smallestArrayUnderBoundedSwaps`); parameters `nums`, `limit` kept
- Core algorithm / difficulty: sort (value, index) pairs, cut components at value gaps > limit, assign each run's ascending values to its ascending original indices / H3 (unchanged)
- Statement rewritten from spec: yes — the swap rule and lexicographic order stated directly; "connected component" vocabulary left to the hints
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,1,7,3,9], limit 2 → [1,3,7,4,9]` (two groups split by gap 3), `[6,2,6,2,5], limit 1 → [5,2,6,2,6]` (duplicates spanning groups), `[10,40,70], limit 5 → [10,40,70]` (no legal swap) — all brute-verified by BFS over every reachable array
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, 1 ≤ values, limit ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The BFS brute explores swap-closure over arrays, which is exponential in
  the worst case — keep such examples at n ≤ 6.
