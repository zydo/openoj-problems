## 3519 — Count Numbers with Non-Decreasing Digits

- New id / title / slug: 3519 / Count Climbing-Digit Numbers / `count-climbing-digit-numbers`
- Old → new API: `countNumbers` → `countClimbing` (go `countClimbing`, rust `count_climbing`, ts `countClimbing`); parameters `l`, `r`, `b` kept as conventional identifiers
- Core algorithm / difficulty: string decrement + string short division into base b, then digit DP over (position, last digit, tight, started) / H3 (unchanged)
- Statement rewritten from spec: yes (the property is renamed "climbs" and defined by the reading direction)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `"30".."36" b=8`, `"3".."9" b=2`, `"1".."20" b=3` (three digit lengths in base 3)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values computed with the adapted `solution.py` and cross-checked
  against a direct base-conversion check of every integer in the small ranges
  (all matched).
- No bracket-array literals in the source statement, so example values were
  unconstrained by the stale gate; only the old title/slug/method mattered.
