## 1938 — Maximum Genetic Difference Query

- New id / title / slug: 1938 / Maximum Xor Along Root Paths / `maximum-xor-along-root-paths`
- Old → new API: `maxGeneticDifference` → `maxRootPathXor` (go `maxRootPathXor`, rust `max_root_path_xor`, ts `maxRootPathXor`); parameters `parents`, `queries` kept (conventional)
- Core algorithm / difficulty: offline DFS with add/remove on a flat binary trie, greedy MSB descent / H4 (unchanged)
- Statement rewritten from spec: yes (the "genetic value" story dropped; node value = node id stated once)
- Examples newly constructed: yes (structure-preserving: yes)
  - Both figures keep their drawn tree shapes with relabeled nodes: `[2,-1,1,1]` with queries `[[0,3],[3,3],[2,6]] → [3,2,7]`, and `[6,3,0,-1,1,1,3,0]` with `[[2,9],[4,12],[0,7]] → [15,15,7]`; third example is a new 5-node chain `[-1,0,1,2,3] → [12,7]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (2 of 2 — node labels swapped via coordinate-anchored replacements; SVG comments rewritten to the new parents arrays)
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 15/15 cases) check ✓ (per-bundle static)

### Notes

- For a tree figure the *shape* is the drawn structure and node ids are the
  values, so "structure-preserving" means an isomorphic tree under new
  labels — the parents array is then genuinely different data. Query
  expectations were cross-checked with an independent walk-to-root brute
  force.
- Overlap gate hit twice on habits, worth internalizing: alt texts that
  reuse the source's grammatical skeleton ("Tree with root X, child Y, and
  leaves …") and constraint sentences copied near-verbatim ("for every node
  that is not the root"). Both rewrote cleanly.
- Coordinate-anchored `<text>` replacement is the safe way to relabel SVGs —
  plain value-based seds chain-clobber (see 1928's note).
