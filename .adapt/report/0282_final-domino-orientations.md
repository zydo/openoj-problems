## 282 — Push Dominoes

- New id / title / slug: 282 / Final Domino Orientations /
  `final-domino-orientations`
- Old → new API: `pushDominoes` → `resolveDominoOrientations` (Go and
  TypeScript `resolveDominoOrientations`, Rust `push_dominoes` →
  `resolve_domino_orientations`)
- Core algorithm / difficulty: opposing-force accumulation with two scans /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no)
  - fresh patterns cover balanced collision, unopposed propagation, and
    outward-facing pushes
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped because both source SVGs encode the replaced states and
  force walkthrough
- Gates: check ✓; verify ✓ (7/7 solutions, 20/20 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Direct second-by-second simulation independently confirms all public final
  states.
- The 17 hidden cases are data-identical to the source corpus.
