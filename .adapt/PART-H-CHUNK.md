# Part H chunk-agent instructions

Part H contains the final 12 sources moved out of Part C after Part C's
fiftieth adaptation (see `.adapt/PARTITION.md`). Its problem list is
`.adapt/part-h.json`.

Everything is identical to `.adapt/PART-B-CHUNK.md` — read that file in
full, along with `openoj/ADAPT.md` and `.adapt/PROTOCOL.md` — with these
path substitutions:

- Ledger fragments: **`.adapt/incoming-h/<new-key>.json`** (Part H's
  inbox — never any other part's).
- Dispatch lists are the claiming session's own `wave-h-*.json` files.
- Merging (`--part h`, claiming session only) writes
  `.adapt/ledger-h.json`.
- Scratch goes under `.localonly/` as always; run no git commands.
