## 1405 — Longest Happy String

- New id / title / slug: 1405 / Longest No-Triple String / `longest-no-triple-string`
- Old → new API: `longestDiverseString` → `longestNoTripleString` (go `longestNoTripleString`, rust `longest_no_triple_string`, ts `longestNoTripleString`); parameters `a`, `b`, `c` kept
- Core algorithm / difficulty: greedy — append the most plentiful letter unless it was just doubled / H2 (unchanged)
- Statement rewritten from spec: yes (LeetCode's "happy" term replaced by the rule itself: no letter three times in a row within per-letter budgets)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `(1, 6, 2)` → `"bbcbbabbc"` (all budgets consumed), `(5, 1, 1)` → `"aabaaca"` (two breakers ration five a's), `(0, 2, 3)` → `"cbcbc"` (one budget zero)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Comparison is `exact` against the reference's deterministic greedy
  (alphabetical tie-break), so public expected values were taken from the
  staged reference, not invented; each was additionally checked for rule
  validity and length-optimality against an exhaustive memoized DP.
- 1392's "happy prefix" and this "happy string" were both LeetCode-coined
  terms; each adaptation names the actual rule instead.
