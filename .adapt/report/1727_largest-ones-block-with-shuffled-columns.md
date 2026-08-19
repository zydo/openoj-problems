## 1727 — Largest Submatrix With Rearrangements

- New id / title / slug: 1727 / Largest Ones Block With Shuffled Columns / `largest-ones-block-with-shuffled-columns`
- Old → new API: `largestSubmatrix` → `largestOnesBlock` (go `largestOnesBlock`, rust `largest_ones_block`, ts `largestOnesBlock`); parameter `matrix` kept
- Core algorithm / difficulty: per-column consecutive-1s heights, per-row descending sort, `ordered[i] * (i + 1)` sweep / H3 (unchanged)
- Statement rewritten from spec: yes (columns move as whole units, re-derived)
- Examples newly constructed: yes (structure-preserving: yes — same grid shapes as the figures)
  - `[[1,1,0],[1,0,1],[1,1,1]]` → 4 (3×3; winning 2×2 after the shuffle, same block position as the drawing)
  - `[[0,1,1,0,1]]` → 3 (1×5; three 1s grouped)
  - `[[0,1,1],[1,1,0]]` → 2 (2×3; only one column spans both rows)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated (both) — grid geometry and layout constants kept; texts, cell fills, and captions re-emitted for the new data with a documented fill rule in a comment (the source's fill choices were not self-consistent, so the rule is now: white = 0, light = 1 outside the block, tinted = 1 inside the winning block)
- Gates: check ✓ (per-bundle static replica) verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Structure preservation let the blue highlight rect keep its exact
  coordinates: pick an example whose winning block lands where the source's
  did and the geometry edits shrink to text and fill attributes.
- Binary-alphabet examples never trip the stale literal scan (two-symbol
  exclusion), so the only rename risk here was the method name.
