## 0879 — Profitable Schemes

- New id / title / slug: 879 / Count Task Selections / `count-task-selections`
- Old → new API: `profitableSchemes` → `countTaskSelections` (go `countTaskSelections`, rust `count_task_selections`, ts `countTaskSelections`); parameters `minProfit` → `minPayoff`, `group` → `crew`, `profit` → `payoff`; `n` kept
- Core algorithm / difficulty: 0-1 knapsack counting with the second axis clamped at the threshold / H3 (unchanged)
- Statement rewritten from spec: yes — the crime framing is gone; the exclusivity rule is stated as workers being committed, and the empty selection is called out explicitly (it is what makes `minPayoff = 0` work)
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `n=7, minPayoff=5, crew=[3,4,2], payoff=[4,3,1] → 2`, `n=4, minPayoff=0, ... → 3` (the zero-floor / empty-set shape), `n=12, minPayoff=2, crew=[4,4,4], payoff=[9,9,9] → 7` (everything fits)
- Constraints: domain unchanged, presentation rewritten (the two array lengths folded into one line)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source `solutions.md` carried a four-step table walkthrough. Reconstructing
  it for the new example, I wrote the steps from reasoning and then **ran the DP
  and printed the row** — two of the four steps were wrong. Worked examples in
  `solutions.md` need the same "run it, don't reason it" discipline as expected
  values; a wrong trace is invisible to every gate.
- Renaming the solutions' local `members` → `workers` alongside the parameter
  renames keeps the comments coherent with the new statement. Locals are not
  checked by the stale gate, but leaving them makes the guide and the code use
  two vocabularies.
