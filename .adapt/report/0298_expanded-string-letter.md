## 298 — Decoded String at Index

- New id / title / slug: 298 / Expanded String Letter / `expanded-string-letter`
- Old → new API: `decodeAtIndex` → `expandedStringLetter` (go `expandedStringLetter`, rust `expanded_string_letter`, ts `expandedStringLetter`); parameters `s` and `k` kept (both conventional)
- Core algorithm / difficulty: prefix lengths forward, then a modular reduction of the index backwards / H3 (unchanged)
- Statement rewritten from spec: yes — the expansion rule is stated as "replace the result with `d` copies of itself" rather than as an incremental "write it `d - 1` more times", which is the same operation said without the off-by-one
- Examples newly constructed: yes (structure-preserving: n-a, no figures)
  - `"ab3c", k=5 → "a"`, `"pq3r2", k=12 → "p"` (a repetition after a letter), `"zt7999999999999999", k=10^9 → "t"` (2.9 * 10^15 characters, unbuildable)
- Constraints: domain unchanged, presentation rewritten (alphabet, digit range and the leading-letter rule folded into one bullet)
- Skeletons regenerated: all 7 (cpp, go, java, js, py, rust, ts)
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 21/21 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
