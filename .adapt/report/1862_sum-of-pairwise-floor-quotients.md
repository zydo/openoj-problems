## 1862 — Sum of Floored Pairs

- New id / title / slug: 1862 / Sum of Pairwise Floor Quotients / `sum-of-pairwise-floor-quotients`
- Old → new API: `sumOfFlooredPairs` → `sumOfFloorQuotients` (go `sumOfFloorQuotients`, rust `sum_of_floor_quotients`, ts `sumOfFloorQuotients`); parameter `nums` kept (conventional)
- Core algorithm / difficulty: swap the summation order — for each present value, walk its multiples against a frequency prefix sum / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,4,12] → 11` (zeros below, multiples above), `[6,6,6,6] → 16` (all equal), `[1,10,100] → 123` (powers of ten)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- None beyond the routine.
