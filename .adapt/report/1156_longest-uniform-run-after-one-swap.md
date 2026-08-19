## 1156 — Swap For Longest Repeated Character Substring

- New id / title / slug: 1156 / Longest Uniform Run After One Swap /
  `longest-uniform-run-after-one-swap`
- Old → new API: `maxRepOpt1` → `longestUniformRunAfterSwap`
  (go `longestUniformRunAfterSwap`, rust `longest_uniform_run_after_swap`,
  ts `longestUniformRunAfterSwap`); parameter `text` kept
- Core algorithm / difficulty: run-length encode, stretch-or-merge per
  character with frequency caps / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `aabaaca` → 5 (two runs glued plus a borrowed spare), `bbbbc` → 4
    (stretch capped by supply), `hhhhh` → 5 (swap unspent)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- The three examples were picked so each of the algorithm's three outcomes
  (merge-with-bonus, capped stretch, no swap) appears once — the hidden set
  covers the same branches but with different strings.
- `maxRepOpt1` was LeetCode-opaque ("opt1" = at most one operation); the new
  name says what is measured.
