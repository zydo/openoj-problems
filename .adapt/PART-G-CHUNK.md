# Part G chunk-agent instructions

Part G is one of the five owner-less parts created by the 2026-08-19
re-division of C+D+E (see `.adapt/PARTITION.md`). Its problem list is
`.adapt/part-g.json`.

Everything is identical to `.adapt/PART-B-CHUNK.md` — read that file in
full, along with `openoj/ADAPT.md` and `.adapt/PROTOCOL.md` — with these
path substitutions:

- Ledger fragments: **`.adapt/incoming-g/<new-key>.json`** (Part G's
  inbox — never any other part's).
- Dispatch lists are the claiming session's own `wave-g-*.json` files.
- Merging (`--part g`, claiming session only) writes
  `.adapt/ledger-g.json`.
- Scratch goes under `.localonly/` as always; run no git commands.
