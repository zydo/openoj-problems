## 497 — Maximum Number of Events That Can Be Attended II

- New id / title / slug: 497 / Best Value From at Most k Events / `best-value-from-at-most-k-events`
- Old → new API: `maxValue` → `bestValue` (go `bestValue`, rust `best_value`, ts `bestValue`); parameters `events`, `k` kept
- Core algorithm / difficulty: sort by end day, rolling DP per attendance count, binary search for the strictly-before prefix / H3 (unchanged)
- Statement rewritten from spec: yes (shared-day clash rule re-derived; "attend fewer than k is allowed" kept explicit)
- Examples newly constructed: yes (structure-preserving: yes — same event counts as the three figures)
  - `[[2,3,6],[3,5,2],[4,6,5]]`, k=2 → 11 (chain across a gap; middle event rejected)
  - `[[2,5,4],[3,6,3],[4,7,9]]`, k=2 → 9 (all pairs clash; lone best)
  - `[[1,1,5],[2,2,1],[3,3,4],[4,4,2]]`, k=3 → 11 (no clashes but k binds; drop the cheapest)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (3) — timeline bars re-emitted from the recovered layout rule (gridline `x(d) = 92 + 52 (d − dmin)`, rows at `y = 64 + 36 i`, green chosen / red rejected); renderer at `.localonly/wave-f-01/render_1751.py`
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Return type is 64-bit (`value` up to 10⁶ × n) — worth watching in future
  picks, since it survives the copy untouched.
- Source statement literals worth avoiding were only the identifying triples
  `[1,2,4]`, `[2,3,1]`, `[2,3,10]`; two-symbol triples like `[3,4,3]` are
  exempt from the stale scan.
