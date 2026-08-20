## 58 — Find Minimum in Rotated Sorted Array

- New id / title / slug: 58 / Rotated Array Minimum / `rotated-array-minimum`
- Old → new API: `findMin` → `rotatedArrayMinimum` (go `rotatedArrayMinimum`, rust `rotated_array_minimum`, ts `rotatedArrayMinimum`); parameter `nums` kept
- Core algorithm / difficulty: binary search for the boundary, compared against the window's right edge / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[8,9,2,5,6] → 2`, `[4,-7,-3,0] → -7` (negatives, one entry moved), `[2,14,29,38] → 2` (moved n times, so still increasing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ (verify 7/7 languages, 15/15 cases)

### Notes

- The rotation is defined operationally ("move `1` to `n` trailing entries to
  the front") rather than by naming a rotation count, which keeps the
  description shorter and makes the `n`-move case obviously the identity — the
  case the algorithm's choice of comparison exists to handle.
- Example 3 is deliberately the un-rotated shape, since the guide's argument
  for comparing against `hi` rather than `lo` turns on it.
