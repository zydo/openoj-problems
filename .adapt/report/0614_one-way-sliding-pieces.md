## 614 — Move Pieces to Obtain a String

- New id / title / slug: 614 / One-Way Sliding Pieces / `one-way-sliding-pieces`
- Old → new API: `canChange` → `canReach` (go `canReach`, rust `can_reach`, ts `canReach`)
- Core algorithm / difficulty: lockstep matching of non-blank pieces, order invariance + direction inequalities / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — figure dropped)
  - `"__LR___" → "L_____R"` true, `"_RL_" → "LR__"` false (order swap), `"L__R" → "__LR"` false (L asked to move right)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the solution figure's cell fills and match arrows encode
  the source example structurally; no renderer exists for the family, and the
  string alphabet leaves no structure to preserve (a same-shape example would
  be the same example)
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
