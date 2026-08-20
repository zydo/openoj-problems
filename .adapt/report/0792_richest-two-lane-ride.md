## 792 — Maximum Coin Collection

- New id / title / slug: 792 / Richest Two-Lane Ride / `richest-two-lane-ride`
- Old → new API: `maxCoins` → `richestRide` (go `richestRide`, rust `richest_ride`, ts `richestRide`); parameters `lane1`, `lane2` kept
- Core algorithm / difficulty: six-state rolling DP (lane x crossings remaining), fresh-ride injection per mile, answer as the max over all states at all miles / H3 (unchanged)
- Statement rewritten from spec: yes (the LeetCode "Mario" framing replaced by a neutral vehicle on a two-lane road; entry/exit/immediate-crossing rules restated from the mechanics)
- Examples newly constructed: yes (structure-preserving: yes — example 1 keeps the figure's 4-mile enter/cross/cross-back shape)
  - `[2,-3,-9,4] / [-4,8,1,2]` → 15 (both crossings spent), `[3,-1,-2,-2] / [0,5,6,-7]` → 14 (leave before the losing stretch), `[-6,-5,-4] / [-2,3,4]` → 7 (late entry, immediate cross), `[-2,-7,-6] / [7,-1,6]` → 12 (toll worth paying), `[-9] / [-3]` → -3 (forced negative)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `solution-lane-dp.svg` **regenerated** for the new example-1 data (same lane bars, mile pitch, and route geometry; values, route labels, and total updated); rendered PNG verified by image analysis
- Gates: check ✓ (per-bundle static tier clean) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The lane-sequence brute force treats "entry in lane 2" as one crossing
  spent, which is the semantics the immediate-switch rule implies; 400
  random inputs agreed with the reference (`exp_3466.py`).
- Scenario replacement: the source's named character adds nothing to the
  computation; "a vehicle on a two-lane road" carries the same structure
  without borrowing the framing.
