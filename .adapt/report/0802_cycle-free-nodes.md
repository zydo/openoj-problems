## 0802 — Find Eventual Safe States

- New id / title / slug: 802 / Cycle-Free Nodes / `cycle-free-nodes`
- Old → new API: `eventualSafeNodes` → `cycleFreeNodes` (go `cycleFreeNodes`, rust `cycle_free_nodes`, ts `cycleFreeNodes`)
- Core algorithm / difficulty: Kahn peel on the edge-reversed graph / H3 (unchanged)
- Statement rewritten from spec: yes — defined through walks that never stop rather than through "terminal" and "safe" labels, so the property being asked for is stated once instead of layered in two definitions
- Examples newly constructed: yes (structure-preserving: no — see figures)
  - `[[1],[2],[0,3],[4],[],[3]] → [3,4,5]` (a ring with one exit that does not save it), `[[0,1],[2],[],[]] → [1,2,3]` (self-loop), `[[1],[2],[0]] → []` (empty answer)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **dropped** — both `example-1.svg` and `solution-safe-states.svg`
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Both figures had to go, and for the same reason: a directed-graph drawing encodes
  its edge set in the geometry of the arcs, so "preserve the drawn structure and
  change only the values" has no meaning here — preserving the structure *is*
  keeping the source's example. There is no `graph` renderer in `adapt_figures.py`.
  This will recur for every adjacency-list problem that ships a node-and-arc
  picture; a generic small-digraph renderer would pay for itself across the batch.
- The solution figure was dropped even though it illustrates the algorithm, because
  it walks the algorithm over the source's example graph. Phase 2 can redraw it
  against the new example 1, which was deliberately chosen to be drawable: six
  nodes, one three-node ring, one side entrance.
