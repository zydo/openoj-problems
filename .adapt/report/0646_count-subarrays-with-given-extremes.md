## 646 — Count Subarrays With Fixed Bounds

- New id / title / slug: 646 / Count Subarrays With Given Extremes / `count-subarrays-with-given-extremes`
- Old → new API: `countSubarrays` → `countSubarraysWithExtremes` (go `countSubarraysWithExtremes`, rust `count_subarrays_with_extremes`, ts `countSubarraysWithExtremes`); parameters `minK` → `lo`, `maxK` → `hi` (rust `min_k`/`max_k` → `lo`/`hi`); `nums` kept
- Core algorithm / difficulty: one sweep with three last-occurrence markers (wall, lo, hi); each right end adds max(0, min(last_min, last_max) − last_bad) / H3 (unchanged)
- Statement rewritten from spec: yes — "fixed-bound subarray" replaced by runs whose smallest is exactly `lo` and largest exactly `hi`
- Examples newly constructed: yes (structure-preserving: yes for the solution figure — same length, same role pattern lo/neutral/hi/neutral/wall/hi)
  - `[2,4,6,3,9,6], lo=2, hi=6 → 2`, `[7,7,7], lo=7, hi=7 → 6` (uniform array)
- Constraints: domain unchanged (n ≤ 10⁵, values/lo/hi ≤ 10⁶), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — solution-marker-sweep.svg relabelled to the new array and lo/hi vocabulary; marker panels, +1/+0 annotations and geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameter rename checked first: no source solution declares `lo`/`hi`
  locals (the 0587 trap), and rust spells them `min_k`/`max_k`, so the rename
  table needs both spellings.
- Public-case expectations confirmed both by the reference and an O(n²)
  brute force over all runs.
