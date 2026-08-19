## 2473 — Minimum Cost to Buy Apples

- New id / title / slug: 2473 / Cheapest Apple Run From Every Town / `cheapest-apple-run-from-every-town`
- Old → new API: `minCost` → `cheapestAppleRun` (go `cheapestAppleRun`, rust `cheapest_apple_run`, ts `cheapestAppleRun`); parameters `n`, `roads`, `appleCost`, `k` kept
- Core algorithm / difficulty: per-start Dijkstra over positive road weights, answer `min_j appleCost[j] + (k+1)·d(j)` — the `k+1` weight folds outbound and multiplied-return into one distance / H3 (unchanged)
- Statement rewritten from spec: yes (cities → towns; the run "out, buy, come home with every road k times dearer" replaces the source's rule list; note `answer`/`appleCost` framing kept 1-based)
- Examples newly constructed: yes (structure-preserving: yes)
  - `n=4, roads [[1,2,3],[1,3,6],[2,3,4],[2,4,6],[3,4,7]], appleCost [48,35,90,190], k=3` → `[47,35,51,59]` (same diamond topology, new costs/prices; town 2's apple wins from three starts), triangle `[[1,2,7],[2,3,3],[3,1,4]], [6,9,5], k=4` → `[6,9,5]` (buy locally), `n=2, [[1,2,3]], [20,8], k=1` → `[14,8]` (no figure; k=1)
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated — five road costs, four apple prices, the k note, and the answer line in figure 1; three road costs, three prices, k note, answer line in figure 2; node positions untouched
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓ (after one caption rework)
- Sandbox: function kind, deferred to batch run

### Notes

- The overlap gate earned its keep on figure captions: my first alt texts
  ("Four towns in a diamond with road costs ... and apple prices ...; the
  answers are ...") tracked the source captions sentence-for-sentence and
  pushed the statement to 7% shared shingles. Captions are prose — they need
  the same from-the-spec treatment as the description, not a find-and-replace
  of the numbers.
- Road triples collide with source literals easily (an unchanged `[2,3,2]`
  or `[2,4,5]` is a stale hit); the example builder checks every nested
  array flattened, not just top-level ones.
