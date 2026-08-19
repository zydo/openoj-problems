## 2104 — Sum of Subarray Ranges

- New id / title / slug: 2104 / Total Subarray Spread / `total-subarray-spread`
- Old → new API: `subArrayRanges` → `totalSubarraySpread` (go `totalSubarraySpread`, rust `total_subarray_spread`, ts `totalSubarraySpread`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: anchor the left endpoint, sweep right carrying running min/max, add `mx − mn` per step — O(n²), the follow-up O(n) noted but not shipped / H2 (unchanged)
- Statement rewritten from spec: yes — "range" renamed **spread** (largest minus smallest), defined from the spec with subarray defined inline
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,5] → 8` (ordinary), `[6,6,2] → 8` (equal values, zero-spread pair), `[1,-2,4] → 15` (negatives)
- Constraints: domain unchanged (1–1000 length, ±10⁹ values), presentation rewritten; `O(n)` follow-up kept
- Skeletons regenerated: all 7
- Figures: none
- Family: sibling `0907_sum-of-subarray-minimums` is still unadapted — a "Total Subarray Minima"-style title would keep the kinship; recorded for its adapter
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- "Range" is a generic statistics term, but the title still moved —
  "Total Subarray Spread" — since "Sum of Subarray Spreads" would read as
  a one-word swap of the source title, the thing ADAPT.md forbids.
- 64-bit return type kept byte-for-byte; publics cross-checked between
  brute-force re-scanning and the incremental-extremes loop.
- All three examples hand-checkable; the [6,6,2] one shows equal extremes
  contributing zero, which the hidden set covers only with all-equal
  arrays.
