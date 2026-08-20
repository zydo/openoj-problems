## 111 — Expression Add Operators

- New id / title / slug: 111 / Operators Between Digits / `operators-between-digits`
- Old → new API: `addOperators` → `operatorsBetweenDigits` (go `operatorsBetweenDigits`, rust `operators_between_digits`, ts `operatorsBetweenDigits`); parameters `num`, `target` kept
- Core algorithm / difficulty: backtracking over operand splits and operators, evaluation carried in state, trailing-multiplicand handling for `'*'` / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"345" 23 → ["3+4*5"]` (precedence), `"204" 6 → ["2-0+4","2+0+4"]` (lone-zero operand), `"77777" 1 → []`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- `comparison` is `sorted`, so "in any order" in the description is honest;
  public-case expected arrays stored sorted.
- The precedence and leading-zero rules are functional facts of the judged
  task, so both survive the rewrite verbatim in meaning and are stated
  plainly in the description rather than buried in notes.
