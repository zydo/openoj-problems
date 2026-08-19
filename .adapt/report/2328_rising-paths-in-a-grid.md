## 2328 — Number of Increasing Paths in a Grid

- New id / title / slug: 2328 / Rising Paths in a Grid / `rising-paths-in-a-grid`
- Old → new API: `countPaths` → `countRisingPaths` (go `countRisingPaths`, rust `count_rising_paths`, ts `countRisingPaths`); parameter `grid` kept
- Core algorithm / difficulty: `dp[i][j]` = rising paths starting at `(i, j)`, cells processed in decreasing value order so larger neighbours are final; strict `>` skips equal neighbours; sum all cells / H3 (unchanged)
- Statement rewritten from spec: yes — "strictly increasing paths" renamed to **rising paths** and defined up front; the length-1 path called out explicitly
- Examples newly constructed: yes (structure-preserving: yes — same 2 x 2 figure, values and caption arithmetic relabeled)
  - `[[3,2],[5,6]] → 11` (4 + 4 + 2 + 1 by length), `[[6],[6]] → 2` (equal pair, no step strictly increases)
- Constraints: domain unchanged (m, n ≤ 1000, m·n ≤ 10⁵, values 1–10⁵), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (four cell values, caption counts)
- Gates: check ✓ (static tier clean for this key) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- **Arrow-notation walkthroughs are stale-literal traps**: the source's
  enumerated paths (`[1 -> 3]`, `[1 -> 4]`, `[3 -> 4]`, `[1 -> 3 -> 4]`,
  `[1 -> 2]`) are identifying literals, and any example that walks small
  values with arrows will re-emit some of them. Two failed gate runs
  (`[1->2]`, then `[1->3]`) before the example settled on values whose
  arrow list misses every source sequence. For any problem whose
  examples enumerate value sequences, pick example values that dodge the
  source's sequences, not just its arrays.
