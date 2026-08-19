## 3425 — Longest Special Path

- New id / title / slug: 3425 / Longest Duplicate-Free Descent / `longest-duplicate-free-descent`
- Old → new API: `longestSpecialPath` → `longestDuplicateFreeDescent` (go `longestDuplicateFreeDescent`, rust `longest_duplicate_free_descent`, ts `longestDuplicateFreeDescent`); parameters `edges`, `nums` kept
- Core algorithm / difficulty: iterative DFS holding the root route and prefix distances, with a per-value last-seen-depth map acting as a sliding window start, restored on backtrack / H4 (unchanged)
- Statement rewritten from spec: yes ("descent" coined and defined; duplicate-free condition and the `[length, nodes]` return restated from scratch)
- Examples newly constructed: yes (structure-preserving: yes — both keep the drawn tree topologies, values and edge lengths changed)
  - ex1 `[[0,1,4],[1,2,2],[1,3,3],[1,4,5],[2,5,9]], nums=[2,7,2,9,4,7]` → `[9,2]` (engineered tie: 0→1→4 over three nodes vs 2→5 over two); ex2 `[[1,0,4]], nums=[5,5]` → `[0,1]`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: all three **labels updated** — node positions and edge geometry unchanged (they draw the preserved topology); values, edge lengths, annotations, data comments, and captions rewritten; alt texts rewritten
- Gates: check ✓ verify ✓ (7/7 languages, 14/14 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Title keeps the family tie to 0003 `longest-duplicate-free-substring` —
  same distinctness property, moved from a string to a tree route.
- Example 1 was reverse-engineered to preserve the source's pedagogy: a tie
  between a long shallow descent and a single deep edge, resolved by the node
  count. Picking the values first (`2,7,2,9,4,7` forces both repeats) and
  then tuning edge lengths (`4+5 = 9`) made the tie fall out.
- Expected values from `.localonly/wave-g-02/cases_3425.py`: reference
  cross-checked against a parent-pointer brute force enumerating every
  ancestor-descendant pair.
