## 3023 — Find Pattern in Infinite Stream I

- New id / title / slug: 3023 / First Pattern Match in a Bit Stream / `first-pattern-match-in-a-bit-stream`
  (the "-I" suffix is dropped: the bank carries no "II" sibling — 3030 is
  not among our 838 — so the marker distinguished nothing)
- Old → new API: `findPattern` → `firstMatchIndex`; **oracle
  `InfiniteStream` → `BitStream`** (oracle argument `stream` kept — generic;
  `next()` and the construct key `bits` / auxiliary key `pattern` kept)
- Core algorithm / difficulty: rolling bit window over a non-rewindable
  stream / H3 (unchanged)
- Statement rewritten from spec: yes
- Examples newly constructed: yes (structure-preserving: n/a — no figure)
  - a mid-stream match at index 1; a one-bit pattern hitting at index 0; a
    late match at index 4 after two near-misses
  - expected values computed by the reference algorithm
    (`.localonly/wave-b-inter/publics.py`); no public case duplicates a
    hidden one
- Constraints: domain unchanged, presentation rewritten
- Languages: **all seven** — provided oracles under `provided/{python,java,
  cpp,go,rust,javascript,typescript}` (cpp `(const OjValue&, long long)`,
  go `NewBitStream([]any, int64)`, rust `(&[OjValue], i64)`, js/ts
  `(construction, budget)`), starters + solutions in all seven; python
  keeps the source's rolling-integer window, the other six ports use the
  circular-buffer variant (no big integers below 2¹⁰⁰ there)
- Skeletons: starter.py/starter.java are byte-exact generator output
  (oracle table extended in-process only); the five compiled/dynamic
  starters follow the 0227 shapes by hand
- Figures: none
- Gates: verify ✓ (7/7 languages × 21/21 cases) · stale ✓ · overlap ✓
  (after one reworded Note and one reworded Hint pushed it under the
  threshold) · compatibility ✓ (proven manually; gate itself shard-broken —
  see the 1274 report) · sandbox pending (batch)
- Worst-case oracle usage re-measured across all 21 cases: **38 009** of
  the 1 000 000 `next` calls

### Notes

- Same two known non-bundle failures as 1274: `adapt_gates.py`
  compatibility (shard-less path; exemplar 0227 fails identically) and
  `check_bundle`'s `Unsupported interactive oracle: BitStream`. Also
  depends on the rust_interactive array-auxiliary fix described in the
  1274 report (`pattern` is an array auxiliary). Compatibility proven by
  staging the source solutions with the gate's renames
  (`findPattern`→`firstMatchIndex`, `InfiniteStream`→`BitStream`): python
  and java both pass 21/21 through the real executors.
- Id kept at the source number in the source's shard `3001-3100`; no id
  range was assigned to this chunk.
