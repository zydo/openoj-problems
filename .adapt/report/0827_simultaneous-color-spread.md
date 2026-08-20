## 827 — Multi Source Flood Fill

- New id / title / slug: 827 / Simultaneous Color Spread / `simultaneous-color-spread`
- Old → new API: `colorGrid` → `finalColors` (go `finalColors`, rust `final_colors`, ts `finalColors`); parameters `n`, `m`, `sources` kept
- Core algorithm / difficulty: multi-source BFS, distance-first with max-color tie updates / H3 (unchanged)
- Statement rewritten from spec: yes (uncolored/painted cell vocabulary, lockstep steps)
- Examples newly constructed: yes (structure-preserving: yes)
  - corner seeds colors 2/3 `[[0,0,2],[2,2,3]]` → `[[2,2,3],[2,3,3],[3,3,3]]` (anti-diagonal ties), stacked seeds `[[0,1,4],[1,1,6]]` → `[[4,4,4],[6,6,6],[6,6,6]]` (no ties, first-come region), lone seed `[[1,1,7]]` → all 7
- Constraints: domain unchanged, presentation rewritten ("All (ri, ci) … distinct" reworded, same fact)
- Skeletons regenerated: all 7
- Figures: **regenerated** — all four figures' panel sequences are a deterministic function of the input, so a generator (`.localonly/g06/p3905_figs.py`) re-emits them from the originals' layout rules (34px/40px/44px pitches, panel origins, shading and blue-outline conventions); renders eyeballed via qlmanage
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓ (after alt-text + constraint rework)
- Sandbox: function kind, deferred to batch run

### Notes

- This was the wave's one true figure regeneration: three t=0,1,2 example
  panels plus the solution walkthrough. The highlight convention was unified
  to "cells whose color settles at the final shown step", which coincides with
  the tie cells in example 1.
- **Overlap gate, third trap:** templated alt text. Writing every alt as
  "Three NxN grids at t = 0, 1, and 2; …" reproduced the source's alt skeleton
  and 7-word shingles spanning the alt text, the image URL tokens
  (figures/example/svg), the following heading, and the next constraint line.
  Alts need the same from-scratch treatment as body prose.
- Constraint bullets with symbol soup ("All `(ri, ci)` in `sources` are
  distinct") are not in the background exclusion — reword the fact, keep the
  domain.
