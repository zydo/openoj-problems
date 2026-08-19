## 2398 — Maximum Number of Robots Within Budget

- New id / title / slug: 2398 / Longest Affordable Consecutive Stretch / `longest-affordable-consecutive-stretch`
- Old → new API: `maximumRobots` → `longestAffordableStretch` (go `longestAffordableStretch`, rust `longest_affordable_stretch`, ts `longestAffordableStretch`); parameters `chargeTimes` → `startCosts` (`charge_times` → `start_costs`), `runningCosts` → `usageCosts` (`running_costs` → `usage_costs`), `budget` kept
- Core algorithm / difficulty: two-pointer window + monotonic deque for window max, running usage sum / H3 (unchanged)
- Statement rewritten from spec: yes — the robot scenario dropped per ADAPT's no-invented-scenarios rule; the slots/costs framing keeps the same math (`max` of one-time costs plus length × sum of per-use costs)
- Examples newly constructed: yes (structure-preserving: no — figure dropped)
  - `[4,9,2,5,8]`/`[3,1,2,2,4]` budget 40 → 3; `[7,7]`/`[5,5]` budget 9 → 0 (nothing affordable); `[2,3,1]`/`[1,1,1]` budget 50 → 3 (whole array)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — `solution-window-deque.svg` walks the source example's robot data (window states over charge [3,6,1,3,4]); a label edit cannot move its window geometry and no renderer exists for the family
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
