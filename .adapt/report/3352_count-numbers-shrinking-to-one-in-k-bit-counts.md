## 3352 — Count K-Reducible Numbers Less Than N

- New id / title / slug: 3352 / Count Numbers Shrinking to One in K Bit Counts / `count-numbers-shrinking-to-one-in-k-bit-counts`
- Old → new API: `countKReducibleNumbers` → `countShrinkingNumbers` (go `countShrinkingNumbers`, rust `count_shrinking_numbers`, ts `countShrinkingNumbers`); parameters `s`, `k` kept
- Core algorithm / difficulty: f-table over popcounts + digit walk along `s` filling popcount buckets with binomials from Pascal's triangle / H4 (unchanged)
- Statement rewritten from spec: yes ("bit count" names the operation; "k-reducible" replaced by "shrinks to one within k bit counts"; the 13→3→2→1 illustration is new)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"1101" k=1` → 4 (only single-set-bit numbers), `"1100" k=2` → 9 (one or two set bits), `"1100" k=5` → 11 (same n, everything qualifies)
  - Brute-force verified for all three (`.localonly/wave-g-01/exp_3352.py`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- First overlap failure of the wave: the source's constraint bullets
  ("has no leading zeros", "consists only of the characters ...") are
  7-word shingles no other statement shares often enough to become
  background. Binary-string problems need those facts stated some other
  way — "starts with '1', every later character is '0' or '1'".
- Examples 2 and 3 deliberately share `s` with different `k`, showing
  the answer saturating at n-1.
