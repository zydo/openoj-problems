## 835 — Leftmost Column with at Least a One

- New id / title / slug: 835 / First Column Containing a One / `first-column-containing-a-one`
- Old → new API: `leftMostColumnWithOne` → `firstColumnWithOne`; **oracle
  `BinaryMatrix` → `BitMatrix`** (oracle argument `binaryMatrix` → `matrix`;
  `get(row, col)` / `dimensions()` and the construct key `matrix` kept)
- Core algorithm / difficulty: staircase walk from the top-right corner /
  H2 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - a 2×3 grid whose rows switch at columns 2 and 1; a grid whose top row
    starts with a 1; a lone all-zero row (the `-1` case)
  - expected values computed by the reference algorithm
    (`.localonly/wave-b-inter/publics.py`); no public case duplicates a
    hidden one
- Constraints: domain unchanged, presentation rewritten
- Languages: **all seven** — provided oracles under `provided/{python,java,
  cpp,go,rust,javascript,typescript}` (cpp `(const OjValue&, long long)`,
  go `NewBitMatrix([]any, int64)`, rust `(&[OjValue], i64)`, js/ts
  `(construction, budget)`), starters + solutions in all seven; no
  auxiliary parameters, so the method takes only the oracle
- Skeletons: starter.py/starter.java are byte-exact generator output
  (oracle table extended in-process only); the five compiled/dynamic
  starters follow the 0227 shapes by hand
- Figures: none
- Gates: verify ✓ (7/7 languages × 19/19 cases) · stale ✓ · overlap ✓ ·
  compatibility ✓ (proven manually; gate itself shard-broken — see the
  1274 report) · sandbox pending (batch)
- Worst-case oracle usage re-measured across all 19 cases: **124** of the
  1000 `get` calls

### Notes

- Same two known non-bundle failures as 1274: `adapt_gates.py`
  compatibility (shard-less path handed to verify — the exemplar 0227
  fails identically) and `check_bundle`'s `Unsupported interactive oracle:
  BitMatrix` from `gen_starters.py`'s frozen oracle table. Compatibility
  proven by staging the source solutions with the gate's renames
  (`leftMostColumnWithOne`→`firstColumnWithOne`,
  `BinaryMatrix`→`BitMatrix`) and the full api map: python and java both
  pass 19/19 through the real executors.
- Id kept at the source number in the source's shard `1401-1500`; no id
  range was assigned to this chunk.
