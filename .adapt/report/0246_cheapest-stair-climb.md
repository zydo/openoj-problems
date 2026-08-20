## 246 — Min Cost Climbing Stairs

- New id / title / slug: 246 / Cheapest Stair Climb / `cheapest-stair-climb`
- Old → new API: `minCostClimbingStairs` → `cheapestClimb` (go `cheapestClimb`, rust `cheapest_climb`, ts `cheapestClimb`)
- Core algorithm / difficulty: rolling two-variable linear DP / H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[4,17,6,9]` → 10 (expensive step skipped), `[8,3]` → 3 (minimum length,
    start at 1), `[5,0,0,0,5]` → 0 (free middle steps)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
