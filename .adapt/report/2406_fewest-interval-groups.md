## 2406 — Divide Intervals Into Minimum Number of Groups

- New id / title / slug: 2406 / Fewest Interval Groups / `fewest-interval-groups`
- Old → new API: `minGroups` → `fewestIntervalGroups` (go `fewestIntervalGroups`, rust `fewest_interval_groups`, ts `fewestIntervalGroups`); parameter `intervals` kept
- Core algorithm / difficulty: two-pointer sweep over sorted starts/ends, peak inclusive coverage depth / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — figure dropped)
  - `[[1,4],[3,6],[8,9],[9,12],[2,11]] → 3` (two separate depth-3 points); `[[2,4],[6,7],[9,11]] → 1` (no contact); `[[1,5],[5,9]] → 2` (inclusive touch intersects)
  - cross-checked against a brute-force per-point depth count
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `solution-depth-sweep.svg` draws the source example's intervals and step function (axis geometry bound to old values); no renderer exists for the family
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
