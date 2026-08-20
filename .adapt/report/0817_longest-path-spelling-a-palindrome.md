## 817 — Longest Palindromic Path in Graph

- New id / title / slug: 817 / Longest Path Spelling a Palindrome / `longest-path-spelling-a-palindrome`
- Old → new API: `maxLen` → `longestPalindromePath` (go `longestPalindromePath`, rust `longest_palindrome_path`, ts `longestPalindromePath`); parameters `n`, `edges`, `label` kept
- Core algorithm / difficulty: bitmask DP over (visited set, ends) growing the palindrome from its middle; odd seeds per node, even seeds per same-letter adjacent pair / H4 (unchanged)
- Statement rewritten from spec: yes (walk-spelling framing)
- Examples newly constructed: yes (structure-preserving: yes — all three drawn graph shapes kept, letters changed)
  - path `"xyx"` → `3`, star `"xyz"` → `1` (no multi-node spelling works), 4-node graph `"yxxy"` → `4` (the whole graph, one Hamiltonian spelling "xyyx")
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (3) — geometry untouched; letters, walk spellings, captions, data comments, alt texts rewritten; ex3 now highlights all edges since the winning walk covers the graph
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a (function) compatibility ✓ stale ✓ overlap ✓

### Notes

- Two self-caught mistakes worth recording: (1) my first brute force updated
  the best on *every* path length without testing palindromicity — it
  disagreed with the reference on the star example and the reference was
  right; (2) I initially wrote ex3's label as the walked spelling (`xyyx`)
  instead of the per-node string (`yxxy`) — the label string is indexed by
  node id, the spelling is read along the walk. Both caught before any gate
  ran; brute force and direct-call sanity checks are cheap.
