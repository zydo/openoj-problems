## 1950 — Maximum of Minimum Values in All Subarrays

- New id / title / slug: 1950 / Max of Window Minima / `max-of-window-minima`
- Old → new API: `findMaximums` → `maxWindowMinima` (go `maxWindowMinima`, rust `max_window_minima`, ts `maxWindowMinima`)
- Core algorithm / difficulty: monotonic-stack spans + suffix maximum, O(n) / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[3,8,5,2]` → `[8,5,3,2]` (ragged), `[6,2,4,9]` → `[9,4,2,2]` (global-min plateau), `[1,3,1,3,1]` → `[3,1,1,1,1]` (alternating)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The stale gate's example literals make short window listings radioactive:
  the source explanation fences turn `[0,1,2]`-sized arrays into forbidden
  substrings. Worked walkthroughs must list windows from the *new* example
  only (solutions.md here uses `[6,2,4,9]`'s windows).
- `verify_solution.py` plus a full-tree `check.py` exceeds the 120 s
  foreground limit once Java/Rust compile; run them in the background and
  read the output file.
- The problems-adapt tree is shared with other Part B chunk agents, so a
  full-tree `check.py` reports other bundles' half-written states. The
  verdict that matters per problem: zero failures naming your own key.
