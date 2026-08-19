## 2542 — Maximum Subsequence Score

- New id / title / slug: 2542 / Largest Sum-Min Product of K Picks / `largest-sum-min-product-of-k-picks`
- Old → new API: `maxScore` → `largestSumMinProduct` (go `largestSumMinProduct`, rust `largest_sum_min_product`, ts `largestSumMinProduct`); parameters `nums1`, `nums2`, `k` kept
- Core algorithm / difficulty: sort positions by nums2 descending, sweep with a size-k min-heap + running sum of nums1, multiply at each full heap / H3 (unchanged)
- Statement rewritten from spec: yes ("subsequence of indices" restated as "k distinct positions")
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,4,4,3]`,`[3,1,4,5]`,k=3 → 27 (all four triples enumerated in the explanation), `[3,1,4,2,5]`,`[6,9,7,8,5]`,k=1 → 28 (single products; a big nums2 with a weak partner loses), `[5,1,6,2]`,`[2,9,3,8]`,k=2 → 24 (two different pairs tie — the trade the sweep resolves)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Writing the sweep's walk-through exposed a subtlety worth noting for future
  bundles: the heap holds k values *including* the minimum-supplier itself
  (not k−1 companions from the strictly-passed set) — the supplier is pushed
  like any other element before the candidate is scored. My first draft of
  that paragraph contradicted itself; tracing the actual loop on the example
  data (heap {2,3,4} at b=3 → 27) fixed it. Same discipline as expected
  values: never narrate the algorithm without running it.
- The `nums2` parameter's value_type was briefly mangled while hand-editing
  problem.json (dropped `items` block) — `gen_starters --check` via check.py
  would have caught it, but reading the diff of the structured fields before
  generating starters is cheaper. Kept everything else byte-for-byte.
