## 651 — Maximum Sum of Distinct Subarrays With Length K

- New id / title / slug: 651 / Largest Repeat-Free Window Sum / `largest-repeat-free-window-sum`
- Old → new API: `maximumSubarraySum` → `bestDistinctWindowSum` (go `bestDistinctWindowSum`, rust `best_distinct_window_sum`, ts `bestDistinctWindowSum`); parameters `nums`, `k` kept
- Core algorithm / difficulty: fixed-length sliding window with a value-frequency map; window qualifies when the map holds `k` keys (zero-count keys erased) / H2 (unchanged)
- Statement rewritten from spec: yes ("repeat-free" replaces "distinct" as the adjective; qualification phrased as membership conditions)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[8,3,5,6,7,7,7] k=3` → `18` (same 7-cell / k=3 shape as the drawn figure: first three windows pass with the third best, trailing triple repeats), `[6,6,6] k=3` → `0` (no qualifying window), `[3,1,3,2,1] k=2` → `5` (recurring values that never repeat inside one window)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — cell values in all five window states, window captions, sums (16/14/18), the "map holds {6, 7}" key set, and the header comment; highlight geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The figure's five states fix the shape (7 cells, k=3, first three windows
  valid with the third the max, adjacent duplicate pair in cells 4–5, triple
  repeat at 5–6), so example 1 was reverse-engineered from that template:
  `[8,3,5,6,7,7,7]` makes sums 16 < 18 with state 3 the maximum, as the
  "best" badge requires.
- Source literals here are only the multi-symbol arrays (`1,5,4,2,9,9,9`,
  `1,5,4`, `5,4,2`, `4,2,9`); `[9,9,9]` and `[2,9,9]` are two-symbol
  alphabets the stale gate deliberately ignores, so single-digit repeats like
  `[7,7,7]` are free to reuse.
