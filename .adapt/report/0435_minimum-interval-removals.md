## 0435 — Non-overlapping Intervals

- New id / title / slug: 435 / Minimum Interval Removals /
  `minimum-interval-removals`
- Old → new API: `eraseOverlapIntervals` → `minimumOverlapRemovals` (go
  `minimumOverlapRemovals`, rust `minimum_overlap_removals`, ts
  `minimumOverlapRemovals`)
- Core algorithm / difficulty: greedy selection by earliest right endpoint /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for the figure)
  - one longer competing interval; four duplicates; a touching chain spanning
    negative and positive endpoints
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The figure retains its interval geometry while mapping its four endpoint
  labels from `1..4` to `-2,1,4,7`; the rendered SVG was visually inspected.
- Public expectations were recomputed with the greedy reference algorithm.
