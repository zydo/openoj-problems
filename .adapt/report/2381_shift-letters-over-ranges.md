## 2381 — Shifting Letters II

- New id / title / slug: 2381 / Shift Letters Over Ranges / `shift-letters-over-ranges`
- Old → new API: `shiftingLetters` → `shiftLettersOverRanges` (go `shiftLettersOverRanges`, rust `shift_letters_over_ranges`, ts `shiftLettersOverRanges`)
- Core algorithm / difficulty: difference array + prefix sum of net per-position shift, mod 26 per character / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"fjord"` with mixed/overlapping ranges → `"glorc"`; `"zinc"` triple forward on one position (wrap z→c) → `"cinc"`; `"cafe"` whole-string backward + twice-forward middle → `"bbgd"`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameters `s` and `shifts` kept (conventional). Stale-literal trap: the source
  example contains the triple `[0,2,1]`, which the gate treats as an identifying
  literal — new examples avoid that exact triple anywhere outside cases.json.
- Tree-wide `check.py` shows 12 failures, all in other agents' in-flight bundles
  (0547/0736/0864/1000/2050); this bundle contributes none.
