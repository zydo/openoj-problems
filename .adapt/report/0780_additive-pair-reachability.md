## 0780 — Reaching Points

- New id / title / slug: 780 / Additive Pair Reachability /
  `additive-pair-reachability`
- Old → new API: `reachingPoints` → `canTransformAdditivePair` (Go and
  TypeScript `canTransformAdditivePair`, Rust `reaching_points` →
  `can_transform_additive_pair`)
- Core algorithm / difficulty: reverse Euclidean reduction / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - one multi-step reachable pair, one unreachable pair, and an unchanged
    start/goal pair
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- A bounded forward breadth-first search independently confirms all public
  booleans.
- The 13 hidden cases are data-identical to the source corpus.
