## 824 — Minimum Cost to Repair Edges to Traverse a Graph

- New id / title / slug: 824 / Smallest Clearing Budget for a Short Route / `smallest-clearing-budget-for-a-short-route`
- Old → new API: `minCost` → `smallestBudget` (go `smallestBudget`, rust `smallest_budget`, ts `smallestBudget`); parameters `n`, `edges`, `k` kept
- Core algorithm / difficulty: binary search on the budget with a k-bounded BFS feasibility check / H3 (unchanged)
- Statement rewritten from spec: yes ("repair" reframed as clearing blocked links at prices; `money` kept as the budget's name so port comments stay honest)
- Examples newly constructed: yes (structure-preserving: yes — same graph shapes, new weights)
  - triangle `[[0,1,4],[1,2,6],[0,2,40]] k=1` → 40, six-node graph `[[0,2,6],[2,3,5],[3,4,8],[4,5,6],[0,1,9],[1,5,20],[0,3,7],[1,2,11],[2,4,13]] k=2` → 20, isolated target `[[0,1,3]] k=1` → -1
- Constraints: domain unchanged, presentation rewritten (self-loop/duplicate phrasing reworded, same facts)
- Skeletons regenerated: all 7
- Figures: labels updated — all three kept their node/edge geometry; weight labels, comments, and captions re-edited
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after one rework, see notes)
- Sandbox: function kind, deferred to batch run

### Notes

- **Overlap gate traps in this one, two kinds.** (1) Boilerplate constraints:
  "There are no self-loops or duplicate edges" is *not* in the background
  exclusion (too few bundles share the exact 7-run), so reword it. (2) Image
  markdown is prose to the gate: the shingle "costs figures example svg
  example three nodes" arose purely because my E2 alt ended with "…costs 20."
  before `](figures/example-2.svg)` and the E3 alt began "Three nodes" — same
  structural spot as the source. Vary what precedes/follows image links, not
  just the alt text itself.
- Port comments got the sanctioned terminology update (repair → clear,
  `minCost` → `smallestBudget`) by word-boundary regex; `can(money)` and other
  locals untouched.
- The E2 weights were chosen so the unique ≤2-edge route stays 0-1-5 and no
  new edge triple (e.g. `[1,2,10]`) reproduces a source public literal.
