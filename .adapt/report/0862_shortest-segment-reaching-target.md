## 0862 — Shortest Subarray with Sum at Least K

- New id / title / slug: 862 / Shortest Segment Reaching Target / `shortest-segment-reaching-target`
- Old → new API: `shortestSubarray` → `shortestSegment` (go `shortestSegment`, rust `shortest_segment`, ts `shortestSegment`); parameter `k` → `target`
- Core algorithm / difficulty: prefix sums swept with a monotonic deque of candidate left ends / H4 (unchanged)
- Statement rewritten from spec: yes — the negatives caveat is stated up front as the reason a longer run is not automatically a bigger one
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-2,5,1], target 6 → 2`, `[5,-4,5], target 6 → 3` (answer must swallow a negative), `[4,1,-2], target 9 → -1`
- Constraints: domain unchanged, presentation rewritten (length and value bounds given in words, `target` kept as an inequality)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `k` → `target` was checked against every source solution first (no local
  named `target` anywhere); `segment` was also free. Renaming `k` is worth the
  grep here because the title carries the word and a one-letter parameter is
  the weakest link in a statement that has to explain a threshold.
- The Rust reference shadows the parameter (`let target = target as i64;`)
  after the rename, exactly as it shadowed `k` before — word-boundary renaming
  handles this with no follow-up.
- The public generator cross-checks the deque reference against an O(n²)
  scan-per-start brute force on each example.
