## 147 — Guess Number Higher or Lower II

- New id / title / slug: 147 / Guaranteed Guessing Budget / `guaranteed-guessing-budget`
- Old → new API: `getMoneyAmount` → `guessingBudget` (go `guessingBudget`, rust `guessing_budget`, ts `guessingBudget`); parameter `n` kept (conventional)
- Core algorithm / difficulty: interval minimax DP filled by stretch length / H4 (unchanged)
- Statement rewritten from spec: yes — written as an adversary hiding an integer and charging you the value of each wrong name, with the min-over-strategy / max-over-reply structure stated in one sentence rather than as a rules list
- Examples newly constructed: yes (structure-preserving: no — figure dropped)
  - `n = 9 → 14` (full strategy walk: open at 6, worst branch 6 + 8), `n = 16 → 34` (worst branch 13 + 9 + 5 + 7)
  - Both inputs checked against the 15 hidden cases, which already cover n = 3..8, 12, 15, 20, 25, 30, 50, 75, 100, 200; 9 and 16 are free, and the source's own 10 / 1 / 2 were avoided
- Constraints: domain unchanged, presentation rewritten (`1 <= n <= 200` has essentially one presentation; it is stated as a sentence about `n` rather than a bare bullet)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: **dropped** — `figures/example-1.svg` drew the decision tree for `n = 10`, and both the topology (five internal nodes, five leaves) and every label encode that one value of `n`. No value of `n` other than 10 produces that tree, so a label edit cannot preserve it. Phase 2 should decide whether to redraw for `n = 9`; the shape needed is smaller (root plus two internal nodes plus four leaves)
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Single-integer-input problems have a very small example space, and here the
  hidden cases consume most of it. Checking the hidden inputs *before* choosing
  examples is worth doing first, not last: the natural picks (small n) were all
  taken.
- The optimal opening probe for `n = 9` is 6, not the midpoint. That is worth
  saying in the guide — it is the one place a reader's binary-search instinct
  misleads them, and it costs nothing to state.
