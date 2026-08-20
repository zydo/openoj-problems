## 666 — Maximum Star Sum of a Graph

- New id / title / slug: 666 / Largest Star Sum in a Graph / `largest-star-sum-in-a-graph`
- Old → new API: `maxStarSum` → `largestStarSum` (go `largestStarSum`, rust `largest_star_sum`, ts `largestStarSum`); parameters `vals`, `edges`, `k` kept
- Core algorithm / difficulty: per-center greedy over neighbor values sorted descending, stop at first non-positive, seed with `max(vals)` / H2 (unchanged)
- Statement rewritten from spec: yes (star redefined from scratch — at most `k` edges sharing one endpoint, zero-edge star = center alone)
- Examples newly constructed: yes (structure-preserving: yes — both figures kept, same graph shapes, values only)
  - `vals=[5,3,1,6,8,-7,-2]`, `k=2` → 17 (winning star still centered at node 3 keeping neighbours 1 and 4, so the highlight geometry survived unchanged), `vals=[-8]`, `k=0` → -8 (lone negative node), `vals=[2,9,7,-1]`, `k=2` → 18 (budget binds: three positive-ish neighbours, two edges allowed)
- Constraints: domain unchanged, presentation rewritten (placeholder pair `[ai, bi]` → `[u, v]`)
- Skeletons regenerated: all 7
- Figures: labels updated (example-1 and example-2; edge lines, star highlight and node positions untouched)
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Alt-text skeleton trap again (second hit after 2479): numbers are stripped
  by shingle normalization, so "the star centered at node 3 with neighbours 1
  and 4 sums to 17" still shares a 7-word run with the source's identical
  sentence around 16. Structure-preserving figure edits must extend to
  rewriting the alt sentence, not just substituting values. Budget for this on
  every figure problem before running the gate.
- Example 1's new values were chosen so the winning center AND the kept
  neighbour set stay node-identical (center 3 keeps neighbours 1 and 4),
  which is what lets the figure's blue highlight stay geometrically correct.
