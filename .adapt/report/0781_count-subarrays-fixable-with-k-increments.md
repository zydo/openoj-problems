## 781 — Count Non-Decreasing Subarrays After K Operations

- New id / title / slug: 781 / Count Subarrays Fixable With K Increments / `count-subarrays-fixable-with-k-increments`
- Old → new API: `countNonDecreasingSubarrays` → `countFixableSubarrays` (go `countFixableSubarrays`, rust `count_fixable_subarrays`, ts `countFixableSubarrays`); parameters `nums`, `k` kept
- Core algorithm / difficulty: right-to-left sliding window whose cost is maintained by a monotonic stack of running-max plateaus with a lazy head pointer / H4 (unchanged)
- Statement rewritten from spec: yes (per-subarray budget of +1 steps, non-decreasing target restated from scratch)
- Examples newly constructed: yes (structure-preserving: yes — example 1 keeps six bars so the two-panel figure regenerates on the source layout)
  - `[7,4,2,3,5,5], k=8` → 18 (boundary window [7,4,2] costs exactly k), `[9,7,5,3], k=12` → 10 (whole array costs exactly k), `[4,1,3,1,5], k=3` → 12
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `solution-window-cost.svg` **regenerated** from the source's layout rule (`bar i at x = x0 + 42*i`, height `12*value`, baseline y = 200, step line at the running max); alt text rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Expected values from `.localonly/wave-g-02/cases_3420.py`: source algorithm
  cross-checked against a direct per-subarray lift-to-running-max cost on
  every case.
- Remote image QA is worthless for these renders (it described axis labels
  that do not exist); collisions were found by a local pixel-cluster scan
  instead. It caught two "raise by N" labels sharing a y-row at 42px pitch —
  merged into one centered label. Recommend the pixel-scan for any future
  regenerated figure with per-bar captions.
- Writing example 3's explanation from assumed shape (not computed shape)
  produced a wrong list of failing subarrays; recomputing the failures fixed
  it. Derive explanation claims from the brute force, not intuition.
