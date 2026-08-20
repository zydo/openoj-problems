## 546 — Last Day Where You Can Still Cross

- New id / title / slug: 546 / Last Crossable Day / `last-crossable-day`
- Old → new API: `latestDayToCross` → `lastCrossableDay` (go `lastCrossableDay`, rust `last_crossable_day`, ts `lastCrossableDay`); parameters `row`, `col`, `cells` kept (conventional)
- Core algorithm / difficulty: binary search on day + multi-source BFS feasibility, O(RC log RC) / H3 (unchanged)
- Statement rewritten from spec: yes (water/land framing replaced by blocked/open cells)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - `2×3` answer 3, `3×2` answer 2 (left column vs right column), `3×3` answer 2 (center blocked early)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — the three per-day grid snapshots draw which cells are flooded on which day, so their geometry encodes the example data; no renderer for the family. Phase two may redraw.
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- No bracket-array literals gate-trap here (cells arrays are nested, so the
  shingle regex skips them), but route/walkthrough text should still avoid
  reusing source coordinate lists.
- Day-by-day BFS brute force cross-checked each expected value.
