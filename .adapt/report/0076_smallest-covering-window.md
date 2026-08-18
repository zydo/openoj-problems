## 0076 — Minimum Window Substring

- New id / title / slug: 76 / Smallest Covering Window / `smallest-covering-window`
- Old → new API: `minWindow` → `smallestCoveringWindow` (go `smallestCoveringWindow`, rust `smallest_covering_window`, ts `smallestCoveringWindow`); parameters `s`, `t` kept
- Core algorithm / difficulty: sliding window over a deficit counter, `missing == 0` coverage test / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: **yes** for the figure example)
  - `"BEFFCDEAAFBAD"`, `"BFD"` → `"FBAD"`; `"aA"`, `"Aa"` → `"aA"` (case-sensitive, whole string); `"zq"`, `"zz"` → `""`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **labels updated** — `solution-window-shrink.svg` walks through the example, so the new example was *searched for* to match the drawing's event structure (13 cells, covers ending at right 5 / 10 / 12, tightest [9..12]): 39 letter nodes, header, three captions. No geometry touched.
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓

### Notes

- A solution figure that walks the example is rescuable by choosing an
  example whose *algorithm trace* matches the drawn structure. I brute-forced
  random `(s, t)` pairs against the source algorithm until one produced the
  same completion sequence `(right, left, length)` = (5,0,6), (10,5,6),
  (12,9,4) with a unique minimum — about 3 hits in 400k trials, so the
  technique needs a script, not luck. Cheap and the figure survives intact.
- Also verified by brute force that the minimal covering piece is unique
  (the statement's guarantee) before committing to the example.
- Source figure had one letter inside the winning highlight rendered in ink
  rather than white; relabeling fixed that as a side effect.
