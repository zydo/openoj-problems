## 444 — Number of Ways to Wear Different Hats to Each Other

- New id / title / slug: 444 / Count Locker Assignments / `count-locker-assignments`
- Old → new API: `numberWays` → `countLockerAssignments` (go `countLockerAssignments`, rust `count_locker_assignments`, ts `countLockerAssignments`); **parameter `hats` → `lockers`** (scenario reframed from people/hats to students/lockers — the assignment task is the scenario, the carrier is new)
- Core algorithm / difficulty: bitmask DP over the served-student subset, sweeping locker ids / H3 (unchanged)
- Statement rewritten from spec: yes — counted in terms of serving each student exactly once from their own list
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[6,7,8]]×3 → 6` (identical lists, bijection count), `[[5,6,7],[5,6],[6,7]] → 3` (partial overlap, brute-force cross-checked), `[[2,3],[2,3],[3]] → 0` (impossible); no overlap with hidden cases
- Constraints: domain unchanged, presentation rewritten (uniqueness bullet reworded)
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates) verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The parameter rename made the comment sweep subtle: `hats` appears in the
  reference comments ("ways to hat exactly the people", "every person
  hatted"), and a `\bhats\b`-only pass leaves "hatted"/"to hat" behind —
  comments naming the old carrier were reworded by hand after the regex.
- First-draft Example 1 was wrong ([[6,8]]×3 for three students cannot yield
  6); the brute-force cross-check caught it before the gate run. Enumerating
  the assignments for small examples is cheap and worth it here.
