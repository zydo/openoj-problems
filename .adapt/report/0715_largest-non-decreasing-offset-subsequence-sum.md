## 715 — Maximum Balanced Subsequence Sum

- New id / title / slug: 715 / Largest Non-Decreasing-Offset Subsequence Sum / `largest-non-decreasing-offset-subsequence-sum`
- Old → new API: `maxBalancedSubsequenceSum` → `maxOffsetSubsequenceSum` (go `maxOffsetSubsequenceSum`, rust `max_offset_subsequence_sum`, ts `maxOffsetSubsequenceSum`); parameter `nums` kept
- Core algorithm / difficulty: b[i] = nums[i] − i reframing (balanced ⇔ offsets non-decreasing) + Fenwick prefix-max DP / H4 (unchanged)
- Statement rewritten from spec: yes — "balanced" replaced by the direct inequality on kept indices; the transformed view is left to the hints and guide
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,3,7,8] → 21` (index 2 forced out; offsets 2,3,4,4), `[-3,4,-1,6] → 10` (negatives traded away), `[-7,-2,-9] → -2` (all negative, lone element) — all brute-verified by full subset enumeration
- Constraints: domain unchanged (1 ≤ n ≤ 10⁵, −10⁹ ≤ nums[i] ≤ 10⁹), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The title names the transformed quantity ("offset") that the solution
  actually reasons about, which keeps statement, hints, and guide on one
  vocabulary.
