## 0227 — Basic Calculator II

- New id / title / slug: 227 / Calculator With Precedence / `calculator-with-precedence`
- Old → new API: `calculate` → `calculateWithPrecedence` (go `calculateWithPrecedence`, rust `calculate_with_precedence`, ts `calculateWithPrecedence`); parameter `s` kept (conventional)
- Core algorithm / difficulty: single pass deferring additions over a stack of signed terms / H2 (unchanged)
- Statement rewritten from spec: yes — precedence is stated as a rule of the expression, and truncating division is described as "drops the remainder of a negative quotient toward zero rather than down"
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"7+6/3" → 9` (division first), `" 2*3-10/4 " → 4` (truncation inside a subtraction, spaces), `"8-12/5*2" → 4` (left-to-right within a term)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility **✓ but reported FAIL by `adapt_gates.py` — same `calculate`/`calculate` collision as 0224** stale ✓ overlap ✓

### Notes

- **Family: `calc`, written straight after `0224_calculator-with-parentheses`.**
  Shared opening sentence and shared "do not call on anything that evaluates
  expression text" note; the alphabet bullet and the division rule are the
  only differences in the description, mirroring the titles. Method names pair
  as `calculateWithParentheses` / `calculateWithPrecedence`.
- Same stock-gate collision as its sibling; proven with the per-language
  variant (`compat_lang.py`), all seven source solutions 19/19.
- The two statements now say *different* things about unary operators, and
  that is faithful to the sources: `0224` explicitly allows a leading `'-'`,
  `0227` guarantees a valid expression with no mention of unary forms. Copying
  one family wording for both would have changed the spec — the divergence is
  deliberate and worth preserving in any future sibling.
- Hint 3 and the guide's division paragraph both pivot on the portability trap
  (floor vs truncate on a negative dividend). It is the one part of this
  bundle a solver in Python or JavaScript actually gets wrong, so it stayed in
  both places, restated with the new example (`8-12/5` yielding `-2`, not
  `-3`).
