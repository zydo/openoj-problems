## 1627 — Graph Connectivity With Threshold

- New id / title / slug: 1627 / Linked by a Shared Divisor / `linked-by-a-shared-divisor`
- Old → new API: `areConnected` → `areLinked` (go `areLinked`, rust `are_linked`, ts `areLinked`); parameters `n`, `threshold`, `queries` kept (conventional)
- Core algorithm / difficulty: disjoint-set union driven by a divisor-multiples sieve, queries answered by root comparison / H3 (unchanged)
- Statement rewritten from spec: yes — labels 1..n joined when a common divisor clears the threshold, boolean answer per query about one connected piece
- Examples newly constructed: yes (structure-preserving: yes — all three keep the two-rows-of-circles node-link figure)
  - `n = 8, threshold = 3 → [false,true,false]` (single edge 4--8), `n = 7, threshold = 1 → [t,t,t,f,f]` (one component {2,3,4,6} plus isolates — a shape no source figure had), `n = 7, threshold = 2 → all false` (edge 3--6 exists but no query touches it; `[3,5]`/`[5,3]` show query symmetry)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: **regenerated** — all three node-link SVGs re-emitted by `.localonly/wave-e-05/figs_1627.py` (two-row circle layout, edges under white-filled circles); renders eyeballed
- Gates: check ✓ verify ✓ (7/7 languages, 17/17 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- Trap in node-link figures: a same-row edge drawn under the white-filled
  circles is masked by every circle between its endpoints, and the render
  then reads as *different edges* (my (2,4) read as (2,3)+(3,4), one of which
  is not an edge at all). The vision check caught it; the fix is to bow
  same-row edges over the row as a quadratic arc.
