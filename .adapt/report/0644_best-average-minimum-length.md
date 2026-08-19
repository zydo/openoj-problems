## 0644 — Maximum Average Subarray II

- New id / title / slug: 644 / Best Average with Minimum Length /
  `best-average-minimum-length`
- Old → new API: `findMaxAverage` → `bestAverageAtLeastK` (go
  `bestAverageAtLeastK`, rust `best_average_at_least_k`, ts
  `bestAverageAtLeastK`)
- Core algorithm / difficulty: exact ratio comparison over per-length prefix
  sums / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - a three-value optimum inside mixed signs; an all-negative array
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Exhaustive subarray enumeration verifies both floating-point expectations.
- That check caught a draft public case retaining the source `k`; the intended
  threshold was restored before all gates were rerun.
