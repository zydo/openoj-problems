## 1010 — Pairs of Songs With Total Durations Divisible by 60

- New id / title / slug: 1010 / Count Pairs Summing to a Multiple of 60 / `count-pairs-summing-to-a-multiple-of-60`
- Old → new API: `numPairsDivisibleBy60` → `countPairSumsDivisibleBy60` (go `countPairSumsDivisibleBy60`, rust `count_pair_sums_divisible_by_60`, ts `countPairSumsDivisibleBy60`); parameter `time` → `durations`
- Core algorithm / difficulty: one-pass count over 60 remainder buckets / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[95,25,155,20,100]` → 3 (mixed complementary buckets), `[120,60,180]` → 3 (all-zero bucket), `[30,90,150,45,15]` → 4 (self-matching bucket 30 plus a 45/15 pair)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Dropped the songs scenario entirely; the statement now speaks of entries and
  lengths, which is all the task needs.
- `time` → `durations` needed comment rewrites in all 7 solutions ("songs
  bucketed" → "entries bucketed") — old scenario wording in comments is not
  gate-visible but is terminology to update per ADAPT.md's table.
- Example 2 duplicates no hidden input (hidden has `[60,60,60]` and
  `[60,...]×4+`; `[120,60,180]` is fresh).
