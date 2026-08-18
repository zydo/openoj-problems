## 0474 — Ones and Zeroes

- New id / title / slug: 474 / Most Strings Within Bit Budgets / `most-strings-within-bit-budgets`
- Old → new API: `findMaxForm` → `mostStringsWithinBudgets` (go `mostStringsWithinBudgets`, rust `most_strings_within_budgets`, ts `mostStringsWithinBudgets`); parameters `strs`/`m`/`n` kept (conventional)
- Core algorithm / difficulty: 0/1 knapsack over two budgets (zeros, ones), table rolled over strings / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["110","01","1110","0","11"] m=3 n=5 → 4` (one string over both caps), `["00","0","1"] m=2 n=1 → 2` (tight zero budget), `["1","10","11"] m=1 n=5 → 3` (everything fits)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Hidden cases reuse example-1's data; that is the source's own doing and stays
  (hidden data is untouched). The stale gate only scans the source statement's
  ```text blocks for literals, so no conflict.
- `strs`/`m`/`n` kept as conventional identifiers — renaming single-letter
  loop-heavy parameters across seven languages buys no clarity.
