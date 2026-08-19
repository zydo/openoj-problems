## 2791 — Count Paths That Can Form a Palindrome in a Tree

- New id / title / slug: 2791 / Tree Paths That Rearrange to Palindromes / `tree-paths-that-rearrange-to-palindromes`
- Old → new API: `countPalindromePaths` → `countRearrangeablePaths` (go `countRearrangeablePaths`, rust `count_rearrangeable_paths`, ts `countRearrangeablePaths`); parameters `parent`, `s` kept (conventional)
- Core algorithm / difficulty: root parity masks, pair counting via XOR 0 / single-bit over a hash map / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[-1,0,0,2,2,1], "qabacc" → 6` (same drawn tree shape, nodes 1 and 2 renumbered so the parent array itself is new — the source's array is a stale literal; five edges plus (1,3) "aba"), `[-1,0,1,2,3], "ababc" → 5` (chain)
  - Counts cross-checked against a brute-force path-letter counter (`.localonly/wave-b-16/pub2791.py`)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (example-1 — node letters, swapped 1/2 index labels, qualifying-pairs caption)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The parent array of an example is a stale literal by gate definition, so
  "same shape" must be achieved by renumbering nodes, not by reusing the
  array; the drawn edge lines stay valid because the shape is unchanged, only
  the index labels on two circles swap.
