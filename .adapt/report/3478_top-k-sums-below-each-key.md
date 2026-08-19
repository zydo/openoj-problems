## 3478 — Choose K Elements With Maximum Sum

- New id / title / slug: 3478 / Top-k Sums Below Each Key / `top-k-sums-below-each-key`
- Old → new API: `findMaxSum` → `topKSums` (go `topKSums`, rust `top_k_sums`, ts `topKSums`); parameters `nums1`, `nums2`, `k` kept
- Core algorithm / difficulty: sort indices by nums1, sweep equal-key blocks, capped min-heap with running sum; answers read before the block's own values enter the pool / H3 (unchanged)
- Statement rewritten from spec: yes (card-with-key-and-value framing; strict-inequality pooling and take-all-when-fewer restated from the task)
- Examples newly constructed: yes (structure-preserving: yes — example 1 keeps the figure's five-group ascending sweep with one fill pair, one ignored newcomer, and two evictions)
  - `[4,1,3,5,2] / [30,10,5,45,15] k=2` → `[25,0,25,45,10]`, `[7,7,7] / [4,9,2] k=2` → `[0,0,0]` (strict ties), `[2,3,2,4] / [6,3,9,1] k=3` → `[0,15,0,18]` (fewer than k qualify)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `solution-topk-heap.svg` **regenerated** for the new example-1 sweep (same row template, pool boxes, and divider rules); rendered PNG verified by image analysis
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Chose example 1's values so the sweep picture shows all three newcomer
  fates (fill / lose / evict) exactly like the source figure did — the
  structure-preserving rule pays off most when the figure is an algorithm
  walk-through, not a data drawing.
- The per-index brute (`exp_3478.py`, 400 random inputs) is a two-liner
  (sort-qualifiers-and-sum), which is the point: the task is simple, the
  interest is the shared sweep.
