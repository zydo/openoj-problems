## 3430 — Maximum and Minimum Sums of at Most Size K Subarrays

- New id / title / slug: 3430 / Sum of Extremes Over Short Subarrays / `sum-of-extremes-over-short-subarrays`
- Old → new API: `minMaxSubarraySum` → `sumOfExtremes` (go `sumOfExtremes`, rust `sum_of_extremes`, ts `sumOfExtremes`); parameters `nums`, `k` kept
- Core algorithm / difficulty: per-element contribution counting via four monotonic-stack spans, with a closed-form lattice-point count for the `a + b <= k - 1` length cap / H4 (unchanged)
- Statement rewritten from spec: yes (walk-short-subarrays framing, contribution rule, single-element-counts-twice note restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,3], k=2` → 31, `[2,-1,4], k=2` → 14 (negatives), `[3,1,2], k=3` → 23 (cap off)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3430.py`: source algorithm
  cross-checked against full subarray enumeration on every case.
- First draft of the guide's worked example forgot that a one-element
  subarray casts its element in *both* roles; recomputing the role counts by
  hand fixed the arithmetic. Same lesson as 3420: derive walkthroughs from a
  computed table, never from memory.
