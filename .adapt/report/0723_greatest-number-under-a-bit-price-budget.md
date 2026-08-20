## 723 — Maximum Number That Sum of the Prices Is Less Than or Equal to K

- New id / title / slug: 723 / Greatest Number Under a Bit-Price Budget / `greatest-number-under-a-bit-price-budget`
- Old → new API: `findMaximumNumber` → `greatestUnderBudget` (go `greatestUnderBudget`, rust `greatest_under_budget`, ts `greatestUnderBudget`); parameters `k`, `x` kept
- Core algorithm / difficulty: binary search on the monotone running cost, closed-form per-position set-bit counting / H4 (unchanged)
- Statement rewritten from spec: yes ("price of a number / accumulated price / cheap" reframed as watched bits, price, running cost, budget)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `k=6, x=1` → 4; `k=4, x=2` → 7; `k=15, x=3` → 30 (plateau shape — running cost flat between watched-bit blocks)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Hand-computing the expecteds was wrong twice; the generator's brute-force
  cross-check caught both before any statement was written around them. On
  bit-position problems, always let the table decide the explanation.
- The example tables in the explanations (prices and running costs) were
  emitted by a script, not typed.
