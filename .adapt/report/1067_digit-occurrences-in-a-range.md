## 1067 — Digit Count in Range

- New id / title / slug: 1067 / Digit Occurrences in a Range / `digit-occurrences-in-a-range`
- Old → new API: `digitsCount` → `countDigitOccurrences` (go `countDigitOccurrences`, rust `count_digit_occurrences`, ts `countDigitOccurrences`); parameters `d`, `low`, `high` kept
- Core algorithm / difficulty: prefix reduction + per-position digit counting with the d = 0 leading-zero clause / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `d=2, [1,25]` → 9 (run of appearances with a doubled number); `d=0, [305,452]` → 30 (zero digit, place-by-place reasoning); `d=6, [1,66]` → 14 (repeat inside one number)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Whole-tree `check.py` at this moment carries failures from other parts'
  in-flight bundles (0547 duplicate slug, 0736 starters, 1039 leftover
  `.compat`); this bundle contributes none of them.
- Example 2 was picked so the explanation decomposes into two clean
  fifteen-counting halves (tens place, units place) — followable by eye
  without listing thirty numbers.
