## 133 — Count of Range Sum

- New id / title / slug: 133 / Subarray Sums Within Bounds / `subarray-sums-within-bounds`
- Old → new API: `countRangeSum` → `countBoundedSums` (go `countBoundedSums`, rust `count_bounded_sums`, ts `countBoundedSums`)
- Core algorithm / difficulty: merge-sort divide and conquer over prefix sums, two-pointer cross counting / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,-4,2]` against `[-1,4]` → 4 (all six sums enumerated in the explanation), `[-7]` against `[-7,0]` → 1 (endpoint hit), `[2,2]` against `[2,2]` → 2 (degenerate interval)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- Parameters `lower`/`upper` kept — the conventional interval names.
