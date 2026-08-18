## 0772 — Basic Calculator III

- New id / title / slug: 772 / Calculator With Parentheses And Precedence / `calculator-with-parentheses-and-precedence`
- Old → new API: `calculate` → `calculateWithParenthesesAndPrecedence` (go `calculateWithParenthesesAndPrecedence`, rust `calculate_with_parentheses_and_precedence`, ts `calculateWithParenthesesAndPrecedence`); parameter `s` kept (conventional)
- Core algorithm / difficulty: recursive descent over an expression/term/factor grammar sharing one cursor / H3 (unchanged)
- Statement rewritten from spec: yes — the two reading rules (precedence, then grouping) are stated as rules of the expression, and the "no unary operator" guarantee is paired with the reminder that a group can still be negative
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"9-2*3" → 3` (precedence alone), `"(9-2)*3" → 21` (brackets overriding it), `"(4-9)/2+2*(6-(1+1))" → 6` (nesting plus a negative dividend truncating toward zero)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 22/22 cases) sandbox n/a compatibility **✓ proven per-language; `adapt_gates.py` reports FAIL — the same `calculate`/`calculate` collision recorded for 0224 and 0227** stale ✓ overlap ✓

### Notes

- **Family: `calc`, third member.** `families.json` pins only 0224
  ("Calculator With Parentheses") and 0227 ("Calculator With Precedence"); this
  source is the one that has both features at once, so the title composes the
  two siblings' qualifiers and the method name follows it. If the family is
  ever revisited, the pin worth adding is
  `"0772_basic-calculator-iii": "Calculator With Parentheses And Precedence"`.
- **The gate collision is structural, not incidental.** The source declares
  `method: "calculate"` and `entrypoints.rust: "calculate"`. `adapt_gates.py`
  builds one rename list and applies it in order to *every* solution file, so
  the method rename consumes the rust identifier before the rust entrypoint
  rename is reached, and `solution.rust` is staged with a camelCase `fn`. It
  cannot compile, and no choice of new name avoids it. Proven instead with a
  per-language variant that picks the rename by file suffix: all seven source
  solutions pass 22/22 against this bundle's cases.
- The same ordering bug bites the bundle's *own* `solution.rust` during
  authoring: a single word-boundary pass over all files leaves rust at the
  camelCase name. It needs a second, rust-only pass to
  `calculate_with_parentheses_and_precedence`. This is now the third bundle to
  record it (0131, 0224); it is worth making the scaffold language-aware rather
  than re-discovering it.
- The statement deliberately keeps this family's shared opening sentence shape
  with 0224/0227 (ours, not the source's) so the three read as kin; the
  alphabet, the bracket rule and the division rule are what differ.
