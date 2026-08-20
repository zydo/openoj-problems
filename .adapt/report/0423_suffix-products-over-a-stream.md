## 423 — Product of the Last K Numbers

- New id / title / slug: 423 / Suffix Products Over a Stream / `suffix-products-over-a-stream`
- Old → new API: class `ProductOfNumbers` → `SuffixProducts`; `add` → `append` (py+java); `getProduct` → `suffixProduct`; parameters `num`, `k` kept
- Core algorithm / difficulty: prefix products per zero-free block, one division per query, reset on `0` / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - script 1: `2,5,0,3,4` then queries 12 / 0 (spanning the zero), append 6, query 72
  - script 2: `9` → 9, zero → 0, `8` → 8 and a window of 2 answering 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: 2 (python, java — the only languages the source offers)
- Figures: none
- Hidden cases: `actions` strings renamed in place (`ProductOfNumbers`/`add`/`getProduct` → new names); data otherwise untouched
- Gates: check ✓ (bundle check clean) verify ✓ (2/2 languages, 15/15 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: design kind, deferred to batch run

### Notes

- Design-problem scaffold is manual: `init_bundle.py` only renames the
  function-problem `method`/`entrypoints` fields, so `class_name` and
  `methods[].name` were edited directly in the copied `problem.json`, and
  the hidden-case `actions` were renamed by exact string match.
- First overlap failure of the wave: the API bullet list ("initializes the
  object with an empty stream", "appends the integer num to the stream")
  and the verbatim OpenOJ languages note read as paraphrase at 12%. Both
  reworded; the languages note now says "submissions here are limited to
  Python 3 and Java".
- Public scripts driven through the reference class and cross-checked
  against a recompute-per-query model.
