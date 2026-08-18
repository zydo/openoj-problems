## 0032 — Longest Valid Parentheses

- New id / title / slug: 32 / Longest Balanced Bracket Run / `longest-balanced-bracket-run`
- Old → new API: `longestValidParentheses` → `longestBalancedRun` (go `longestBalancedRun`, rust `longest_balanced_run`, ts `longestBalancedRun`)
- Core algorithm / difficulty: index stack with a sentinel base, one pass / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: no — see figures)
  - `"(()())"` → 6 (whole string), `"))(()()"` → 4 (leading walls, two runs joining), `"((("` → 0 (nothing closes)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped (`solution-stack-states.svg`)
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Kinship: 0020 was adapted as "Balanced Brackets", so this one reuses
  "Balanced Bracket" and adds "Run" for the longest-slice twist.
- **Why the figure was dropped.** `solution-stack-states.svg` draws six panels
  whose box counts are the stack heights after each character. Those heights
  are a function of the exact character sequence, so the only 6-character
  string that fits the drawn geometry is the source's own example — a
  structure-preserving example here would mean copying the source data. No
  renderer exists for this family, so it goes to phase 2. This is the general
  shape of the "geometry encodes the data" case for stack/DP trace figures:
  even a two-symbol alphabet does not save them.
- The `s` parameter is kept (conventional per ADAPT.md §Naming).
