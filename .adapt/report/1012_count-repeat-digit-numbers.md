## 1012 — Numbers With Repeated Digits

- New id / title / slug: 1012 / Count Repeat-Digit Numbers / `count-repeat-digit-numbers`
- Old → new API: `numDupDigitsAtMostN` → `countRepeatDigitNumbers` (go `countRepeatDigitNumbers`, rust `count_repeat_digit_numbers`, ts `countRepeatDigitNumbers`); parameter `n` kept
- Core algorithm / difficulty: complement counting — tally the distinct-digit numbers by length and by prefix of `n`, subtract / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figures)
  - `n = 33` → 3 (the three doubles, listable by hand)
  - `n = 120` → 21 (crossing into three digits)
  - `n = 2000` → 758 (too many to list, so no enumeration is given)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values came from the reference solution and were cross-checked
  against a brute-force enumeration for all three examples.
- The source had only two hints and both were phrased as questions; the
  rewrite follows the same reasoning path in three steps (complement, shorter
  lengths, prefix walk) rather than reproducing the question form.
- The statement defines the term "repeat-digit" up front, which removes the
  need for the bolded restatement the source leaned on.
