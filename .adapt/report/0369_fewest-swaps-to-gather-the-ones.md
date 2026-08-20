## 369 — Minimum Swaps to Group All 1's Together

- New id / title / slug: 369 / Fewest Swaps to Gather the Ones /
  `fewest-swaps-to-gather-the-ones`
- Old → new API: `minSwaps` → `fewestSwapsToGatherOnes`
  (go `fewestSwapsToGatherOnes`, rust `fewest_swaps_to_gather_ones`,
  ts `fewestSwapsToGatherOnes`); parameter `data` → `bits` (clearer for a
  binary array; `bits` unused as an identifier in every source solution)
- Core algorithm / difficulty: fixed-length window minimizing interior
  zeros, sliding tally / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,0,1,0,1]` → 1 (best window at the end), `[1,0,0,0,1]` → 1 (run at
    either end costs the same), `[0,0,1,1,1,0,0]` → 0 (already one run)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) compatibility ✓ stale ✓
  overlap ✓ sandbox n/a (function kind)

### Notes

- My hand-estimate of example 1 was wrong (I read the window zero counts
  carelessly); the reference computed 1, not 2 — the "never compute
  expectations by hand" rule earns its keep even on six-element arrays.
- The stale gate ignores example literals over a two-symbol alphabet, so
  binary arrays carry no literal-collision risk; the examples were still
  built fresh and checked against hidden inputs for exact duplicates.
