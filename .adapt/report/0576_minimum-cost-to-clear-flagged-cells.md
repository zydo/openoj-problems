## 576 — Minimum Time to Remove All Cars Containing Illegal Goods

- New id / title / slug: 576 / Minimum Cost to Clear Flagged Cells / `minimum-cost-to-clear-flagged-cells`
- Old → new API: `minimumTime` → `minimumCost` (go `minimumCost`, rust `minimum_time` → `minimum_cost`, ts `minimumCost`); parameter `s` kept
- Core algorithm / difficulty: peel the ends, keep one contiguous block, price kept cells as `'1'`→+1 / `'0'`→−1, answer `n + min(0, minimum subarray sum)` via Kadane-for-minima / H4 (unchanged)
- Statement rewritten from spec: yes — re-derived from the statement's cost model (1 per end removal, 2 per interior removal) that the central fix restored; the train-conductor scenario dropped, costs phrased as costs rather than time
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"1000101"` → 4 (two optimal plans: 1 left + 3 right peels, or 1 left + 1 right peel + one direct removal — both minimum blocks of the ±1 scoring)
  - `"0001000"` → 2 (a buried flagged cell: removing it directly strictly beats peeling 4 from the left or 3 from the right)
  - `"1111"` → 4 (every cell flagged: peeling the ends wins, answer is `n`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 20/20 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **The live `solutions.md` still carries the pre-fix derivation.** Its first
  paragraph ends "...turns this into `n` plus the sum of `+2` for each '1' and
  `−1` for each '0' inside the segment" — the +2/−1 encoding belongs to the old
  interior-cost-3 oracle the central fix replaced; the corrected pricing is +1
  for a kept `'1'` and −1 for a kept `'0'`. The seven `solution.*` ports and
  their comments are correct; only the guide's prose is stale. The adapted
  `solutions.md` re-derives the pricing correctly. Worth a central sweep of the
  live tree for that sentence (and any sibling prose).
- Spec re-derived from the statement per the dispatch instructions; the
  corrected encoding was re-validated before writing anything by Dijkstra
  brute force over every binary string of length ≤ 9 (statement costs 1/1/2,
  0 mismatches — `.localonly/wave-b-19/check2167.py`).
- Hidden cases untouched (including the two centrally regenerated ones); the
  public expecteds were computed by the adapted bundle's corrected
  `solution.py`, then cross-checked against the brute force.
