## 167 — Longest Repeating Character Replacement

- New id / title / slug: 167 / Longest Uniformizable Window /
  `longest-uniformizable-window`
- Old → new API: `characterReplacement` → `longestUniformWindow` (go
  `longestUniformWindow`, rust `longest_uniform_window`, ts
  `longestUniformWindow`)
- Core algorithm / difficulty: sliding window with maximum letter frequency /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a)
  - a five-character window using the full budget; a four-character suffix
    requiring one replacement
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓; verify ✓ (7/7 languages, 15/15 cases); sandbox n/a;
  compatibility ✓; stale ✓; overlap ✓ (0%)

### Notes

- Public expectations were recomputed by exhaustive substring enumeration;
  this caught and corrected the second example before the bundle was recorded.
