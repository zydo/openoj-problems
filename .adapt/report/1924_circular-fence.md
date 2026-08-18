## 1924 — Erect the Fence II

- New id / title / slug: 1924 / Circular Fence / `circular-fence`
- Old → new API: `outerTrees` → `fenceCircle` (go `fenceCircle`, rust
  `fence_circle`, ts `fenceCircle`); parameter `trees` → `positions`
- Core algorithm / difficulty: Welzl's incremental smallest enclosing circle /
  H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[0,0],[6,8],[1,1]]` (diameter circle, third point interior),
    `[[0,2],[4,2],[2,6]]` (three-point circumcircle, half-integer center),
    `[[3,4]]` (radius-0 single point)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the circles' centers and radii are the example data; no
  renderer for the family
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a
  compatibility ✓ stale ✓ overlap ✓

### Notes

- Family naming decided together with `0587_convex-fence`: Convex Fence /
  Circular Fence, `fencePoints` / `fenceCircle`, shared parameter rename
  `trees` → `positions`. Kinship stays visible at title, slug, and API level.
- Both members of the family conveniently had the same source method name
  (`outerTrees`); the two new names differ, so the Solutions-tab matcher has
  nothing to confuse.
- `positions` was grepped against the source solutions before adopting it —
  the collision class that bit 0587 (see its report) cannot recur here.
- The source constraints do not promise distinct positions (hidden data
  includes 50 copies of one point), so the statement stays silent on
  uniqueness — unlike its sibling, which does promise it.
