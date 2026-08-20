## 396 — Maximum Length of a Concatenated String with Unique Characters

- New id / title / slug: 396 / Longest Duplicate-Free Concatenation / `longest-duplicate-free-concatenation`
- Old → new API: `maxLength` → `longestDuplicateFreeConcat` (go `longestDuplicateFreeConcat`, rust `longest_duplicate_free_concat`, ts `longestDuplicateFreeConcat`); parameter `arr` kept
- Core algorithm / difficulty: per-string 26-bit masks (sentinel for internal repeats), DFS over subsets with a forward start index, popcount as length / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["ab","cd","efg"]` → 7 (everything combines); `["sun","moon","star"]` → 4 (internal repeat plus an s-conflict); `["e","g","pq","rs"]` → 6 (disjoint singles)
- Constraints: domain unchanged (`1 <= len <= 16`, `1 <= len(s) <= 26`, lowercase only), presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: compatibility ✓ stale ✓ overlap ✓ verify ✓ (7/7 languages, 18/18 cases) check ✓ (per-bundle static clean)
- Sandbox: function kind, deferred to batch run

### Notes

- Two-symbol example lists (["ab","cd"]) escape the stale literal scan by
  design; my example arrays use >=3 distinct characters anyway.
