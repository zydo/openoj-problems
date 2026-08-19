## 0370 — Range Addition

- New id / title / slug: 370 / Apply Interval Updates / `apply-interval-updates`
- Old → new API: `getModifiedArray` → `applyIntervalUpdates` (go
  `applyIntervalUpdates`, rust `apply_interval_updates`, ts
  `applyIntervalUpdates`)
- Core algorithm / difficulty: difference array and prefix sum / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes for the figure)
  - length 5 with three overlapping updates, length 6 with two disjoint updates
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated
- Gates: check ✓; verify ✓ (7/7 languages, 16/16 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- The first example keeps the source figure's array length and interval
  boundaries, while changing every delta and every nonzero intermediate row.
- The verification scripts require Python 3.10 or newer; on this machine,
  `/usr/bin/python3` is 3.9, so gates were run with the Homebrew Python 3.14
  interpreter used by the other adaptation sessions.
- The full-tree static sweep found no failure for this bundle. It still
  reported nine failures in other sessions' in-progress or previously merged
  bundles; those paths are outside Part C.
