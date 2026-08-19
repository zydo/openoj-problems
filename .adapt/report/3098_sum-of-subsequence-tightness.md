## 3098 — Find the Sum of Subsequence Powers

- New id / title / slug: 3098 / Sum of Subsequence Tightness /
  `sum-of-subsequence-tightness`
- Old → new API: `sumOfPowers` → `totalTightness` (go `totalTightness`,
  rust `total_tightness`, ts `totalTightness`); parameters `nums`, `k`
  kept
- Core algorithm / difficulty: sort, enumerate distinct pairwise
  differences descending, count length-k sets with all consecutive gaps
  `>= d` by prefix-sum DP, difference consecutive counts / H4 (unchanged)
- Statement rewritten from spec: yes (LeetCode's "power" of a subsequence
  renamed "tightness" and defined in one line)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,2,4,8], k=3` → 7 (four triples with tightness 1, 1, 3, 2)
  - `[5,5,7], k=2` → 4 (duplicate pair contributes 0, both 5-7 pairs
    count separately)
  - `[-6,1,4], k=2` → 20 (negative values)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Listing example triples in brackets is a stale-literal trap: the
  source's explanation enumerates its own triples (`[1,2,4]` is tracked),
  so any small ascending triple in prose risks a collision. The fixed
  explanation now names one triple in words instead.
- The worked example in `solutions.md` (`f(3)=1, f(2)=2, f(1)=4` on
  `[1,2,4,8]`) was verified against the reference before writing.
