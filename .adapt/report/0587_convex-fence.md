## 0587 — Erect the Fence

- New id / title / slug: 587 / Convex Fence / `convex-fence`
- Old → new API: `outerTrees` → `fencePoints` (go `fencePoints`, rust `fence_points`,
  ts `fencePoints`); parameter `trees` → `positions`
- Core algorithm / difficulty: monotone-chain convex hull plus a collinear
  boundary recovery sweep / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `[[1,1],[5,1],[5,5],[1,5],[3,3],[2,1]]` (square hull, one interior point, one
    mid-edge point), `[[2,7],[2,3],[2,11],[2,5]]` (collinear degenerate),
    `[[4,9],[7,12]]` (two points)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — both example figures and the solution figure encode the
  point scatter in their polygon/circle geometry; no renderer exists for the
  family (only `container-lines`, `kadane-walk`)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a
  compatibility — see note — stale ✓ overlap ✓

### Notes

- **Parameter rename collision class.** Renaming `trees` → `points` broke five
  languages: the *source* reference solutions use `points` as a local variable
  (the deduplicated point list), and the compatibility gate applies the
  ledger's parameter renames to those sources, so `int[][] points = points`
  style collisions fail to compile. Choosing a new name the source never uses
  (`positions`) avoids the whole class. Worth a sweep rule: before committing
  to a parameter rename, grep the source solutions for the candidate name.
- **Ledger staleness blocks the gate.** The first fragment (`trees → points`)
  was merged into the ledger before the collision was discovered; the
  corrected fragment (`trees → positions`) now conflicts with it, and
  `adapt_merge.py` keeps a conflicting fragment in place rather than updating
  the entry. Until the ledger entry is refreshed, `adapt_gates.py` applies the
  old `trees → points` map to the source solutions and compatibility fails for
  cpp/go/java/js/ts. A local simulation of the gate with the corrected map
  passes 7/7 (17/17 cases each). The ledger needs the entry for
  `0587_convex-fence` replaced with the fragment now sitting in
  `.adapt/incoming/0587_convex-fence.json`.
- `comparison` is `exact`, so the statement makes no "any order" promise — the
  judge expects the reference's deterministic order (hull counter-clockwise,
  recovered mid-edge points appended). The source statement promised "any
  order" its own judge does not honor.
- Family: this is part I of the fence pair; 1924 becomes `Circular Fence`
  (`fenceCircle`) so kinship stays visible.
