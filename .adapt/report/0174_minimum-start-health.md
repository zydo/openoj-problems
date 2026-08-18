## 0174 — Dungeon Game

- New id / title / slug: 174 / Minimum Start Health / `minimum-start-health`
- Old → new API: `calculateMinimumHP` → `minimumStartHealth` (go `minimumStartHealth`, rust `minimum_start_health`, ts `minimumStartHealth`); parameter `dungeon` → `grid`
- Core algorithm / difficulty: backward DP on "least total needed on entry", INF border, seed after the corner / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — both figures kept, see Notes)
  - `[[-4,-7,7],[-4,-8,-6],[-6,0,0]] → 12` (walk touches exactly 1 at its tightest), `[[-4]] → 5`, `[[3,0],[2,5]] → 1` (harmless grid still costs 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`example-1.svg`, `solution-need-table.svg`)
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 17/17 cases)

### Notes

- The knight/princess/demon scenario is gone — the house style has no invented
  scenarios, and the computation is a grid walk with a running total. The
  word "health" survives only in the title, where it names the quantity being
  minimized.
- `example-1.svg` shades the optimal path, so the geometry constrains the new
  example: same 3×3 shape, and the optimal walk must still be right, right,
  down, down. A brute-force search over fresh 3×3 grids (all values different
  from the source's nine, both other path shapes infeasible at the minimum)
  produced `[[-4,-7,7],[-4,-8,-6],[-6,0,0]] → 12`. The full 9-entry need table
  in `solution-need-table.svg` was recomputed, not transposed from the source.
- Search scripts for the example ran against the *source* bundle's solution.py
  (read-only import, PYTHONDONTWRITEBYTECODE=1); nothing under `problems/` was
  written.
