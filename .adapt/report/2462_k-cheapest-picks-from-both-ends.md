## 2462 — Total Cost to Hire K Workers

- New id / title / slug: 2462 / K Cheapest Picks From Both Ends / `k-cheapest-picks-from-both-ends`
- Old → new API: `totalCost` → `cheapestPickSum` (go `cheapestPickSum`, rust `cheapest_pick_sum`, ts `cheapestPickSum`); parameter `candidates` → `window`; `costs`, `k` kept
- Core algorithm / difficulty: two min-heaps over the first/last `window` survivors ordered by `(value, position)`, refilled from the middle until the pointers cross; `2*window >= n` short-circuits to "k smallest overall" via sort / H3 (unchanged)
- Statement rewritten from spec: yes (worker/hiring scenario dropped for a pure array process — eligibility phrased as union of the two end groups, overlap rule derived rather than quoted)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[9,4,6,1,8,1,5,12,7] k=3 window=4` → `6` (tie at value 1 resolved by position, then two refills), `[6,1,4,2] k=3 window=2` → `7` (pools merge over the middle), `[7,2,9,4] k=2 window=1` → `11` (only the ends compete; the middle is unreachable)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- First parameter rename of this chunk (`candidates` → `window`, prompted by
  de-scenarioing). Grep of the source solutions found `window` only inside
  comments ("front window"), never as an identifier, so the staged-source
  compatibility run is safe; the rename touched `problem.json`,
  `solution.*` (word-boundary), statement, and solutions.md uniformly.
- The compatibility gate renames only method/class/entrypoints from
  problem.json (plus ledger api entries, which Part B lacks), so a renamed
  parameter is invisible to it — harmless here because the judge passes
  arguments positionally.
