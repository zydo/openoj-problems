## 1106 — Parsing A Boolean Expression

- New id / title / slug: 1106 / Evaluate a Boolean Formula / `evaluate-a-boolean-formula`
- Old → new API: `parseBoolExpr` → `evaluateBooleanFormula` (go `evaluateBooleanFormula`, rust `evaluate_boolean_formula`, ts `evaluateBooleanFormula`); parameter `expression` → `formula`
- Core algorithm / difficulty: recursive descent, cursor-returning parse, comma/close dispatch / H3 (unchanged)
- Statement rewritten from spec: yes (grammar is the functional spec, so the tokens `t f ! & |` are kept verbatim; all prose, examples, and the formula presentation are new)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"&(!(f),|(t,f))"` → true (all three operators, depth 2); `"|(f,!(&(t,t)))"` → false (negated conjunction inside disjunction); `"!(|(f,f,&(f,t)))"` → true (depth 3)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (tree run) verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Decision-5 boundary case worth naming: the input alphabet and grammar are
  the task itself, not LeetCode dressing — renaming `t`/`f`/`&`/`|` would
  change what an original correct program must parse. Only the title,
  method, and parameter were renamed; the grammar section is re-expressed
  but token-for-token identical in meaning.
- The stale gate pins no literals here (the source's examples are strings,
  not bracketed arrays), but the three formulas were still checked against
  all 16 hidden inputs for duplication.
