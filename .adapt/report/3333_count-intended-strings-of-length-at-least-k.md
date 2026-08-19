## 3333 — Find the Original Typed String II

- New id / title / slug: 3333 / Count Intended Strings of Length at Least K / `count-intended-strings-of-length-at-least-k`
- Old → new API: `possibleStringCount` → `countIntended` (go `countIntended`, rust `count_intended`, ts `countIntended`); parameters `word`, `k` kept
- Core algorithm / difficulty: run-choice product minus bounded-knapsack complement with prefix-sum transitions; shortcut when `k <= r` / H4 (unchanged)
- Statement rewritten from spec: yes (held-key story retold without the source's framing; block-stretch semantics restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"pppqq" k=2` → 6 (k ≤ block count, product shortcut), `"abbbcc" k=5` → 3 (complement counting), `"zzzzzz" k=4` → 3 (single block)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- The LeetCode "II" suffix was dropped: the bank holds no 3332 twin
  (checked `problems/` and all ledger shards), so no kinship constraint
  applies. If a 3332-like sibling ever gets authored, its title should
  echo this one minus the length clause.
- Example 1 deliberately exercises the `k <= r` early return, a branch
  the source's public cases never touched.
