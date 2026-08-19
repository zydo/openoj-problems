## 2282 — Number of People That Can Be Seen in a Grid

- New id / title / slug: 2282 / Grid Sight Lines / `grid-sight-lines`
- Old → new API: `seePeople` → `countSightLines` (go `countSightLines`, rust `count_sight_lines`, ts `countSightLines`); parameter `heights` kept
- Core algorithm / difficulty: monotonic decreasing stack per row (right-to-left) plus per column (bottom-to-top), counts summed per cell / H3 (unchanged)
- Statement rewritten from spec: yes — visibility relation renamed to "clear sight lines" right-or-below with the strict-in-between rule stated identically in form but fresh in wording
- Examples newly constructed: yes (structure-preserving: yes — both figures label-edited)
  - `[[3,6,2,7,5]] → [[1,2,1,1,0]]` (single row, rightward only), `[[4,3],[6,2],[5,1]] → [[2,1],[2,1],[1,0]]` (3 x 2, both directions), `[[5,5,2],[3,7,7]] → [[2,2,1],[1,1,0]]` (equal heights counted then blocking)
- Constraints: domain unchanged (1–400 x 1–400, heights 1–10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both cell-value and comment edits; geometry unchanged)
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Copied figure **alt text** counts as statement prose for the overlap
  gate — the first run failed at 18% purely on the two `![...]`
  captions inherited verbatim. Rewriting the captions brought it to 0%.
  Worth knowing for every figure problem: alt text is part of the
  shingle set.
- The hidden set already contains an all-equal 2 x 2 grid (`[[10,10],
  [10,10]]`), so the equal-heights example deliberately uses a 2 x 3
  shape instead of duplicating that case's structure.
- Source had no Follow-up; none added.
