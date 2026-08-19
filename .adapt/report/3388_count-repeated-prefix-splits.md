## 3388 — Count Beautiful Splits in an Array

- New id / title / slug: 3388 / Count Repeated-Prefix Splits / `count-repeated-prefix-splits`
- Old → new API: `beautifulSplits` → `repeatedPrefixSplits` (go `repeatedPrefixSplits`, rust `repeated_prefix_splits`, ts `repeatedPrefixSplits`); parameter `nums` kept
- Core algorithm / difficulty: suffix LCP table over all offset pairs, first rule bulk-counted as `n - 2i`, second rule swept over the uncovered `j` / H3 (unchanged)
- Statement rewritten from spec: yes (three-piece cut, piece-repeats-at-the-front-of-its-neighbour rule restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,1,2,2]` → 1 (only the middle-prefixes-tail rule fires), `[3,3,1,3,3]` → 4 (both rules contribute), `[4,5,6,7]` → 0
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3388.py`: the reference
  algorithm cross-checked against a direct brute force over cut pairs, both
  agreeing with every source case of length ≤ 60 (the pure-python reference
  crawls at n = 5000, so the largest hidden cases were not re-derived — they
  are byte-identical anyway).
- macOS `sed` has no `\b`; the first rename attempt silently did nothing and
  the stale gate caught it. Renames now go through
  `.localonly/wave-g-02/rename.py` (python `re` word boundaries).
