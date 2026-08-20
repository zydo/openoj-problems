## 798 — Longest Common Prefix of K Strings After Removal

- New id / title / slug: 798 / Longest Shared Prefix After Each Deletion / `longest-shared-prefix-after-each-deletion`
- Old → new API: `longestCommonPrefix` → `longestSharedPrefix` (go `longestSharedPrefix`, rust `longest_shared_prefix`, ts `longestSharedPrefix`); parameters `words`, `k` kept as conventional identifiers
- Core algorithm / difficulty: trie with per-node path counts, two best nodes per depth, timestamped path marking per query / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `["moon","mo","moon","mud"] k=2` (duplicates dominate), `["tree","trek","trend","trim"] k=3` (k=3, no duplicates), `["tie","bow"] k=2` (fewer than k remain)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- "Longest common prefix" is unavoidable generic terminology, so the concept
  word survives while the full title, slug, and method are new.
- Expected values computed with the adapted `solution.py` and cross-checked
  against a brute force over all k-subsets (all matched).
