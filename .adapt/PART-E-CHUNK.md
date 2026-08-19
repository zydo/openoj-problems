# Part E chunk-agent instructions

Part E is one of the five owner-less parts created by the 2026-08-19
re-division of C+D+E (see `.adapt/PARTITION.md`; E's earlier scope from
the B→B+E split was folded into that re-division). Its problem list is
`.adapt/part-e.json`.

Everything is identical to `.adapt/PART-B-CHUNK.md` — read that file in
full, along with `openoj/ADAPT.md` and `.adapt/PROTOCOL.md` — with these
path substitutions:

- Ledger fragments: **`.adapt/incoming-e/<new-key>.json`** (Part E's
  inbox — never `.adapt/incoming/`, `.adapt/incoming-b/`, `-c/` or `-d/`).
- Dispatch lists are the E session's own `wave-e-*.json` files.
- Merging (`--part e`, main agent only) writes `.adapt/ledger-e.json`.
- Scratch goes under `.localonly/` as always; run no git commands.

Part E includes the former wave-b-27 set — the 8 design problems and 2
SQL problems — so the class-rename and table-rename conventions in
`PART-B-CHUNK.md` and `PROTOCOL.md` apply to it; sandbox judging stays
"pending (batch)" for those kinds.

Known blocked source (do not adapt, see `.adapt/blocked-b.md`):
none in Part E — 2167 stayed with Part B.
