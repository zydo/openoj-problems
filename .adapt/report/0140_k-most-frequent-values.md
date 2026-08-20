## 140 — Top K Frequent Elements

- New id / title / slug: 140 / K Most Frequent Values / `k-most-frequent-values`
- Old → new API: `topKFrequent` → `kMostFrequent` (go `kMostFrequent`, rust `k_most_frequent`, ts `kMostFrequent`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: counting pass + frequency-bucket walk, and counting pass + size-k min-heap / H2 (unchanged)
- Statement rewritten from spec: yes — "elements" → values, since the array holds plain integers
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,3,3,8,8,9], k=2 → [3,8]`, `[2,2,7,7,4,4,4,9], k=3 → [4,2,7]` (tie inside the answer, both fit), `[6], k=1 → [6]`
- Constraints: domain unchanged (1–10^5 values, values −10⁴–10⁴, k bounded by distinct count), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Variants: `bucket`, `heap` kept; guide headings "Buckets indexed by frequency" / "Size-k min-heap on counts" still carry the variant tokens
- Gates: check ✓ verify ✓ (14/14 variant files, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The two variants emit the same set in different orders (`bucket` →
  `[4,2,7]`, `heap` → `[4,7,2]`; the heap's final sort keys on
  `-value` ascending). `comparison` is `sorted`, so both judge clean; the
  public case carries the bucket variant's order and the statement says
  any ordering is accepted.
