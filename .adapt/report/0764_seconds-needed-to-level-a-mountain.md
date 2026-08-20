## 764 — Minimum Number of Seconds to Make Mountain Height Zero

- New id / title / slug: 764 / Seconds Needed to Level a Mountain / `seconds-needed-to-level-a-mountain`
- Old → new API: `minNumberOfSeconds` → `secondsToLevel` (go `secondsToLevel`, rust `seconds_to_level`, ts `secondsToLevel`); parameters `mountainHeight`, `workerTimes` kept
- Core algorithm / difficulty: binary search on the deadline with closed-form per-worker capacity via integer sqrt / H3 (unchanged)
- Statement rewritten from spec: yes (cost rule and parallel makespan restated from scratch)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `H=5 [3,1,2]` → 6 (mixed speeds; explanation also proves 5 impossible via capacity count 4), `H=9 [4,4]` → 60 (odd split between equal workers), `H=6 [5]` → 105 (lone worker, triangular bill)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (adapt_gates: starters/compatibility/stale/overlap) verify ✓ (7/7 languages, 16/16 cases) sandbox n/a (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- Source example 2's `[3,2,2,4]` is a stale-gate literal (3 distinct
  symbols); the new worker arrays avoid it and all hidden inputs.
- The impossibility aside in Example 1 (deadline 5 clears only 4 units)
  mirrors the capacity argument in solutions.md — kept consistent on
  purpose.
