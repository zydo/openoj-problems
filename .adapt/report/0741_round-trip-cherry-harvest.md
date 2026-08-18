## 0741 — Cherry Pickup

- New id / title / slug: 741 / Round-Trip Cherry Harvest / `round-trip-cherry-harvest`
- Old → new API: `cherryPickup` → `roundTripHarvest` (go `roundTripHarvest`, rust `round_trip_harvest`, ts `roundTripHarvest`)
- Core algorithm / difficulty: two-walker lockstep DP over (t, r1, r2) / H4 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: yes, for the kept solution figure)
  - `[[1,0,0],[0,1,0],[1,1,0]]` → 4, `[[1,-1,0],[-1,1,0],[1,1,0]]` → 0 (walled in at the start), `[[1]]` → 1 (n = 1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: `example-1.svg` dropped (cherries drawn as circles at data-dependent
  positions — geometry); `solution-two-walkers.svg` kept with label edits — its
  grid values are `<text>` nodes and its two path polylines are the structure,
  so the worked example was chosen so that the drawn pair (down,down,right,right
  and right,down,down,right) is an optimal two-walker solution, brute-force
  checked against the reference
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Family: part I of the cherry pair; 1463 is adapted in the same chunk as
  `1463_twin-robot-cherry-harvest`

### Notes

- The worked-example grid has no thorn cells, so the figure's two shaded
  `-1` cells became plain `0` cells: a `fill` attribute edit rides along with
  the label edit.
- Caption arithmetic in the figure had to be re-derived (blue 3 + amber 3 −
  2 shared = 4), not just re-numbered — worth checking on every kept
  walkthrough figure.
