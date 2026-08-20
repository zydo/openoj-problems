## 640 — Number of Pairs Satisfying Inequality

- New id / title / slug: 640 / Count Difference-Bounded Pairs / `count-difference-bounded-pairs`
- Old → new API: `numberOfPairs` → `countDifferenceBoundedPairs` (go `countDifferenceBoundedPairs`, rust `count_difference_bounded_pairs`, ts `countDifferenceBoundedPairs`); parameters `nums1`, `nums2`, `diff` kept (conventional)
- Core algorithm / difficulty: per-index difference nums1[k]-nums2[k], left-to-right sweep with a Fenwick tree over the raw value range (min-shifted, no compression), count earlier values <= values[j]+diff / H3 (unchanged)
- Statement rewritten from spec: yes — same two-inequality definition, freshly phrased; "satisfying the conditions" boilerplate dropped
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,2,9,4],[3,3,5,3],2 → 4` (mixed pass/fail, worked through the transformed values), `[1,5],[4,0],-9 → 0` (nothing passes), `[4,4,4],[2,2,2],0 → 3` (all equal, every pair passes)
- Constraints: domain unchanged (n ≤ 10⁵, values/diff within ±10⁴), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Caution for the next chunks: copy `problem.json` tags/difficulty from the
  source file, never from memory — my first draft invented the tag list and
  only a re-read caught it. Everything but id/slug/title/API fields must be
  byte-identical.
