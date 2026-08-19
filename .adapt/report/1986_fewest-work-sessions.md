## 1986 — Minimum Number of Work Sessions to Finish the Tasks

- New id / title / slug: 1986 / Fewest Work Sessions / `fewest-work-sessions`
- Old → new API: `minSessions` → `fewestWorkSessions` (go `fewestWorkSessions`, rust `fewest_work_sessions`, ts `fewestWorkSessions`); parameters `tasks`, `sessionTime` kept
- Core algorithm / difficulty: bitmask DP over subsets with (sessions, leftover) pairs, O(2ⁿ·n) / H3 (unchanged)
- Statement rewritten from spec: yes (tasks/jobs wording fresh, same rules and guarantee)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,2,3], cap 5` → 2, `[2,2,2,2], cap 6` → 2 (duplicate jobs), `[7,3,5,2,4], cap 9` → 3 (lower-bound-tight packing)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 18/18 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Source fenced literals `[1,2,3]` and `[1,2,3,4,5]` are the only forbidden
  arrays; `[3,1,3,1,1]`-style two-symbol lists are exempt.
- Brute force = enumeration of all set partitions (Bell(5) = 52 for the
  largest example).
