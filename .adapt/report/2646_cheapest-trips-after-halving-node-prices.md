## 2646 — Minimize the Total Price of the Trips

- New id / title / slug: 2646 / Cheapest Trips After Halving Node Prices / `cheapest-trips-after-halving-node-prices`
- Old → new API: `minimumTotalPrice` → `cheapestTripsTotal` (go `cheapestTripsTotal`, rust `cheapest_trips_total`, ts `cheapestTripsTotal`); parameters `n`, `edges`, `price`, `trips` kept (conventional)
- Core algorithm / difficulty: per-trip DFS pass-through counts + two-state independent-set tree DP over halved prices / H4 (unchanged)
- Statement rewritten from spec: yes — "trips"/"price" kept as task vocabulary (they name the actual computation), "halve non-adjacent nodes" reframed
- Examples newly constructed: yes (structure-preserving: yes — same tree shapes and node ids, new prices and trip orderings)
  - ex1: `n=4, edges=[[0,1],[1,2],[1,3]], price=[4,2,8,6], trips=[[3,0],[1,2],[3,2]] → 22` (optimal halving set {0,2,3}, brute-force verified unique)
  - ex2: `n=2, edges=[[0,1]], price=[6,4], trips=[[0,0]] → 3`
- Constraints: domain unchanged (n ≤ 50, even prices 1–1000, ≤ 100 trips), presentation rewritten
- Skeletons regenerated: all 7
- Figures: labels updated (both example figures: prices, halved-price arrows, captions, provenance comments; geometry untouched)
- Gates: check ✓ verify ✓ (7/7 languages, 16/16 cases) sandbox n/a compatibility ✓ stale ✓ overlap ✓

### Notes

- The overlap gate fires on figure **alt text** in the statement — the first
  draft copied the source alt sentences with new numbers. Alt text is part
  of statement.md for the shingle scan; write it fresh like any sentence.
- Trip endpoints were reversed ([3,0] etc.) to keep the input new while the
  freq vector — and therefore the drawn optimal halving set — stayed valid.
