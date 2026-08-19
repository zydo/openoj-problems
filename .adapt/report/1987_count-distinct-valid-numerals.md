## 1987 — Number of Unique Good Subsequences

- New id / title / slug: 1987 / Count Distinct Valid Numerals / `count-distinct-valid-numerals`
- Old → new API: `numberOfUniqueGoodSubsequences` → `countDistinctValidNumerals` (go `countDistinctValidNumerals`, rust `count_distinct_valid_numerals`, ts `countDistinctValidNumerals`); parameter `binary` kept (conventional)
- Core algorithm / difficulty: linear DP with two counters (distinct values ending in `0` / in `1`) plus a lone-`0` flag, mod `10^9+7` / H3 (unchanged)
- Statement rewritten from spec: yes — "good subsequence" reframed as a subsequence read as a **binary numeral**, valid when it has no leading zero (lone `0` excepted)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"011" → 3` (leading zero present), `"110" → 5` (zero at the end), `"001011" → 7` (mixed, hand-verifiable set {0,1,10,11,101,111,1011})
- Constraints: domain unchanged (1–10⁵ length, only `0`/`1`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Public expectations computed by an independent brute-force enumerator and
  cross-checked against the DP before publishing (both agreed; third example
  verified by hand).
- The tree-wide `check.py --skip-runtime` run shows failures only in other
  agents' concurrent in-flight bundles; this bundle is clean in the same run.
- Hidden inputs include many tiny strings (`0`, `00`, `01`, `10`, `100`,
  `110010`, 20-symbol runs …), so candidate examples were screened against
  the hidden list before fixing them (`001011` etc. are clear).
