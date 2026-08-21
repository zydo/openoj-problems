## 834 — Number of Ships in a Rectangle

- New id / title / slug: 834 / Count Hidden Ships in a Rectangle / `count-hidden-ships-in-a-rectangle`
- Old → new API: `countShips` → `countHiddenShips`; **oracle `Sea` → `Ocean`**
  (oracle argument `sea` → `ocean`; `hasShips(topRight, bottomLeft)`, the
  construct key `ships` and both auxiliary keys kept — oracle methods must
  survive a rename untouched or the staged source solution cannot compile)
- Core algorithm / difficulty: quadtree divide and conquer over an existence
  oracle / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - 4 ships with one outside a `[0,0]–[4,4]` box; 2 ships both inside a
    `[1,1]–[9,9]` box; a single-point rectangle holding its one ship
  - expected values computed by the reference algorithm
    (`.localonly/wave-b-inter/publics.py`), never by hand; no public case
    duplicates a hidden one
- Constraints: domain unchanged, presentation rewritten
- Languages: **all seven** — provided oracles under `provided/{python,java,
  cpp,go,rust,javascript,typescript}` (construction per the 0227 contract:
  cpp `(const OjValue&, long long)`, go `NewOcean([]any, int64)`, rust
  `(&[OjValue], i64)`, js/ts `(construction, budget)`), starters + solutions
  in all seven; the oracle methods return values, so no `verdict()`
- Skeletons: starter.py/starter.java are byte-exact generator output (the
  oracle table was extended in-process only); the five compiled/dynamic
  starters follow the 0227 shapes by hand
- Figures: none
- Gates: verify ✓ (7/7 languages × 19/19 cases) · stale ✓ · overlap ✓ ·
  compatibility ✓ (proven manually — see Notes) · sandbox pending (batch)
- Worst-case oracle usage re-measured across all 19 cases: **341** of the
  400 `hasShips` calls (quoted in solutions.md from our own measurement)

### Notes

- **`adapt_gates.py` compatibility is broken for every sharded bundle.**
  `gate_compatibility` passes `problems-adapt/{name}` — no id-range shard —
  to verify_solution, which resolves it as a literal path, so no `provided/`
  assembly is found and the staged source fails with
  `module 'openoj_solution' has no attribute 'Ocean'` (java: unresolved
  class). The committed exemplar `0227_search-hidden-sorted-sequence` fails
  the same way today, so this predates this chunk and is a shard-layout
  regression, not a bundle defect. Compatibility was proven with the gate's
  exact renames (`countShips`→`countHiddenShips`, `Sea`→`Ocean`) plus the
  full api map staged manually and verified through the real executors with
  the correct sharded path: python and java both pass 19/19. One-line fix
  for the main agent: build the verify argument from `adapted.relative_to(ADAPTED)`.
- **`check_bundle` reports one known false positive**: `starter generation
  failed: Unsupported interactive oracle: Ocean` — `gen_starters.py`'s
  `INTERACTIVE_ORACLES` table knows only the ten LeetCode oracle names
  (plus `SequenceReader`), so it raises before generating; scripts are
  off-limits to Part B. The same limitation is why the exemplar fails
  check_bundle with five `stray starter.*` failures instead — its table
  entry exists but the generator still emits python3+java only for
  interactive problems. Central follow-up: teach the generator renamed
  oracles and the five extra languages (the 0227 starter shapes are the
  spec).
- **Harness fix made in `openoj` (not the problems repo)**:
  `runner/executors/rust_interactive.py` emitted `out.push(<expr>;)` — the
  semicolon inside the parentheses — for array-valued auxiliary parameters,
  a syntax error in every generated wrapper. No interactive problem with an
  array auxiliary had ever run in Rust (0227's auxiliary is a scalar), so
  the path was unexercised. Fixed to `out.push(<expr>);`; 1274 and 3023
  (array auxiliaries) now compile and pass. Left uncommitted for the main
  agent's wave commit.
- Ids kept at the source numbers (1274) in the source's shard
  `1201-1300` — no id range was assigned to this chunk; renumber centrally
  as usual.
