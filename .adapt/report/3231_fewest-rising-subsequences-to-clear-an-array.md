## 3231 — Minimum Number of Increasing Subsequence to Be Removed

- New id / title / slug: 3231 / Fewest Rising Subsequences to Clear an Array / `fewest-rising-subsequences-to-clear-an-array`
- Old → new API: `minOperations` → `fewestRemovals` (go `fewestRemovals`, rust `fewest_removals`, ts `fewestRemovals`); parameter `nums` kept
- Core algorithm / difficulty: patience sorting on negated values (bisect_right) computing the longest non-increasing subsequence, which by Dilworth equals the removal count / H3 (unchanged)
- Statement rewritten from spec: yes ("increasing subsequence removal" reframed as deleting a rising subsequence, with the non-contiguity spelt out)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,1,7,2,9]` → 2 (two removals), `[2,6,11,30]` → 1 (already rising), `[3,8,8,5]` → 3 (equal values never rise, forcing the chain 8,8,5 apart)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (static tier full-tree run — bundle absent from failure list) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Source public cases were the three monotone extremes; the new set keeps one
  rising example and replaces the descending one with a duplicate-value case,
  which is the subtler rule (equal elements cannot share a strictly
  increasing removal) while staying eye-followable.
