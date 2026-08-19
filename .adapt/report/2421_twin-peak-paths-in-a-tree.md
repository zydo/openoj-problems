## 2421 — Number of Good Paths

- New id / title / slug: 2421 / Twin-Peak Paths in a Tree / `twin-peak-paths-in-a-tree`
- Old → new API: `numberOfGoodPaths` → `countTwinPeakPaths` (go `countTwinPeakPaths`, rust `count_twin_peak_paths`, ts `countTwinPeakPaths`); parameters `vals`, `edges` kept (conventional); property renamed good path → twin-peak path
- Core algorithm / difficulty: union-find activating nodes in increasing value order, count equal-valued pairs per component per layer, plus n singletons / H4 (unchanged)
- Statement rewritten from spec: yes — "good path" redefined as twin-peak path (equal endpoints, jointly the highest points)
- Examples newly constructed: yes (structure-preserving: yes — same tree shapes, new values)
  - `[2,6,4,6,2], [[0,1],[0,2],[2,3],[2,4]] → 6` (equal endpoints blocked by a taller interior node), `[4,4,2,2,5], [[0,1],[1,2],[2,3],[2,4]] → 7` (two adjacent equal pairs), `[7], [] → 1` (single node)
- Constraints: domain unchanged (n ≤ 3·10⁴, values ≤ 10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — example 1's highlight moved from path 1-0-2-4 to the new path 1-0-2-3 (one line endpoint swap, node 4 now the unshaded circle); examples 2 and 3 value/caption edits only
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The overlap gate counts figure ALT TEXT as prose: my first pass mirrored
  the source's alt sentences ("The tree with values beside each node; …")
  and failed at 9%. Rewriting the alt text fresh fixed it — alt text needs
  the same rewrite discipline as the description.
- Moving a highlighted path inside a structure-preserving figure is just an
  edit of the blue <line> list plus which circle carries the unshaded fill.
