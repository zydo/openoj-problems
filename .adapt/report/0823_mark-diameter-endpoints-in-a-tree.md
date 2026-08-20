## 823 — Find Diameter Endpoints of a Tree

- New id / title / slug: 823 / Mark Diameter Endpoints in a Tree / `mark-diameter-endpoints-in-a-tree`
- Old → new API: `findSpecialNodes` → `markDiameterEnds` (go `markDiameterEnds`, rust `mark_diameter_ends`, ts `markDiameterEnds`); parameters `n`, `edges` kept
- Core algorithm / difficulty: double BFS with full tie sets, union of the two farthest sets / H2 (unchanged)
- Statement rewritten from spec: yes ("special node" term dropped; the property is stated directly)
- Examples newly constructed: yes (structure-preserving: yes, via renumbering where the figure allowed it)
  - chain `[[0,1],[0,2]]` → `"011"` (center relabeled), 7-node tree renumbered (π: 0→3, 1→5, 2→1, 3→6, 4→0, 5→4, 6→2) → `"1011100"`, 5-leaf star → `"01111"` (no figure)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: example-1/example-2/solution-double-bfs label-edited (renumbered ids, marked shading kept on the same positions, distance columns recomputed); example-3 dropped — the 2-node tree admits no new example (ids forced 0,1), so the example itself was replaced by the star
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after one alt-text rewrite)
- Sandbox: function kind, deferred to batch run

### Notes

- **Overlap gate bites on figure alt text.** My first alt texts mirrored the
  source's structure ("A seven-node tree with one diameter … drawn thick; the
  shaded nodes …"), 7% > 6% limit. Alt text is prose to the gate — write it
  from scratch like any sentence.
- Renumbering is the structure-preserving move for tree figures: node id
  labels change, shading/thick-edge positions stay. The solution figure's
  distance columns then need recomputing for the new BFS starts (the reference
  picks `next(iter(one_end))`, i.e. node 2 here, not the first-listed member).
- The solution-figure's second-BFS start node should match what the reference
  actually picks; I initially labeled it "from 3" while the Python port picks
  2 — answer identical, but the picture should not contradict the code.
