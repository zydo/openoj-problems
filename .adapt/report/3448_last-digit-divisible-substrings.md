## 3448 — Count Substrings Divisible By Last Digit

- New id / title / slug: 3448 / Last-Digit Divisible Substrings / `last-digit-divisible-substrings`
- Old → new API: `countSubstrings` → `countDivisible` (go `countDivisible`, rust `count_divisible`, ts `countDivisible`); parameter `s` kept
- Core algorithm / difficulty: one counting pass per candidate final digit d=1..9, rolling suffix-remainder table mod d, fixed divisible-remainder set per pass / H4 (unchanged)
- Statement rewritten from spec: yes (qualification rule, the '0'-final exclusion, and leading zeros all restated from the task)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"5804"` → 6 (miss mix: one non-multiple plus three zero-final substrings; `"04"` counts as 4), `"2057"` → 5 (value-with-leading-zero and self-dividing digits), `"1011010"` → 14 (only '1'-final substrings qualify; 1+3+4+6)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The three examples teach the three edge rules separately: a substring
  ending in '0' never qualifies, leading zeros contribute through true value,
  and digit 1 accepts everything. Brute/reference agreed on 500 random
  inputs (`exp_3448.py`).
