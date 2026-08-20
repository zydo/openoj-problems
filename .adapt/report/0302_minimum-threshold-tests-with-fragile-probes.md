## 302 — Super Egg Drop

- New id / title / slug: 302 / Minimum Threshold Tests With Fragile Probes /
  `minimum-threshold-tests-with-fragile-probes`
- Old → new API: `superEggDrop` → `minimumFragileProbeTests` (Go and
  TypeScript `minimumFragileProbeTests`, Rust `super_egg_drop` →
  `minimum_fragile_probe_tests`)
- Core algorithm / difficulty: moves-first coverage dynamic programming / H4
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh probe and level counts cover linear, two-probe, and three-probe
    thresholds
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Independent binomial-coverage calculations confirm public answers `7`, `4`,
  and `5`.
- The 13 hidden cases are data-identical to the source corpus.
