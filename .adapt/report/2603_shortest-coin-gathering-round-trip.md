## 2603 — Collect Coins in a Tree

- New id / title / slug: 2603 / Shortest Coin-Gathering Round Trip / `shortest-coin-gathering-round-trip`
- Old → new API: `collectTheCoins` → `shortestTour` (go `shortestTour`, rust `shortest_tour`, ts `shortestTour`); parameters `coins`, `edges` kept
- Core algorithm / difficulty: prune coinless leaves, strip two more leaf layers for the distance-2 sweep, answer `(remaining - 1) * 2` clamped at 0 / H3 (unchanged)
- Statement rewritten from spec: yes (the collect/move operations restated as sweep-within-distance-2 plus per-crossing counting)
- Examples newly constructed: yes (structure-preserving: n/a — figures dropped)
  - path of 5 with coins at 1 and 3 → `0` (no walking), path of 10 with coins at both ends → `10`, three length-4 arms from one centre plus a coinless stub → `12`
- Constraints: domain unchanged, presentation rewritten
- Skeletons regenerated: all 7
- Figures: dropped — all three draw specific trees with coin/start highlights and a pruning walkthrough (`solution-leaf-pruning` narrates the source example 2); the shapes and highlights are the data, no renderer exists for the family
- Gates: check ✓ verify ✓ (7/7 languages, 19/19 cases) sandbox pending (batch) compatibility ✓ stale ✓ overlap ✓
- Sandbox: function kind, deferred to batch run

### Notes

- Brute force is a BFS over `(vertex, start, collected-mask)` states where a
  free collect grabs every coin within distance 2 — it validated the
  pruning on all three examples, including the 0-move case.
- My first example draft `[1,0,0,1]` path was a hidden case; the second
  draft accidentally left a node disconnected (the reference happily prunes
  a forest, so the gates would NOT have caught it) — constructing examples
  as explicit edge lists needs a connectivity assert next time.
