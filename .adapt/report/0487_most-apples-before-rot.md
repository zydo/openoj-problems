## 487 — Maximum Number of Eaten Apples

- New id / title / slug: 487 / Most Apples Before Rot / `most-apples-before-rot`
- Old → new API: `eatenApples` → `mostApples` (go `mostApples`, rust `most_apples`, ts `mostApples`); parameters `apples`, `days` kept
- Core algorithm / difficulty: min-heap keyed by spoil day, purge-and-eat per day, second loop past day `n` / H3 (unchanged)
- Statement rewritten from spec: yes ("rot" becomes "spoil" throughout; the day `i + days[i]` rule stated once)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,3,1,4] / [2,3,2,3]` → 6 (batches overlapping), `[2,0,0,0,3] / [2,0,0,0,3]` → 5 (idle gap, then eating past day n; reused in the guide), `[3,3] / [1,3]` → 4 (first batch contributes one apple before spoiling)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The apples framing is the computation itself (perishable supply, one unit
  of demand per day), so no scenario was invented — only the wording.
- Example 2's "idle days then eating past day n" is the shape most likely to
  be missed by a solver who stops the simulation at day `n`; the guide walks
  it end to end.
