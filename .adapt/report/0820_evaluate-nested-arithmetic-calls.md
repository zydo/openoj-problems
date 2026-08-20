## 820 — Evaluate Valid Expressions

- New id / title / slug: 820 / Evaluate Nested Arithmetic Calls / `evaluate-nested-arithmetic-calls`
- Old → new API: `evaluateExpression` → `evaluateCalls` (go `evaluateCalls`, rust `evaluate_calls`, ts `evaluateCalls`); parameter `expression` kept
- Core algorithm / difficulty: single-pass recursive descent, parse returns (value, index) / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `mul(6,7)` → 42, `-77` → -77 (bare literal), `div(sub(mul(9,4),6),add(2,1))` → 10 (depth-3 nesting, both div operands compound)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The operator names `add`/`sub`/`mul`/`div` are part of the input alphabet
  and appear verbatim in hidden case data, so they are functional facts and
  stay — only the method/title identity was renamed.
- Solutions guide initially claimed "iterative ports keep an explicit stack";
  the actual Go/Rust/C++ ports are recursive with a shared position cursor, so
  the sentence was corrected — always re-read the ports before describing them.
