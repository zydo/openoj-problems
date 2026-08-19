## 2459 — Sort Array by Moving Items to Empty Space

- New id / title / slug: 2459 / Least Moves to Sort Into the Blank / `least-moves-to-sort-into-the-blank`
- Old → new API: `sortArray` → `leastMovesToSort` (go `leastMovesToSort`, rust `least_moves_to_sort`, ts `leastMovesToSort`); parameter `nums` kept
- Core algorithm / difficulty: cycle decomposition of the permutation toward each of the two sorted layouts (blank-first / blank-last); blank cycle costs `L-1`, blank-free cycle `L+1` / H3 (unchanged)
- Statement rewritten from spec: yes ("empty cell" replaces "empty space"; sorted rows spelled out for `n = 4`)
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[2,1,0,3]` → `1` (single move, blank ends left), `[1,2,3,0]` → `0` (already sorted), `[2,3,0,1,5,4]` → `4` (one 5-cell blank cycle under the winning goal; walkthrough lists every intermediate row)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `solution-cycle-walk.svg` drew the source example `[4,2,0,3,1]` step by step, and the arrow/highlight geometry *is* that data (the blank's tour forces the values), so no label edit exists that changes the example
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale literal net is wider than "the example arrays": both sorted n=5
  rows (`0,1,2,3,4`, `1,2,3,4,0`) are source literals, and they appear as
  *substrings* of longer sorted rows (`[0,1,2,3,4,5]` would squash to a hit).
  Examples therefore end on a sorted row only for n<=4 or blank-last n>=6;
  the n=6 blank-first layout can never be displayed.
- Candidate E1 `[3,1,0,2]` was abandoned because hidden case 6 is exactly that
  input — the dup check against hidden cases is worth running before the
  statement is written around an example.
