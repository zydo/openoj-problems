## 629 — Median of a Row Wise Sorted Matrix

- New id / title / slug: 629 / Median Across Sorted Rows / `median-across-sorted-rows`
- Old → new API: `matrixMedian` → `medianAcrossSortedRows` (go `medianAcrossSortedRows`, rust `median_across_sorted_rows`, ts `medianAcrossSortedRows`)
- Core algorithm / difficulty: binary search on the value, per-row bisect counts / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 3×3 `[[2,2,6],[1,4,4],[2,4,8]] → 4`; single row `[[3,5,5,9,11]] → 5`; single-column `[[6],[2],[10]] → 6`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
