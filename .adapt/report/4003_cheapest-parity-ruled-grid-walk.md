## 4003 — Minimum Cost Path with Alternating Directions III

- New id / title / slug: 4003 / Cheapest Parity-Ruled Grid Walk / `cheapest-parity-ruled-grid-walk` (no I/II siblings exist in the bank — the "-iii" had no family to preserve)
- Old → new API: `minCost` → `cheapestWalk` (go `cheapestWalk`, rust `cheapest_walk`, ts `cheapestWalk`); parameters `m`, `n`, `penalty` kept
- Core algorithm / difficulty: Dijkstra over (cell, parity) states, wait edges flip parity / H3 (unchanged)
- Statement rewritten from spec: yes (moves become counts with a parity-ruled compass; waits framed as pacing)
- Examples newly constructed: yes (structure-preserving: yes for the solution figure's 2x2 shape)
  - `[[4,7],[2,9]]` → 9 (down then wrong-way right; right-first would pay 7 later), `[[0,5],[6,3]]` → 7 (free standstill swings parity), `2x3 [[6,0,8],[9,3,2]]` → 12 (zero-penalty violation mid-row)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — solution-parity-states.svg kept its two-layer geometry and entry costs; count wording, penalty value, and total edited
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Inherent tie worth knowing: from cell `(i, j)`, "stand still then move free"
  costs exactly the same as "move against the rule" (`penalty[i][j]` plus the
  destination entry, either way), so example walkouts choosing one of the two
  remain optimal. Example values were chosen so the presented route is a
  strict optimum over the alternative first move (right-first pays 14 vs 9).
- Example 1's penalties were tuned so the figure's drawn route (down, then
  right) is optimal — with the source's geometry the right-first route could
  otherwise have won.
