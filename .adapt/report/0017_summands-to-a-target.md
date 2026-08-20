## 17 — Combination Sum

- New id / title / slug: 17 / Summands To A Target / `summands-to-a-target`
- Old → new API: `combinationSum` → `summandsToTarget` (go `summandsToTarget`, rust `summands_to_target`, ts `summandsToTarget`)
- Core algorithm / difficulty: backtracking with a non-decreasing start index / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes — the search-tree figure has a fixed node layout, and `[3,4,8,10]` with target 10 reproduces it branch for branch)
  - `[3,4,8,10] target 10` → `[[3,3,4],[10]]`, `[6,4,9] target 14` → `[[6,4,4]]` (unsorted candidates), `[5] target 3` → `[]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (`solution-backtracking-tree.svg` — all nine node labels and both solution callouts)
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Finding a structure-preserving example for a *search-tree* figure is more
  tractable than it looks. The drawn tree is a shape constraint — four root
  children, one of them dead, one a hit, a two-child and a one-child subtree —
  and solving for candidates that produce that shape took a few minutes of
  arithmetic. Worth trying before reaching for "dropped".
- `comparison` is `exact` for this bundle, so the expected lists are the
  reference solution's own emission order and example 2 deliberately shows it:
  `[6,4,4]` is the path in candidate-index order, not sorted. That also makes
  the skip-don't-break point in the guide concrete.
- The title is deliberately in the same register as the existing
  "Fewest Square Summands" (0279) without overlapping it — a different problem
  about the same vocabulary.
