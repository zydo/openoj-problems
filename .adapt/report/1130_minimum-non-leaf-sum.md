## 1130 — Minimum Cost Tree From Leaf Values

- New id / title / slug: 1130 / Minimum Non-Leaf Sum / `minimum-non-leaf-sum`
- Old → new API: `mctFromLeafValues` → `minimumNonLeafSum` (go `minimumNonLeafSum`, rust `minimum_non_leaf_sum`, ts `minimumNonLeafSum`); parameter `arr` → `leaves`
- Core algorithm / difficulty: interval DP with per-slice maxima table / H3 (unchanged)
- Statement rewritten from spec: yes (tree/value definition re-derived from the spec; prose and examples new)
- Examples newly constructed: yes (structure-preserving: yes — both example figures keep their tree shapes, only node values change)
  - `[5,3,2]` → 21 (figure pair: 25 vs 21); `[7,12]` → 84 (forced root); `[2,9,1,8]` → 98 (peel-then-join witness 2·9 + 9·8 + 1·8)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: example-1/2.svg labels updated (internal-node values recomputed for the new leaves); `solution-leaf-trees.svg` dropped — it walks the source example data (6/2/4 arithmetic in captions), and its node-label semantics are not cleanly recoverable, so phase 2 can decide on a redraw
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Second wave hit for the alt-text trap (after 1102): the image lines
  "A single tree with root … over the leaves …" and "splitting after …
  costs …" mirrored the source alt text and blew the overlap gate.
  Structure the alt text differently from the source, not just the data.
- Tree figures are safe label edits as long as the new leaves keep the
  drawn shape optimal on the highlighted side (here the right tree stays
  the winner, 21 < 25); every internal label was recomputed, not copied.
- `arr` → `leaves` grepped safe (no identifier `leaves` in any source
  solution).
