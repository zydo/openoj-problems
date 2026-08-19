## 1755 — Closest Subsequence Sum

- New id / title / slug: 1755 / Nearest Subsequence Sum / `nearest-subsequence-sum`
- Old → new API: `minAbsDifference` → `nearestSumGap` (go `nearestSumGap`, rust `nearest_sum_gap`, ts `nearestSumGap`); parameters `nums`, `goal` kept
- Core algorithm / difficulty: meet in the middle — sorted left-half subset sums, per-right-sum binary search of the bracketing pair / H3 (unchanged)
- Statement rewritten from spec: yes (framed as deletions; subsequence definition folded into the delete-what-you-like phrasing)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,-6,2,7]`, goal 5 → 0 (exact hit through mixed signs)
  - `[5,-2,9]`, goal 1 → 1 (all eight reachable sums listed; two-way tie at distance 1)
  - `[2,4,6]`, goal -15 → 15 (goal unreachable side; empty deletion is nearest)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example 2's full sum enumeration (8 sums) was printed by the brute-force
  script and pasted into the explanation — listing them by hand invites an
  arithmetic slip.
- Title sits beside "Kth Largest Subsequence Sum" (2386) and "Largest
  Non-Decreasing Offset Subsequence Sum" (2926) in voice; "Nearest" keeps the
  three distinguishable.
