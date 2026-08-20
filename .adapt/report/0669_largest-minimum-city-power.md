## 669 — Maximize the Minimum Powered City

- New id / title / slug: 669 / Largest Minimum City Power / `largest-minimum-city-power`
- Old → new API: `maxPower` → `largestMinPower` (go `largestMinPower`, rust `largest_min_power`, ts `largestMinPower`); parameters `stations`, `r`, `k` kept
- Core algorithm / difficulty: difference array for initial powers + bisect the floor + rightmost-build repair sweep with a second difference array / H4 (unchanged)
- Statement rewritten from spec: yes (power-grid scenario kept — it is the task; plants/reach reworded, |x| primer dropped for a plain distance phrasing)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[2,0,3,1,4]`, r=1, k=2 → 4 (weakest at the edge, both plants in city 1), `[3,7,3,3]`, r=0, k=4 → 4 (zero reach: plants serve only their own city), `[5,1,0,2]`, r=2, k=3 → 6 (all plants at the far right covering the weakest)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ (no failures for this bundle) verify ✓ (7/7 languages, 17/17 cases) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute-force cross-check enumerated all multisets of plant placements
  (C(n+k-1, k) is tiny at these k values) — the reference, the greedy and the
  optimum agreed on all three examples before anything was written into
  cases.json.
- Example 3's optimum builds all plants at the weakest city itself (the
  rightmost site covering it), which exercises the same domination argument
  the greedy uses; the explanation leans on that rather than restating the
  source's per-city arithmetic table.
