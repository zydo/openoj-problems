## 836 — Shortest Path in a Hidden Grid

- New id / title / slug: 836 / Shortest Route in a Hidden Maze / `shortest-route-in-a-hidden-maze`
- Old → new API: `findShortestPath` → `findShortestRoute`; **oracle `GridMaster` → `MazeController`** (oracle methods `canMove`/`move`/`isTarget` kept — conventional judge API, as `get` was on `SequenceReader`)
- Core algorithm / difficulty: DFS survey of the reachable component with physical backtracking, then BFS on unit edges / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - `[[1,1,1],[0,1,0]]` start `[1,1]` goal `[0,2]` → 2; `[[1,0,1],[1,1,1],[0,0,1]]` detour → 4; walled middle column → -1
- Constraints: domain unchanged (m, n ≤ 500, 0/1 grid, 4 000 000 queries), presentation rewritten
- Skeletons: all seven languages — python/java match future generator output (table entry `MazeController` / parameter `maze`); cpp/go/rust/js/ts hand-shaped per the 0227 exemplar (forward-declared oracle; `type Solution struct{}`; `impl Solution` with `&mut MazeController`; `class Solution`)
- Provided oracle: `GridMaster` ported into **all seven languages** — python `oracle.py`, java `MazeController.java`, cpp `oracle.hpp` `(const OjValue&, const OjValue&, const OjValue&, long long)` (grid, start, goal, budget), go `oracle.go` `NewMazeController([]any, int64)`, rust `oracle.rs` `new(&[OjValue], i64)` (walk method named `step` — `move` is a Rust keyword), js/ts `oracle.js`/`oracle.ts` `(construction, budget)`
- Figures: none
- Gates: verify ✓ (7/7 languages, 19/19 cases each) · compatibility ✓ (gate green after the central shard-path fix; also proven manually with the gate's exact staging before the fix landed) · stale ✓ · overlap ✓ · check: **known harness lag, one item** (see notes) · sandbox pending (batch)

### Notes

- **`adapt_gates.py` compatibility initially FAILed on every sharded interactive bundle** (the gate's verify subprocess passed the flat `problems-adapt/<key>`, so `_assembly_sources` lost `provided/` → `module 'openoj_solution' has no attribute 'MazeController'`; the exemplar 0227 reproduced the same signature). The main agent has since patched the gate to pass the shard-resolved path, and the gate now runs green on this bundle. I had additionally proven it manually: gate-exact staging (problem.json-derived renames, word-boundary `re.sub`) against the shard-qualified path, both source solutions 19/19.
- **`gen_starters.py` still needs two central additions**: `INTERACTIVE_ORACLES["MazeController"] = {"python": "MazeController", "java": "MazeController", "parameter": "maze"}` (without it `check_bundle` fails `starter generation failed: Unsupported interactive oracle: MazeController` — the only check failure on this bundle today), and interactive generation for the five typed languages — the same gap that makes the exemplar 0227 report 5 stray starters. My py/java starters are byte-shaped to the generator's output for when the table entry lands; the other five follow the exemplar exactly.
- Go interactive solutions cannot use imports (the wrapper concatenates after its own declarations) — the 1810 Dijkstra heap is hand-rolled for that reason; worth knowing for future ports.
- Budget sanity: largest hidden grid (200×200) spends ~8 queries/cell, far under the 4 000 000 limit; all seven languages fit the 4 s limit comfortably.
