## 0808 — Soup Servings

- New id / title / slug: 808 / Probability of Emptying First / `probability-of-emptying-first`
- Old → new API: `soupServings` → `emptyFirstProbability` (go `emptyFirstProbability`, rust `empty_first_probability`, ts `emptyFirstProbability`); parameter `n` kept
- Core algorithm / difficulty: memoised probability DP on rescaled counts, with a constant cutoff once the answer is inside tolerance / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `n = 20` → 0.625 (one step; every branch enumerable in the explanation)
  - `n = 200` → 0.796875 (several steps deep)
  - `n = 3000` → 0.9997529725570642 (shows the answer approaching 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `invocation.comparison` is `"close"` and `return_type` is `{"kind":"number"}`;
  both were carried over untouched, and the public expectations are full-precision
  floats straight from the reference solution. The statement quotes them rounded
  to five decimals, as the source did — nothing cross-checks the two, and the
  judge compares against `cases.json`.
- The scenario was re-abstracted: two piles of units drained by four equally
  likely moves. The four move sizes (`100/0`, `75/25`, `50/50`, `25/75`), the
  half-credit tie rule, the `10^-5` tolerance and the `0 <= n <= 10^9` bound are
  functional facts and are unchanged.
- Chosen example inputs avoid every hidden input (0, 1, 24, 25, 26, 75, 101,
  125, 625, 1000, 2500, 4450, 4451, 5000, 100000, 999999999, 10^9) as well as
  the source's own 50 and 100.
