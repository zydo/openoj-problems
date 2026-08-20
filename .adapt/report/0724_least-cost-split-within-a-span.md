## 724 — Divide an Array Into Subarrays With Minimum Cost II

- New id / title / slug: 724 / Least-Cost Split Within a Span / `least-cost-split-within-a-span`
- Old → new API: `minimumCost` → `leastSplitCost` (go `leastSplitCost`, rust `least_split_cost`, ts `leastSplitCost`); parameters `nums`, `k`, `dist` kept
- Core algorithm / difficulty: sliding window over the second start, k-2 smallest window values via dual Fenwick trees / H4 (unchanged)
- Statement rewritten from spec: yes ("cost of an array = first element" reframed as subarrays priced at their first element, starts bunched within `dist`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,9,2,7,3,8], k=3, dist=2` → 9; same array `dist=1` → 13 (span excludes the cheap pairing); `[7,5,6,5,4,3,9], k=4, dist=3` → 19
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- LeetCode's 2464 ("... Minimum Cost I") is not in this bank, so the "II"
  suffix was dropped with no family to keep.
- Examples 1 and 2 deliberately share one array with two span widths; the
  brute-force generator confirmed both expecteds before the statement was
  written (a hand-written explanation for E2 was wrong on first pass and got
  rewritten from the enumerated splits).
