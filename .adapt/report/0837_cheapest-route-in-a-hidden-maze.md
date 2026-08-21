## 837 — Minimum Path Cost in a Hidden Grid

- New id / title / slug: 837 / Cheapest Route in a Hidden Maze / `cheapest-route-in-a-hidden-maze`
- Old → new API: `findMinimumPath` → `findCheapestRoute`; **oracle `GridMaster` → `MazeController`** (same rename as 1778 — the siblings share the hidden API, so their kinship stays visible: *Shortest Route* / *Cheapest Route in a Hidden Maze*)
- Core algorithm / difficulty: DFS survey recording each entered cell's toll, then Dijkstra over the surveyed weighted graph / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[1,4],[3,2]]` → 5 (down-then-right beats right-then-down); `[[5,8,8],[2,9,9],[1,1,1]]` cheap bottom row climb → 19 vs 23; walled middle column → -1
- Constraints: domain unchanged (m, n ≤ 100, tolls 1–100, 1 000 000 queries), presentation rewritten
- Skeletons: all seven languages, same shapes as 1778 (py/java generator-shaped for the pending `MazeController` table entry; cpp/go/rust/js/ts per the exemplar)
- Provided oracle: the **`MazeController` duplicated into this bundle's own `provided/`** — byte-identical copies of 1778's seven files (each bundle carries its own oracle; the source tree's two `GridMaster` copies were byte-identical too)
- Figures: none
- Gates: verify ✓ (7/7 languages, 19/19 cases each) · compatibility ✓ (gate green after the central shard-path fix; also proven manually with gate-exact staging before it landed) · stale ✓ · overlap ✓ · check: **known harness lag, one item** (the `gen_starters.py` `MazeController` table entry — 1778's report has the details) · sandbox pending (batch)

### Notes

- Everything in 1778's notes applies: the shard-path compatibility false positive (since fixed centrally — the gate now passes the resolved path), the `gen_starters.py` `MazeController` table entry (still pending — this bundle's only check failure), and the no-imports Go wrapper constraint.
- The py/java solutions are renamed copies of the source (including its quirks — the redundant inner `import heapq` stays, per "rename only the API identifiers"); cpp/go/rust/js/ts are fresh ports. Dijkstra heaps per language: `priority_queue` + `greater` (C++), hand-rolled binary heap over packed `(toll, key)` uint64s (Go — no imports allowed), `BinaryHeap<Reverse<_>>` (Rust), inline min-heap closures (JS/TS).
- Public-case expectations computed by an independent spec implementation (Dijkstra on the raw grid) in `.localonly/chunk-last/publics.py`; no public case duplicates a hidden one.
