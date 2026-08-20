## 281 — New 21 Game

- New id / title / slug: 281 / Bounded Final Score Probability /
  `bounded-final-score-probability`
- Old → new API: `new21Game` → `boundedFinalScoreProbability` (Go and
  TypeScript `boundedFinalScoreProbability`, Rust `new21_game` →
  `bounded_final_score_probability`)
- Core algorithm / difficulty: sliding-window probability dynamic programming
  / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - fresh thresholds cover partial, certain, and short-process probabilities
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 solutions, 19/19 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exact fractional dynamic programming confirms public results `65/81`, `1`,
  and `5/8`.
- The 16 hidden cases are data-identical to the source corpus.
