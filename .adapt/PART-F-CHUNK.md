# Part F chunk-agent instructions

Part F is one of the five owner-less parts created by the 2026-08-19
re-division of C+D+E (see `.adapt/PARTITION.md`). Its problem list is
`.adapt/part-f.json`.

Everything is identical to `.adapt/PART-B-CHUNK.md` — read that file in
full, along with `openoj/ADAPT.md` and `.adapt/PROTOCOL.md` — with these
path substitutions:

- Ledger fragments: **`.adapt/incoming-f/<new-key>.json`** (Part F's
  inbox — never any other part's).
- Dispatch lists are the claiming session's own `wave-f-*.json` files.
- Merging (`--part f`, claiming session only) writes
  `.adapt/ledger-f.json`.
- Scratch goes under `.localonly/` as always; run no git commands.
