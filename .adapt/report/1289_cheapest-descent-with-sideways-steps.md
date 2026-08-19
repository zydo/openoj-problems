## 1289 — Minimum Falling Path Sum II

- New id / title / slug: 1289 / Cheapest Descent with Sideways Steps / `cheapest-descent-with-sideways-steps`
- Old → new API: `minFallingPathSum` → `cheapestDescent` (go `cheapestDescent`, rust `cheapest_descent`, ts `cheapestDescent`); parameter `grid` kept
- Core algorithm / difficulty: row DP using the previous row's two smallest values / H2 (unchanged)
- Statement rewritten from spec: yes ("falling path with non-zero shifts" becomes a descent whose column must change between consecutive rows)
- Examples newly constructed: yes (structure-preserving: yes)
  - `[[3,11,5],[12,7,2],[8,4,10]]` → 9 (route 3→2→4); `[[3,8],[6,2]]` → 5 (2×2, both legal picks listed); `[[-2,5],[-7,1]]` → -2 (negative sum)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — `example-1.svg` kept: same 3×3 grid geometry; the new route (0,0)→(1,2)→(2,1) needed the blue highlight moved to three different cells plus re-aimed arrows, which is attribute editing, not a redraw; values, caption route, and sum text replaced
- Gates: check ✓ (per-bundle static clean) verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- No 0931 (Falling Path I) exists in this bank, so no sibling-title
  constraint; the "II" suffix had nothing to stay kin to and was dropped.
- A structure-preserving example does not have to preserve the *highlighted
  cells* — moving which rects carry the blue fill is still a label edit as
  long as the grid geometry is untouched.
