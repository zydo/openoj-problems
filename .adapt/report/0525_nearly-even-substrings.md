## 525 — Number of Wonderful Substrings

- New id / title / slug: 525 / Nearly Even Substrings / `nearly-even-substrings`
- Old → new API: `wonderfulSubstrings` → `countNearlyEvenSubstrings` (go `countNearlyEvenSubstrings`, rust `count_nearly_even_substrings`, ts `countNearlyEvenSubstrings`); parameter `word` kept (conventional)
- Core algorithm / difficulty: prefix parity bitmask sweep, 1024-entry count table, equal-or-one-bit matches / H3 (unchanged)
- Statement rewritten from spec: yes — the coined property "wonderful" is replaced by **nearly even**, defined up front with fresh illustrations (`"bccb"`, `"aaab"`, `"abc"`)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"abc" → 3`, `"abba" → 8` (mixed pair/even shapes), `"jjj" → 6` (single-letter run, degenerate mask case)
- Constraints: domain unchanged (length ≤ 10⁵, alphabet 'a'–'j'), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The 64-bit return type is load-bearing (totals past 2³²) — kept
  byte-for-byte in problem.json as required.
- Renaming the coined adjective inside solution comments ("wonderful iff
  P == Q" → "nearly even iff P == Q") needed a second regex pass after
  the identifier rename; order matters so the new identifier is never
  re-substituted.
