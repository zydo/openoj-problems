## 488 — Maximum XOR With an Element From Array

- New id / title / slug: 488 / Best XOR Under a Ceiling / `best-xor-under-a-ceiling`
- Old → new API: `maximizeXor` → `bestXorUnder` (go `bestXorUnder`, rust `best_xor_under`, ts `bestXorUnder`); parameters `nums`, `queries` kept
- Core algorithm / difficulty: offline queries sorted by threshold, binary trie over inserted values, greedy MSB-first descent / H4 (unchanged)
- Statement rewritten from spec: yes (`mi` became `limit` in the prose; judge-visible shapes unchanged)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[6,11,9,2]` with `[[7,10],[7,5],[13,1]]` → `[14,5,-1]` (ceiling excludes an element; -1 case)
  - `[7,7,13,2]` with `[[10,13],[0,2],[7,7]]` → `[13,2,5]` (duplicate values; x = 0; smallest element is the best partner)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- macOS `sed` silently ignores `\b` — the first rename pass was a no-op while
  looking successful. Use plain substitutions (the tokens are unique) or python.
- The stale gate flags any source example array with 3+ distinct symbols,
  including the small `[12,4]` query pair — check pair literals, not just the
  nums array, when reusing digits from the source examples.
