## 1691 — Maximum Height by Stacking Cuboids

- New id / title / slug: 1691 / Tallest Cuboid Stack / `tallest-cuboid-stack`
- Old → new API: `maxHeight` → `tallestStack` (go `tallestStack`, rust `tallest_stack`, ts `tallestStack`); parameter `cuboids` kept (`boxes` was wanted but every source solution declares a local `boxes` — the 0587 trap, avoided)
- Core algorithm / difficulty: sort each triple (largest up), lexicographic sort, longest-chain DP over nesting / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `[[20,40,10],[50,20,30],[40,60,30]]` → 150 (sorted triples 10/20/40, 20/30/50, 30/40/60 nest in a chain; reused in the guide), `[[45,12,30],[9,62,18]]` → 62 (no orientation seats either on the other), six permutations of `15/9/12` → 90
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `example-1.svg` drew the source's example in isometric 3D with box sizes proportional to the data (1.2 px/unit recovered from rect sizes), and the per-box placement insets are hand-set rather than formulaic; no renderer exists for the family. Phase two can redraw a stack for the new example.
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The figure was the loss case the protocol anticipates: geometry encodes
  the data. Partial rule recovery was possible (uniform 1.2 px/unit on both
  axes, depth offset = second measure × 0.6) but the stacking insets between
  boxes follow no formula I could extract, so a regeneration risked a
  visibly wrong drawing.
- Example 3 keeps the source's permutation-set shape (six orderings of one
  triple) with fresh numbers, which is the clearest demonstration that
  rotation makes all six identical.
