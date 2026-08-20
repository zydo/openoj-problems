## 564 — Maximum Fruits Harvested After at Most K Steps

- New id / title / slug: 564 / Fruit Harvest Within a Step Budget / `fruit-harvest-within-a-step-budget`
- Old → new API: `maxTotalFruits` → `maxHarvest` (go `maxHarvest`, rust `max_harvest`, ts `maxHarvest`); parameters `fruits`, `startPos`, `k` kept
- Core algorithm / difficulty: optimal walk turns once, so the harvest is a contiguous stretch of the sorted array; two-pointer sweep over prefix sums / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** — same fruit positions, start, and budget; amounts relabeled)
  - `[[2,5],[6,9],[8,4]], 5, 4 → 13` (right only), `[[0,6],[4,3],[5,8],[6,1],[7,5],[10,7]], 5, 4 → 17` (left then right), `[[0,2],[6,7],[8,3]], 3, 2 → 0` (nothing reachable)
  - checked against the hidden inputs so no public case repeats one
- Constraints: domain unchanged (`10⁵` entries, positions/start `0..2·10⁵`, amounts `1..10⁴`, `k 0..2·10⁵`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — the three number-line SVGs encode positions in geometry but amounts as text, so each needed only its circle `<text>` values swapped; tick marks, walker, and arrows untouched
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The number-line figure family splits data from geometry: positions,
  start, and walk arrows are coordinates; amounts are labels. A
  structure-preserving example therefore keeps every coordinate and swaps
  only the amounts — nine text nodes across three SVGs.
- Figure alt text counts as prose for the overlap gate: copied captions
  ("four steps cover positions 4 through 7") pushed overlap to 11% until
  rewritten. Alt text is part of the statement, not decoration.
- macOS sed has no `\b`; identifier renames in `solution.*` silently no-op
  with it. Use `perl -pe 's/\bold\b/new/g'` (or python re) for the
  word-boundary renames.
- `check.py --problems` filters only the runtime tier — the static tier
  always scans the whole tree, so per-problem gating means grepping the
  failure list for your own key (and expecting other agents' in-flight
  bundles to fail around you).
