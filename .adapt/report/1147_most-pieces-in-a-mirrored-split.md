## 1147 — Longest Chunked Palindrome Decomposition

- New id / title / slug: 1147 / Most Pieces in a Mirrored Split /
  `most-pieces-in-a-mirrored-split`
- Old → new API: `longestDecomposition` → `mostMirroredPieces`
  (go `mostMirroredPieces`, rust `most_mirrored_pieces`, ts `mostMirroredPieces`);
  parameter `text` kept (conventional)
- Core algorithm / difficulty: greedy shortest matching prefix/suffix pair,
  two boundaries walking in / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `abcdefcdeab` → 5 (nested pairs plus a lone middle piece), `puzzle` → 1
    (no pair at all), `aaaaaa` → 6 (every character its own piece)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- Expected values for the new examples were computed by exec'ing the renamed
  `solution.py` (no import, so no `__pycache__`).
- The 1000-character hidden case round-trips through json untouched; only the
  `public` array is replaced.
- Watch for near-duplicate shapes when picking an all-one-letter example:
  hidden cases already cover `"aaaa"` and 1000×`"a"`, so 6×`"a"` was chosen.
