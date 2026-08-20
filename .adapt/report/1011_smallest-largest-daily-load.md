## 1011 — Capacity To Ship Packages Within D Days

- New id / title / slug: 1011 / Smallest Largest Daily Load / `smallest-largest-daily-load`
- Old → new API: `shipWithinDays` → `smallestLargestDailyLoad` (go `smallestLargestDailyLoad`, rust `smallest_largest_daily_load`, ts `smallestLargestDailyLoad`); parameters `weights`, `days` kept
- Core algorithm / difficulty: binary search on the answer with a greedy day-count check / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,7,2,9,5,3]` days=4 → 9 (interior optimum, walked through), `[6,1,5]` days=1 → 12 (single-day extreme), `[2,8,3,5]` days=4 → 8 (one item per day extreme)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Near-twin of 0410 (`Smallest Largest Split Sum`, `smallestLargestSplit`): same
  computation, days framing. Title follows the family's "Smallest Largest X"
  pattern set by 0410 and 2064 (`Smallest Largest Bin Load`); "Daily Load" keeps
  the days wording and the three stay mutually distinguishable.
- Ship/port/conveyor scenario dropped; the statement now describes ordered
  consecutive runs per day directly. Solution comments naming the ship were
  rewritten to match.
