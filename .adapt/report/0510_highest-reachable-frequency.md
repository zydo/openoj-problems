## 510 — Frequency of the Most Frequent Element

- New id / title / slug: 510 / Highest Reachable Frequency / `highest-reachable-frequency`
- Old → new API: `maxFrequency` → `highestReachableFrequency` (go `highestReachableFrequency`, rust `highest_reachable_frequency`, ts `highestReachableFrequency`); parameters `nums`, `k` kept (conventional)
- Core algorithm / difficulty: sort, then sliding window on budget `width × right end − window sum` / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes)
  - `[3,1,4], k=4 → 3` (whole array raised), `[5,2,5,7], k=4 → 3` (pre-existing pair lifted, window skips the 2), `[4,9,6], k=1 → 1` (budget buys nothing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: regenerated — `solution-raise-to-right-end.svg`'s comment documents its layout (bars x = 130 + i·120, baseline 270, 45 px/unit), so it was re-emitted for sorted `[1,3,4]`; eyeballed, same visual language
- Gates: check ✓ verify ✓ (7/7 languages, 13/13 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The figure's geometry encodes the data, but the coordinate formulas sit in a
  comment; re-deriving the rects for new values turned a drop into a
  regeneration. Worth a quick render check by a human.
- Public example 2 (`[5,2,5,7]`) deliberately uses an unsorted input with a
  duplicate so the examples don't all look sorted.
