## 780 — Minimize the Maximum Edge Weight of Graph

- New id / title / slug: 780 / Least Weight Cap for Reaching Node Zero / `least-weight-cap-for-reaching-node-zero`
- Old → new API: `minMaxWeight` → `leastWeightCap` (go `leastWeightCap`, rust `least_weight_cap`, ts `leastWeightCap`); parameters `n`, `edges`, `threshold` kept
- Core algorithm / difficulty: binary search the weight cap; per test, a stack DFS from node 0 over reversed edges with `w <= limit`; the out-degree cap provably never binds / H4 (unchanged)
- Statement rewritten from spec: yes (deletion task, both conditions, cap-of-heaviest-remaining-edge framing restated from scratch)
- Examples newly constructed: yes (structure-preserving: yes — examples 1 and 3 keep the source topologies and node layouts, weights changed)
  - ex1 `[[1,0,2],[2,0,5],[3,0,2],[4,3,3],[2,1,4]], t=2` → 4; ex2 `[[0,1,2],[1,2,3],[2,3,4]], t=1` → -1; ex3 `[[1,2,3],[1,3,6],[1,4,7],[2,3,4],[3,4,5],[4,0,2]], t=1` → 5; ex4 = ex3 without `3 -> 4` → -1 (stranded node)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: both `example-*.svg` **labels updated** — node positions and edge geometry untouched (they encode the kept topology, which the new examples preserve); weights, removed-edge labels, and captions rewritten; alt texts rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- First overlap failure of this wave: the figure **alt texts inside
  statement.md** are prose to the gate, and my first drafts shared 7-word
  runs with the source's alt texts (16% > 6%). Rewriting the alt texts from
  the picture, not from the source's wording, fixed it. Alt text counts —
  write it fresh like any other sentence.
- Expected values from `.localonly/wave-g-02/cases_3419.py`: reference
  cross-checked against a subset-enumerating brute force that honours the
  out-degree cap exactly (also re-confirming that the cap never binds).
- Graph figures: keeping the topology and changing only weights is the
  structure-preserving move here, since the drawing *is* the topology. The
  dashed "removed" edges happened to stay the same edges because the new
  weights keep the same optimal witness.
