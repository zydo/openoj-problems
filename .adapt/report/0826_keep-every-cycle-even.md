## 826 — Incremental Even-Weighted Cycle Queries

- New id / title / slug: 826 / Keep Every Cycle Even / `keep-every-cycle-even`
- Old → new API: `numberOfEdgesAdded` → `edgesAdmitted` (go `edgesAdmitted`, rust `edges_admitted`, ts `edgesAdmitted`); parameters `n`, `edges` kept
- Core algorithm / difficulty: DSU carrying path XOR, accept iff new cycle parity is even / H3 (unchanged)
- Statement rewritten from spec: yes (edges are now "offers" accepted or refused; the source's stray word "queries" is gone — there are no queries)
- Examples newly constructed: yes (structure-preserving: yes)
  - `n = 4`, triangle on 1-2-3: `[[1,2,0],[2,3,0],[1,3,1]]` → 2 (odd closing cycle), and the same triangle with one weight flipped `[[1,2,0],[2,3,1],[1,3,1]]` → 3 (even) — a minimal pair
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — both triangles renumbered to nodes 1, 2, 3 (node 0 isolated, noted in the text), weights and captions re-edited
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- **Stale-literal trap, hard version:** on 3 nodes every triangle's edge list
  contains `[0,2,0]` or `[0,2,1]`, and both exact strings appear in the
  source's public examples — so no 0/1/2 triangle example can pass the gate.
  Moving the triangle to nodes 1, 2, 3 (n = 4, node 0 isolated) escapes the
  literal set while keeping the drawn geometry; `[1,2,1]` is also a source
  literal, so the first edge is `[1,2,0]` in both examples.
- Renumbering a triangle figure is a pure text edit: circle labels, edge
  weights, the sum annotation, the header comment, and the caption.
