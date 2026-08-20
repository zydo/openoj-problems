## 743 — Find the Median of the Uniqueness Array

- New id / title / slug: 743 / Median Subarray Distinct Count / `median-subarray-distinct-count`
- Old → new API: `medianOfUniquenessArray` → `medianDistinctCount` (go `medianDistinctCount`, rust `median_distinct_count`, ts `medianDistinctCount`); parameter `nums` kept
- Core algorithm / difficulty: binary search on the answer + sliding-window count of subarrays with at most x distinct values / H3 (unchanged)
- Statement rewritten from spec: yes (LeetCode's "uniqueness array" term dropped; the object is described as the sorted list of subarray distinct counts)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,1,5,2]` → 2 (mixed repeats), `[6,6,6,2]` → 1 (run-dominated), `[5,9,2,7,3,8,6]` → 3 (all distinct — counts equal lengths)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The stale gate also flags the *sorted count lists* shown in explanations (the source displayed `[1,1,1,1,2,2,2,3,3,3]` etc.), so the new examples were chosen so their count multisets differ from the source's three — checked in `.localonly/wave-f-05/gen3134.py`, which prints each example's full sorted count list alongside the reference answer.
- `solution.*` comments naming the old "uniqueness array" terminology were updated to "distinct-count array" (ADAPT's comment rule); no other code edits.
