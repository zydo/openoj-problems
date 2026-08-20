## 664 — Count Subarrays With Median K

- New id / title / slug: 664 / Count Subarrays Balanced Around K / `count-subarrays-balanced-around-k`
- Old → new API: `countSubarrays` → `countBalancedSubarrays` (go `countBalancedSubarrays`, rust `count_balanced_subarrays`, ts `countBalancedSubarrays`); parameters `nums`, `k` kept
- Core algorithm / difficulty: ±1 sign encoding, prefix-sum hash frozen at k's index, count stored ∈ {current, current−1} / H3 (unchanged)
- Statement rewritten from spec: yes (median redefined from scratch, left-middle rule included)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,5,1,3]`, k=4 → 4 (family incl. the even window [4,5]), `[1,2,5,3,4]`, k=5 → 1 (k buried among smaller values, singleton only), `[3,1,2]`, k=1 → 3 (k mid-array, both even pairings count, whole array fails)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 18/18 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Stale-literal trap worth remembering: literals are collected from *every*
  bracketed run in the source's text blocks, including the subarray lists in
  its Example 1 explanation — `[1,4,5]` there is a permutation of my example
  window [4,5,1], and writing "sorted [1,4,5]" in my explanation tripped the
  gate. Writing sorted forms as prose ("sorted, 4 lands in the middle") avoids
  the class entirely.
- Example inputs were checked against all 15 hidden inputs programmatically;
  none duplicates.
