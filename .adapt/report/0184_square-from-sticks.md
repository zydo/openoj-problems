## 184 — Matchsticks to Square

- New id / title / slug: 184 / Square From Sticks / `square-from-sticks`
- Old → new API: `makesquare` → `canFormSquare` (go `canFormSquare`, rust `canFormSquare`, ts `canFormSquare`); parameter `matchsticks` → `lengths`
- Core algorithm / difficulty: backtracking assignment of sticks to four edge sums, with divisibility/longest-stick prechecks, descending order, and equal-fill symmetry pruning / H3 (unchanged)
- Statement rewritten from spec: yes — framed as "can the whole pile outline a square", with the no-cutting and no-leftovers rules stated as conditions rather than instructions
- Examples newly constructed: yes (structure-preserving: **yes** — five sticks, three whole edges plus one edge split in two, exactly what the figure draws)
  - `[1,3,4,4,4] → true` (the split edge is now unequal, 1 + 3)
  - `[2,2,3,3,3,3] → false` (divisible by four, longest stick fits, still impossible — the search has to run)
  - `[7,7,7] → false` (fails the divisibility test outright)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **labels updated** — `figures/example-1.svg` keeps its geometry; the side labels became 4, the split label became `1 + 3`, and the split point moved from the midpoint to the quarter mark so the drawing matches the unequal pair. Alt text written fresh.
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **A source whose rust/go/ts entrypoints all equal its method name forces the
  adapted names to be equal too.** `makesquare` was the method *and* all three
  entrypoints. `adapt_gates.py` builds its rename list as
  `[method, ...entrypoints]` and applies the pairs in order with a
  word-boundary regex, so the method rename consumes every occurrence and the
  per-language entrypoint renames never fire. Naming the method `canFormSquare`
  with a rust entrypoint `can_form_square` therefore produced a rust-only
  compatibility failure (`E0599`: the staged source solution defined
  `canFormSquare`, the harness called `can_form_square`). Fixed by making all
  four names `canFormSquare`.
  The rust starter is consequently camelCase. That is only a `non_snake_case`
  warning, and `runner/executors/compiled.py` surfaces compiler diagnostics
  only when compilation *fails*, so submitters never see it. Check the source's
  entrypoint table before choosing a name: whenever `entrypoints.rust ==
  method` in the source, the adapted bundle must keep that identity.
- Parameter rename check: the source solutions already declare a local `sticks`
  (`sticks = sorted(matchsticks, reverse=True)` and its equivalents), so
  `matchsticks` → `sticks` would have been the unfixable collision the protocol
  warns about. `lengths` appears nowhere in any source solution.
