## 656 — Minimum Number of Operations to Sort a Binary Tree by Level

- New id / title / slug: 656 / Least Swaps to Sort Each Tree Level / `least-swaps-to-sort-each-tree-level`
- Old → new API: `minimumOperations` → `leastLevelSwaps` (go `leastLevelSwaps`, rust `least_level_swaps`, ts `leastLevelSwaps`); parameter `root` kept
- Core algorithm / difficulty: BFS level peel + minimum-swaps-to-sort-a-row via cycle decomposition (`c - 1` per cycle of length `c`), summed over levels / H3 (unchanged)
- Statement rewritten from spec: yes (levels numbered from the root at 0 rather than the source's "2nd/3rd level" ordinals)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[6,7,4,8,5,9,2,10,null,null,null,null,null,11]` → `3` (same 14-slot shape; level 1 one swap, level 2 a three-cycle narrated through the same two badge pairs), `[5,9,2,12,8,6,3]` → `3` (complete 7-node shape, two reversed pairs), `[2,4,7,5,9,11]` → `0` (6-slot shape, every level ordered)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — node values remapped in one regex pass, swap narration, level snapshots (`[4,7]`, `[2,5,9,8]`, `[2,5,8,9]`, `[3,8,6,12]`, `[3,6,8,12]`), tree comments; badge circles and edge geometry untouched
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The example values were reverse-engineered per level from the badge
  geometry: figure 1's level 3 needed a 3-cycle whose two narrated swaps land
  on the same glyph pairs (D↔G then F↔G requires target order
  `G < E < D < F`), and figure 2's level 3 needed two 2-cycles swapped outer
  pair then inner pair (`F < E < D < C`). Values then chosen to keep every
  level's unbadged levels free of extra swaps.
- Swap badges carry their own digit `<text>` nodes; the value relabel regex
  keys on `fill="#1a2026"`, which only node-value texts have — that is what
  keeps badges (1/2/3) from being renumbered.
- A note-to-self line ("Wait — check the level numbering") briefly leaked
  into a draft statement; caught on re-read before the gates. Statement
  drafts deserve a full read before running gates, not just a diff of the
  fenced blocks.
