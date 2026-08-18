## 0305 — Number of Islands II

- New id / title / slug: 305 / Count Grid Islands, Land Updates / `count-grid-islands-land-updates`
- Old → new API: `numIslands2` → `countGridIslandsPerUpdate` (go `countGridIslandsPerUpdate`, rust `count_grid_islands_per_update`, ts `countGridIslandsPerUpdate`); parameters `m`, `n`, `positions` kept (conventional)
- Core algorithm / difficulty: union-find with path halving and union by size, carrying the island count incrementally / H3 (unchanged)
- Statement rewritten from spec: yes — the island definition is the sibling's verbatim ("joined edge to edge … every cell outside the grid counts as water"), and the updates are described as turning a cell to land, with the LeetCode `addLand` operation name retired
- Examples newly constructed: yes (structure-preserving: **yes** — a 3×3 grid with five snapshot panels, the shape `example-1.svg` draws)
  - `3, 3, [[0,0],[1,1],[2,2],[0,1]] → [1,2,3,2]` (count climbs then **falls** as one update merges two islands), `2, 2, [[1,1],[1,1],[0,0],[1,0]] → [1,1,2,1]` (repeated position, then a merge)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated**, with fill rewrites — the five panels' forty-five cells kept their geometry and had `fill` values recomputed from the new update sequence; captions became `land at (r, c)`, counts `0,1,2,3,2`, the answer line and the four structural comments follow. No coordinates moved.
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- **Family: `islands`, written straight after `0200_count-grid-islands`.** The
  island definition is copied word for word from the sibling so the pair reads
  as one family, and the titles/methods pair as *Count Grid Islands* /
  *Count Grid Islands, Land Updates* (`countGridIslands` /
  `countGridIslandsPerUpdate`).
- **Fills, not labels: this is the borderline case of the figure rule.** The
  panels are a grid of `<rect>`s whose *fill attributes* carry the data, so a
  new example is not a text-node edit — but it is still an attribute edit with
  zero geometric change, and it regenerates cleanly from a small spec (panel →
  land set → newest cell). I treated it as a label edit and recorded "labels
  updated". If the next wave wants a stricter line, this is the bundle to
  decide it on.
- **A merge in the public example is worth insisting on.** The source's figure
  shows a monotone count (`0,1,1,2,3`) and never demonstrates the interesting
  event — a count *dropping* as two islands join. The new sequence ends with
  exactly that (`3 → 2`), and example 2 additionally covers a repeated
  position, which the source only exercises in hidden cases. Both expected
  values came from the reference: my hand trace of `[0,0],[1,1],[2,2]` wrongly
  assumed `(1,1)` and `(2,2)` were adjacent (diagonal — they are not), which
  is the second time this session that an eyeballed adjacency was wrong.
- The reference solutions' only scenario wording ("add-land") was rewritten to
  "update" in all seven files; the algorithm, comments' structure, and the
  inverse-Ackermann note are otherwise untouched, as `ADAPT.md` requires.
