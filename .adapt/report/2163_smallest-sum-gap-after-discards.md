## 2163 — Minimum Difference in Sums After Removal of Elements

- New id / title / slug: 2163 / Smallest Sum Gap After Discards / `smallest-sum-gap-after-discards`
- Old → new API: `minimumDifference` → `smallestSumGap` (go `smallestSumGap`, rust `smallest_sum_gap`, ts `smallestSumGap`); parameter `nums` kept
- Core algorithm / difficulty: prefix table of minimal n-sums (bounded max-heap) and suffix table of maximal n-sums (bounded min-heap), min over legal boundaries / H4 (unchanged)
- Statement rewritten from spec: yes — removal restated as discards, the front/back naming replaces sumfirst/sumsecond
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,6] → -4` (n = 1, all three removals enumerated), `[6,8,4,7,2,5] → -2` (n = 2, mixed), `[2,9,4,9,2,9] → -12` (repeated values enriching the back part)
  - verified no public input duplicates a hidden one
- Constraints: domain unchanged (length 3n, n ≤ 10⁵, values 1..10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Chose example explanations that name the actual discards and the resulting
  parts (computed via the heap tables by hand, then confirmed by the
  reference), rather than the source's style of narrating one wrong removal
  first — keeps the walkthrough shorter and the outputs all distinct
  (-4, -2, -12), unlike the source's pair (−1, 1).
- Last problem of wave-b-05; all twelve bundles in this chunk follow the
  same file shapes as the exemplar.
