## 0224 — Basic Calculator

- New id / title / slug: 224 / Calculator With Parentheses / `calculator-with-parentheses`
- Old → new API: `calculate` → `calculateWithParentheses` (go `calculateWithParentheses`, rust `calculate_with_parentheses`, ts `calculateWithParentheses`); parameter `s` kept (conventional)
- Core algorithm / difficulty: one-pass signed-term scan with a context stack for brackets / H2 (unchanged)
- Statement rewritten from spec: yes — the expression's alphabet is stated outright, and the unary-minus rule is given as a property of `'-'` rather than a list of valid/invalid strings
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"(8-(3+1))" → 4` (nesting), `"14 - (6 - 2) + 3" → 13` (group mid-sum), `"-(7-3)+2" → -2` (unary minus on a group)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility **✓ but reported FAIL by `adapt_gates.py` — the `rob`-class collision (`calculate` is both method and rust entrypoint)** stale ✓ overlap ✓

### Notes

- **Family: `calc`; sibling `0227_calculator-with-precedence` follows.** The
  titles differ by the one hypothesis each adds — brackets versus operator
  precedence — and the statements share their opening shape ("You are given a
  string `s` holding an arithmetic expression built from …") with the alphabet
  and the division rule swapped. The method names are
  `calculateWithParentheses` / `calculateWithPrecedence`: `calculate` is close
  to an unavoidable generic verb for this family, so the qualifier does the
  renaming work and keeps the two methods unmistakably kin.
- Fourth instance of the gate collision (after `rob`, `partition`), and the
  one predicted in the `0198` report. The stock gate rewrites the rust source
  solution with the camelCase name and cannot compile it; the per-language
  variant (`compat_lang.py` in this session's scratchpad) proves all seven
  source solutions pass 20/20 against this bundle's data.
- The source guide's six-step trace of `"(1+(4+5+2)-3)+(6+8)"` is the most
  example-shaped prose in the bundle. It was rebuilt from scratch on the new
  nested example `(8-(3+1))`, with every stack state re-derived by hand — the
  sign the inner `'('` sets aside is `-1` there, which the source's example
  never exercises (its pushed signs were all `+1`).
- The bundle's own `solution.rust` needed the second rename to
  `calculate_with_parentheses`, as in `0131` — the scaffold's single
  word-boundary pass always leaves rust at the method name.
