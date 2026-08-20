## 521 — Minimum Cost to Change the Final Value of Expression

- New id / title / slug: 521 / Least Edits to Invert an Expression / `least-edits-to-invert-an-expression`
- Old → new API: `minOperationsToFlip` → `leastEditsToInvert` (go `leastEditsToInvert`, rust `least_edits_to_invert`, ts `leastEditsToInvert`); parameter `expression` kept (conventional)
- Core algorithm / difficulty: stack evaluation folding `(value, flip-cost)` pairs left to right, case analysis per operator / H4 (unchanged)
- Statement rewritten from spec: yes — evaluation order restated (parens first, then strict left-to-right, illustrated with `1|0&1 = (1|0)&1`), the four single-character edits given as two families
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"1|(0&0)" → 1` (operator swap suffices), `"0&0&0" → 2` (digit flip + operator swap), `"(0&0&0)&(0&0)" → 3` (parenthesized chain)
- Constraints: domain unchanged (length ≤ 10⁵, same alphabet, no empty parens), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The generator brute-forces all edit sets up to size 4 against a plain
  evaluator to validate each public expectation — worth it here, the
  fold-cost recurrence is easy to get subtly wrong (chained `0&0&0` is 2,
  not 3: raise the tail and open an OR gate).
- Left-to-right grouping had to be stated and shown (`1|0&1`), since the
  no-precedence rule is load-bearing for the data.
