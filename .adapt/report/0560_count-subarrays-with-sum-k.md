## 0560 — Subarray Sum Equals K

- New id / title / slug: 560 / Count Subarrays With Sum K / `count-subarrays-with-sum-k`
- Old → new API: `subarraySum` → `countSubarraysWithSum` (go `countSubarraysWithSum`, rust `count_subarrays_with_sum`, ts `countSubarraysWithSum`); `nums` and `k` kept as conventional names
- Core algorithm / difficulty: prefix-total frequency table / H2 (unchanged)
- Statement rewritten from spec: yes — it names the object ("a slice"), says outright that slices are counted by position rather than by contents, and states the sign freedom that the source left to the constraints
- Examples newly constructed: yes (structure-preserving: n-a — no figures)
  - `[3,-1,1,3,2], k=3 → 4` (mixed signs, overlapping answers), `[2,2,2,2], k=4 → 3` (uniform), `[0,0,5], k=0 → 3` (the zero case)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n-a compatibility ✓ stale ✓ overlap ✓

### Notes

- The source's four hints collapse into a single insight plus three traps
  (missing seed, record-after-read, no sliding window with negatives). Splitting
  the traps into their own hints reads better than the source's ordering and has
  no overlap risk, because trap wording is naturally specific.
- A `k = 0` example is worth including: it is the only input where the
  "record after counting" ordering is observable, so it doubles as a regression
  case for the most common wrong implementation.
