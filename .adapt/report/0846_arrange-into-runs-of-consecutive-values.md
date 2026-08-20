## 0846 — Hand of Straights

- New id / title / slug: 846 / Arrange Into Runs of Consecutive Values /
  `arrange-into-runs-of-consecutive-values`
- Old → new API: `isNStraightHand` → `arrangeIntoConsecutiveRuns` (Go and
  TypeScript `arrangeIntoConsecutiveRuns`, Rust `is_n_straight_hand` →
  `arrange_into_consecutive_runs`)
- Core algorithm / difficulty: greedy consumption from sorted frequency
  counts / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh multisets cover two disjoint valid runs and a missing-successor
    failure
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 17/17 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Naming remains kin to sibling adaptation 1296, "Split Into Runs of k
  Consecutive Values," while keeping the two titles distinguishable.
- Independent frequency consumption confirms both public results.
- The 15 hidden cases are data-identical to the source corpus.
