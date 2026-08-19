## 3480 — Maximize Subarrays After Removing One Conflicting Pair

- New id / title / slug: 3480 / Clean Subarrays After One Pair Removal / `clean-subarrays-after-one-pair-removal`
- Old → new API: `maxSubarrays` → `cleanSubarrays` (go `cleanSubarrays`, rust `clean_subarrays`, ts `cleanSubarrays`); `conflictingPairs` → `forbiddenPairs`
- Core algorithm / difficulty: right-to-left sweep holding the two smallest pair right endpoints, with a removal-gain ledger keyed by the tight bound / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `n=4 [[1,3],[2,4]]` (deletion symmetric), `n=5 [[2,4],[1,5],[4,5]]` (one bad deletion among good ones), `n=5 [[1,5],[2,4]]` (wide vs narrow pair)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- The source statement's example lists (`[2,3]`, `[1,4]`, `[1,2]`, …) become
  stale literals under the gate's substring rule, so the new examples and the
  rewritten guide avoid those exact bracket lists; enumerated subarrays in prose
  are phrased as ranges ("positions 2 through 4") rather than arrays.
- Expected values for the three public cases were computed by importing the
  adapted `solution.py` and cross-checked against an independent brute force.
