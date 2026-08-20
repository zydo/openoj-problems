## 1004 — Max Consecutive Ones III

- New id / title / slug: 1004 / Longest Ones Run After K Flips / `longest-ones-run-after-k-flips`
- Old → new API: `longestOnes` → `longestOnesRunAfterKFlips` (go `longestOnesRunAfterKFlips`, rust `longest_ones_run_after_k_flips`, ts `longestOnesRunAfterKFlips`); parameters `nums`, `k` kept
- Core algorithm / difficulty: two-pointer window capped at k zeros / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,1,1,0,1]` k=1 → 4, `[1,0,0,1,1]` k=0 → 2 (no-flip extreme), `[0,1,1,0,0,1,1,1,0,1]` k=2 → 7 (two adjacent zeros absorbed)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title deliberately parallels 2024's `Longest Uniform Run After K Flips`
  (`longestUniformRunAfterKFlips`): both are k-flip run problems, kept
  distinguishable by Ones vs Uniform.
- Source has no sibling I/II in this bank (485/487 were never authored), so no
  wider family naming to reconcile.
- Binary example arrays are two-symbol literals, exempt from the stale-value
  rule by design; the data was still constructed fresh and checked against
  hidden inputs.
