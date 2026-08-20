## 468 — Min Cost to Connect All Points

- New id / title / slug: 468 / Least Wiring to Connect All Points / `least-wiring-to-connect-all-points`
- Old → new API: `minCostConnectPoints` → `leastWiringCost` (go `leastWiringCost`, rust `least_wiring_cost`, ts `leastWiringCost`); parameter `points` kept (conventional)
- Core algorithm / difficulty: O(n²) Prim MST over Manhattan distances on a complete graph / H3 (unchanged)
- Statement rewritten from spec: yes — wire runs between points, each run measured by Manhattan distance, wiring finished when every pair is joined by a path
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — five points, four MST edges, both figures keep their layouts)
  - `[[1,1],[2,4],[5,3],[7,6],[8,1]] → 18` (rising zigzag; MST edges 4, 4, 5, 5)
  - `[[-6,2],[1,9],[3,0]] → 22` (three points, two runs of 11), `[[7,-3]] → 0` (single point)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — `example-1.svg` (grid scatter, `x = 50 + 30·u`, `y = 320 - 30·v`) and `solution-prim-tree.svg` (affine map documented in a source comment) re-emitted for the new points by `.localonly/wave-e-05/figs_1584.py`; renders eyeballed, including a high-res crop to confirm cost labels clear their edges (a low-res vision read claimed overlaps the coordinates disproved)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after rewrite)

### Notes

- The overlap gate caught a real slip: my first draft opened "You are given an
  array `points` of integer coordinates on a plane, where …" — sentence-for-
  sentence the source opener — and copied its figure alt-text shape. Both were
  rewritten; the gate went green. "You are given an array X of …" is exactly
  the reflex to watch for when the input type survives verbatim.
- The x/y-index notation `points[i] = [xi, yi]` is codec notation (functional
  fact) and survives, but inside a fresh sentence.
