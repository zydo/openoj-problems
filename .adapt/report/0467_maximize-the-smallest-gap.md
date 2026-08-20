## 467 — Magnetic Force Between Two Balls

- New id / title / slug: 467 / Maximize the Smallest Gap / `maximize-the-smallest-gap`
- Old → new API: `maxDistance` → `largestMinGap` (go `largestMinGap`, rust `largest_min_gap`, ts `largestMinGap`); parameter `position` → `slots`; `m` kept
- Core algorithm / difficulty: binary search on the answer + greedy earliest-slot feasibility sweep / H3 (unchanged)
- Statement rewritten from spec: yes — the Rick-and-Morty framing is gone; markers placed into slots on a line, maximize the closest-pair distance
- Examples newly constructed: yes (structure-preserving: yes for Example 1 — five slots, three markers, same number-line drawing)
  - `slots = [1,2,6,7,9], m = 3 → 3` (paired clusters: markers at 1, 6, 9), `[900000000,42,7,600000000], m = 2 → 899999993` (unsorted input, extremes win), `[4,5,6,7], m = 4 → 1` (every slot used)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — `example-1.svg` is a linear ruler (source: `x(u) = 50 + 55·u` on 0..8); regenerated at pitch 49 on 0..9 for the new slots/markers (`.localonly/wave-e-05/fig_1552.py`), render eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Scenario words in solution comments (ball/basket) were rewritten to the new terms (marker/slot) alongside the identifier renames — comments naming old terminology should follow the rename, per the provenance table.
- The figure's caption language ("force 3") became "gap 3" to match the new statement's term for the quantity.
