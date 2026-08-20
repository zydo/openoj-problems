## 735 — Minimum Moves to Pick K Ones

- New id / title / slug: 735 / Cheapest Gathering of K Ones /
  `cheapest-gathering-of-k-ones`
- Old → new API: `minimumMoves` → `cheapestGathering` (go
  `cheapestGathering`, rust `cheapest_gathering`, ts `cheapestGathering`);
  parameter `maxChanges` → `maxFlips` (`nums`, `k` kept)
- Core algorithm / difficulty: median-of-window gathering over sorted
  one-positions with prefix sums, manufactured ones at flat cost 2,
  ternary search over the walked-count `t` / H4 (unchanged)
- Statement rewritten from spec: yes (Alice game reframed as a collector
  on a strip with flip/slide moves)
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[1,0,1,1,0,0,1], k=3, maxFlips=0` → 3 (slides only, median standing
    point)
  - `[1,0,0,0,0,0,1], k=2, maxFlips=1` → 2 (one manufactured one beats a
    six-cell slide)
  - `[0,0,0,0,0,0], k=3, maxFlips=3` → 6 (no real ones; all manufactured)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: none
- Gates: check ✓ verify ✓ (7/7 languages, 20/20 cases) sandbox n/a
  (function kind) compatibility ✓ stale ✓ overlap ✓

### Notes

- The natural "all manufactured" example is nearly the source's Example 2
  (`[0,0,0,0], k=2, maxChanges=3` → 4); a same-shape but distinct input
  was used (`n=6, k=3, maxFlips=3` → 6) so no public case reads as a
  permutation of a source example.
- `maxFlips` was grepped across all seven source solutions first — no
  identifier collisions (the ports use `ones`, `prefix`, `window_cost`,
  `total`, `lo/hi` and friends).
