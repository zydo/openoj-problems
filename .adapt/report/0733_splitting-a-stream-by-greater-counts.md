## 733 — Distribute Elements Into Two Arrays II

- New id / title / slug: 733 / Splitting a Stream by Greater Counts / `splitting-a-stream-by-greater-counts`
- Old → new API: `resultArray` → `splitByGreater` (go `splitByGreater`, rust `split_by_greater`, ts `splitByGreater`); parameter `nums` kept
- Core algorithm / difficulty: two Fenwick trees over compressed values, simulate the deal with count/length/first tiebreaks / H3 (unchanged)
- Statement rewritten from spec: yes (`greaterCount` reframed as `above`; arr1/arr2 became first/second in the prose only — judge-visible names unchanged since the arrays are not parameters)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,6,2]` → `[4,7,6,2]` (second list dominates), `[9,2,4,7]` → `[9,4,7,2]` (first list dominates), `[5,5,4,4]` → `[5,4,5,4]` (length tiebreak does all the deciding)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- `split_by_greater` was grepped against the Rust port first: it already
  declares a local `greater_count`, so a method named `greater_count_split`
  would have read confusingly beside it (and vice versa).
- The generator's trace log prints which rule fired per step (counts, tie
  path), which is how the three examples were certified to exercise the three
  branches rather than lucking into one.
