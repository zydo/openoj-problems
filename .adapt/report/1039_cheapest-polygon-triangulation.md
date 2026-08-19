## 1039 — Minimum Score Triangulation of Polygon

- New id / title / slug: 1039 / Cheapest Polygon Triangulation / `cheapest-polygon-triangulation`
- Old → new API: `minScoreTriangulation` → `cheapestTriangulation` (go `cheapestTriangulation`, rust `cheapest_triangulation`, ts `cheapestTriangulation`); parameter `values` kept
- Core algorithm / difficulty: interval DP over corner ranges, `best[i][j] = min_k best[i][k] + best[k][j] + v[i]v[k]v[j]` / H3 (unchanged)
- Statement rewritten from spec: yes (framed as billing each triangle by the product of its corner numbers and minimising the bill)
- Examples newly constructed: yes (structure-preserving: yes — 3-, 4- and 6-corner polygons, matching the three figures)
  - `[4,2,5]` → 40 (no cut needed); `[2,9,3,7]` → 96 (the 0-2 diagonal beats the 1-3 diagonal's 315); `[2,6,2,9,2,8]` → 100 (fan across the three cheap corners)
- Constraints: domain unchanged (`3 <= n <= 50`, `1 <= values[i] <= 100`), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (all three) — the triangle, the two-quadrilateral comparison and the hexagon all keep their geometry; only vertex labels, per-triangle products and captions changed
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- The figures encode *which* diagonals win, not just the values, so the examples
  were chosen to keep the drawn cuts optimal: example 2 needs the 0-2 diagonal to
  be the cheaper one (`values[0]*values[2]*(values[1]+values[3]) <
  values[1]*values[3]*(values[0]+values[2])`, i.e. small values at the even
  corners), and example 3 needs the fan v0-v2, v0-v4, v2-v4 to be optimal, which
  again holds when the even corners are the cheap ones. A brute-force enumerator
  in `.localonly/wave-a-07/tri.py` confirmed both the optimal cost and the
  optimal triangle set before the labels were edited.
- Example expecteds came from the bundle's own `solution.py`, cross-checked
  against the independent brute force.
- `values` was kept as the parameter name: it is an ordinary generic noun, and
  renaming it buys nothing while adding compatibility-gate risk.
- BSD `sed` on this machine does not understand `\b`, so the API rename across
  `solution.*` was done with `perl -pi -e`. A `sed -i '' -e 's/\bfoo\b/.../'`
  silently no-ops here.
