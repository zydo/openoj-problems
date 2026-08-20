## 69 — House Robber III

- New id / title / slug: 69 / Non-Adjacent Loot in a Tree / `non-adjacent-loot-in-a-tree`
- Old → new API: `rob` → `maxNonAdjacentLoot` (go `maxNonAdjacentLoot`, rust `max_non_adjacent_loot`, ts `maxNonAdjacentLoot`); parameter `root` kept (conventional)
- Core algorithm / difficulty: post-order tree DP returning (take, skip) per subtree / H2 (unchanged)
- Statement rewritten from spec: yes — burglary scenario dropped; framed as the family vocabulary introduced by `0068_maximum-non-adjacent-loot` (nodes hold values, chosen nodes must not be a parent and child, choosing nothing allowed)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[4,1,2,null,5,null,6] → 15` (root plus both leaves), `[2,9,8,3,4,null,5] → 17` (the two middle nodes; taking the root would cap at 14)
  - Same tree shapes as the source figures, values changed only
- Constraints: domain unchanged (1–10⁴ nodes, values 0–10⁴), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `example-1.svg`, `example-2.svg`, and `solution-rob-skip-pairs.svg` renamed to `solution-take-skip-pairs.svg` (filename carried the old API word `rob`) with the new example's pairs; geometry untouched
- Family: `house-robber` — part I `0068_maximum-non-adjacent-loot` already on disk; this is part III. `0213_house-robber-ii` (part II) is not adapted yet and should be titled to match (e.g. *Maximum Non-Adjacent Loot, Circular*). Part IV `2560_house-robber-iv` adapted in this chunk as `0070_non-adjacent-loot-under-a-cap`
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility **✓ but reported FAIL by `adapt_gates.py` — the rename-ordering bug documented in the 0198 report** stale ✓ overlap ✓
- Compatibility proven instead with `.localonly/adapt-chunk7/compat_lang.py` (per-language entrypoint renames): all 7 source solutions renamed per language, 17/17 cases

### Notes

- Same gate bug as 0198: source method and go/rust entrypoints are all the
  single token `rob`. The gate's flat rename list applies the method rename
  first, so the rust rule finds nothing and `solution.rust` fails E0599.
  Not fixable from the bundle side; `compat_lang.py` in this chunk's
  scratchpad is the per-file workaround and proves decision 5 holds.
- `mk.py` (the wave-2 scaffolder) applies one rename list to every language,
  so for a bundle whose method equals a rust entrypoint token the rename
  must be applied per file by hand afterwards — rust gets
  `max_non_adjacent_loot`, everything else `maxNonAdjacentLoot`.
- The blind rename would leave `robHere`/`rob_here`/`leftRob` and
  "Robbing here forbids…" comments in the solutions; all were rewritten to
  take/skip vocabulary (0198 set the precedent with `take`).
