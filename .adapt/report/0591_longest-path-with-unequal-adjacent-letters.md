## 591 — Longest Path With Different Adjacent Characters

- New id / title / slug: 591 / Longest Path With Unequal Adjacent Letters / `longest-path-with-unequal-adjacent-letters`
- Old → new API: `longestPath` → `longestUnequalPath` (go `longestUnequalPath`, rust `longest_unequal_path`, ts `longestUnequalPath`); parameters `parent`, `s` kept
- Core algorithm / difficulty: postorder tree DP on `down[u]` (longest legal chain into the subtree), top-two child chains joined through each node, iterative order to dodge recursion depth / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes, via renumbering)
  - `[-1,0,1,0,3,3] s "mmsrtr"` → 3 (same drawn shape as the source example, renumbered nodes so the parent array is new; blocked edges moved with the letters), `[-1,0,0,2] s "mmrt"` → 3 (star replaced by a broom — see notes), `[-1,0,1,2,3] s "qwert"` → 5 (whole chain legal)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: example-1 and solution-tree-chains label-edited (letters, node ids, comments, narration; down values unchanged); example-2 dropped
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate flags the literal source `parent` array even when the letters
  are new. For most tree shapes a renumbering (same drawn geometry, new node
  ids, letters assigned by position) gives a new parent array and keeps the
  figure — that is how example-1 and the solution figure survived.
- A rooted star's parent array is forced (`[-1,0,0,0]` for n=4, root always
  node 0), so no renumbering exists; example-2 changed shape (broom) and its
  figure was dropped rather than redrawn. Phase 2 may redraw it.
- Renumbering touches everything that names node ids: statement explanations,
  SVG id texts, comments, the solution figure's narration, and the alt text.
  One missed reference (solutions.md paragraph) was caught on re-read — sweep
  for old ids after any renumber.
