## 242 — Daily Temperatures

- New id / title / slug: 242 / Steps to a Higher Reading /
  `steps-to-a-higher-reading`
- Old → new API: `dailyTemperatures` → `stepsUntilHigher` (Go and TypeScript
  `stepsUntilHigher`, Rust `daily_temperatures` → `steps_until_higher`)
- Core algorithm / difficulty: monotonic stack of unresolved indices / H2
  (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - delayed resolution, equal-reading strictness, and a decreasing sequence
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- A direct forward scan independently confirms every public waiting distance.
- The 13 hidden cases are data-identical to the source corpus.
