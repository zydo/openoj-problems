## 1397 — Find All Good Strings

- New id / title / slug: 1397 / Count Strings Avoiding a Pattern / `count-strings-avoiding-a-pattern`
- Old → new API: `findGoodStrings` → `countAvoidingStrings` (go `countAvoidingStrings`, rust `count_avoiding_strings`, ts `countAvoidingStrings`); parameter `evil` → `pattern`; `n`, `s1`, `s2` kept
- Core algorithm / difficulty: digit DP over a..z with tight/loose bounds plus KMP automaton state on the forbidden substring / H5 (unchanged)
- Statement rewritten from spec: yes (LeetCode's "good strings" term replaced by a plain statement of the two conditions)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=2, "af".."cd", pattern "b"` → 24 (block exclusion, arithmetic shown), `"aba".."abz", pattern "ab"` → 0 (forced prefix), `"oxo".."oxo", pattern "ow"` → 1 (single-string range)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- All three public expectations were verified by exhaustive enumeration of the
  range (ranges were chosen small enough for that on purpose).
- The source statement's "good string" was a LeetCode-coined term with its own
  definition sentence; the rewrite states the two membership conditions
  directly and drops the coined term.
