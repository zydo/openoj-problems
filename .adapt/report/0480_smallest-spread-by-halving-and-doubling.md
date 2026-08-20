## 480 — Minimize Deviation in Array

- New id / title / slug: 480 / Smallest Spread by Halving and Doubling / `smallest-spread-by-halving-and-doubling`
- Old → new API: `minimumDeviation` → `smallestSpread` (go `smallestSpread`, rust `smallest_spread`, ts `smallestSpread`); parameter `nums` kept
- Core algorithm / difficulty: double odds once, then max-heap halving with a tracked minimum / H3 (unchanged)
- Statement rewritten from spec: yes ("deviation" becomes "spread", the bank's existing term — cf. 1438, 2104)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[5,20,6]` → 1 (halve the outlier twice), `[4,12,7]` → 3 (best possible alignment is 3 apart; reused in the guide), `[1,6]` → 1 (both move types in the optimum: 1→2, 6→3)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 15/15 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Example 3 exists to show the doubling move earning its keep: the optimum
  `[2,3]` needs 1 doubled and 6 halved, while the other two examples can be
  solved by halving alone.
- Example 2's optimality was verified by enumerating all reachable
  configurations of {4,12,7} (2 × 3 × 2 states), not just by trusting the
  greedy.
