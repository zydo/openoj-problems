## 0152 — Maximum Product Subarray

- New id / title / slug: 152 / Largest Subarray Product / `largest-subarray-product`
- Old → new API: `maxProduct` → `largestSubarrayProduct` (go `largestSubarrayProduct`, rust `largest_subarray_product`, ts `largestSubarrayProduct`); parameter `nums` kept
- Core algorithm / difficulty: one pass carrying both extreme products ending at each index / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-1,-4,2] → 24` (two negatives cancel), `[-5,0,7,-2] → 7` (a zero splits the array), `[-6] → -6` (single entry, negative answer)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ check ✓ (verify 7/7 languages, 19/19 cases)

### Notes

- Sibling of `0053_largest-subarray-sum`: the title is the deliberate parallel,
  and the statement reuses that bundle's *block* vocabulary so the two read as
  a pair. The examples and prose are independent of it.
- The tree-wide `check.py` run at this point reported one failure in
  `0142_cycle-entry-in-a-list`, a bundle from another chunk that was mid-write;
  nothing in this bundle.
