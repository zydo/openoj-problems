## 3613 — Minimize Maximum Component Cost

- New id / title / slug: 3613 / Lowest Component Cost After Splitting / `lowest-component-cost-after-splitting`
- Old → new API: `minCost` → `lowestSplitCost` (go `lowestSplitCost`, rust `lowest_split_cost`, ts `lowestSplitCost`); parameters `n`, `edges`, `k` kept
- Core algorithm / difficulty: binary search over sorted distinct weights; feasibility = union-find count of components among edges ≤ threshold, needs ≤ k / H3 (unchanged)
- Statement rewritten from spec: yes (delete-to-split framing; component cost defined as largest surviving edge weight)
- Examples newly constructed: yes (structure-preserving: yes — both drawn graph shapes kept, weights changed)
  - `[[0,1,6],[1,2,4],[1,3,3],[3,4,7]] k 2` → `6` (drop the 7; cheaper cuts make a third piece), `[[0,1,3],[1,2,7],[2,3,4]] k 1` → `7` (no removals allowed), `[[0,1,9],[1,2,8]] k 3` → `0` (all singletons, no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (2) — before/after panels and chain geometry untouched; weights, costs, captions, data comments, alt texts rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Inner edge tuples are stale-gate literals individually: my first draft reused
  `[0,1,5]` and `[0,1,4]` (both appear inside the source's example lists) even
  though every whole edge list differed. Check each tuple against the source
  set, not just the array — same lesson as 3600, caught by the gate here.
- Expected values from a delete-subset brute force (component count ≤ k,
  cost = max surviving weight); it reproduced all source public cases first.
